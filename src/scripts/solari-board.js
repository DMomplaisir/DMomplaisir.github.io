/**
 * Solari Board Animation
 * NYC Subway-style split-flap display effect
 *
 * Simulates the mechanical split-flap displays found in Penn Station and Grand Central
 * Characters flip through random ASCII chars before settling on the target character
 * Creates a cascading, staggered animation effect
 */

class SolariBoard {
  constructor(elementId, options = {}) {
    this.element = document.getElementById(elementId);
    if (!this.element) {
      console.error(`Solari Board: Element with id "${elementId}" not found`);
      return;
    }

    // Configuration
    this.roles = options.roles || [
      'ENGINEER WHO BUILDS STUFF',
      'PM WHO SHIPS PRODUCTS',
      'CREATIVE WHO CODES',
      'NYC KID WHO LOVES TRANSIT'
    ];

    this.flipDuration = options.flipDuration || 50; // ms per character flip
    this.flipIterations = options.flipIterations || 8; // random flips before settling
    this.staggerDelay = options.staggerDelay || 30; // delay between starting each character
    this.roleChangeInterval = options.roleChangeInterval || 4000; // ms between role changes
    this.pauseOnHover = options.pauseOnHover !== false;

    // ASCII characters to cycle through (visible ASCII, no spaces)
    this.charPool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*-+=?';

    // State
    this.currentRoleIndex = 0;
    this.isAnimating = false;
    this.isPaused = false;
    this.autoPlayTimer = null;
    this.characterSpans = [];

    // Initialize
    this.init();
  }

  init() {
    // Set initial text
    this.element.textContent = this.roles[0];
    this.createCharacterSpans();

    // Start autoplay after initial delay
    setTimeout(() => {
      this.startAutoPlay();
    }, 2000);

    // Optional: pause on hover/click
    if (this.pauseOnHover) {
      this.element.addEventListener('click', () => this.togglePause());
      this.element.style.cursor = 'pointer';
      this.element.title = 'Click to pause/resume';
    }
  }

  createCharacterSpans() {
    // Wrap each character in a span for individual animation
    const text = this.element.textContent;
    this.element.innerHTML = '';
    this.characterSpans = [];

    for (let i = 0; i < text.length; i++) {
      const span = document.createElement('span');
      span.textContent = text[i];
      span.className = 'solari-char';
      span.style.display = 'inline-block';
      span.style.minWidth = text[i] === ' ' ? '0.5em' : '0.6em';
      span.style.textAlign = 'center';
      this.element.appendChild(span);
      this.characterSpans.push(span);
    }
  }

  async animateToRole(newRoleIndex) {
    if (this.isAnimating) return;

    this.isAnimating = true;
    const targetText = this.roles[newRoleIndex];
    const currentText = this.getCurrentText();
    const maxLength = Math.max(targetText.length, currentText.length);

    // Pad shorter text with spaces
    const paddedTarget = targetText.padEnd(maxLength, ' ');
    const paddedCurrent = currentText.padEnd(maxLength, ' ');

    // Create/update character spans if needed
    if (this.characterSpans.length !== maxLength) {
      this.element.textContent = paddedCurrent;
      this.createCharacterSpans();
    }

    // Animate each character with stagger
    const promises = [];
    for (let i = 0; i < maxLength; i++) {
      const delay = i * this.staggerDelay;
      const promise = this.animateCharacter(i, paddedTarget[i], delay);
      promises.push(promise);
    }

    await Promise.all(promises);

    // Clean up trailing spaces
    this.element.textContent = targetText;
    this.createCharacterSpans();

    this.currentRoleIndex = newRoleIndex;
    this.isAnimating = false;
  }

  animateCharacter(index, targetChar, delay) {
    return new Promise((resolve) => {
      setTimeout(async () => {
        const span = this.characterSpans[index];
        if (!span) {
          resolve();
          return;
        }

        // If target is space, just fade it
        if (targetChar === ' ') {
          span.style.opacity = '0';
          setTimeout(resolve, this.flipDuration);
          return;
        }

        span.style.opacity = '1';

        // Skip animation if already correct character
        if (span.textContent === targetChar) {
          resolve();
          return;
        }

        // Flip through random characters
        let iteration = 0;
        const flipInterval = setInterval(() => {
          if (iteration < this.flipIterations) {
            // Random character
            const randomChar = this.charPool[Math.floor(Math.random() * this.charPool.length)];
            span.textContent = randomChar;

            // Add flip effect
            span.style.transform = 'scaleY(0.3)';
            setTimeout(() => {
              span.style.transform = 'scaleY(1)';
            }, this.flipDuration / 2);

            iteration++;
          } else {
            // Final character
            span.textContent = targetChar;
            span.style.transform = 'scaleY(0.3)';
            setTimeout(() => {
              span.style.transform = 'scaleY(1)';
            }, this.flipDuration / 2);

            clearInterval(flipInterval);
            resolve();
          }
        }, this.flipDuration);
      }, delay);
    });
  }

  getCurrentText() {
    return this.characterSpans.map(span => span.textContent).join('');
  }

  nextRole() {
    if (this.isPaused || this.isAnimating) return;

    const nextIndex = (this.currentRoleIndex + 1) % this.roles.length;
    this.animateToRole(nextIndex);
  }

  startAutoPlay() {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
    }

    this.autoPlayTimer = setInterval(() => {
      if (!this.isPaused) {
        this.nextRole();
      }
    }, this.roleChangeInterval);
  }

  stopAutoPlay() {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
      this.autoPlayTimer = null;
    }
  }

  togglePause() {
    this.isPaused = !this.isPaused;

    // Visual feedback
    if (this.isPaused) {
      this.element.style.opacity = '0.7';
      this.element.title = 'Click to resume';
    } else {
      this.element.style.opacity = '1';
      this.element.title = 'Click to pause';
    }
  }

  destroy() {
    this.stopAutoPlay();
    if (this.element) {
      this.element.innerHTML = '';
    }
  }
}

// ES6 export for Astro/Vite
export default SolariBoard;

// Make available globally for direct browser usage
if (typeof window !== 'undefined') {
  window.SolariBoard = SolariBoard;
}
