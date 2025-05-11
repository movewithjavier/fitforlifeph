# FitForLife.ph Technical Implementation

## Development Approach

### Single-Page Architecture
- Single HTML file with section-based structure
- Smooth scrolling between sections with anchor links
- Clean, semantic markup for improved SEO and accessibility
- Mobile-first responsive design approach

### Technology Stack
- **HTML5**: Semantic markup with appropriate structure
- **CSS3**: Custom styling with modern features (flexbox, grid, variables)
- **Vanilla JavaScript**: Minimal use for essential functionality
- **No heavy frameworks or libraries** to ensure optimal performance

### Development Workflow
- **Local Development**: All development work done in your local environment using Cursor AI
  - Leverage Cursor AI's code assistance features for efficiency
  - Run local server for testing before deployment
  - Keep all development files in your local workspace
- **GitHub Synchronization**: Only essential production files pushed to GitHub
  - Use .gitignore to exclude development-only files (.env, Cursor AI config files, etc.)
  - Maintain a clean repository with only files needed for production
  - Commit and push changes with descriptive messages
- **Replit Deployment**: One-way deployment from GitHub to Replit
  - Replit automatically pulls from GitHub repository
  - No direct editing on Replit
  - Files flow in one direction only: Local → GitHub → Replit

## File Structure

```
/
├── index.html                  # Main (and only) HTML file
├── css/
│   ├── styles.css              # Main stylesheet with variables and structure
│   ├── normalize.css           # CSS reset/normalize
│   └── components/             # Component-specific styles
│       ├── header.css          # Header and navigation styles
│       ├── hero.css            # Hero section styles
│       ├── services.css        # Services section styles
│       ├── benefits.css        # Benefits section styles
│       ├── testimonials.css    # Testimonial styles
│       ├── about.css           # About section styles
│       ├── faq.css             # FAQ section styles
│       ├── cta.css             # CTA styles
│       └── footer.css          # Footer styles
├── js/
│   ├── main.js                 # Main JavaScript file
│   ├── smooth-scroll.js        # Smooth scrolling between sections
│   └── components/             # Component-specific scripts
│       ├── mobile-menu.js      # Mobile menu toggle
│       ├── sticky-header.js    # Header behavior on scroll
│       └── faq-accordion.js    # FAQ section interaction
├── assets/
│   ├── images/                 # Image files organized by section
│   │   ├── logo/               # Logo files
│   │   ├── hero/               # Hero section images
│   │   ├── services/           # Service section icons and images
│   │   ├── benefits/           # Benefits section icons and images
│   │   ├── testimonials/       # Testimonial author images
│   │   ├── about/              # Team/about section images
│   │   └── favicon/            # Favicon files
│   └── fonts/                  # Web fonts (if not using Google Fonts)
└── README.md                   # Project README
```

## CSS Architecture

### Organization Strategy
- Use CSS variables for consistent styling
- Component-based CSS organization
- Mobile-first media queries
- Follow BEM (Block Element Modifier) naming convention

### Base CSS Variables
```css
:root {
  /* Color variables from the design guide */
  --primary-color: #0D3B66;
  --primary-color-light: #1D5999;
  --primary-color-dark: #042749;
  --secondary-color: #3E8989;
  --secondary-color-light: #65A7A7;
  --secondary-color-dark: #2A6464;
  --accent-color: #F95738;
  --accent-color-light: #FA7E66;
  --accent-color-dark: #D73816;
  --neutral-white: #FFFFFF;
  --neutral-light: #F5F7FA;
  --neutral-medium: #E5E8ED;
  --neutral-dark: #2D3748;
  --neutral-text: #333333;
  --neutral-text-light: #717F96;
  
  /* Typography variables */
  --font-heading: 'Montserrat', Helvetica, Arial, sans-serif;
  --font-body: 'Open Sans', Helvetica, Arial, sans-serif;
  --base-font-size: 16px;
  --h1-size: 2.5rem;
  --h2-size: 2rem;
  --h3-size: 1.5rem;
  --h4-size: 1.25rem;
  --text-xl: 1.125rem;
  --text-lg: 1rem;
  --text-md: 0.9375rem;
  --text-sm: 0.875rem;
  --text-xs: 0.75rem;
  
  /* Spacing variables */
  --space-xxs: 0.25rem;
  --space-xs: 0.5rem;
  --space-sm: 0.75rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-xxl: 3rem;
  --space-xxxl: 4rem;
  
  /* Other variables */
  --border-radius: 4px;
  --border-radius-lg: 8px;
  --box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  --transition-speed: 0.3s;
}
```

## JavaScript Functionality

### Essential Functions
1. **Smooth Scrolling**:
   ```javascript
   // Implementation for smooth scrolling between sections
   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function(e) {
       e.preventDefault();
       document.querySelector(this.getAttribute('href')).scrollIntoView({
         behavior: 'smooth'
       });
     });
   });
   ```

2. **Mobile Navigation**:
   ```javascript
   // Mobile menu toggle
   const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
   const mobileMenu = document.querySelector('.mobile-menu');
   
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
   ```

3. **Sticky Header**:
   ```javascript
   // Make header sticky on scroll
   const header = document.querySelector('.site-header');
   const headerHeight = header.offsetHeight;
   
   window.addEventListener('scroll', () => {
     if (window.scrollY > headerHeight) {
       header.classList.add('sticky');
     } else {
       header.classList.remove('sticky');
     }
   });
   ```

4. **FAQ Accordion**:
   ```javascript
   // FAQ accordion functionality
   const faqItems = document.querySelectorAll('.faq-item');
   
   faqItems.forEach(item => {
     const question = item.querySelector('.faq-question');
     
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
   });
   ```

## Performance Optimization

### Image Optimization
- Compress all images using modern formats (WebP with fallbacks)
- Use responsive images with srcset for different screen sizes
- Implement lazy loading for images below the fold
- Consider image dimensions and aspect ratios

```html
<!-- Responsive image example -->
<img 
  src="assets/images/hero/hero-mobile.jpg" 
  srcset="assets/images/hero/hero-mobile.jpg 400w,
          assets/images/hero/hero-tablet.jpg 800w,
          assets/images/hero/hero-desktop.jpg 1200w"
  sizes="(max-width: 600px) 100vw,
         (max-width: 1200px) 800px,
         1200px"
  alt="FitForLife.ph Corporate Wellness Programs"
  loading="lazy">
```

### Loading Optimization
- Place critical CSS inline in the head
- Defer non-critical JavaScript
- Minimize HTTP requests by combining files where appropriate
- Use preconnect for external resources

```html
<!-- Resource hints -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Critical CSS inline -->
<style>
  /* Critical path CSS here */
</style>

<!-- Defer non-critical JavaScript -->
<script src="js/main.js" defer></script>
```

## Accessibility Implementation

### Core Accessibility Features
- Semantic HTML structure with appropriate landmarks
- Proper heading hierarchy (h1-h6)
- Sufficient color contrast (WCAG AA compliance)
- Keyboard navigation support
- ARIA attributes for interactive elements
- Alt text for all images
- Focus styles for interactive elements

```html
<!-- Example of accessible FAQ item -->
<div class="faq-item">
  <button class="faq-question" aria-expanded="false" aria-controls="faq1-answer">
    What types of corporate wellness programs do you offer?
    <span class="icon" aria-hidden="true"></span>
  </button>
  <div class="faq-answer" id="faq1-answer" hidden>
    <p>We offer three primary services: corporate webinars, hands-on workshops, and ongoing training programs. Each is customized to meet the specific needs of Filipino workplaces and employees.</p>
  </div>
</div>
```

## SEO Implementation

### Meta Tags
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="FitForLife.ph provides specialized corporate wellness programs for Filipino companies through webinars, workshops, and training to improve employee health and productivity.">
<title>FitForLife.ph | Corporate Wellness Programs for Filipino Companies</title>

<!-- Open Graph Tags -->
<meta property="og:title" content="FitForLife.ph | Corporate Wellness Programs">
<meta property="og:description" content="Specialized corporate wellness solutions for Filipino companies through webinars, workshops, and training programs.">
<meta property="og:image" content="https://fitforlife.ph/assets/images/og-image.jpg">
<meta property="og:url" content="https://fitforlife.ph">
<meta property="og:type" content="website">

<!-- Twitter Card Tags -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="FitForLife.ph | Corporate Wellness Programs">
<meta name="twitter:description" content="Specialized corporate wellness solutions for Filipino companies.">
<meta name="twitter:image" content="https://fitforlife.ph/assets/images/twitter-image.jpg">
```

### Structured Data
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "FitForLife.ph",
  "description": "Corporate wellness programs for Filipino companies",
  "url": "https://fitforlife.ph",
  "telephone": "+639XXXXXXXXX",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Manila",
    "addressRegion": "Metro Manila",
    "addressCountry": "PH"
  },
  "image": "https://fitforlife.ph/assets/images/logo.png",
  "priceRange": "₱₱₱",
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 14.5995,
      "longitude": 120.9842
    },
    "geoRadius": "50km"
  },
  "sameAs": [
    "https://facebook.com/fitforlifeph",
    "https://instagram.com/fitforlifeph",
    "https://linkedin.com/company/fitforlifeph"
  ]
}
</script>
```

## Analytics Integration

### Basic Google Analytics Setup
```html
<!-- Google Analytics (GA4) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### CTA Tracking
```javascript
// Track CTA clicks
document.querySelectorAll('.cta-button').forEach(button => {
  button.addEventListener('click', function() {
    if (typeof gtag === 'function') {
      gtag('event', 'cta_click', {
        'event_category': 'engagement',
        'event_label': this.getAttribute('data-cta-location') || 'unknown'
      });
    }
  });
});
```

## Testing Checklist

- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile testing on actual devices
- [ ] Performance testing with PageSpeed Insights
- [ ] Accessibility testing with WAVE or similar tool
- [ ] Validate HTML with W3C Validator
- [ ] Check all links and CTAs
- [ ] Test booking flow through TidyCal
- [ ] Test all JavaScript functionality
- [ ] Check form validation
- [ ] Verify analytics tracking
