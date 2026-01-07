---
title: "Welcome to the New Portfolio: A Love Letter to the NYC Subway"
description: "Why I redesigned my portfolio from scratch, what the NYC subway system taught me about design systems, and why Astro was the perfect choice for this rebuild."
date: 2026-01-05
author: "Dylan Momplaisir"
tags: ["meta", "design", "astro", "design-systems"]
draft: false
reading_time: 7
---

After three years with my Jekyll-based portfolio, I decided it was time for a fresh start. Not just a visual refresh—a complete rebuild from the ground up. This post is about why I made that choice, what inspired the new design, and some technical decisions that shaped this site.

## Why Redesign?

My old portfolio served me well. It was clean, functional, and got me through job searches and freelance pitches. But over time, I noticed something: **it no longer reflected how I think about design and engineering today.**

When I built the original site in 2022, I was focused on showcasing finished projects. Here's what I made, here's the before-and-after, here's the outcome. That approach works, but it misses something crucial—the *process*. The messy, iterative, constraint-driven journey from problem to solution.

I wanted a portfolio that could tell richer stories. One that felt like a conversation rather than a resume. And honestly? I wanted to have fun building something again.

## The NYC Subway Inspiration

If you've explored this site, you've noticed the subway theme. This isn't just aesthetic nostalgia (though I do love the MTA's visual identity). The NYC subway system is a masterclass in **functional design under constraints**.

### What the Subway Teaches Us About Design Systems

The subway map is one of the most recognizable information design artifacts in the world. Vignelli's 1972 diagram (and Tauranac's 1979 revision) solved an impossibly complex problem: how do you help millions of people navigate 472 stations across 665 miles of track?

The answer: **color-coded lines, consistent typography, and ruthless prioritization of information.**

Sound familiar? That's exactly what a good design system does for a digital product.

Here's what I borrowed from the MTA:

#### 1. Line Colors as Visual Hierarchy
Each project on this site gets assigned a "line color" (red, blue, green, orange, yellow, purple). This creates visual variety while maintaining consistency—just like how the 4/5/6 trains all share the green line but serve different routes.

```typescript
// From my content schema
line_color: z.enum(['red', 'blue', 'green', 'orange', 'yellow', 'purple'])
  .optional()
  .default('blue')
```

These colors map to CSS custom properties that control card accents, borders, and hover states:

```css
/* Design token structure */
--line-red: #ee352e;
--line-blue: #0039a6;
--line-green: #00933c;
/* ... and so on */

.project-card[data-line="red"] {
  border-left: 4px solid var(--line-red);
}
```

#### 2. Modular, Repeating Components
Subway stations follow consistent patterns. You always know where to find the MetroCard vending machines, the turnstiles, the platform markers. This predictability reduces cognitive load.

I applied the same thinking to this portfolio's components. Whether you're viewing a project card, a blog post excerpt, or a tag filter—the visual language stays consistent. Users build mental models quickly.

#### 3. Wayfinding Over Aesthetics
The subway map isn't geographically accurate. It distorts space to prioritize clarity. That's a powerful lesson: **design should serve understanding, not decoration.**

Every design decision on this site asks: "Does this help the user understand my work better?" If not, it gets cut.

## Why Astro?

I could've stuck with Jekyll. It's stable, well-documented, and I know it well. But I wanted to try something that aligned with how I build web applications in 2026.

### The Astro Pitch

[Astro](https://astro.build/) is a modern static site generator that ships zero JavaScript by default. You write components in `.astro` files (which feel like HTML with superpowers), and Astro builds lightning-fast static HTML.

Here's what sold me:

#### 1. Content Collections
Astro's Content Collections API provides **type-safe content management** with Zod schemas. Every project and blog post is validated at build time:

```typescript
const projectsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    hero_image: image(), // Astro's image type!
    tags: z.array(z.string()).optional().default([]),
    featured: z.boolean().optional().default(false),
    // ... and more
  }),
});
```

This means I get autocomplete, type checking, and build errors if I forget required fields. It's like having a CMS without the CMS.

#### 2. Optimized Images Out of the Box
The `hero_image: image()` line above isn't just a string path—it's Astro's built-in image optimization. Astro automatically:
- Generates responsive image sizes
- Converts to modern formats (WebP, AVIF)
- Lazy loads images below the fold
- Provides proper width/height to prevent layout shift

No plugins, no config. It just works.

#### 3. Framework Agnostic
Need React for an interactive component? Astro supports it. Prefer Vue or Svelte? Those work too. Want to mix and match? Go ahead.

For this portfolio, I'm using vanilla Astro components (HTML + CSS + minimal JS). But knowing I can reach for React if I need complex interactivity is reassuring.

#### 4. Developer Experience
Hot module reloading is instant. TypeScript support is excellent. The dev server starts in under a second. Coming from Jekyll's 10-second rebuild times, this feels like magic.

### The Migration Experience

Migrating from Jekyll to Astro took about two weeks (part-time). The hardest part wasn't the code—it was deciding what to keep and what to rethink.

I rewrote every project case study to follow a consistent structure:
- **Context** (what, when, why)
- **Challenge** (problem statement)
- **Approach** (methodology)
- **Solution** (what was built)
- **Impact** (outcomes and metrics)
- **Lessons Learned** (reflections)

This forced me to revisit old work with fresh eyes. Some projects didn't hold up under scrutiny. That's okay. Portfolios should evolve.

## What's Next?

This site is a living project. Here's what I'm planning:

- **Dark mode toggle** (respecting prefers-color-scheme isn't enough—give users control)
- **Interactive project timelines** (show design process visually)
- **Code playground embeds** (let readers experiment with examples)
- **RSS feed** (because RSS never died, it just went underground)
- **Search functionality** (currently relying on browser Ctrl+F)

I'm also considering open-sourcing the design system as a standalone package. If you're building a portfolio and want that subway aesthetic, let me know—I'd love to see what you create.

## Closing Thoughts

Building this portfolio reminded me why I love design and development. There's something deeply satisfying about crafting an experience from scratch, making deliberate choices, and seeing it come together.

If you're reading this and thinking about redesigning your own portfolio: do it. Not because you need the latest framework or trendiest aesthetic, but because the process of building something personal teaches you more than any tutorial ever could.

Thanks for stopping by. Feel free to explore the projects, read more posts, or [reach out](/contact) if you want to chat about design, code, or the best subway line (it's the 6 train, don't @ me).

---

*P.S. — This entire site is hosted on GitHub Pages and deployed via GitHub Actions. The source code will be available soon if you want to peek under the hood.*
