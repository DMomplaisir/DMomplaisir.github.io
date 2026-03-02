import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const lineColors = ['red', 'blue', 'green', 'orange', 'yellow', 'purple'] as const;

const projectsCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    hero_image: image().optional(),
    additional_images: z.array(image()).optional(),
    tags: z.array(z.string()).optional().default([]),
    line_color: z.enum(lineColors).optional().default('blue'),
    date: z.coerce.date().optional(),
    featured: z.boolean().optional().default(false),
    draft: z.boolean().optional().default(false),
    tech_stack: z.array(z.string()).optional(),
    role: z.string().optional(),
    impact: z.string().optional(),
    github_url: z.string().url().optional(),
    live_url: z.string().url().optional(),
  }),
});

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string().optional().default('Dylan Momplaisir'),
    tags: z.array(z.string()).optional().default([]),
    draft: z.boolean().optional().default(false),
    reading_time: z.number().int().positive().optional(),
    cover_image: image().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
  blog: blogCollection,
};
