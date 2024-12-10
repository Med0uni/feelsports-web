/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: ['images.unsplash.com'],
  },
  basePath: '/feelsports-web', 
  assetPrefix: '/feelsports-web',
  images: {
    unoptimized: true,
  }
}

export default nextConfig
