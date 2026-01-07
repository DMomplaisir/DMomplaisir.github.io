# Landing Page: Detailed Implementation Plan
## Concept: "Elevation Grid + Blueprint Light" Hybrid

**Visual Direction:** Warm minimalism with architectural precision. Grid-based layout with visible technical infrastructure, but approachable and human.

---

## 1. Typography System

### Primary Stack (From Open Foundry + Google Fonts)

```css
/* Display - Headlines, Large Text */
--font-display: 'Work Sans', sans-serif;
/* Geometric, contemporary, 18 weights available */
/* Use: 500 (Medium) for body headlines, 600 (SemiBold) for hero */

/* Body - Reading Text */
--font-body: 'Inter', sans-serif;
/* Yes, it's common, but it's legitimately the best for readability */
/* Alternative: 'Poppins' if you want more geometric character */

/* Technical - Code, Specs, Annotations */
--font-mono: 'Office Code Pro', monospace;
/* From Open Foundry, perfect for technical callouts */

/* Architectural - Labels, Captions, Dimension Lines */
--font-technical: 'Work Sans', sans-serif;
/* Same as display, but used at small sizes (12-14px) for annotations */
```

**Why This Stack:**
- Work Sans: Geometric but not cold, distinctive without being distracting
- Inter: Best-in-class readability for body text
- Office Code Pro: Technical credibility, architectural spec feel

**Fallback Strategy:**
```css
--font-display: 'Work Sans', 'Poppins', system-ui, sans-serif;
--font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
--font-mono: 'Office Code Pro', 'JetBrains Mono', monospace;
```

---

## 2. Color System

### Palette: Warm Minimal + Technical Precision

```css
/* ===== WARM NEUTRALS (Blueprint & Light influence) ===== */
--warm-white: #FFFEF9;        /* Main background - warm paper */
--cream: #F8F6F0;             /* Subtle section backgrounds */
--warm-gray-50: #FAFAF8;
--warm-gray-100: #F2F1ED;
--warm-gray-200: #E8E6E0;

/* ===== COOL GRAYS (Elevation Grid influence) ===== */
--concrete-300: #BDBDBD;      /* Borders, dividers */
--concrete-400: #757575;      /* Secondary text */
--concrete-900: #212121;      /* Primary text */

/* ===== ACCENT - Your Burgundy Brand Color ===== */
--burgundy-primary: #900020;   /* CTAs, links, emphasis */
--burgundy-hover: #C4002B;     /* Hover states (lighter) */
--burgundy-dark: #6B0018;      /* Active/pressed states */

/* ===== TECHNICAL BLUE (Blueprint influence) ===== */
--blueprint-blue: #0EA5E9;     /* Technical elements */
--blueprint-blue-faint: rgba(14, 165, 233, 0.06);  /* Subtle backgrounds */
--blueprint-line: rgba(14, 165, 233, 0.12);        /* Grid lines */

/* ===== SEMANTIC COLORS ===== */
--success-green: #10B981;      /* Metrics, achievements */
--link-color: var(--burgundy-primary);
--text-primary: var(--concrete-900);
--text-secondary: var(--concrete-400);
```

**Color Strategy:**
- **Base:** Warm whites create inviting, approachable feel
- **Text:** Cool grays provide excellent contrast and readability
- **Accent:** Your burgundy maintains brand consistency
- **Technical:** Blueprint blue reveals on interaction (hover, toggle)

---

## 3. Grid System

### 8px Baseline Grid + 12 Column Layout

```css
/* ===== SPACING SYSTEM ===== */
--grid-unit: 8px;              /* Base unit for all spacing */

--space-xs: calc(var(--grid-unit) * 1);   /* 8px */
--space-sm: calc(var(--grid-unit) * 2);   /* 16px */
--space-md: calc(var(--grid-unit) * 3);   /* 24px */
--space-lg: calc(var(--grid-unit) * 4);   /* 32px */
--space-xl: calc(var(--grid-unit) * 6);   /* 48px */
--space-xxl: calc(var(--grid-unit) * 8);  /* 64px */
--space-xxxl: calc(var(--grid-unit) * 12); /* 96px */

/* ===== LAYOUT WIDTHS ===== */
--width-content: 1200px;       /* Main content container */
--width-text: 65ch;            /* Optimal reading width */
--width-narrow: 800px;         /* About, single column content */
--width-wide: 1400px;          /* Full bleed sections */

/* ===== GRID COLUMNS ===== */
--grid-columns: 12;
--grid-gap: var(--space-md);   /* 24px */
--grid-margin: var(--space-lg); /* 32px on mobile, 48px on desktop */

/* ===== GRID VISUALIZATION (Easter Egg) ===== */
--grid-visible: false;         /* Toggle with 'G' key */
--grid-color: var(--blueprint-line);
--grid-opacity: 0.15;
```

**Grid Behavior:**
- All spacing uses multiples of 8px
- Typography aligns to 8px baseline
- Grid lines visible on 'G' key press (developer Easter egg)
- Responsive: Collapses to 6 columns on tablet, 4 on mobile

---

## 4. Landing Page Structure

### Section-by-Section Breakdown

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  [Navigation Bar - Sticky]                                  │
│  Logo | Work | About | Contact                              │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  SECTION 1: HERO / ELEVATION 0.0m                          │
│  Full viewport height                                       │
│  Large typography, minimal content                          │
│  Subtle grid background                                     │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  SECTION 2: FEATURED WORK / ELEVATION +2.4m                │
│  3 large project cards                                      │
│  Grid layout, hover reveals blueprint overlay               │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  SECTION 3: CAPABILITIES / ELEVATION +4.8m                 │
│  Skill areas in grid                                        │
│  Technical specifications visible                           │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  SECTION 4: ABOUT + PHILOSOPHY / ELEVATION +7.2m           │
│  Narrative content, narrower width                          │
│  Personality touches                                        │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  SECTION 5: CONTACT / ELEVATION +9.6m                      │
│  Simple, direct contact info                                │
│  CTAs for resume, email, LinkedIn                           │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  FOOTER / FOUNDATION                                        │
│  Colophon, technical specs, last updated                    │
│                                                             │
└─────────────────────────────────────────────────────────────┘

[Vertical Sidebar - Fixed Right]
├─ 0.0m (Hero)
├─ +2.4m (Work)
├─ +4.8m (Skills)
├─ +7.2m (About)
└─ +9.6m (Contact)
```

---

## 5. Detailed Section Specifications

### SECTION 1: HERO (Elevation 0.0m)

**Layout:**
```
┌────────────────────────────────────────────────────────┐
│                                                        │
│                    [Grid Background]                   │
│                                                        │
│              Dylan Momplaisir                          │
│              Product Engineer | Media Infrastructure   │
│                                                        │
│     Building platforms that transform how millions     │
│              consume content and stories.              │
│                                                        │
│     Computer Science × Architectural Studies gives     │
│          me a unique lens on digital systems.          │
│                                                        │
│                                                        │
│          [View Work]    [Download Resume]              │
│                                                        │
│                       ↓                                │
│                  Scroll to explore                     │
│                                                        │
└────────────────────────────────────────────────────────┘

[Right sidebar]
● 0.0m Ground Level
○ +2.4m
○ +4.8m
○ +7.2m
○ +9.6m
```

**Specifications:**
- **Height:** 100vh (full viewport)
- **Background:** var(--warm-white) with subtle grid pattern (optional, toggleable)
- **Typography:**
  - Name: Work Sans 600, 64px desktop / 40px mobile, --concrete-900
  - Subtitle: Work Sans 500, 20px desktop / 16px mobile, --concrete-400
  - Body: Inter 400, 18px desktop / 16px mobile, --text-primary, max-width: 600px, centered
- **Spacing:**
  - Content vertically centered
  - 48px between name and subtitle
  - 24px between subtitle and body
  - 32px between body and CTAs
- **CTAs:**
  - Primary button: --burgundy-primary background, white text, 16px padding vertical, 32px horizontal
  - Secondary button: Border 1px --concrete-300, --text-primary, same padding
  - 16px gap between buttons
  - Hover: Primary lifts 2px, shadow increases; Secondary border becomes --burgundy-primary

**Animations:**
- Page load: Content fades in + slides up 30px, staggered (name → subtitle → body → CTAs)
- Delays: 0ms, 100ms, 200ms, 300ms
- Duration: 600ms
- Easing: cubic-bezier(0.34, 1.56, 0.64, 1) - gentle spring

**Interactions:**
- Scroll indicator animates up/down gently (2px, 1.5s loop)
- Grid background fades to 8% opacity on scroll (subtle depth cue)

---

### SECTION 2: FEATURED WORK (Elevation +2.4m)

**Layout:**
```
┌────────────────────────────────────────────────────────┐
│                                                        │
│  Selected Work                                         │
│  ═════════════                                         │
│                                                        │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐│
│  │              │  │              │  │              ││
│  │  The Atlantic│  │  Amherst     │  │  NYT COVID   ││
│  │  Audio       │  │  Student     │  │  Data        ││
│  │  Platform    │  │  Redesign    │  │  Scraper     ││
│  │              │  │              │  │              ││
│  │ [Tech Stack] │  │ [Tech Stack] │  │ [Tech Stack] ││
│  │ [Impact]     │  │ [Impact]     │  │ [Impact]     ││
│  │              │  │              │  │              ││
│  │ View Project→│  │ View Project→│  │ View Project→││
│  └──────────────┘  └──────────────┘  └──────────────┘│
│                                                        │
│                    View All Projects →                 │
│                                                        │
└────────────────────────────────────────────────────────┘

[Right sidebar]
○ 0.0m
● +2.4m First Floor
○ +4.8m
○ +7.2m
○ +9.6m
```

**Specifications:**
- **Container:** max-width: 1200px, centered
- **Padding:** 96px vertical (desktop), 64px (mobile)
- **Background:** var(--warm-white)

**Section Heading:**
- Typography: Work Sans 600, 48px desktop / 32px mobile
- Underline: 4px --burgundy-primary, width: 140px (not full width)
- Margin bottom: 64px

**Project Cards:**
- **Grid:** 3 columns desktop, 1 column mobile
- **Gap:** 32px between cards
- **Card Dimensions:**
  - Min height: 400px desktop
  - Aspect ratio: 4:5 (portrait-ish)
- **Background:** var(--cream) default state
- **Border:** 1px solid var(--warm-gray-200)
- **Border radius:** 8px
- **Padding:** 32px

**Card Content:**
```
Project Title
Work Sans 500, 24px, --text-primary

Short description (2-3 sentences)
Inter 400, 16px, --text-secondary, line-height: 1.6

[Tech Stack]
Office Code Pro 400, 12px, --blueprint-blue
Inline, separated by " • "
Example: React • TypeScript • GraphQL

[Impact Metric]
Work Sans 600, 20px, --success-green
Example: "2x article play rates" or "+733% readership"

View Project →
Work Sans 500, 14px, --burgundy-primary
```

**Hover States:**
- **Default → Hover transition:**
  - Border becomes 1px solid --burgundy-primary
  - Card lifts 4px (transform: translateY(-4px))
  - Shadow: 0 8px 24px rgba(0, 0, 0, 0.06)
  - Background blueprint overlay fades in (subtle grid pattern, --blueprint-blue-faint)
  - Duration: 250ms
  - Easing: cubic-bezier(0.4, 0.0, 0.2, 1)

**Blueprint Overlay (On Hover):**
- SVG grid pattern (24px squares)
- Color: --blueprint-line
- Opacity: 0 → 0.3 on hover
- Position: Absolute, covers entire card
- Pointer events: none

**Animations on Scroll:**
- Cards fade in + slide up 20px
- Stagger: First card at 0ms, second at 150ms, third at 300ms
- Trigger: When section is 30% in viewport
- IntersectionObserver based

**"View All Projects" Link:**
- Work Sans 500, 18px, --burgundy-primary
- Centered, margin-top: 48px
- Hover: Slides right 4px, arrow animates

---

### SECTION 3: CAPABILITIES (Elevation +4.8m)

**Layout:**
```
┌────────────────────────────────────────────────────────┐
│                                                        │
│  Structure & Systems                                   │
│  ══════════════════                                    │
│                                                        │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐│
│  │              │  │              │  │              ││
│  │  Frontend    │  │  Backend     │  │  Infrastructure││
│  │              │  │              │  │              ││
│  │  React       │  │  Node.js     │  │  AWS/GCP     ││
│  │  TypeScript  │  │  Python      │  │  Docker      ││
│  │  Next.js     │  │  GraphQL     │  │  CI/CD       ││
│  │  Astro       │  │  REST APIs   │  │  Monitoring  ││
│  │              │  │              │  │              ││
│  └──────────────┘  └──────────────┘  └──────────────┘│
│                                                        │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐│
│  │              │  │              │  │              ││
│  │  Design      │  │  Product     │  │  Leadership  ││
│  │  Systems     │  │  Strategy    │  │  & Mentorship││
│  │              │  │              │  │              ││
│  │  Figma       │  │  Analytics   │  │  Team Mgmt   ││
│  │  A11y        │  │  User Research│ │  Documentation││
│  │  Typography  │  │  Stakeholders│  │  Onboarding  ││
│  │  Component   │  │  Metrics     │  │  Hiring      ││
│  │   Libraries  │  │              │  │              ││
│  └──────────────┘  └──────────────┘  └──────────────┘│
│                                                        │
└────────────────────────────────────────────────────────┘

[Right sidebar]
○ 0.0m
○ +2.4m
● +4.8m Second Floor
○ +7.2m
○ +9.6m
```

**Specifications:**
- **Container:** max-width: 1200px
- **Padding:** 96px vertical
- **Background:** var(--cream) - slight differentiation from previous section

**Section Heading:**
- Same style as Featured Work
- "Structure & Systems" - plays into architectural metaphor

**Capability Cards:**
- **Grid:** 3 columns desktop, 2 columns tablet, 1 column mobile
- **Gap:** 24px
- **Card Background:** var(--warm-white)
- **Border:** 1px solid var(--warm-gray-200)
- **Border radius:** 4px (sharper than project cards - more technical)
- **Padding:** 24px
- **Min height:** 200px

**Card Content:**
```
Category Title
Work Sans 600, 18px, --text-primary

Skill List (each on new line)
Office Code Pro 400, 14px, --text-secondary
Each item preceded by "— " (em dash + space)
```

**Hover State:**
- Border: 1px solid --blueprint-blue
- Subtle background shift: var(--blueprint-blue-faint)
- No lift (more subtle than project cards)

**Technical Annotation (Optional Enhancement):**
- Small dimension-style label in corner: "SPEC-01", "SPEC-02", etc.
- Office Code Pro 400, 10px, --blueprint-blue
- Position: Top right, 8px padding

---

### SECTION 4: ABOUT + PHILOSOPHY (Elevation +7.2m)

**Layout:**
```
┌────────────────────────────────────────────────────────┐
│                                                        │
│                 About                                  │
│                 ═════                                  │
│                                                        │
│         From Architecture to Digital Products          │
│                                                        │
│    I graduated from Amherst College with a degree in   │
│    Computer Science and Architectural Studies — a      │
│    combination that shapes how I approach building.    │
│                                                        │
│    I see digital products as infrastructure. Just like │
│    city systems need to be accessible, maintainable,   │
│    and human-centered, so does software.               │
│                                                        │
│    Currently at The Atlantic, I build media            │
│    infrastructure that serves millions. Previously, I  │
│    worked at The New York Times on COVID-19 data and   │
│    interactive news tools.                             │
│                                                        │
│    Also: constraint enthusiast, subway map collector,  │
│    occasional runner.                                  │
│                                                        │
│         ┌─────────────────────────────────┐           │
│         │  "Constraints Drive Better      │           │
│         │   Design"                       │           │
│         │                                 │           │
│         │  I believe limitations — time,  │           │
│         │  budget, technical, access —    │           │
│         │  force better decisions and     │           │
│         │  elegant solutions.             │           │
│         │                                 │           │
│         │  Read more about this →         │           │
│         └─────────────────────────────────┘           │
│                                                        │
└────────────────────────────────────────────────────────┘

[Right sidebar]
○ 0.0m
○ +2.4m
○ +4.8m
● +7.2m Third Floor
○ +9.6m
```

**Specifications:**
- **Container:** max-width: 800px (narrower for readability)
- **Padding:** 96px vertical
- **Background:** var(--warm-white)
- **Text align:** Center for headline, left for body

**Section Heading:**
- Work Sans 600, 48px, centered
- Underline: 4px --burgundy-primary, centered, 80px wide

**Body Content:**
- **Typography:** Inter 400, 18px, --text-primary
- **Line height:** 1.7 (generous for reading)
- **Paragraph spacing:** 24px
- **Max width:** 65ch (optimal reading width)
- **Margin:** 0 auto (centered)

**Personality Line:**
- "Also: constraint enthusiast, subway map collector, occasional runner."
- Inter 400, 16px, --text-secondary
- Italic style
- Margin-top: 32px
- This humanizes without being unprofessional

**Philosophy Callout Box:**
- **Background:** var(--cream)
- **Border:** 1px solid var(--warm-gray-200)
- **Border-left:** 4px solid --burgundy-primary (accent bar)
- **Padding:** 32px
- **Border radius:** 4px
- **Margin:** 48px auto
- **Max width:** 600px

**Callout Content:**
```
Heading: "Constraints Drive Better Design"
Work Sans 600, 20px, --text-primary

Body: Philosophy explanation
Inter 400, 16px, --text-secondary, line-height: 1.6

Link: "Read more about this →"
Work Sans 500, 14px, --burgundy-primary
Links to blog post or external writing
```

---

### SECTION 5: CONTACT (Elevation +9.6m)

**Layout:**
```
┌────────────────────────────────────────────────────────┐
│                                                        │
│                 Let's Build Something                  │
│                 ═══════════════════                    │
│                                                        │
│     I'm currently exploring new opportunities in       │
│     product engineering, media infrastructure, and     │
│                    civic technology.                   │
│                                                        │
│                                                        │
│        [Download Resume]    [Email Me]                 │
│                                                        │
│                                                        │
│     ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐   │
│     │LinkedIn│  │ GitHub │  │ Twitter│  │  Email │   │
│     └────────┘  └────────┘  └────────┘  └────────┘   │
│                                                        │
│                                                        │
└────────────────────────────────────────────────────────┘

[Right sidebar]
○ 0.0m
○ +2.4m
○ +4.8m
○ +7.2m
● +9.6m Roof
```

**Specifications:**
- **Container:** max-width: 800px
- **Padding:** 96px vertical, 64px mobile
- **Background:** var(--cream)
- **Text align:** Center

**Heading:**
- Work Sans 600, 48px
- --text-primary
- Underline: 4px --burgundy-primary, centered, 200px wide

**Subtext:**
- Inter 400, 18px, --text-secondary
- Max width: 600px, centered
- Margin: 32px auto

**Primary CTAs:**
- Same button styling as hero
- Download Resume (primary style)
- Email Me (secondary style)
- 16px gap
- Margin: 48px auto

**Social Links:**
- **Layout:** Horizontal row, centered
- **Gap:** 16px
- **Each link:**
  - Border: 1px solid var(--warm-gray-200)
  - Padding: 16px 24px
  - Border radius: 4px
  - Background: var(--warm-white)
  - Typography: Work Sans 500, 14px, --text-primary
  - Icon + label (if using icons)

**Hover:**
- Border becomes --burgundy-primary
- Background: var(--warm-white) (no change)
- Text color: --burgundy-primary
- Lift 2px

---

### FOOTER (Foundation)

**Layout:**
```
┌────────────────────────────────────────────────────────┐
│                                                        │
│  Colophon                                              │
│  ────────                                              │
│                                                        │
│  Built with Astro, TypeScript, and curiosity.          │
│                                                        │
│  Typography: Work Sans (Open Foundry), Inter (Google   │
│  Fonts), Office Code Pro (Open Foundry)                │
│                                                        │
│  Design System: 8px grid, 12 columns, CSS variables    │
│                                                        │
│  Last updated: January 2026                            │
│                                                        │
│  © 2026 Dylan Momplaisir                               │
│                                                        │
└────────────────────────────────────────────────────────┘
```

**Specifications:**
- **Background:** var(--concrete-900) - dark, foundation metaphor
- **Text:** var(--warm-gray-200) - light text on dark
- **Padding:** 48px vertical, 32px horizontal
- **Typography:**
  - Heading: Work Sans 600, 14px, --warm-gray-100
  - Body: Office Code Pro 400, 12px, --warm-gray-200
  - Line height: 1.8
- **Max width:** 1200px, centered
- **Border top:** 1px solid rgba(255, 255, 255, 0.1)

**Content:**
- Technical specifications of the site itself
- Shows attention to craft
- Colophon tradition from print design

---

## 6. Elevation Sidebar (Fixed Right)

**Purpose:** Visual progress indicator showing which "floor" user is viewing

**Layout:**
```
[Fixed Right Position]
Right: 32px (desktop only, hidden on mobile)
Top: 50vh (vertically centered)
Transform: translateY(-50%)

┌──────┐
│      │
│ ●    │  0.0m   Ground
│ |    │
│ ○    │  +2.4m  First Floor
│ |    │
│ ○    │  +4.8m  Second Floor
│ |    │
│ ○    │  +7.2m  Third Floor
│ |    │
│ ○    │  +9.6m  Roof
│      │
└──────┘
```

**Specifications:**
- **Line:** Vertical, 2px wide, --blueprint-line color
- **Dots:**
  - 8px diameter circles
  - Active: filled --burgundy-primary
  - Inactive: border 2px --blueprint-line, transparent fill
- **Labels:**
  - Office Code Pro 400, 10px
  - Position: Right of dots
  - Opacity: 0 default, 1 on hover
  - Color: --text-secondary
- **Spacing:** 48px between dots

**Interaction:**
- Dots are clickable, smooth scroll to section
- Active dot determined by scroll position (IntersectionObserver)
- Transition between active states: 300ms ease

**Mobile:**
- Hidden below 768px width
- Replaced with simpler scroll progress bar at top

---

## 7. Navigation Bar

**Layout:**
```
[Sticky Top, Full Width]
┌────────────────────────────────────────────────────────┐
│  DM                          Work  About  Contact      │
└────────────────────────────────────────────────────────┘
```

**Specifications:**
- **Position:** Sticky, top: 0
- **Background:** var(--warm-white) with 95% opacity, backdrop-filter: blur(8px)
- **Border bottom:** 1px solid var(--warm-gray-200)
- **Height:** 64px
- **Padding:** 0 32px
- **Z-index:** 100

**Logo:**
- "DM" or "Dylan Momplaisir"
- Work Sans 600, 16px, --text-primary
- Left aligned

**Nav Links:**
- Work Sans 500, 14px, --text-secondary
- Right aligned
- Gap: 32px
- Hover: color becomes --burgundy-primary
- Active section: underline 2px --burgundy-primary

**Scroll Behavior:**
- 0-100px scroll: Full opacity, 8px shadow
- 100px+: Slight shadow increase for depth

**Mobile:**
- Hamburger menu (optional, or keep horizontal if space allows)
- Logo stays, links collapse into menu

---

## 8. Animation Details

### Page Load Sequence

```javascript
Timeline:
0ms:    Hero content starts fade in
100ms:  Name appears (fade + slide up 30px)
200ms:  Subtitle appears
300ms:  Body text appears
400ms:  CTAs appear
600ms:  Scroll indicator starts pulsing

Duration: 600ms per element
Easing: cubic-bezier(0.34, 1.56, 0.64, 1) - gentle spring
```

### Scroll-Triggered Animations

```javascript
// Using Intersection Observer
const observerOptions = {
  threshold: 0.3,  // Trigger when 30% visible
  rootMargin: '0px'
};

Each section:
- Fade in: opacity 0 → 1
- Slide up: transform translateY(20px) → translateY(0)
- Duration: 600ms
- Easing: cubic-bezier(0.4, 0.0, 0.2, 1)

Staggered children (project cards):
- First child: 0ms delay
- Second child: 150ms delay
- Third child: 300ms delay
```

### Hover Animations

**Project Cards:**
```css
transition: all 250ms cubic-bezier(0.4, 0.0, 0.2, 1);

/* Hover state */
transform: translateY(-4px);
box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
border-color: var(--burgundy-primary);

/* Blueprint overlay fade in */
.blueprint-overlay {
  transition: opacity 250ms ease;
  opacity: 0;
}
.card:hover .blueprint-overlay {
  opacity: 0.3;
}
```

**Buttons:**
```css
transition: all 200ms cubic-bezier(0.4, 0.0, 0.2, 1);

/* Hover */
transform: translateY(-2px);
box-shadow: 0 4px 12px rgba(144, 0, 32, 0.2);

/* Active/Click */
transform: translateY(0);
box-shadow: 0 2px 6px rgba(144, 0, 32, 0.15);
```

### Reduced Motion Support

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 9. Grid Visualization (Easter Egg)

**Trigger:** Press 'G' key

**Effect:**
```javascript
// Toggle grid visibility
document.addEventListener('keydown', (e) => {
  if (e.key === 'g' || e.key === 'G') {
    document.documentElement.classList.toggle('show-grid');
  }
});
```

**Grid Pattern (SVG or CSS):**
```css
.show-grid body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
    repeating-linear-gradient(
      0deg,
      var(--blueprint-line) 0px,
      var(--blueprint-line) 1px,
      transparent 1px,
      transparent 8px
    ),
    repeating-linear-gradient(
      90deg,
      var(--blueprint-line) 0px,
      var(--blueprint-line) 1px,
      transparent 1px,
      transparent 8px
    );
  opacity: 0.15;
  pointer-events: none;
  z-index: 9999;
  animation: gridFadeIn 300ms ease;
}

@keyframes gridFadeIn {
  from { opacity: 0; }
  to { opacity: 0.15; }
}
```

**Column Grid (12 columns):**
- Also visualized with vertical lines at column boundaries
- Different color: var(--burgundy-primary) at 0.08 opacity

---

## 10. Responsive Breakpoints

```css
/* Mobile First Approach */

/* Small phones */
@media (min-width: 320px) {
  /* Base styles - already mobile-optimized */
}

/* Large phones */
@media (min-width: 480px) {
  --grid-margin: var(--space-lg); /* 32px */
}

/* Tablets */
@media (min-width: 768px) {
  --grid-columns: 6; /* Reduce from 12 */
  --grid-margin: var(--space-xl); /* 48px */

  /* Project cards: 2 columns */
  .project-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Show elevation sidebar */
  .elevation-sidebar {
    display: block;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  --grid-columns: 12;
  --grid-margin: var(--space-xl); /* 48px */

  /* Project cards: 3 columns */
  .project-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Large desktop */
@media (min-width: 1440px) {
  /* Larger typography */
  --font-size-hero: 72px;
}
```

**Mobile Considerations:**
- Hero: Stack content vertically, reduce font sizes
- Project cards: Single column
- Capabilities: 2 columns → 1 column
- Elevation sidebar: Hidden, replaced with top progress bar
- Navigation: Consider hamburger menu (or keep horizontal if clean)
- Touch targets: Minimum 44px for all interactive elements

---

## 11. Performance Optimizations

### Font Loading Strategy
```html
<!-- Preconnect to font sources -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preconnect" href="https://open-foundry.com">

<!-- Load critical fonts with display: swap -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Work+Sans:wght@500;600&display=swap" rel="stylesheet">

<!-- Font-display: swap in CSS -->
@font-face {
  font-family: 'Office Code Pro';
  src: url('...') format('woff2');
  font-display: swap;
}
```

### Image Optimization
- Use Astro's `<Image>` component for automatic optimization
- WebP with JPEG fallback
- Lazy loading for project images (below fold)
- Placeholder blur for smooth loading

### Code Splitting
- Split animations into separate module (load after critical content)
- Grid visualization code loaded on demand (only when 'G' pressed)
- IntersectionObserver polyfill conditionally loaded

### Critical CSS
```astro
<style is:inline>
  /* Inline critical CSS for above-fold content */
  /* Typography, layout, hero section */
</style>

<link rel="stylesheet" href="/styles/main.css">
```

### Metrics Targets
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1
- **Total bundle size:** < 150KB (gzipped)

---

## 12. Accessibility Features

### Semantic HTML
```html
<header role="banner">
  <nav aria-label="Main navigation">
    <ul>
      <li><a href="#work">Work</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>

<main id="main-content">
  <section aria-labelledby="hero-heading">
    <h1 id="hero-heading">Dylan Momplaisir</h1>
  </section>
</main>
```

### Keyboard Navigation
- All interactive elements focusable
- Focus indicators: 2px solid --burgundy-primary offset 2px
- Skip to main content link (visually hidden, shows on focus)
- Escape key closes modals/menus
- Tab order follows visual order

### Screen Reader Considerations
- Proper heading hierarchy (h1 → h2 → h3, no skipping)
- Alt text for all images (project screenshots)
- aria-label for icon-only buttons
- aria-live regions for dynamic content (if any)
- Elevation sidebar: aria-label="Section navigation"

### Color Contrast
All text meets WCAG AA standards:
- --text-primary on --warm-white: 16.5:1 (AAA)
- --text-secondary on --warm-white: 7.8:1 (AA)
- --burgundy-primary on --warm-white: 8.2:1 (AA)
- Button text (white) on --burgundy-primary: 11.4:1 (AAA)

### Motion Sensitivity
- Honors prefers-reduced-motion
- All animations disabled if preference set
- Provides static, functional experience

---

## 13. Technical Implementation

### Astro Structure
```
src/
├── components/
│   ├── Hero.astro
│   ├── ProjectCard.astro
│   ├── CapabilityCard.astro
│   ├── AboutSection.astro
│   ├── ContactSection.astro
│   ├── Footer.astro
│   ├── Navigation.astro
│   └── ElevationSidebar.astro
│
├── layouts/
│   └── LandingPage.astro
│
├── pages/
│   └── index.astro
│
├── styles/
│   ├── global.css          # CSS reset, variables
│   ├── typography.css      # Font face declarations
│   ├── components.css      # Reusable component styles
│   └── animations.css      # Animation keyframes
│
└── scripts/
    ├── gridToggle.ts       # 'G' key grid visualization
    ├── scrollAnimations.ts # IntersectionObserver logic
    └── elevationNav.ts     # Sidebar scroll tracking
```

### CSS Variables Organization
```css
/* styles/global.css */
:root {
  /* ===== TYPOGRAPHY ===== */
  --font-display: 'Work Sans', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-mono: 'Office Code Pro', monospace;

  /* Font sizes */
  --text-xs: 12px;
  --text-sm: 14px;
  --text-base: 16px;
  --text-lg: 18px;
  --text-xl: 20px;
  --text-2xl: 24px;
  --text-3xl: 32px;
  --text-4xl: 48px;
  --text-5xl: 64px;

  /* ===== COLORS ===== */
  /* (as defined in section 2) */

  /* ===== SPACING ===== */
  /* (as defined in section 3) */

  /* ===== ANIMATION ===== */
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-smooth: cubic-bezier(0.4, 0.0, 0.2, 1);
  --duration-fast: 200ms;
  --duration-base: 250ms;
  --duration-slow: 600ms;
}
```

### Scroll Animation Script
```typescript
// scripts/scrollAnimations.ts
export function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');

          // Stagger children if they exist
          const children = entry.target.querySelectorAll('[data-stagger]');
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('is-visible');
            }, index * 150);
          });
        }
      });
    },
    { threshold: 0.3 }
  );

  document.querySelectorAll('[data-animate]').forEach(el => {
    observer.observe(el);
  });
}
```

---

## 14. Content Strategy

### Project Selection (Top 3 for Landing Page)

**1. The Atlantic - Audio Infrastructure**
- **Why:** Current role, biggest impact (2x play rates)
- **Tech:** React, TypeScript, GraphQL, Next.js
- **Impact:** "Nearly doubled article play rates site-wide"
- **Image:** Audio player UI or podcast landing page screenshot

**2. Amherst Student - Digital Transformation**
- **Why:** Incredible growth metric (733% readership increase)
- **Tech:** Next.js, ML for archival retrieval, CMS
- **Impact:** "+733% readership (1,200 → 10,000 users)"
- **Image:** Website screenshot or data dashboard

**3. NYT COVID-19 Data Scraper**
- **Why:** High-impact civic work, technical complexity
- **Tech:** JavaScript, Python, AWS/GCP migration
- **Impact:** "Triaged 30+ public health data scrapers"
- **Image:** Data visualization or scraper dashboard

**Alternatives for rotation:**
- VOCAP (entrepreneurship story)
- Rally (civic engagement)
- NASA Robots (hardware + software)

### Copy Tone & Voice

**Principles:**
- **Active voice:** "I build" not "I have built"
- **Specific metrics:** "+733%" not "significant increase"
- **Conversational but professional:** "Also: subway map collector" not "Hobbies include..."
- **Systems thinking:** "infrastructure", "platform", "architecture"
- **Human-centered:** "serve millions", "impact users", "support newsrooms"

**Avoid:**
- Buzzwords: "synergy", "disrupt", "paradigm shift"
- Vague claims: "passionate", "detail-oriented" (show, don't tell)
- Overused tech phrases: "rockstar", "ninja", "guru"

---

## 15. Development Phases

### Phase 1: Foundation (Days 1-2)
- [ ] Set up typography system (font loading, variables)
- [ ] Implement color system (CSS variables)
- [ ] Build grid system (8px baseline, 12 columns)
- [ ] Create base layout (container, spacing utilities)
- [ ] Set up navigation component
- [ ] Build footer component

### Phase 2: Hero Section (Day 3)
- [ ] Hero layout and typography
- [ ] CTA buttons with hover states
- [ ] Page load animations
- [ ] Scroll indicator
- [ ] Mobile responsive adjustments

### Phase 3: Content Sections (Days 4-5)
- [ ] Featured Work section
- [ ] Project cards with hover states
- [ ] Blueprint overlay effect
- [ ] Capabilities section
- [ ] Capability cards
- [ ] About section with callout box
- [ ] Contact section

### Phase 4: Interactive Features (Day 6)
- [ ] Elevation sidebar (scroll tracking)
- [ ] Smooth scroll navigation
- [ ] Grid visualization toggle ('G' key)
- [ ] Scroll-triggered animations (IntersectionObserver)
- [ ] Sticky navigation scroll behavior

### Phase 5: Polish & Optimization (Day 7)
- [ ] Performance audit (Lighthouse)
- [ ] Accessibility testing (axe, screen reader)
- [ ] Cross-browser testing
- [ ] Mobile responsive refinement
- [ ] Animation timing adjustments
- [ ] Content proofreading

### Phase 6: Content & Deploy (Day 8)
- [ ] Add real project content
- [ ] Optimize images
- [ ] Create project stubs for additional work
- [ ] Write About section narrative
- [ ] Set up deployment (Vercel/Netlify)
- [ ] Test in production

---

## 16. Open Questions for Dylan

Before implementation, need decisions on:

1. **Typography Final Choice:**
   - Work Sans + Inter (recommended)
   - OR Poppins + Inter (more geometric)
   - OR something else from Open Foundry?

2. **Hero Copy:**
   - Use the resume summary ("Leveraging technology to tell stories...")?
   - OR focus on media infrastructure angle?
   - OR emphasize architecture + tech intersection?

3. **Project Images:**
   - Do you have screenshots for The Atlantic work?
   - Amherst Student website screenshots available?
   - NYT work - can you share?
   - Need to create placeholders?

4. **About Section:**
   - How personal? (current draft includes "subway map collector" - okay?)
   - Photo: Do you have a professional headshot?
   - Constraint philosophy: Link to existing writing or create new?

5. **Contact Preferences:**
   - Email address to display: momplaisirdylan@gmail.com?
   - Social links: LinkedIn (yes), GitHub (?), Twitter (?), others?
   - Resume: PDF available or need to create?

6. **Domain:**
   - Deploy to new-site subdirectory first?
   - OR replace main dmomplaisir.com?
   - OR separate domain?

7. **Timeline:**
   - Launch target date?
   - Any urgent needs (job applications, etc.)?

8. **Scope Adjustment:**
   - Start with landing page only?
   - OR also build project detail pages in parallel?
   - OR create stubs for other pages (blog, full project list)?

---

## 17. Success Metrics

How we'll know the landing page is working:

### Qualitative:
- [ ] Distinctive visual identity (doesn't look like "another tech portfolio")
- [ ] Clear value proposition (visitor knows what you do in <5 seconds)
- [ ] Professional + approachable balance (not corporate, not casual)
- [ ] Architectural metaphor feels authentic (not gimmicky)
- [ ] Mobile experience is excellent (not just "responsive")

### Quantitative:
- [ ] Lighthouse Performance: >90
- [ ] Lighthouse Accessibility: 100
- [ ] Lighthouse Best Practices: 100
- [ ] Lighthouse SEO: >90
- [ ] Page load (LCP): <2.5s on 3G
- [ ] Bundle size: <150KB gzipped
- [ ] Zero accessibility violations (axe audit)

### User Testing (if time):
- [ ] 5-second test: Can users describe what you do?
- [ ] Navigation test: Can users find projects, contact, resume?
- [ ] First impression: "Professional", "thoughtful", "distinctive"?

---

## Summary: What We're Building

**A warm minimalist landing page with architectural precision:**

- Clean, sophisticated typography (Work Sans + Inter)
- Warm neutral color palette with blueprint technical accents
- Visible 8px grid system (togglable Easter egg)
- Elevation metaphor for section navigation
- Gentle scroll-triggered animations
- Blueprint overlays on hover (technical depth on interaction)
- Generous white space, excellent readability
- Mobile-first, accessible, performant
- Content hierarchy optimized for hiring managers
- Personality touches without sacrificing professionalism

**The experience:**
1. Visitor lands → immediately understands "Product Engineer, Media Infrastructure"
2. Scrolls → sees 3 compelling projects with impact metrics
3. Explores → learns about your unique architecture + tech background
4. Connects → easy access to resume, email, LinkedIn

**What makes it distinctive:**
- Architectural elevation metaphor (authentic to your background)
- Warm minimalism (not cold tech, not overly designed)
- Blueprint technical depth (reveals on interaction)
- Systems thinking visible (grid, structure, specifications)
- Curious & thoughtful tone (not aggressive, not passive)

**Timeline:** ~8 days from start to launch-ready

---

Ready to proceed? Any questions or adjustments before we start building?
