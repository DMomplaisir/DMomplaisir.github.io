/**
 * Navigation functionality
 * Handles mobile menu toggle and other navigation interactions
 */

document.addEventListener('DOMContentLoaded', function() {
  // Mobile navigation toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function() {
      // Toggle the active class on the navigation links
      navLinks.classList.toggle('active');
      
      // Update ARIA attributes for accessibility
      const isExpanded = navLinks.classList.contains('active');
      navToggle.setAttribute('aria-expanded', isExpanded);
      
      // Optional: prevent body scrolling when menu is open on mobile
      if (window.innerWidth <= 768) {
        document.body.style.overflow = isExpanded ? 'hidden' : '';
      }
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
      const isClickInside = navToggle.contains(event.target) || navLinks.contains(event.target);
      
      if (!isClickInside && navLinks.classList.contains('active') && window.innerWidth <= 768) {
        navLinks.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
    
    // Close mobile menu when window is resized above mobile breakpoint
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
    
    // Initialize ARIA attributes
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-controls', 'nav-links');
    navLinks.id = 'nav-links';
  }
});
