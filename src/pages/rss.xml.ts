import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  // Get projects
  const projects = await getCollection('projects', ({ data }) => {
    if (import.meta.env.PROD) {
      return data.draft !== true;
    }
    return true;
  });

  // Get blog posts
  const posts = await getCollection('blog', ({ data }) => {
    if (import.meta.env.PROD) {
      return data.draft !== true;
    }
    return true;
  });

  // Combine and sort all items by date
  const projectItems = projects
    .filter(p => p.data.date)
    .map(project => ({
      title: project.data.title,
      pubDate: project.data.date!,
      description: project.data.description,
      link: `/projects/${project.slug}/`,
      categories: project.data.tags,
    }));

  const postItems = posts.map(post => ({
    title: post.data.title,
    pubDate: post.data.date,
    description: post.data.description,
    link: `/blog/${post.slug}/`,
    categories: post.data.tags,
  }));

  const allItems = [...projectItems, ...postItems].sort((a, b) => {
    return new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime();
  });

  return rss({
    title: 'Dylan Momplaisir',
    description: 'Projects, articles, and thoughts from Dylan Momplaisir, full-stack engineer at The Atlantic.',
    site: context.site ?? 'https://dmomplaisir.com',
    items: allItems,
    customData: `<language>en-us</language>`,
  });
}
