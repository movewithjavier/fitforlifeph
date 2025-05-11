// Mobile menu functionality for FitForLife.ph

class MobileMenu {
  constructor() {
    this.menuToggle = document.querySelector('.mobile-menu-toggle');
    this.menu = document.querySelector('.mobile-menu');
    this.body = document.body;
    
    if (this.menuToggle && this.menu) {
      this.init();
    }
  }

  init() {
    // Add click event listener to toggle button
    this.menuToggle.addEventListener('click', () => this.toggleMenu());
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => this.handleOutsideClick(e));
    
    // Close menu when clicking menu links
    this.menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => this.closeMenu());
    });
    
    // Handle window resize
    window.addEventListener('resize', () => this.handleResize());
  }

  toggleMenu() {
    this.menuToggle.classList.toggle('active');
    this.menu.classList.toggle('active');
    this.body.classList.toggle('menu-open');
    
    // Toggle aria-expanded attribute
    const isExpanded = this.menuToggle.classList.contains('active');
    this.menuToggle.setAttribute('aria-expanded', isExpanded);
    
    // Toggle focus trap
    if (isExpanded) {
      this.setupFocusTrap();
    } else {
      this.removeFocusTrap();
    }
  }

  closeMenu() {
    this.menuToggle.classList.remove('active');
    this.menu.classList.remove('active');
    this.body.classList.remove('menu-open');
    this.menuToggle.setAttribute('aria-expanded', 'false');
    this.removeFocusTrap();
  }

  handleOutsideClick(e) {
    if (this.menu.classList.contains('active') && 
        !this.menu.contains(e.target) && 
        !this.menuToggle.contains(e.target)) {
      this.closeMenu();
    }
  }

  handleResize() {
    // Close menu on window resize if open
    if (window.innerWidth > 768 && this.menu.classList.contains('active')) {
      this.closeMenu();
    }
  }

  setupFocusTrap() {
    // Get all focusable elements
    const focusableElements = this.menu.querySelectorAll(
      'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    // Store first and last focusable elements
    this.firstFocusableElement = focusableElements[0];
    this.lastFocusableElement = focusableElements[focusableElements.length - 1];
    
    // Add event listeners for focus trap
    this.menu.addEventListener('keydown', (e) => this.handleFocusTrap(e));
    
    // Focus first element
    this.firstFocusableElement.focus();
  }

  removeFocusTrap() {
    this.menu.removeEventListener('keydown', (e) => this.handleFocusTrap(e));
  }

  handleFocusTrap(e) {
    if (e.key !== 'Tab') return;
    
    if (e.shiftKey) {
      if (document.activeElement === this.firstFocusableElement) {
        e.preventDefault();
        this.lastFocusableElement.focus();
      }
    } else {
      if (document.activeElement === this.lastFocusableElement) {
        e.preventDefault();
        this.firstFocusableElement.focus();
      }
    }
  }
}

// Initialize mobile menu when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new MobileMenu();
}); 