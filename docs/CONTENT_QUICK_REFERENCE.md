# Content Collections - Quick Reference

## Project Frontmatter Template

```yaml
---
title: "Project Title Here"
description: "Brief 1-2 sentence description for SEO and listings"
hero_image: ./images/project-hero.png
additional_images:
  - ./images/screenshot-1.png
  - ./images/screenshot-2.png
tags: ["UX Design", "Research", "Prototyping"]
line_color: "blue"  # red|blue|green|orange|yellow|purple
date: 2024-05-15
featured: true
tech_stack: ["Figma", "React", "TypeScript"]
role: "Lead Designer"
impact: "45% improvement in user engagement"
github_url: "https://github.com/username/repo"
live_url: "https://example.com"
---

## Context
[What, when, why - project background]

## Challenge
[Problem statement and constraints]

## Approach
[Methodology and process]

## Solution
[What was built]

## Impact
[Metrics and outcomes]

## Lessons Learned
[Reflections and takeaways]
```

## Blog Post Frontmatter Template

```yaml
---
title: "Post Title Here"
description: "Brief excerpt for listings and SEO (120-160 chars)"
date: 2026-01-05
author: "Dylan Momplaisir"  # optional, defaults to this
tags: ["design", "development", "process"]
draft: false  # set true to hide in production
reading_time: 5  # optional, auto-calculated if omitted
cover_image: ./images/cover.png  # optional
---

[Your markdown content here...]
```

## Common Queries

```typescript
// Get all projects
import { getAllProjects } from '@/utils/content-helpers';
const projects = await getAllProjects();

// Get featured projects
import { getFeaturedProjects } from '@/utils/content-helpers';
const featured = await getFeaturedProjects();

// Get projects by tag
import { getProjectsByTag } from '@/utils/content-helpers';
const uxProjects = await getProjectsByTag('UX Design');

// Get single project
import { getEntry } from 'astro:content';
const project = await getEntry('projects', 'slug-here');

// Render content
const { Content } = await project.render();
```

## Line Colors

Match NYC subway lines:
- `red` - #ee352e (1/2/3 trains)
- `blue` - #0039a6 (A/C/E trains)
- `green` - #00933c (4/5/6 trains)
- `orange` - #ff6319 (B/D/F/M trains)
- `yellow` - #fccc0a (N/Q/R/W trains)
- `purple` - #b933ad (7 train)

## File Structure

```
src/content/
├── config.ts              # Schema definitions
├── projects/
│   ├── project-1.md
│   ├── project-2.md
│   └── images/
│       ├── project-1-hero.png
│       └── project-2-hero.png
└── blog/
    ├── post-1.md
    └── post-2.md
```

## Image Requirements

- **Hero images**: 1200x630px minimum (Open Graph standard)
- **Additional images**: Variable sizes (auto-optimized)
- **Formats**: PNG, JPG, WebP (Astro converts to optimal)
- **Location**: `src/content/projects/images/` or `src/content/blog/images/`

## Build Commands

```bash
npm run dev       # Start dev server
npm run build     # Build for production
npm run preview   # Preview production build
```

## Common Errors

**Missing required field:**
```
Error: title: Required
Fix: Add title: "..." to frontmatter
```

**Invalid image path:**
```
Error: Expected image(), received string
Fix: Use relative path: ./images/file.png
```

**Invalid line color:**
```
Error: Invalid enum value
Fix: Use: red, blue, green, orange, yellow, or purple
```

**Invalid URL:**
```
Error: Invalid url
Fix: Use full URL: https://example.com
```

## Helper Functions Cheat Sheet

| Function | Returns | Use Case |
|----------|---------|----------|
| `getAllProjects()` | `Project[]` | List all projects |
| `getFeaturedProjects()` | `Project[]` | Homepage featured section |
| `getProjectsByTag(tag)` | `Project[]` | Filter by tag |
| `getAllProjectTags()` | `string[]` | Build tag filter UI |
| `getAllBlogPosts()` | `BlogPost[]` | List all posts |
| `getBlogPostsByTag(tag)` | `BlogPost[]` | Filter posts by tag |
| `getRelatedProjects(project, limit)` | `Project[]` | "You might also like" |
| `getRelatedBlogPosts(post, limit)` | `BlogPost[]` | Related posts section |
| `formatDate(date)` | `string` | "January 5, 2026" |
| `formatDateISO(date)` | `string` | "2026-01-05" |
| `calculateReadingTime(content)` | `number` | Reading time in minutes |

## Pro Tips

1. **Use descriptive filenames** - They become URLs
   - Good: `amhstudent-case-study.md` → `/projects/amhstudent-case-study/`
   - Bad: `project1.md` → `/projects/project1/`

2. **Optimize images before adding** - Compress to <500KB

3. **Write SEO-friendly descriptions** - 120-160 characters optimal

4. **Use consistent tags** - Check existing before creating new

5. **Set dates for sorting** - Helps with chronological ordering

6. **Mark drafts** - Use `draft: true` for WIP content

7. **Test locally** - Always preview before deploying

## URLs Generated

- Projects index: `/projects/`
- Project detail: `/projects/[slug]/`
- Blog index: `/blog/` (needs creation)
- Blog post: `/blog/[slug]/` (needs creation)
- Tag filter: `/projects?tag=UX+Design`

---

**Quick Links:**
- Full docs: `/src/content/README.md`
- Schema: `/src/content/config.ts`
- Helpers: `/src/utils/content-helpers.ts`
- Setup guide: `/CONTENT_COLLECTIONS_SETUP.md`
