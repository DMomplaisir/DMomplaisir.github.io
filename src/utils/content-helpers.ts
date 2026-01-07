/**
 * Content Collection Helpers
 *
 * Utility functions for working with Astro Content Collections.
 * These helpers provide common operations like filtering, sorting, and querying content.
 */

import { getCollection, type CollectionEntry } from 'astro:content';

/**
 * Type aliases for better readability
 */
export type Project = CollectionEntry<'projects'>;
export type BlogPost = CollectionEntry<'blog'>;

/**
 * Get all published projects, sorted by date (newest first)
 * Filters out projects without dates and drafts in production
 */
export async function getAllProjects(): Promise<Project[]> {
  const projects = await getCollection('projects', ({ data }) => {
    // In development, show drafts; in production, hide them
    if (import.meta.env.DEV) {
      return true;
    }
    return data.draft !== true;
  });
  return projects
    .filter(project => project.data.date)
    .sort((a, b) => {
      const dateA = a.data.date?.getTime() || 0;
      const dateB = b.data.date?.getTime() || 0;
      return dateB - dateA;
    });
}

/**
 * Get featured projects only
 * Useful for homepage or landing page displays
 * Excludes drafts in production
 */
export async function getFeaturedProjects(): Promise<Project[]> {
  const projects = await getCollection('projects', ({ data }) => {
    const isDraft = import.meta.env.PROD && data.draft === true;
    return data.featured === true && !isDraft;
  });
  return projects.sort((a, b) => {
    const dateA = a.data.date?.getTime() || 0;
    const dateB = b.data.date?.getTime() || 0;
    return dateB - dateA;
  });
}

/**
 * Get projects by tag
 * Case-insensitive tag matching
 */
export async function getProjectsByTag(tag: string): Promise<Project[]> {
  const projects = await getCollection('projects', ({ data }) => {
    return data.tags?.some(
      t => t.toLowerCase() === tag.toLowerCase()
    ) || false;
  });
  return projects.sort((a, b) => {
    const dateA = a.data.date?.getTime() || 0;
    const dateB = b.data.date?.getTime() || 0;
    return dateB - dateA;
  });
}

/**
 * Get all published blog posts, sorted by date (newest first)
 * Excludes drafts in production builds
 */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const posts = await getCollection('blog', ({ data }) => {
    // In development, show drafts; in production, hide them
    if (import.meta.env.DEV) {
      return true;
    }
    return data.draft !== true;
  });

  return posts.sort((a, b) => {
    return b.data.date.getTime() - a.data.date.getTime();
  });
}

/**
 * Get blog posts by tag
 * Case-insensitive tag matching, excludes drafts in production
 */
export async function getBlogPostsByTag(tag: string): Promise<BlogPost[]> {
  const posts = await getCollection('blog', ({ data }) => {
    const isDraft = import.meta.env.PROD && data.draft === true;
    const hasTag = data.tags?.some(
      t => t.toLowerCase() === tag.toLowerCase()
    ) || false;
    return !isDraft && hasTag;
  });

  return posts.sort((a, b) => {
    return b.data.date.getTime() - a.data.date.getTime();
  });
}

/**
 * Get all unique tags from projects
 * Useful for building tag filters or tag clouds
 * Excludes tags from draft projects in production
 */
export async function getAllProjectTags(): Promise<string[]> {
  const projects = await getCollection('projects', ({ data }) => {
    if (import.meta.env.DEV) return true;
    return data.draft !== true;
  });
  const tagsSet = new Set<string>();

  projects.forEach(project => {
    project.data.tags?.forEach(tag => tagsSet.add(tag));
  });

  return Array.from(tagsSet).sort();
}

/**
 * Get all unique tags from blog posts
 * Excludes tags from draft posts in production
 */
export async function getAllBlogTags(): Promise<string[]> {
  const posts = await getCollection('blog', ({ data }) => {
    if (import.meta.env.DEV) return true;
    return data.draft !== true;
  });

  const tagsSet = new Set<string>();
  posts.forEach(post => {
    post.data.tags?.forEach(tag => tagsSet.add(tag));
  });

  return Array.from(tagsSet).sort();
}

/**
 * Calculate reading time for a blog post
 * Based on average reading speed of 200 words per minute
 * Returns reading time in minutes (rounded up)
 */
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return Math.max(readingTime, 1); // Minimum 1 minute
}

/**
 * Format date for display
 * Example: "January 5, 2026"
 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

/**
 * Format date for datetime attribute (ISO format)
 * Example: "2026-01-05"
 */
export function formatDateISO(date: Date): string {
  return date.toISOString().split('T')[0];
}

/**
 * Get related projects based on shared tags
 * Excludes the current project from results
 * Returns up to `limit` projects (default: 3)
 */
export async function getRelatedProjects(
  currentProject: Project,
  limit: number = 3
): Promise<Project[]> {
  const allProjects = await getAllProjects();
  const currentTags = currentProject.data.tags || [];

  // Calculate relevance score based on shared tags
  const scoredProjects = allProjects
    .filter(project => project.id !== currentProject.id)
    .map(project => {
      const sharedTags = project.data.tags?.filter(
        tag => currentTags.includes(tag)
      ).length || 0;
      return { project, score: sharedTags };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score);

  return scoredProjects.slice(0, limit).map(({ project }) => project);
}

/**
 * Get related blog posts based on shared tags
 * Excludes the current post from results
 * Returns up to `limit` posts (default: 3)
 */
export async function getRelatedBlogPosts(
  currentPost: BlogPost,
  limit: number = 3
): Promise<BlogPost[]> {
  const allPosts = await getAllBlogPosts();
  const currentTags = currentPost.data.tags || [];

  const scoredPosts = allPosts
    .filter(post => post.id !== currentPost.id)
    .map(post => {
      const sharedTags = post.data.tags?.filter(
        tag => currentTags.includes(tag)
      ).length || 0;
      return { post, score: sharedTags };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score);

  return scoredPosts.slice(0, limit).map(({ post }) => post);
}
