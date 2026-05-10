import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/search?*'],
    },
    sitemap: 'https://manhattan-plumbing.pages.dev/sitemap.xml',
  }
}
