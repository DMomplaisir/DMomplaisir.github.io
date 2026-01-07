# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is Dylan Momplaisir's personal portfolio website, a static site built with **Astro** and deployed to GitHub Pages at dmomplaisir.com. The site showcases projects, professional experience, and writing.

## Development Commands

### Local Development
```bash
# Install dependencies
npm install

# Start local development server
npm run dev
# Site will be available at http://localhost:4321

# Build site (output to dist/)
npm run build

# Preview production build
npm run preview
```

### Deployment
- Deployment is automatic via GitHub Actions on push to master branch
- Workflow: `.github/workflows/deploy.yml` (uses official Astro action)
- No manual deployment needed

## Architecture

### Astro Site Structure

**Content Collections** (defined in `src/content/config.ts`):
- `src/content/projects/`: Project case studies written in markdown
  - Frontmatter: title, description, tags, date, featured, tech_stack, role, impact, live_url, github_url
  - Rendered at `/projects/[slug]/`
- Future: `src/content/posts/`: Blog posts (not yet implemented)

**Pages** (`src/pages/`):
- `index.astro`: Homepage with hero, project slider, about preview
- `about.astro`: About page with journey, philosophy, skills
- `contact.astro`: Contact form with Formspree integration
- `projects/index.astro`: Projects index with masonry grid
- `projects/[slug].astro`: Dynamic project detail pages

**Components** (`src/components/`):
- `InteractiveLanding.astro`: Interactive features for homepage (elevation sidebar, grid toggle)

**Layouts** (`src/layouts/`):
- Currently using page-level layouts (not separate layout files)
- Each page includes its own styles

### Design System

**"Elevation Grid + Blueprint Light"** aesthetic:

**CSS Variables** (`src/styles/variables.css`):
- Color palette:
  - Primary: Burgundy (#900020)
  - Backgrounds: Warm white (#FFFEF9), Cream (#FFFCF5)
  - Grays: Warm gray scale
  - Blueprint: Light blue (#0EA5E9)
- Typography scale (1.333 ratio)
- Spacing system (8px baseline grid)
- Transitions, shadows, and animation easing

**Typography** (`src/styles/fonts.css`):
- Display: Editorial Old (variable font with woff2-variations)
- Body: Neue Montreal (OTF files)
- Monospace: JetBrains Mono (via Google Fonts)

**Component Styling**:
- Each page contains scoped `<style>` blocks
- Imports design tokens from variables.css
- Modular, component-based approach

### Interactive Features

**Homepage Slider**:
- Full-width project slider with auto-advance (6s intervals)
- Prev/Next navigation + dot indicators
- Keyboard support (arrow keys)
- Pauses on hover and when page hidden

**Elevation Sidebar**:
- Scroll-triggered navigation sidebar
- Shows current section elevation (0.0m, +2.4m, +4.8m)
- Smooth scroll to sections

**Grid Toggle**:
- Press 'G' key to toggle grid overlay
- Blueprint-style grid for visual alignment

### Content Management

**Adding a Project**:
1. Create markdown file in `src/content/projects/`
2. Add frontmatter with required fields (see README.md)
3. Write case study content in markdown
4. Set `featured: true` to show on homepage slider

**Featured Projects**:
- Homepage slider shows 3 most recent featured projects
- Sorted by date (newest first)

### Configuration

**`astro.config.mjs`**:
- Site: https://dmomplaisir.com
- No base path (using custom domain)
- Integrations: MDX, Sitemap
- Output: Static
- Build format: Directory (clean URLs)

**Custom Domain**:
- CNAME file in `public/` folder
- Domain: dmomplaisir.com

## Key Files

- `astro.config.mjs`: Astro configuration
- `tsconfig.json`: TypeScript configuration
- `src/content/config.ts`: Content collection schemas
- `src/utils/content-helpers.ts`: Helper functions for content queries
- `public/CNAME`: Custom domain configuration
- `public/resume.pdf`: Downloadable resume

## Design System Notes

- Primary brand color: Burgundy (#900020)
- Typography: Editorial Old + Neue Montreal + JetBrains Mono
- Responsive breakpoints: 768px (tablet), 480px (mobile)
- Accessibility: prefers-reduced-motion support
- 8px spacing grid system

## Previous Site

- Old Jekyll site archived in `/archive/` folder
- Includes legacy projects, assets, and configuration
- Reference only - not used in production
