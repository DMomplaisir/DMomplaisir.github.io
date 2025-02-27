// Header scroll behavior
document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('header');
  const headerContent = document.querySelector('.header-content');
  const main = document.querySelector('main');
  
  // Detect page type based on body class
  const isHomePage = document.body.classList.contains('home-page');
  const isAboutPage = document.body.classList.contains('about-page');
  const isProjectsPage = document.body.classList.contains('projects-page');
  
  let lastScrollTop = 0;
  const scrollThreshold = 30; // Reduced from 50 to 30 for quicker collapse
  let ticking = false; // For requestAnimationFrame
  
  // Add initial class to header
  if (header) {
    header.classList.add('header-expanded');
    
    // Set a CSS variable for the actual header height
    updateHeaderHeight();
  }
  
  // Function to update header height CSS variable
  function updateHeaderHeight() {
    if (header) {
      // Get the actual rendered height of the header
      const headerHeight = header.offsetHeight;
      
      // Set a fixed small padding value instead of calculating based on header height
      // This ensures we don't add too much space
      const fixedPadding = 20; // Reduced from 40px to 20px
      
      document.documentElement.style.setProperty('--actual-header-height', `${headerHeight}px`);
      
      // Also update the collapsed height variable based on current state
      if (header.classList.contains('header-collapsed')) {
        document.documentElement.style.setProperty('--header-collapsed-height', `${headerHeight}px`);
      }
      
      // Special handling for different page types
      if (main) {
        if (isHomePage) {
          // For home page, ensure no padding is applied
          main.style.paddingTop = '0';
          console.log('Home page detected - removing padding');
        } else {
          // For all other pages, use a fixed small padding value
          main.style.paddingTop = `${fixedPadding}px`;
          console.log('Content page detected - setting fixed padding to ' + fixedPadding + 'px');
          
          // Also check if main has site-content class and adjust accordingly
          const siteContent = main.querySelector('.site-content');
          if (siteContent) {
            // Ensure site-content doesn't add additional top padding
            siteContent.style.paddingTop = '0';
          }
        }
      }
    }
  }
  
  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
        // Don't do anything for small scroll amounts
        if (Math.abs(lastScrollTop - currentScroll) <= 5) {
          ticking = false;
          return;
        }
        
        if (currentScroll > scrollThreshold) {
          // Scrolling beyond threshold - collapse header
          if (!header.classList.contains('header-collapsed')) {
            header.classList.remove('header-expanded');
            header.classList.add('header-collapsed');
            // Update the header height after transition
            setTimeout(updateHeaderHeight, 300); // Match transition time
          }
        } else {
          // At the top - expand header
          if (!header.classList.contains('header-expanded')) {
            header.classList.remove('header-collapsed');
            header.classList.add('header-expanded');
            // Update the header height after transition
            setTimeout(updateHeaderHeight, 300); // Match transition time
          }
        }
        
        lastScrollTop = currentScroll;
        ticking = false;
      });
      
      ticking = true;
    }
  }, { passive: true });
  
  // Update header height on resize
  window.addEventListener('resize', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        updateHeaderHeight();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
  
  // Initial update after a short delay to ensure all styles are applied
  setTimeout(updateHeaderHeight, 100);
  
  // Additional update after all images and resources are loaded
  window.addEventListener('load', function() {
    updateHeaderHeight();
  });
}); 