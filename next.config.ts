import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Enable modern features for SEO and performance
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  // Ensure that trailing slashes are handled correctly for static hosting
  trailingSlash: true,
  // Next.js 16 specific experimental features if any (keeping it safe for now)
};

export default nextConfig;
