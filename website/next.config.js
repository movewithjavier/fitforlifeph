/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel deployment configuration
  // Using default dynamic/SSR setup for Vercel
  experimental: {
    // Enable app directory features if needed
  },
  // Ensure proper image optimization
  images: {
    unoptimized: false,
  },
}

module.exports = nextConfig 