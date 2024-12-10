/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Keeps your build static for GitHub Pages or other static hosting
  basePath: '/feelsports-web', // Ensures all routes are prefixed with the base path
  assetPrefix: '/feelsports-web', // Automatically applies to static assets (like images, JavaScript files)
  images: {
    unoptimized: true, // Disable image optimization (important for static export)
    loader: 'custom', // Custom loader for images
    path: '/feelsports-web/', // Ensure the path for images includes the base path
    domains: ['images.unsplash.com'], // Add external image domains if required
  },
};

export default nextConfig;
