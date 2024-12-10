/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Keeps your build static for GitHub Pages or other static hosting
  images: {
    unoptimized: true, // Disable image optimization (important for static export)
    path: '/feelsports-web/', // Ensure the path for images includes the base path
    domains: ['images.unsplash.com'], // Add external image domains if required
  },
};

export default nextConfig;
