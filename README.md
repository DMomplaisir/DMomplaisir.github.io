# Dylan Momplaisir - Portfolio

Personal portfolio website built with Astro, showcasing projects, writing, and professional experience.

**Live Site:** [dmomplaisir.com](https://dmomplaisir.com)

## Tech Stack

- **Framework:** Astro (Static Site Generator)
- **Styling:** CSS with custom design system
- **Typography:** Editorial Old (display) + Neue Montreal (body) + JetBrains Mono (monospace)
- **Deployment:** GitHub Pages
- **Form Handling:** Formspree

## Design System

**"Elevation Grid + Blueprint Light"** - A hybrid architectural aesthetic combining:
- Warm minimalism (cream #FFFCF5, warm white #FFFEF9)
- Burgundy accents (#900020)
- Blueprint-inspired grid overlays
- 8px baseline spacing system
- Editorial typography with architectural precision

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# Site will be available at http://localhost:4321

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
/
├── public/              # Static assets (fonts, resume, CNAME)
├── src/
│   ├── components/      # Astro components
│   ├── content/         # Content collections (projects, posts)
│   │   └── projects/    # Project case studies (markdown)
│   ├── layouts/         # Page layouts
│   ├── pages/           # Routes (index, about, projects, contact)
│   ├── styles/          # Global styles and design tokens
│   │   ├── variables.css  # Design system tokens
│   │   └── fonts.css      # Font declarations
│   └── utils/           # Helper functions
├── astro.config.mjs     # Astro configuration
└── tsconfig.json        # TypeScript configuration
```

## Content Management

### Adding a New Project

1. Create a markdown file in `src/content/projects/`
2. Include frontmatter with required fields:
   ```yaml
   ---
   title: "Project Title"
   description: "Brief description"
   tags: ["Tag1", "Tag2"]
   line_color: "blue"  # or "red", "green", "orange"
   date: 2024-01-15
   featured: true  # Shows on homepage
   tech_stack: ["React", "TypeScript", "Node.js"]
   role: "Your Role"
   impact: "Key impact metric"
   live_url: "https://example.com"  # optional
   github_url: "https://github.com/..."  # optional
   ---

   ## Project content here...
   ```
3. Write the case study in markdown

### Featured Projects

Projects with `featured: true` appear on the homepage slider. The slider shows the 3 most recent featured projects.

## Deployment

Deployment is automatic via GitHub Actions on push to `master` branch.

The workflow:
1. Checks out the code
2. Uses official Astro action to build the site
3. Deploys to GitHub Pages

**Custom Domain:** Configured via `public/CNAME` file (dmomplaisir.com)

## Old Site

The previous Jekyll-based site has been archived to `/archive/` for reference.

## TODO

See [TODO.md](./TODO.md) for upcoming features and improvements.

## License

© 2025 Dylan Momplaisir. All rights reserved.
