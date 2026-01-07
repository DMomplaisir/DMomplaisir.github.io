/**
 * Content Collections Configuration
 *
 * Defines type-safe schemas for content collections using Astro's Content Collections API.
 * This provides build-time validation, TypeScript types, and optimized image handling.
 *
 * Collections:
 * - projects: Portfolio case studies and project showcases
 * - blog: Blog posts and articles
 */

import { defineCollection, z } from 'astro:content';

/**
 * NYC Subway Line Colors
 * Reflects the subway-themed design system used throughout the portfolio
 */
const lineColors = ['red', 'blue', 'green', 'orange', 'yellow', 'purple'] as const;

/**
 * Projects Collection
 *
 * Portfolio projects and case studies. Each project represents a significant work
 * with detailed context, process, and outcomes.
 *
 * Structure:
 * - Hero image for visual impact
 * - Metadata (tags, tech stack, role)
 * - Detailed markdown content following case study format
 */
const projectsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    /**
     * Project title
     * Displayed in listings, detail pages, and meta tags
     */
    title: z.string(),

    /**
     * Brief project description (1-2 sentences)
     * Used in project cards, meta descriptions, and social sharing
     * Recommended length: 120-160 characters for SEO
     */
    description: z.string(),

    /**
     * Hero image displayed at the top of the project page
     * Automatically optimized by Astro's image service
     * Recommended size: 1200x630px or larger
     * Optional until images are added
     */
    hero_image: image().optional(),

    /**
     * Additional project images for galleries or inline content
     * Each image is optimized and responsive
     * Optional: Use in markdown or gallery components
     */
    additional_images: z.array(image()).optional(),

    /**
     * Project tags for categorization and filtering
     * Examples: ['web', 'mobile', 'design', 'research']
     * Used for search and related project suggestions
     */
    tags: z.array(z.string()).optional().default([]),

    /**
     * Subway line color theme for this project
     * Maps to design system color tokens (--line-{color})
     * Provides visual variety across project cards
     */
    line_color: z.enum(lineColors).optional().default('blue'),

    /**
     * Project date (completion or publication date)
     * Used for sorting and timeline displays
     * Optional: If not provided, uses file creation date
     */
    date: z.coerce.date().optional(),

    /**
     * Featured project flag
     * Featured projects appear prominently on homepage and project listings
     * Typically highlights best or most recent work
     */
    featured: z.boolean().optional().default(false),

    /**
     * Draft status
     * Draft projects are excluded from production builds
     * Useful for work-in-progress case studies
     */
    draft: z.boolean().optional().default(false),

    /**
     * Technologies and tools used in the project
     * Examples: ['React', 'TypeScript', 'Figma', 'Python']
     * Displayed as pills/badges in project details
     */
    tech_stack: z.array(z.string()).optional(),

    /**
     * Your role in the project
     * Examples: 'Lead Developer', 'UX Designer', 'Full Stack Engineer'
     * Provides context for team projects
     */
    role: z.string().optional(),

    /**
     * Project impact and outcomes
     * Quantifiable results or qualitative achievements
     * Example: 'Reduced load time by 60%' or 'Improved user retention by 40%'
     */
    impact: z.string().optional(),

    /**
     * GitHub repository URL
     * Link to source code (for open source or portfolio projects)
     */
    github_url: z.string().url().optional(),

    /**
     * Live project URL
     * Link to deployed application or live demo
     */
    live_url: z.string().url().optional(),
  }),
});

/**
 * Blog Collection
 *
 * Articles, tutorials, and thought pieces. Blog posts support drafts,
 * reading time estimation, and cover images.
 *
 * Structure:
 * - Publication metadata (date, author, tags)
 * - Optional cover image for social sharing
 * - Markdown content with code highlighting support
 */
const blogCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    /**
     * Post title
     * Displayed in listings, detail pages, and meta tags
     * Should be compelling and descriptive
     */
    title: z.string(),

    /**
     * Post description or excerpt
     * Used in post listings, meta descriptions, and social cards
     * Recommended length: 120-160 characters for SEO
     */
    description: z.string(),

    /**
     * Publication date
     * Required for chronological sorting and RSS feeds
     * Format: YYYY-MM-DD in frontmatter (parsed to Date object)
     */
    date: z.coerce.date(),

    /**
     * Post author
     * Defaults to portfolio owner
     * Useful for guest posts or collaborative blogs
     */
    author: z.string().optional().default('Dylan Momplaisir'),

    /**
     * Post tags for categorization
     * Examples: ['javascript', 'design', 'career', 'tutorial']
     * Used for filtering and related post suggestions
     */
    tags: z.array(z.string()).optional().default([]),

    /**
     * Draft status
     * Draft posts are excluded from production builds
     * Useful for work-in-progress content
     */
    draft: z.boolean().optional().default(false),

    /**
     * Estimated reading time in minutes
     * Auto-calculated if not provided (based on word count)
     * Displayed in post headers for user convenience
     */
    reading_time: z.number().int().positive().optional(),

    /**
     * Cover image for social sharing and post headers
     * Automatically optimized by Astro's image service
     * Recommended size: 1200x630px (Open Graph standard)
     */
    cover_image: image().optional(),
  }),
});

/**
 * Export collections for use throughout the application
 *
 * Usage:
 * ```typescript
 * import { getCollection, getEntry } from 'astro:content';
 *
 * const projects = await getCollection('projects');
 * const featuredProjects = await getCollection('projects',
 *   ({ data }) => data.featured === true
 * );
 * ```
 */
export const collections = {
  projects: projectsCollection,
  blog: blogCollection,
};
