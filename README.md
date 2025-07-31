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

- Next.js with TypeScript
- Tailwind CSS for styling
- React components for modularity
- Optimized for Vercel deployment

## Project Structure

```
/
├── website/                    # Next.js application
│   ├── pages/                  # Next.js pages
│   ├── components/             # React components
│   ├── public/                 # Static assets
│   ├── package.json            # Dependencies
│   └── next.config.js          # Next.js configuration
├── vercel.json                 # Vercel deployment config
└── README.md                   # Project README
```

## Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/movewithjavier/fitforlifeph.git
   cd fitforlifeph
   ```

2. Navigate to the website directory and install dependencies:
   ```bash
   cd website
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the site in your browser:
   ```
   http://localhost:3000
   ```

## Development Guidelines

- Follow React and TypeScript best practices
- Use Tailwind CSS for styling
- Keep components modular and reusable
- Optimize all images before committing
- Test across different devices and browsers
- Ensure accessibility compliance

## Deployment

The site is deployed on Vercel with the following configuration:
- **Root Directory**: `website` (set in Vercel dashboard)
- **Framework**: Next.js (auto-detected)
- **Build Command**: `npm run build`
- **Output Directory**: `.next`

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

All rights reserved. This is a proprietary project for FitForLife.ph. 