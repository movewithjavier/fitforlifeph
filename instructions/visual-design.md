# FitForLife.ph Visual Design

## Color Scheme

### Core Brand Colors
```css
:root {
  /* Primary Color - Deep Blue */
  --primary-color: #0D3B66;
  --primary-color-light: #1D5999;
  --primary-color-dark: #042749;
  
  /* Secondary Color - Teal */
  --secondary-color: #3E8989;
  --secondary-color-light: #65A7A7;
  --secondary-color-dark: #2A6464;
  
  /* Accent Color - Vibrant Orange */
  --accent-color: #F95738;
  --accent-color-light: #FA7E66;
  --accent-color-dark: #D73816;
  
  /* Neutral Colors */
  --neutral-white: #FFFFFF;
  --neutral-light: #F5F7FA;
  --neutral-medium: #E5E8ED;
  --neutral-dark: #2D3748;
  --neutral-text: #333333;
  --neutral-text-light: #717F96;
}
```

### Color Application (60-30-10 Rule)
- **60%**: Primary color (deep blue) for main UI elements, headers, and backgrounds
- **30%**: Secondary color (teal) for supporting elements, icons, and visual interest
- **10%**: Accent color (orange) exclusively for CTAs and important highlights

### Color Psychology for Corporate Wellness
- **Deep Blue**: Professionalism, trustworthiness, stability (corporate appeal)
- **Teal**: Health, vitality, wellness, balance (program benefits)
- **Orange**: Energy, enthusiasm, motivation, action (CTA emphasis)

## Typography

### Font Selection
- **Headings**: Montserrat (Bold, Semi-Bold)
  ```css
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  font-weight: 700; /* For bold */
  font-weight: 600; /* For semi-bold */
  ```

- **Body Text**: Open Sans (Regular, Light)
  ```css
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  font-weight: 400; /* For regular */
  font-weight: 300; /* For light */
  ```

### Font Sizes and Hierarchy
```css
:root {
  /* Base size for responsive scaling */
  --base-font-size: 16px;
  
  /* Heading sizes */
  --h1-size: 2.5rem;      /* 40px */
  --h2-size: 2rem;        /* 32px */
  --h3-size: 1.5rem;      /* 24px */
  --h4-size: 1.25rem;     /* 20px */
  
  /* Body text sizes */
  --text-xl: 1.125rem;    /* 18px */
  --text-lg: 1rem;        /* 16px */
  --text-md: 0.9375rem;   /* 15px */
  --text-sm: 0.875rem;    /* 14px */
  --text-xs: 0.75rem;     /* 12px */
  
  /* Line heights */
  --line-height-tight: 1.2;
  --line-height-normal: 1.5;
  --line-height-loose: 1.8;
}
```

### Text Styling Guidelines
- Use Montserrat for all headings and CTAs
- Use Open Sans for body text and supporting content
- Maintain adequate contrast (minimum 4.5:1 ratio)
- Use font weights for emphasis rather than italics
- Keep text left-aligned for better readability
- Set appropriate line height (1.5× for body text)

## UI Components

### Button Styles

```css
.button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.button-primary {
  background-color: var(--accent-color);
  color: white;
}

.button-primary:hover {
  background-color: var(--accent-color-dark);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.button-secondary {
  background-color: var(--secondary-color);
  color: white;
}

.button-secondary:hover {
  background-color: var(--secondary-color-dark);
}

.button-outline {
  background-color: transparent;
  border: 2px solid var(--accent-color);
  color: var(--accent-color);
}

.button-outline:hover {
  background-color: var(--accent-color);
  color: white;
}
```

### Card Components

```css
.card {
  background-color: var(--neutral-white);
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.card-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: var(--h3-size);
  margin-top: 0;
  margin-bottom: 1rem;
  color: var(--primary-color);
}

.card-content {
  color: var(--neutral-text);
}

.service-card {
  border-top: 4px solid var(--secondary-color);
}

.benefit-card {
  border-left: 4px solid var(--secondary-color);
}
```

### Testimonial Components

```css
.testimonial {
  position: relative;
  padding: 1.5rem;
  background-color: var(--neutral-light);
  border-radius: 8px;
  margin-bottom: 1.5rem;
}

.testimonial-quote {
  font-style: italic;
  margin-bottom: 1rem;
  color: var(--neutral-text);
  position: relative;
  padding-left: 2rem;
}

.testimonial-quote:before {
  content: """;
  font-size: 4rem;
  color: var(--secondary-color-light);
  position: absolute;
  top: -1rem;
  left: -1rem;
  opacity: 0.4;
}

.testimonial-author {
  display: flex;
  align-items: center;
}

.testimonial-author-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
  border: 2px solid var(--secondary-color);
}

.testimonial-author-name {
  font-weight: 600;
  margin: 0;
  color: var(--primary-color);
}

.testimonial-author-title {
  font-size: var(--text-sm);
  color: var(--neutral-text-light);
  margin: 0;
}

.testimonial-company {
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--secondary-color-dark);
}
```

## Layout & Spacing

### Container Sizes

```css
.container {
  width: 100%;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}
```

### Spacing Scale

```css
:root {
  --space-xxs: 0.25rem;   /* 4px */
  --space-xs: 0.5rem;     /* 8px */
  --space-sm: 0.75rem;    /* 12px */
  --space-md: 1rem;       /* 16px */
  --space-lg: 1.5rem;     /* 24px */
  --space-xl: 2rem;       /* 32px */
  --space-xxl: 3rem;      /* 48px */
  --space-xxxl: 4rem;     /* 64px */
}
```

### Section Spacing

- Use consistent vertical spacing between sections
- Maintain proper hierarchy with spacing
- Increase spacing for major section breaks
- Maintain consistent rhythm throughout the page

```css
.section {
  padding-top: var(--space-xxl);
  padding-bottom: var(--space-xxl);
}

@media (min-width: 768px) {
  .section {
    padding-top: var(--space-xxxl);
    padding-bottom: var(--space-xxxl);
  }
}
```

## Visual Elements

### Icons
- Use consistent icon style throughout (line style recommended)
- Icon colors should use the secondary color (teal)
- Size icons appropriately (24px - 32px for UI elements)
- Consider using Filipino-inspired iconography where appropriate

### Photography Guidelines
- Use authentic images of Filipino workplace environments
- Include diverse representation of Filipino professionals
- Avoid overly staged or generic stock photos
- Consider the following categories:
  - Corporate wellness activities in office settings
  - Filipino professionals engaged in healthy behaviors
  - Workshop and webinar scenarios
  - Before/after representation of workplace wellness
- Optimize all images for web performance

### Decorative Elements
- Use subtle patterns or textures in background areas
- Consider Filipino-inspired design elements where appropriate
- Use gradient backgrounds for section breaks
- Implement subtle animations for engagement

## Responsive Design

### Mobile-First Approach
- Design for mobile devices first, then enhance for larger screens
- Stack elements vertically on mobile
- Hide secondary information on smaller screens
- Ensure touch targets are minimum 44×44px
- Test on actual mobile devices

### Critical Breakpoints
- Mobile: <576px
- Tablet: 576px-991px
- Desktop: ≥992px

### Responsive Adjustments
- Adjust font sizes for different screen sizes
- Modify spacing between elements
- Reorganize layouts for optimal viewing
- Consider different image crops for varied screen ratios
