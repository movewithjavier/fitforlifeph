// Enhanced smooth scrolling functionality for FitForLife.ph

class SmoothScroll {
  constructor() {
    this.init();
  }

  init() {
    // Get all anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    
    // Add click event listeners
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        this.scrollToTarget(link.getAttribute('href'));
      });
    });
  }

  scrollToTarget(targetId) {
    const target = document.querySelector(targetId);
    
    if (!target) return;

    // Get header height for offset
    const header = document.querySelector('.site-header');
    const headerHeight = header ? header.offsetHeight : 0;
    
    // Get target position
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    
    // Calculate final position with header offset
    const finalPosition = targetPosition - headerHeight;
    
    // Smooth scroll to target
    window.scrollTo({
      top: finalPosition,
      behavior: 'smooth'
    });
  }
}

// Initialize smooth scroll when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new SmoothScroll();
}); 