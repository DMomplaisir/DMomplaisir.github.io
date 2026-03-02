import rss from '@astrojs/rss';
import { getAllProjects, getAllBlogPosts } from '../utils/content-helpers';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const [projects, posts] = await Promise.all([
    getAllProjects(),
    getAllBlogPosts(),
  ]);

  const projectItems = projects.map(project => ({
      title: project.data.title,
      pubDate: project.data.date!,
      description: project.data.description,
      link: `/projects/${project.id}/`,
      categories: project.data.tags,
    }));

  const postItems = posts.map(post => ({
    title: post.data.title,
    pubDate: post.data.date,
    description: post.data.description,
    link: `/blog/${post.id}/`,
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
