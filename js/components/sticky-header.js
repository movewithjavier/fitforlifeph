// Sticky header functionality for FitForLife.ph

class StickyHeader {
  constructor() {
    this.header = document.querySelector('.site-header');
    this.headerHeight = this.header ? this.header.offsetHeight : 0;
    this.lastScrollY = window.scrollY;
    this.ticking = false;
    
    if (this.header) {
      this.init();
    }
  }

  init() {
    // Add scroll event listener with throttling
    window.addEventListener('scroll', () => {
      if (!this.ticking) {
        window.requestAnimationFrame(() => {
          this.handleScroll();
          this.ticking = false;
        });
        this.ticking = true;
      }
    });
    
    // Handle window resize
    window.addEventListener('resize', () => {
      this.headerHeight = this.header.offsetHeight;
    });
  }

  handleScroll() {
    const currentScrollY = window.scrollY;
    
    // Add/remove sticky class based on scroll position
    if (currentScrollY > this.headerHeight) {
      this.header.classList.add('sticky');
      
      // Add/remove header-hidden class based on scroll direction
      if (currentScrollY > this.lastScrollY) {
        this.header.classList.add('header-hidden');
      } else {
        this.header.classList.remove('header-hidden');
      }
    } else {
      this.header.classList.remove('sticky');
      this.header.classList.remove('header-hidden');
    }
    
    // Update last scroll position
    this.lastScrollY = currentScrollY;
  }
}

// Initialize sticky header when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new StickyHeader();
}); 