# Layout Components Usage Guide

## Overview

Three core layout components have been created for your NYC subway-themed Astro portfolio:

1. **BaseHead.astro** - Meta tags, SEO, fonts, and global styles
2. **Footer.astro** - Site footer with navigation and social links
3. **BaseLayout.astro** - Default page wrapper that combines everything

---

## Component Details

### 1. BaseHead.astro

**Location:** `/src/components/layout/BaseHead.astro`

**Purpose:** Manages all `<head>` elements including meta tags, SEO, Open Graph, Twitter Cards, favicons, and font loading.

**Props:**
- `title` (required): Page title
- `description` (optional): Meta description (defaults to site description)
- `image` (optional): Social sharing image URL (defaults to `/og-image.png`)

**Features:**
- Automatic title formatting: "Page Title | Dylan Momplaisir"
- Complete SEO meta tags
- Open Graph and Twitter Card support
- Favicon support (multiple sizes)
- Font preloading for Inter and JetBrains Mono
- Console easter egg for developers
- RSS feed link
- Sitemap link

---

### 2. Footer.astro

**Location:** `/src/components/layout/Footer.astro`

**Purpose:** Site-wide footer with branding, navigation, social links, and credits.

**Features:**
- Cream background with subtle tile grid pattern
- Brand section: "DYLAN MOMPLAISIR" + tagline
- Navigation links (Home, Projects, Blog, About, Contact)
- Social media links (GitHub, LinkedIn, Twitter, Email)
- Colorful separator line (subway line gradient)
- Copyright and credits
- Fully responsive (grid → stacked on mobile)
- Dark mode support
- Hover animations on links

**Styling:**
- Vignelli-inspired systematic design
- Subway tile pattern background
- Station marker-style social icons
- Smooth transitions and hover effects

---

### 3. BaseLayout.astro

**Location:** `/src/layouts/BaseLayout.astro`

**Purpose:** Main layout wrapper for all pages. Includes navigation, content area, and footer.

**Props:**
- `title` (required): Page title
- `description` (optional): Meta description
- `image` (optional): Social sharing image
- `headerStyle` (optional): Header variant - `'normal'` | `'transparent'` | `'dark'`

**Features:**
- Automatic body class generation based on page type
- Fixed navigation with scroll behavior
- Main content area with proper spacing
- Scroll-to-top button (appears after 500px scroll)
- Skip-to-content link (accessibility)
- Smooth scroll behavior
- Responsive padding adjustments
- Dark mode support
- Print-friendly styles

**Header Style Variants:**
- `normal` (default): White background, visible border
- `transparent`: Transparent background (for hero sections), becomes solid on scroll
- `dark`: Black background with white text

---

## Usage Examples

### Basic Page

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout title="About">
  <div class="container section-padding">
    <h1>About Me</h1>
    <p>Your content here...</p>
  </div>
</BaseLayout>
```

### Homepage with Transparent Header

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout
  title="Home"
  headerStyle="transparent"
  description="Dylan Momplaisir - Engineer, Product Manager, and Creative"
>
  <section class="hero">
    <!-- Hero content here -->
  </section>

  <section class="container section-padding">
    <!-- More content -->
  </section>
</BaseLayout>
```

### Blog Post with Custom Description and Image

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';

const { frontmatter } = Astro.props;
---

<BaseLayout
  title={frontmatter.title}
  description={frontmatter.description}
  image={frontmatter.coverImage}
>
  <article class="container-narrow section-padding">
    <h1>{frontmatter.title}</h1>
    <slot />
  </article>
</BaseLayout>
```

### Project Page with Dark Header

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout
  title="Project Name"
  headerStyle="dark"
  description="An amazing project I built"
>
  <div class="project-hero full-bleed">
    <!-- Full-width hero image -->
  </div>

  <div class="container section-padding">
    <!-- Project details -->
  </div>
</BaseLayout>
```

---

## Utility Classes Available

The BaseLayout provides several utility classes for common layouts:

### Container Classes
- `.container` - Max-width container with padding (1200px)
- `.container-wide` - Wider container (1440px)
- `.container-narrow` - Narrow content width (720px)
- `.content-wrapper` - Generic wrapper with padding

### Spacing Classes
- `.section-padding` - Standard vertical padding (96px / 64px mobile)
- `.section-padding-sm` - Small vertical padding (64px / 32px mobile)
- `.section-padding-lg` - Large vertical padding (128px / 96px mobile)

### Layout Classes
- `.full-bleed` - Breaks out of container to full viewport width

---

## Customizing Social Links

To update social media links, edit `/src/components/layout/Footer.astro`:

```typescript
const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/YOUR_USERNAME',
    icon: '⌘',
    ariaLabel: 'Visit on GitHub'
  },
  // Add or modify as needed
];
```

---

## Customizing Navigation

Navigation links are defined in `/src/components/layout/Navigation.astro`:

```typescript
const navLinks: NavLink[] = [
  { name: 'Home', href: '/', marker: 'red' },
  { name: 'Projects', href: '/projects', marker: 'blue' },
  // Modify or add new links
];
```

Each link can have a colored station marker (`red`, `blue`, `green`, `orange`, `yellow`, `purple`).

---

## SEO Best Practices

1. **Always provide a title:** Required for every page
2. **Write unique descriptions:** Helps with search rankings and social sharing
3. **Use custom images:** Create 1200x630px OG images for key pages
4. **Update meta keywords:** Edit in BaseHead.astro if needed

---

## Accessibility Features

- Skip-to-content link (tab to reveal)
- Semantic HTML5 structure
- ARIA labels on interactive elements
- Focus-visible outlines
- Keyboard navigation support
- Screen reader friendly
- Reduced motion support

---

## Performance Optimizations

- Font preloading (Inter + JetBrains Mono)
- Lazy-loaded styles for non-critical CSS
- Minimal JavaScript (vanilla, no frameworks)
- Efficient scroll listeners with throttling
- CSS animations with `prefers-reduced-motion` support

---

## Testing Checklist

- [ ] Page loads with correct title in browser tab
- [ ] Meta description appears in search results preview
- [ ] Social sharing shows correct image/description
- [ ] Navigation is sticky and collapses on scroll
- [ ] Mobile menu works (hamburger icon)
- [ ] Footer links navigate correctly
- [ ] Social links open in new tabs
- [ ] Scroll-to-top button appears after scrolling
- [ ] Skip-to-content link works (tab to focus)
- [ ] Dark mode looks good
- [ ] Print styles work correctly

---

## Next Steps

1. Create page templates for Projects, Blog, About, Contact
2. Add favicon files to `/public/` directory
3. Create OG image at `/public/og-image.png`
4. Set up RSS feed (if using blog)
5. Configure `astro.config.mjs` with your site URL
6. Update social media links in Footer.astro

---

## File Structure

```
src/
├── components/
│   └── layout/
│       ├── BaseHead.astro      ← Meta tags & SEO
│       ├── Footer.astro         ← Site footer
│       └── Navigation.astro     ← Site navigation
├── layouts/
│   └── BaseLayout.astro         ← Main page wrapper
└── styles/
    ├── variables.css            ← Design tokens
    ├── global.css               ← Global styles
    └── typography.css           ← Font styles
```

---

## Support

For questions or issues, refer to:
- Astro Docs: https://docs.astro.build
- Design System: `src/styles/variables.css`
- Component source code (heavily commented)
