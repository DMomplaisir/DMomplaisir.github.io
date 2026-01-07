# NYC Subway Portfolio - Layout Components

## 🚇 Overview

Three production-ready layout components have been created for your NYC subway-themed Astro portfolio, following Massimo Vignelli's systematic design principles.

---

## 📁 Files Created

### Components
1. **`/src/components/layout/BaseHead.astro`** (4.7 KB)
   - Complete `<head>` management
   - SEO optimization
   - Font loading strategy
   - Social media meta tags

2. **`/src/components/layout/Footer.astro`** (10.8 KB)
   - Site-wide footer
   - Navigation + social links
   - Subway tile aesthetic
   - Fully responsive

3. **`/src/layouts/BaseLayout.astro`** (8.9 KB)
   - Main page wrapper
   - Combines all components
   - Header style variants
   - Accessibility features

### Documentation
4. **`/new-site/LAYOUT_USAGE.md`** - Comprehensive usage guide
5. **`/new-site/LAYOUT_COMPONENTS_README.md`** - This file
6. **`/src/pages/example.astro`** - Live demo page

---

## ⚡ Quick Start

### 1. Basic Page

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout title="About Me">
  <div class="container section-padding">
    <h1>About Me</h1>
    <p>Your content here...</p>
  </div>
</BaseLayout>
```

### 2. Homepage with Transparent Header

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout title="Home" headerStyle="transparent">
  <section class="hero">
    <!-- Full-screen hero -->
  </section>
</BaseLayout>
```

### 3. View the Example

Visit `/example` in your browser to see all features in action.

---

## 🎨 Design Features

### BaseHead Component
- ✅ SEO-optimized meta tags
- ✅ Open Graph + Twitter Cards
- ✅ Automatic title formatting
- ✅ Font preloading (Inter + JetBrains Mono)
- ✅ Favicon support
- ✅ Console easter egg for developers
- ✅ RSS feed link
- ✅ Canonical URLs

### Footer Component
- ✅ Cream background with tile pattern
- ✅ Brand identity section
- ✅ Navigation links (5 main pages)
- ✅ Social media icons (4 platforms)
- ✅ Colorful subway line separator
- ✅ Copyright + credits
- ✅ Responsive grid (3-col → 2-col → 1-col)
- ✅ Smooth hover animations
- ✅ Dark mode support

### BaseLayout Component
- ✅ Fixed navigation with scroll detection
- ✅ 3 header variants (normal, transparent, dark)
- ✅ Automatic page type detection
- ✅ Scroll-to-top button
- ✅ Skip-to-content link (a11y)
- ✅ Smooth scroll behavior
- ✅ Print-friendly styles
- ✅ Dark mode support
- ✅ Reduced motion support

---

## 🎯 Header Style Variants

### `headerStyle="normal"` (Default)
- White background
- Visible bottom border
- Standard navigation
- **Use for:** Most pages (About, Contact, Blog posts)

### `headerStyle="transparent"`
- Transparent background initially
- Becomes solid white on scroll
- No padding-top on content
- **Use for:** Homepage hero sections, landing pages

### `headerStyle="dark"`
- Black background
- White text and icons
- Inverted color scheme
- **Use for:** Dark-themed pages, project showcases

---

## 🛠 Utility Classes

### Container Classes
| Class | Max Width | Use Case |
|-------|-----------|----------|
| `.container` | 1200px | Default content |
| `.container-wide` | 1440px | Wide sections |
| `.container-narrow` | 720px | Blog posts, reading |
| `.content-wrapper` | 1200px | Generic wrapper |

### Spacing Classes
| Class | Desktop | Mobile | Use Case |
|-------|---------|--------|----------|
| `.section-padding` | 96px | 64px | Standard sections |
| `.section-padding-sm` | 64px | 32px | Compact sections |
| `.section-padding-lg` | 128px | 96px | Hero sections |

### Layout Classes
- `.full-bleed` - Break out to full viewport width

---

## 🎨 Customization Guide

### Update Social Links

**File:** `/src/components/layout/Footer.astro`

```typescript
const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/YOUR_USERNAME', // ← Change this
    icon: '⌘',
    ariaLabel: 'Visit Dylan Momplaisir on GitHub'
  },
  // Add more social links...
];
```

### Update Navigation

**File:** `/src/components/layout/Navigation.astro`

```typescript
const navLinks: NavLink[] = [
  { name: 'Home', href: '/', marker: 'red' },
  { name: 'Projects', href: '/projects', marker: 'blue' },
  // Add or modify links...
];
```

### Update Site Metadata

**File:** `/src/components/layout/BaseHead.astro`

```astro
const {
  description = "Your custom default description", // ← Change this
  image = "/og-image.png" // ← Add your OG image
} = Astro.props;
```

---

## 🔧 Setup Checklist

Before deploying, make sure to:

- [ ] Update social media links in `Footer.astro`
- [ ] Add favicon files to `/public/` directory:
  - [ ] `favicon.svg`
  - [ ] `favicon-32x32.png`
  - [ ] `favicon-16x16.png`
  - [ ] `apple-touch-icon.png`
  - [ ] `site.webmanifest`
- [ ] Create Open Graph image at `/public/og-image.png` (1200x630px)
- [ ] Update Twitter handle in `BaseHead.astro`
- [ ] Configure site URL in `astro.config.mjs`
- [ ] Test all header variants
- [ ] Test mobile responsiveness
- [ ] Verify dark mode appearance
- [ ] Test accessibility (keyboard nav, screen readers)
- [ ] Delete `/src/pages/example.astro` when ready

---

## 📱 Responsive Breakpoints

| Breakpoint | Adjustments |
|------------|-------------|
| **1024px** | Footer: 2-column grid, hide nav CTA |
| **768px** | Mobile menu drawer, stacked footer |
| **480px** | Smaller fonts, hide social names |

---

## ♿ Accessibility Features

- **Semantic HTML5** - Proper `<nav>`, `<main>`, `<footer>` structure
- **ARIA Labels** - All interactive elements labeled
- **Skip Links** - Tab to reveal "Skip to content"
- **Keyboard Navigation** - Full keyboard support
- **Focus Indicators** - Clear focus outlines
- **Screen Reader Friendly** - Descriptive labels and alt text
- **Reduced Motion** - Respects `prefers-reduced-motion`
- **Color Contrast** - WCAG AA compliant

---

## 🚀 Performance

### Optimizations Included
- Font preloading (Inter + JetBrains Mono)
- Async font loading with fallbacks
- Minimal JavaScript (vanilla, no frameworks)
- Efficient scroll listeners
- CSS animations with GPU acceleration
- Lazy-loaded footer tile pattern
- Optimized CSS (no unused selectors)

### Lighthouse Targets
- **Performance:** 95+
- **Accessibility:** 100
- **Best Practices:** 100
- **SEO:** 100

---

## 🐛 Troubleshooting

### Styles Not Loading
- Check that CSS imports in `BaseHead.astro` point to correct paths
- Verify `variables.css`, `global.css`, `typography.css` exist

### Navigation Not Sticky
- Ensure `position: fixed` in Navigation.astro styles
- Check z-index values (should be `var(--z-sticky)`)

### Footer at Wrong Position
- Verify `BaseLayout.astro` has `flex-direction: column` on body
- Check that `.site-content` has `flex: 1`

### Mobile Menu Not Working
- Check JavaScript in `Navigation.astro` is executing
- Verify click handlers are attached
- Test on actual mobile device (not just browser resize)

### Fonts Not Loading
- Verify Google Fonts CDN is accessible
- Check preload links are correct
- Confirm font-family declarations in CSS

---

## 📚 Additional Resources

- **Astro Documentation:** https://docs.astro.build
- **Design System:** `/src/styles/variables.css`
- **Typography Guide:** `/src/styles/typography.css`
- **Global Styles:** `/src/styles/global.css`
- **Usage Examples:** `/new-site/LAYOUT_USAGE.md`

---

## 🎉 What's Next?

1. **Build Core Pages**
   - Homepage (`/src/pages/index.astro`)
   - About (`/src/pages/about.astro`)
   - Contact (`/src/pages/contact.astro`)
   - Projects index (`/src/pages/projects/index.astro`)
   - Blog index (`/src/pages/blog/index.astro`)

2. **Create Page Templates**
   - Blog post layout
   - Project detail layout

3. **Add Content Collections**
   - Configure in `src/content/config.ts`
   - Add markdown/MDX files

4. **Deploy**
   - Build: `npm run build`
   - Preview: `npm run preview`
   - Deploy to GitHub Pages

---

## 📝 File Structure

```
new-site/
├── src/
│   ├── components/
│   │   └── layout/
│   │       ├── BaseHead.astro      ✅ Created
│   │       ├── Footer.astro         ✅ Created
│   │       └── Navigation.astro     ✅ Existing
│   ├── layouts/
│   │   └── BaseLayout.astro         ✅ Created
│   ├── pages/
│   │   └── example.astro            ✅ Created (demo)
│   └── styles/
│       ├── variables.css            ✅ Existing
│       ├── global.css               ✅ Existing
│       └── typography.css           ✅ Existing
├── LAYOUT_USAGE.md                  ✅ Created
└── LAYOUT_COMPONENTS_README.md      ✅ This file
```

---

## 🎨 Design Philosophy

This layout system follows **Massimo Vignelli's design principles** from the iconic 1972 NYC Subway Map:

- **Systematic:** Consistent spacing, typography, and color usage
- **Minimal:** No unnecessary decoration or complexity
- **Timeless:** Clean aesthetics that won't feel dated
- **Functional:** Every element serves a purpose
- **Accessible:** Designed for all users, all devices

---

## 💡 Tips & Best Practices

1. **Always use semantic HTML** - `<header>`, `<main>`, `<footer>`, `<article>`, `<section>`
2. **Leverage utility classes** - Don't reinvent spacing/containers
3. **Use consistent spacing** - Stick to the 8px grid system
4. **Keep it minimal** - Less is more (Vignelli would approve)
5. **Test accessibility** - Use keyboard, screen reader, color contrast tools
6. **Mobile-first** - Design for small screens, enhance for large
7. **Respect user preferences** - Dark mode, reduced motion
8. **Optimize images** - Use WebP, lazy loading, responsive images
9. **Write descriptive alt text** - For images and icons
10. **Keep it fast** - Monitor bundle size, minimize JS

---

## 🙏 Credits

- **Design System:** Inspired by Massimo Vignelli's 1972 NYC Subway Map
- **Typography:** Inter (body) + JetBrains Mono (code)
- **Framework:** Astro
- **Icons:** Unicode symbols (no icon library needed)

---

**Built with ❤️ for Dylan Momplaisir's Portfolio**

Last Updated: January 2026
