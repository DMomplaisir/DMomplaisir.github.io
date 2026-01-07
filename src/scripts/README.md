# Solari Board Animation

## Overview
A JavaScript class that simulates the mechanical split-flap displays (Solari boards) found in NYC train stations like Penn Station and Grand Central Terminal.

## Features
- Character-by-character flip animation
- Random ASCII character cycling before settling on target character
- Configurable timing and behavior
- Auto-rotation through multiple text roles
- Pause/resume on click
- Accessibility support with reduced motion
- No external dependencies

## Usage

```javascript
import SolariBoard from '../scripts/solari-board.js';

// Initialize with default options
const board = new SolariBoard('element-id');

// Initialize with custom options
const board = new SolariBoard('element-id', {
  roles: [
    'ENGINEER WHO BUILDS STUFF',
    'PM WHO SHIPS PRODUCTS',
    'CREATIVE WHO CODES',
    'NYC KID WHO LOVES TRANSIT'
  ],
  flipDuration: 50,        // ms per character flip
  flipIterations: 8,       // random flips before settling
  staggerDelay: 30,        // delay between starting each character
  roleChangeInterval: 4000, // ms between role changes
  pauseOnHover: true       // enable click to pause/resume
});
```

## Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `roles` | `string[]` | See defaults | Array of text strings to cycle through |
| `flipDuration` | `number` | `50` | Milliseconds per character flip animation |
| `flipIterations` | `number` | `8` | Number of random characters before settling |
| `staggerDelay` | `number` | `30` | Delay (ms) between starting each character |
| `roleChangeInterval` | `number` | `4000` | Time (ms) between switching roles |
| `pauseOnHover` | `boolean` | `true` | Allow click to pause/resume animation |

## Methods

- `nextRole()` - Manually trigger next role change
- `togglePause()` - Pause or resume auto-rotation
- `destroy()` - Clean up timers and DOM
- `startAutoPlay()` - Start automatic role rotation
- `stopAutoPlay()` - Stop automatic role rotation

## Animation Details

The animation creates a mechanical feel by:
1. Breaking text into individual character spans
2. Staggering the start time for each character
3. Cycling through random ASCII characters (A-Z, 0-9, symbols)
4. Using a scaleY transform to simulate the flip motion
5. Settling on the final character after N iterations

## CSS Requirements

```css
.solari-text {
  font-family: var(--font-mono);
  font-size: var(--text-2xl);
  color: var(--color-terminal-green);
  text-align: center;
}

.solari-char {
  display: inline-block;
  min-width: 0.6em;
  text-align: center;
  transition: transform 50ms ease-out;
}
```

## Browser Compatibility

- Modern browsers with ES6 support
- Uses: Promises, async/await, classes
- Respects `prefers-reduced-motion` media query

## Performance

- Efficient DOM updates (individual character spans)
- Uses `setInterval` and `setTimeout` (no requestAnimationFrame needed)
- Automatic cleanup to prevent memory leaks
- Minimal reflows (inline-block with fixed widths)
