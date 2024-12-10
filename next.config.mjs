/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Keeps your build static for GitHub Pages or other static hosting
  basePath: '/feelsports-web', // Ensures all routes are prefixed with the base path
  assetPrefix: '/feelsports-web', // Automatically applies to static assets (e.g., images, JavaScript files)
  images: {
    unoptimized: true, // Disable image optimization (important for static export)
    domains: ['images.unsplash.com'], // Add external image domains if required
  },
};

export default nextConfig;
