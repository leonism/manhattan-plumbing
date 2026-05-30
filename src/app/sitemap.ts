import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/news'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://manhattan-plumbing.pages.dev'

  const staticPages = [
    '',
    '/news',
    '/privacy-policy',
    '/terms-of-service',
    '/cookies-policy',
    '/location',
    '/search',
    '/services/drain-service',
    '/services/emergency-service',
    '/services/fixture-service',
    '/services/pipe-service',
    '/services/remodeling-service',
    '/services/water-heater-service',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === '' ? 'daily' : 'weekly') as 'daily' | 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))

  const posts = getAllPosts().map((post) => ({
    url: `${baseUrl}/news/${post.slug}`,
    lastModified: post.lastModified ? new Date(post.lastModified) : new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...posts]
}
