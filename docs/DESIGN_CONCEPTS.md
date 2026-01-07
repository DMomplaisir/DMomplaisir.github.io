# Landing Page Design Concepts
## For Dylan Momplaisir Portfolio

Based on research into:
- Urbanism + technology aesthetics
- Personal branding for career transitions
- Reference portfolios (Devika Kohli, Rachel Chen)
- Your preferences: Architecture & Buildings theme, Curious & Thoughtful tone, Moderate & Purposeful motion

---

## Concept 1: "Structural Layers"
**Tagline:** Architecture as metaphor for thoughtful engineering

### Visual Direction
Inspired by architectural section drawings that reveal how buildings work from foundation to roof. Content appears in horizontal "floors" that reveal on scroll, each layer building upon the last.

### Typography
- **Display:** Instrument Serif (like Devika's) - contemporary, architectural elegance
- **Body:** IBM Plex Sans - technical warmth, excellent readability
- **Mono:** JetBrains Mono - for code snippets and technical specs

### Color Palette
```css
/* Architectural Materials */
--concrete-light: #FAFCFD;    /* Background - almost white */
--concrete-gray: #E8EBED;     /* Subtle dividers */
--steel-dark: #2C3E50;        /* Primary text */
--steel-medium: #607D8B;      /* Secondary text */
--accent-brass: #B8860B;      /* Interactive elements - warm metal */
--glass-blue: rgba(14, 165, 233, 0.08); /* Subtle overlays */
```

### Layout Approach
- **Hero:** Full viewport with large serif headline, minimal subtext
- **Layers reveal:** Each section enters like a floor plan unfolding
- **Project cards:** Large, immersive cards (like Devika) with architectural framing
- **Grid system:** 12-column, exposed grid lines visible on hover (Easter egg: press 'G')

### Key Animations
- **Scroll-triggered layer reveals:** Sections fade + slide up (30px) on scroll intersection
- **Staggered content:** Each project card enters with 150ms delay
- **Material transitions:** Subtle glass/transparency effects on hover
- **Spring physics:** `cubic-bezier(0.34, 1.56, 0.64, 1)` for bouncy-but-refined feel

### Distinctive Features
1. **Section markers:** Vertical axis showing "floors" - Ground, First Floor (About), Second Floor (Projects), Roof (Contact)
2. **Material callouts:** Hover on projects reveals "specifications" (tech stack, year, impact)
3. **Blueprint overlay:** Toggle blueprint grid view showing underlying structure
4. **Foundation footer:** Darkened "basement" section with colophon, credits

### Content Structure
```
Hero (Ground Level):
"Dylan Momplaisir"
"Building digital infrastructure that makes cities more livable"
[Scroll indicator: ↓ Explore the floors]

First Floor (About):
"The Bridge Between Urbanism and Code"
[Narrative about transition, constraint philosophy]

Second Floor (Featured Work):
[3 large project cards with architectural framing]
AMHStudent, Amherst Student, NYT Spotify

Third Floor (Capabilities):
"Structure & Systems"
[Grid of skills organized by layer: Foundation (Backend), Structure (Frontend), Finishing (Design)]

Roof (Contact):
"Let's Build Something"
[Email, LinkedIn, GitHub, Resume]

Basement (Footer):
[Colophon: Built with Astro, Typography credits, Last updated]
```

### Why This Works
- Architectural metaphor authentic to your background
- Minimalist but distinctive (not another dark portfolio)
- Gentle animations create flow without spectacle
- Professional + thoughtful tone
- Content hierarchy clear from first glance

---

## Concept 2: "Material Study"
**Tagline:** Layers of craft, like architectural materials

### Visual Direction
Inspired by architectural material boards - concrete, glass, steel, wood. Each section uses a different "material" texture and feel, creating visual variety within minimalist constraints.

### Typography
- **Display:** Jost - geometric Bauhaus-inspired, architectural precision
- **Body:** IBM Plex Sans - consistent across all materials
- **Mono:** IBM Plex Mono - pairs with Sans family

### Color Palette
```css
/* Material Palette - Each section has material identity */
--concrete: #F5F5F5;          /* Hero/Background */
--glass: rgba(255,255,255,0.9); /* Overlays */
--steel: #37474F;             /* Dark sections */
--brass-accent: #D4AF37;      /* CTAs and links */
--wood-warm: #8D6E63;         /* Optional accent */
--marble-white: #FFFEF9;      /* Alternative bg */
```

### Layout Approach
- **Full-bleed sections:** Each "material" fills viewport
- **Material transitions:** Scroll between concrete → glass → steel sections
- **Frosted glass cards:** Projects appear on semi-transparent cards
- **Textured backgrounds:** Subtle noise/grain for material feel

### Key Animations
- **Material transitions:** Cross-fade with scale (0.98 → 1.0) between sections
- **Glass refraction:** Blur increase on hover for frosted effect
- **Grain animation:** Subtle animated noise texture (very gentle, 2% opacity)
- **Layered parallax:** Text moves slightly faster than background (subtle depth)

### Distinctive Features
1. **Material switcher:** Nav shows material icons (concrete, glass, steel)
2. **Texture overlays:** Each section has subtle material texture (concrete grain, glass reflection)
3. **Depth through layers:** Overlapping panels create architectural depth
4. **Material specifications:** Each project tagged with "material properties" (tech, timeline, impact)

### Content Structure
```
Concrete Section (Hero):
Raw, solid foundation
"Dylan Momplaisir"
"Systems thinker. Full-stack builder. Urban technologist."

Glass Section (Process):
Transparent methodology
"How I Work: Research → Design → Build → Measure"
[Process diagrams with glass aesthetic]

Steel Section (Projects):
Strong, structural work
[Dark section with light text]
[3 featured projects with steel-blue accents]

Wood Section (About):
Warm, human element
[Personal story, constraint philosophy]
[Warmer tones, more conversational]

Foundation (Footer):
Technical specifications
[Built with X, Typography: Y, Updated: Z]
```

### Why This Works
- Architectural material metaphor sophisticated and unique
- Visual variety within minimalist framework
- Material transitions create narrative flow
- Aligns with "curious & thoughtful" tone
- Shows systems thinking through material organization

---

## Concept 3: "Elevation Grid"
**Tagline:** Precision and clarity, like architectural elevations

### Visual Direction
Inspired by architectural elevation drawings - flat, precise, measured. Strong horizontal lines (like floor plates), visible grid system, technical precision. Most minimal of all concepts.

### Typography
- **Display:** Archivo - designed for urban signage, strong geometric
- **Body:** Geist Sans (like Rachel Chen) - modern, tech-forward
- **Mono:** JetBrains Mono - technical specifications

### Color Palette
```css
/* Elevation Palette - Stark and precise */
--paper-white: #FAFCFD;       /* Background */
--line-gray: #E5E7EB;         /* Grid lines */
--text-black: #111827;        /* Primary text */
--text-gray: #6B7280;         /* Secondary text */
--elevation-blue: #0EA5E9;    /* Accent - technical drawing blue */
--dimension-red: #DC2626;     /* Optional accent - dimension lines */
```

### Layout Approach
- **Strict grid:** 8px baseline, 12-column layout
- **Horizontal sections:** Strong horizontal divisions (like floor plates)
- **Grid always visible:** Light grid lines throughout (not Easter egg, permanent design element)
- **Measurement annotations:** Dimension-style markers showing scroll progress

### Key Animations
- **Snap scrolling:** Sections snap to floor plates (optional, not required)
- **Dimension line drawing:** SVG line animations showing relationships
- **Grid emergence:** Grid fades in on page load (0 → 15% opacity, 1s)
- **Precision transitions:** Linear timing, no bounce - architectural precision

### Distinctive Features
1. **Visible grid:** Permanent light grid (3% opacity) showing 8px baseline
2. **Dimension lines:** Project metrics shown as architectural dimension callouts
3. **Elevation markers:** Vertical sidebar showing elevation (0.0m, +2.4m, +4.8m for sections)
4. **Technical annotations:** Skills and tools shown as elevation notes with leader lines
5. **Scale indicator:** Footer shows "Scale: 1:1" (cheeky reference to responsive design)

### Content Structure
```
Elevation 0.0m (Hero):
"Dylan Momplaisir — Full-Stack Engineer"
"Building technology for urban systems"
[Grid background, single line of dimension markers]

Elevation +2.4m (Selected Work):
[3 projects in elevation view]
[Each project card has dimension annotations]
"AMHStudent Portal — Tech: React, Impact: +45% task completion"

Elevation +4.8m (Capabilities):
[Grid of skills with dimension callouts]
"Frontend — React, TypeScript, Astro"
"Backend — Node, Python, APIs"
"Design — Figma, Design Systems"

Elevation +7.2m (About):
"The Intersection of Urbanism and Technology"
[Story about constraint philosophy]

Ground Level (Footer):
"Scale: 1:1 | Built with Astro + TypeScript"
[Technical specifications in elevation note style]
```

### Why This Works
- Most minimal and distinctive concept
- Architectural elevation metaphor authentic and unique
- Grid system visible reinforces systems thinking
- Very clean, professional, technical
- Gentle animations (precision over spectacle)
- Excellent for developer/engineer positioning

---

## Concept 4: "Blueprint & Light"
**Tagline:** Technical depth with human warmth

### Visual Direction
Hybrid approach: blueprint technical precision meets warm, inviting light. Combines the best of minimalist portfolios (Devika/Rachel) with architectural blueprint aesthetic. Not dark mode, not pure white - a warm neutral with technical overlays.

### Typography
- **Display:** Instrument Serif - elegant, contemporary (like Devika)
- **Body:** IBM Plex Sans - technical warmth
- **Technical:** Archivo Narrow - for labels, captions, annotations

### Color Palette
```css
/* Blueprint meets Natural Light */
--warm-white: #FFFEF9;        /* Warm paper background */
--cream: #F4F1E8;             /* Subtle sections */
--blueprint-blue: rgba(14, 116, 233, 0.06); /* Very subtle blue tint */
--charcoal: #2C3E50;          /* Primary text */
--warm-gray: #6B7280;         /* Secondary text */
--accent-burgundy: #900020;   /* Your existing burgundy - keep brand consistency */
--blueprint-line: rgba(14, 116, 233, 0.15); /* Grid lines when visible */
```

### Layout Approach
- **Generous white space** (like Devika/Rachel)
- **Large serif headlines** with technical annotations
- **Blueprint overlay toggle:** Optional grid view
- **Card-based projects** with warm shadows (not harsh blacks)
- **Warm, inviting** overall feel with technical depth available on interaction

### Key Animations
- **Staggered entrance:** Projects fade + slide up with 150ms delays (like Devika)
- **Smooth springs:** `cubic-bezier(0.34, 1.56, 0.64, 1)` for interactive elements
- **Blueprint reveal:** Hover on projects reveals technical grid overlay
- **Warmth + precision:** Animations feel human, not mechanical

### Distinctive Features
1. **Dual nature:** Warm/human on surface, technical depth on interaction
2. **Blueprint annotations:** Hover reveals technical specs in blueprint style
3. **Personality injection:** Like Devika's cheesecake - add human detail
4. **Warm shadows:** `box-shadow: 0 4px 24px rgba(44, 62, 80, 0.08)` - soft, not harsh
5. **Technical toggle:** 'B' key toggles blueprint grid overlay

### Content Structure
```
Hero:
"Dylan Momplaisir"
[Large Instrument Serif]
"I build digital infrastructure for urban systems — with research, design, and code."
[Personality touch: "Also: constraint enthusiast, subway map collector, [third thing]"]
[CTAs: "View Work" | "Download Resume"]

Featured Work:
[3 large cards, warm shadows, immersive images]
On hover: Blueprint grid overlay appears with specs
- AMHStudent Portal
  [Specs appear: React, TypeScript, +45% improvement, 2024]

Capabilities:
"Structure & Systems"
[Grid layout with warm cards]
Frontend | Backend | Design | Research
[Each card has icon + brief description]

About:
"From Urban Planning to Digital Products"
[Narrative about bridge between urbanism and technology]
[Photo: Professional but warm, not corporate stiff]

Philosophy:
"Constraints Drive Better Design"
[Quote card with blueprint line accent]
[Link to blog post or longer writing]

Contact:
"Let's Build Something"
[Email, LinkedIn, GitHub prominently displayed]
[Resume download button]

Footer:
"Built with Astro, TypeScript, and curiosity"
[Colophon: Typography credits, Last updated]
```

### Why This Works
- **Best of both worlds:** Warm minimalism (like Devika/Rachel) + architectural depth (your unique angle)
- **Approachable but technical:** Shows engineering chops without coldness
- **Personality + professionalism:** Human details balanced with polish
- **Urbanism authentic:** Blueprint references without being gimmicky
- **Gentle animations:** Moderate & purposeful (matches your preference)
- **Curious & thoughtful tone:** Serif + warm colors + narrative structure

---

## Recommended Concept

Based on your preferences and research findings:

**🏆 Concept 4: "Blueprint & Light"**

**Why:**
1. ✅ **Minimalist** - generous white space like Devika/Rachel
2. ✅ **Architecture theme** - blueprint aesthetic authentic to urbanism
3. ✅ **Curious & thoughtful tone** - warm colors, serif typography, narrative structure
4. ✅ **Moderate & purposeful motion** - gentle spring animations, not aggressive
5. ✅ **Career-focused** - balances approachability (warm) with technical depth (blueprint)
6. ✅ **Distinctive** - unique in tech portfolio space, memorable
7. ✅ **Your brand** - keeps burgundy accent, fits existing content structure

**Alternative if you want MORE minimal:**
**Concept 3: "Elevation Grid"** - most technically precise, excellent for pure engineer positioning

**Alternative if you want MORE architectural:**
**Concept 1: "Structural Layers"** - strongest architectural metaphor with floor system

---

## Next Steps

1. **Choose a concept** (or blend elements from multiple)
2. **Refine messaging** based on personal branding research
3. **Build in Astro** with careful attention to:
   - Typography implementation
   - Animation performance
   - Accessibility (reduced motion)
   - Mobile responsiveness
4. **Add personality touches** - the humanizing details that make you memorable
5. **Optimize for hiring managers** - clear value prop, easy scanning, contact visibility

Let me know which direction resonates and I'll start building!
