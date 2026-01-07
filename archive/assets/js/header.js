/**
 * Header behavior
 * Handles header collapse/expand on scroll and adjusts content padding
 */

document.addEventListener('DOMContentLoaded', function() {
  // DOM elements
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  
  // Configuration
  const scrollThreshold = 30;
  const transitionDuration = 300; // ms, should match CSS transition time
  const fixedContentPadding = 20; // px
  
  // Page type detection
  const isHomePage = document.body.classList.contains('home-page');
  
  // Scroll handling variables
  let lastScrollTop = 0;
  let isThrottled = false;
  
  // Initialize header state
  if (header) {
    header.classList.add('header-expanded');
    updateHeaderHeight();
  }
  
  /**
   * Updates header height CSS variable and adjusts main content padding
   */
  function updateHeaderHeight() {
    if (!header) return;
    
    // Get the actual rendered height of the header
    const headerHeight = header.offsetHeight;
    
    // Update CSS variables
    document.documentElement.style.setProperty('--actual-header-height', `${headerHeight}px`);
    
    if (header.classList.contains('header-collapsed')) {
      document.documentElement.style.setProperty('--header-collapsed-height', `${headerHeight}px`);
    }
    
    // Adjust main content padding based on page type
    if (main) {
      // Home page has special layout with no padding needed
      if (isHomePage) {
        main.style.paddingTop = '0';
      } else {
        // All other pages get fixed padding
        main.style.paddingTop = `${fixedContentPadding}px`;
        
        // Ensure nested site-content doesn't add additional padding
        const siteContent = main.querySelector('.site-content');
        if (siteContent) {
          siteContent.style.paddingTop = '0';
        }
      }
    }
  }
  
  /**
   * Handles scroll events to collapse/expand header
   */
  function handleScroll() {
    if (isThrottled) return;
    
    isThrottled = true;
    
    // Use requestAnimationFrame for better performance
    window.requestAnimationFrame(function() {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      
      // Ignore small scroll amounts
      if (Math.abs(lastScrollTop - currentScroll) <= 5) {
        isThrottled = false;
        return;
      }
      
      // Toggle header state based on scroll position
      if (currentScroll > scrollThreshold) {
        // Scrolling down - collapse header
        if (!header.classList.contains('header-collapsed')) {
          header.classList.remove('header-expanded');
          header.classList.add('header-collapsed');
          setTimeout(updateHeaderHeight, transitionDuration);
        }
      } else {
        // At the top - expand header
        if (!header.classList.contains('header-expanded')) {
          header.classList.remove('header-collapsed');
          header.classList.add('header-expanded');
          setTimeout(updateHeaderHeight, transitionDuration);
        }
      }
      
      lastScrollTop = currentScroll;
      isThrottled = false;
    });
  }
  
  // Event listeners
  window.addEventListener('scroll', handleScroll, { passive: true });
  
  window.addEventListener('resize', function() {
    if (!isThrottled) {
      isThrottled = true;
      window.requestAnimationFrame(function() {
        updateHeaderHeight();
        isThrottled = false;
      });
    }
  }, { passive: true });
  
  // Initial updates
  setTimeout(updateHeaderHeight, 100);
  window.addEventListener('load', updateHeaderHeight);
});
