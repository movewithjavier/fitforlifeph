# FitForLife.ph Website

A single-page website for FitForLife.ph, providing corporate wellness solutions through webinars, workshops, and trainings designed to help modern Filipino employees improve their health and achieve broader life goals.

## Overview

FitForLife.ph offers corporate wellness solutions tailored specifically for Filipino workplaces. Our programs focus on:

- Corporate Webinars
- Wellness Workshops
- Training Programs

The website is designed to convert visitors into consultation call bookings, with a focus on:
- HR departments and corporate decision-makers
- Filipino employees interested in workplace wellness
- Industries: BPO, finance, technology, healthcare, and other office-based sectors

## Features

- Single-page design with smooth scrolling
- Mobile-first responsive layout
- Optimized performance and accessibility
- Clear call-to-action focused on booking consultation calls
- Culturally relevant content for Filipino workplaces

## Technology Stack

- HTML5 with semantic markup
- CSS3 with modern features (flexbox, grid, variables)
- Vanilla JavaScript for essential functionality
- Google Fonts (Montserrat and Open Sans)
- No heavy frameworks or libraries for optimal performance

## Project Structure

```
/
├── index.html                  # Main (and only) HTML file
├── css/
│   ├── styles.css              # Main stylesheet with variables and structure
│   ├── normalize.css           # CSS reset/normalize
│   └── components/             # Component-specific styles
├── js/
│   ├── main.js                 # Main JavaScript file
│   ├── smooth-scroll.js        # Smooth scrolling between sections
│   └── components/             # Component-specific scripts
├── assets/
│   ├── images/                 # Image files organized by section
│   └── fonts/                  # Web fonts (if not using Google Fonts)
└── README.md                   # Project README
```

## Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/fitforlifeph.git
   cd fitforlifeph
   ```

2. Set up a local development server:
   ```bash
   # Using Python's built-in server
   python3 -m http.server 8000
   
   # Or using Node's http-server (if installed)
   npx http-server
   ```

3. Open the site in your browser:
   ```
   http://localhost:8000
   ```

## Development Guidelines

- Follow semantic HTML5 markup
- Use BEM naming convention for CSS classes
- Keep JavaScript vanilla and minimal
- Optimize all images before committing
- Test across different devices and browsers
- Ensure accessibility compliance

## Deployment

The site is deployed on Replit, which automatically pulls from the GitHub repository. No direct editing on Replit is allowed - all changes must be made locally and pushed to GitHub.

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

All rights reserved. This is a proprietary project for FitForLife.ph. 