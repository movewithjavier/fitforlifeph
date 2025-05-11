// FAQ accordion functionality for FitForLife.ph

class FAQAccordion {
  constructor() {
    this.faqItems = document.querySelectorAll('.faq-item');
    this.animationDuration = 300; // Duration in milliseconds
    
    if (this.faqItems.length > 0) {
      this.init();
    }
  }

  init() {
    this.faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');
      
      if (question && answer) {
        // Set initial state
        answer.style.height = '0';
        answer.style.overflow = 'hidden';
        answer.style.transition = `height ${this.animationDuration}ms ease-in-out`;
        
        // Add click event listener
        question.addEventListener('click', () => this.toggleItem(item, answer));
        
        // Add keyboard support
        question.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.toggleItem(item, answer);
          }
        });
        
        // Set ARIA attributes
        question.setAttribute('role', 'button');
        question.setAttribute('aria-expanded', 'false');
        question.setAttribute('aria-controls', `faq-${item.dataset.id}`);
        answer.setAttribute('id', `faq-${item.dataset.id}`);
      }
    });
  }

  toggleItem(item, answer) {
    const isActive = item.classList.contains('active');
    const question = item.querySelector('.faq-question');
    
    // Close all items
    this.faqItems.forEach(faqItem => {
      if (faqItem !== item) {
        this.closeItem(faqItem);
      }
    });
    
    // Toggle current item
    if (!isActive) {
      this.openItem(item, answer, question);
    } else {
      this.closeItem(item);
    }
  }

  openItem(item, answer, question) {
    // Add active class
    item.classList.add('active');
    
    // Update ARIA attributes
    question.setAttribute('aria-expanded', 'true');
    
    // Calculate and set height
    const height = answer.scrollHeight;
    answer.style.height = `${height}px`;
    
    // Add event listener for transition end
    const transitionEndHandler = () => {
      answer.style.height = 'auto';
      answer.removeEventListener('transitionend', transitionEndHandler);
    };
    
    answer.addEventListener('transitionend', transitionEndHandler);
  }

  closeItem(item) {
    const answer = item.querySelector('.faq-answer');
    const question = item.querySelector('.faq-question');
    
    // Remove active class
    item.classList.remove('active');
    
    // Update ARIA attributes
    question.setAttribute('aria-expanded', 'false');
    
    // Set height to 0
    answer.style.height = '0';
  }

  // Optional: Open first item by default
  openFirstItem() {
    if (this.faqItems.length > 0) {
      const firstItem = this.faqItems[0];
      const firstAnswer = firstItem.querySelector('.faq-answer');
      const firstQuestion = firstItem.querySelector('.faq-question');
      
      this.openItem(firstItem, firstAnswer, firstQuestion);
    }
  }
}

// Initialize FAQ accordion when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const faqAccordion = new FAQAccordion();
  
  // Optional: Open first item by default
  // faqAccordion.openFirstItem();
}); 