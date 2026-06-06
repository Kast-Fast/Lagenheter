import type { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  output: 'export',
  // basePath only needed when served from /Lagenheter/ subfolder (no custom domain yet)
  // Remove this line once kastfast.se is pointing to GitHub Pages
  basePath: isProd ? '/Lagenheter' : '',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
