# Prototypes Components

This directory contains modular, reusable Astro components for interactive design prototypes. Each component is self-contained with its own styles and scripts, designed to be production-ready and accessible.

## Components

### TextLeveling.astro (#18)
Characters "rise" into view with staggered timing, creating a construction/building metaphor.

**Props:**
- `text: string` - The text content to animate
- `class?: string` - Optional CSS class

**Features:**
- Scroll-triggered reveal with Intersection Observer
- Staggered character animations
- Respects `prefers-reduced-motion`

**Usage:**
```astro
<TextLeveling text="Structural Integrity" />
```

---

### VariableFont.astro (#17)
Variable font that responds to hover and scroll position with smooth weight and width transitions.

**Props:**
- `text: string` - Display text
- `class?: string` - Optional CSS class
- `showHint?: boolean` - Show interaction hint (default: true)

**Features:**
- Scroll-based font variation
- Hover state overrides
- Performance optimized with RAF

**Usage:**
```astro
<VariableFont text="Fluidity" showHint={true} />
```

---

### HiddenLayers.astro (#20)
Technical annotations revealed on hover, simulating architectural markup.

**Props:**
- `class?: string` - Optional CSS class

**Features:**
- Customizable via slot for main content
- Predefined annotation positions
- Staggered reveal animations

**Usage:**
```astro
<HiddenLayers>
  <p>Your content here...</p>
</HiddenLayers>
```

---

### SkillsGraph.astro (#6)
Interactive skill network with dynamic SVG connection visualization.

**Props:**
- `class?: string` - Optional CSS class

**Features:**
- Hover/focus to reveal connections
- Keyboard accessible
- Responsive grid layout
- SVG line animations

**Usage:**
```astro
<SkillsGraph />
```

---

### BlueprintLines.astro (#3)
Animated SVG border that draws itself in like architectural blueprints.

**Props:**
- `class?: string` - Optional CSS class
- `label?: string` - Blueprint label (default: "FIG 2.4 - COMPONENT SPEC")

**Features:**
- Scroll-triggered SVG path animation
- Technical annotation elements
- Customizable via slot

**Usage:**
```astro
<BlueprintLines label="FIG 3.1 - SYSTEM DESIGN">
  <h3>Title</h3>
  <p>Content...</p>
</BlueprintLines>
```

---

### SolariBoard.astro (#4)
Split-flap display animation inspired by airport departure boards.

**Props:**
- `initialValue?: string` - Initial display value (default: "2026")
- `class?: string` - Optional CSS class
- `showButton?: boolean` - Show update button (default: true)

**Features:**
- Mechanical flip animations
- Staggered digit updates
- Programmatic control via JS API

**Usage:**
```astro
<SolariBoard initialValue="2026" showButton={true} />
```

**JS API:**
```js
const board = new SolariBoard(containerElement);
board.updateValue("1984"); // Programmatically update
```

---

## Design Principles

1. **Self-contained**: Each component includes its own styles and scripts
2. **Accessible**: Keyboard navigation, ARIA labels, reduced motion support
3. **Performance**: RAF for animations, passive scroll listeners, Intersection Observer
4. **Responsive**: Mobile-friendly with breakpoint adjustments
5. **Themeable**: Uses design system variables from `variables.css`

## Astro Integration

All components use:
- Scoped styles (no global pollution)
- `astro:page-load` events for SPA-like behavior
- TypeScript for type safety
- Proper script lifecycle management

## Browser Support

- Modern evergreen browsers (Chrome, Firefox, Safari, Edge)
- ES6+ required
- IntersectionObserver API (widely supported)
- Variable fonts (Editorial Old) for typography

## Future Enhancements

- [ ] View Transitions API integration
- [ ] More customization props
- [ ] Animation timeline control
- [ ] Theme variants (dark/light modes)
- [ ] Export as standalone library
