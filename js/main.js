// Main JavaScript file for FitForLife.ph

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize all components
  initMobileMenu();
  initStickyHeader();
  initFAQAccordion();
  initSmoothScroll();
  initFadeInAnimations();
  initBackToTop();
});

// Mobile Menu Toggle
function initMobileMenu() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileMenuToggle.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.mobile-menu a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
      });
    });
  }
}

// Sticky Header
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  const headerHeight = header ? header.offsetHeight : 0;
  
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > headerHeight) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    });
  }
}

// FAQ Accordion
function initFAQAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all items
        faqItems.forEach(faqItem => {
          faqItem.classList.remove('active');
        });
        
        // If the clicked item wasn't active, make it active
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });
}

// Smooth Scroll
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Intersection Observer for Fade-in Animations
function initFadeInAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.fade-in-on-scroll').forEach(element => {
    observer.observe(element);
  });
}

// Form Validation
function validateForm(form) {
  const inputs = form.querySelectorAll('input[required], textarea[required]');
  let isValid = true;
  
  inputs.forEach(input => {
    if (!input.value.trim()) {
      isValid = false;
      input.classList.add('error');
    } else {
      input.classList.remove('error');
    }
  });
  
  return isValid;
}

// Initialize form validation if forms exist
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', function(e) {
    if (!validateForm(this)) {
      e.preventDefault();
      alert('Please fill in all required fields.');
    }
  });
});

// Back to Top Button
function initBackToTop() {
  const backToTop = document.querySelector('.back-to-top');
  
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });
    
    backToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
} 