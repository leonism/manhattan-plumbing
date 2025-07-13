import { useState, useEffect } from 'react'
import type { Post } from '../types/news'

// Define services data statically with icons
const services = [
  {
    slug: '/services/emergency-service',
    title: 'Emergency Plumbing',
    excerpt: '24/7 immediate response for all plumbing emergencies.',
    icon: 'Wrench',
  },
  {
    slug: '/services/drain-service',
    title: 'Drain Cleaning',
    excerpt: 'Expert cleaning and clearing of all types of drains.',
    icon: 'Wrench',
  },
  {
    slug: '/services/water-heater-service',
    title: 'Water Heaters',
    excerpt: 'Installation, repair, and maintenance of water heaters.',
    icon: 'Wrench',
  },
  {
    slug: '/services/remodeling-service',
    title: 'Remodeling Services',
    excerpt: 'Plumbing for kitchen and bathroom remodeling projects.',
    icon: 'Wrench',
  },
  {
    slug: '/services/pipe-service',
    title: 'Pipe Repair & Installation',
    excerpt: 'Leak detection, pipe repair, and full re-piping services.',
    icon: 'Wrench',
  },
  {
    slug: '/services/fixture-service',
    title: 'Fixture Installation',
    excerpt: 'Installation and repair of faucets, toilets, and other fixtures.',
    icon: 'Wrench',
  },
]

export interface SearchResult {
  slug: string
  title: string
  excerpt: string
  featuredImage?: { src: string; alt: string }
  icon?: string
}

export interface CategorizedResults {
  news: SearchResult[]
  services: SearchResult[]
}

export const useSearch = (query: string, allPosts: Post[]) => {
  const [results, setResults] = useState<CategorizedResults>({ news: [], services: [] })
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const search = () => {
      if (!query.trim()) {
        setResults({ news: [], services: [] })
        return
      }

      setIsLoading(true)

      // Filter news posts
      const newsResults = allPosts
        .filter((post) => {
          const searchableContent = [post.title, post.excerpt, post.category, ...(post.tags || [])]
            .join(' ')
            .toLowerCase()
          return searchableContent.includes(query.toLowerCase())
        })
        .map((post) => ({
          slug: `/news/${post.slug}`,
          title: post.title,
          excerpt: post.excerpt,
          featuredImage: post.featuredImage,
        }))

      // Filter services
      const servicesResults = services.filter((service) => {
        const searchableContent = [service.title, service.excerpt].join(' ').toLowerCase()
        return searchableContent.includes(query.toLowerCase())
      })

      setResults({ news: newsResults, services: servicesResults })
      setIsLoading(false)
    }

    const debounceTimeout = setTimeout(search, 300)
    return () => clearTimeout(debounceTimeout)
  }, [query, allPosts])

  return { results, isLoading }
}
