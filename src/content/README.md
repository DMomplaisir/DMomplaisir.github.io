# Content Collections

This directory contains all content for the portfolio site, organized using Astro's Content Collections API.

## Overview

Content Collections provide type-safe content management with automatic validation, TypeScript types, and optimized image handling.

## Directory Structure

```
src/content/
├── config.ts                    # Collection schemas and validation
├── projects/                    # Portfolio projects
│   ├── amhstudent-case-study.md
│   └── images/                  # Project images
│       └── README.md
└── blog/                        # Blog posts
    ├── welcome-to-the-new-portfolio.md
    └── designing-for-constraints.md
```

## Collections

### Projects Collection

Portfolio case studies showcasing design and development work.

**Location:** `src/content/projects/*.md`

**Schema Fields:**
- `title` (required) - Project title
- `description` (required) - Brief 1-2 sentence description
- `hero_image` (required) - Main project image (auto-optimized)
- `additional_images` (optional) - Gallery images
- `tags` (optional) - Categorization tags
- `line_color` (optional) - Subway line theme color (red, blue, green, orange, yellow, purple)
- `date` (optional) - Project completion date
- `featured` (optional) - Show on homepage (default: false)
- `tech_stack` (optional) - Technologies used
- `role` (optional) - Your role in the project
- `impact` (optional) - Quantifiable outcomes
- `github_url` (optional) - Repository link
- `live_url` (optional) - Live demo link

**Content Structure:**
Each project follows this case study format:
1. **Context** - What, when, why
2. **Challenge** - Problem statement and constraints
3. **Approach** - Methodology and process
4. **Solution** - What was built
5. **Impact** - Metrics and outcomes
6. **Lessons Learned** - Reflections

**Example:**
```markdown
---
title: "Project Title"
description: "Brief description for listings and SEO"
hero_image: ./images/hero.png
tags: ["UX Design", "Research"]
line_color: "blue"
date: 2024-05-15
featured: true
tech_stack: ["Figma", "React", "TypeScript"]
role: "Lead Designer"
impact: "45% improvement in user engagement"
---

## Context
[Project background...]

## Challenge
[Problem statement...]
```

### Blog Collection

Articles, tutorials, and thought pieces.

**Location:** `src/content/blog/*.md`

**Schema Fields:**
- `title` (required) - Post title
- `description` (required) - Post excerpt
- `date` (required) - Publication date
- `author` (optional) - Author name (default: Dylan Momplaisir)
- `tags` (optional) - Topic tags
- `draft` (optional) - Hide in production (default: false)
- `reading_time` (optional) - Estimated minutes to read
- `cover_image` (optional) - Social sharing image

**Example:**
```markdown
---
title: "Post Title"
description: "Brief excerpt for listings"
date: 2026-01-05
tags: ["design", "process"]
draft: false
reading_time: 5
---

[Post content in Markdown...]
```

## Using Collections

### In Astro Pages

```typescript
import { getCollection } from 'astro:content';

// Get all projects
const projects = await getCollection('projects');

// Filter featured projects
const featured = await getCollection('projects', ({ data }) => {
  return data.featured === true;
});

// Get specific project
import { getEntry } from 'astro:content';
const project = await getEntry('projects', 'amhstudent-case-study');
```

### Using Helper Functions

```typescript
import {
  getAllProjects,
  getFeaturedProjects,
  getProjectsByTag,
  getAllBlogPosts,
  getBlogPostsByTag
} from '../utils/content-helpers';

// Get all projects sorted by date
const projects = await getAllProjects();

// Get featured projects only
const featured = await getFeaturedProjects();

// Get projects by tag
const uxProjects = await getProjectsByTag('UX Design');
```

### Rendering Content

```astro
---
import { getEntry } from 'astro:content';

const project = await getEntry('projects', 'amhstudent-case-study');
const { Content } = await project.render();
---

<article>
  <h1>{project.data.title}</h1>
  <p>{project.data.description}</p>
  <Content />
</article>
```

## Image Handling

Images are automatically optimized by Astro:

```astro
---
const project = await getEntry('projects', 'amhstudent-case-study');
---

<!-- Astro optimizes images automatically -->
<img
  src={project.data.hero_image.src}
  alt={project.data.title}
  width={project.data.hero_image.width}
  height={project.data.hero_image.height}
/>
```

Or use Astro's Image component for more control:

```astro
import { Image } from 'astro:assets';

<Image
  src={project.data.hero_image}
  alt={project.data.title}
  width={1200}
  height={630}
  format="webp"
/>
```

## Validation

All content is validated at build time using Zod schemas. Invalid content will fail the build with helpful error messages.

Example error:
```
[error] src/content/projects/example.md
  title: Required
  hero_image: Expected image(), received string
```

## Adding New Content

### New Project

1. Create a new `.md` file in `src/content/projects/`
2. Add frontmatter with required fields
3. Add project images to `src/content/projects/images/`
4. Write content following the case study structure
5. Build site to validate schema

### New Blog Post

1. Create a new `.md` file in `src/content/blog/`
2. Add frontmatter with required fields
3. Write content in Markdown
4. Set `draft: true` while working, `draft: false` to publish

## TypeScript Types

Content Collections automatically generate TypeScript types:

```typescript
import type { CollectionEntry } from 'astro:content';

type Project = CollectionEntry<'projects'>;
type BlogPost = CollectionEntry<'blog'>;

// Access typed data
const project: Project = await getEntry('projects', 'example');
project.data.title; // string
project.data.featured; // boolean
project.data.date; // Date | undefined
```

## Best Practices

1. **Use descriptive slugs** - Filename becomes URL: `amhstudent-case-study.md` → `/projects/amhstudent-case-study/`

2. **Optimize images before adding** - Aim for 1200x630px for hero images, compress to <500KB

3. **Write SEO-friendly descriptions** - Keep descriptions 120-160 characters for optimal social sharing

4. **Use consistent tags** - Check existing tags before creating new ones

5. **Set dates** - Helps with sorting and provides timeline context

6. **Mark drafts appropriately** - Use `draft: true` for work-in-progress content

7. **Test locally** - Run `npm run dev` to preview content before deploying

## Related Files

- `/src/content/config.ts` - Schema definitions
- `/src/utils/content-helpers.ts` - Helper functions for querying content
- `/src/pages/projects/index.astro` - Example usage in projects listing page
