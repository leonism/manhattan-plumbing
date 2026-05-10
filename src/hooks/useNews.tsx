import { useState, useEffect, useMemo } from 'react'
import type { Post, UseNewsOptions } from '@/types'
import { slugify } from '@/utils/slugify'

export const useNews = ({ category, tag, page = 1, limit = 9 }: UseNewsOptions = {}) => {
  const [allPosts, setAllPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/news')
        if (!response.ok) throw new Error('Failed to fetch posts')
        const data = await response.json()
        setAllPosts(data)
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'))
      } finally {
        setIsLoading(false)
      }
    }
    fetchPosts()
  }, [])

  const { paginated, categories, totalPages } = useMemo(() => {
    let filtered = allPosts
    if (category) {
      filtered = allPosts.filter((post) => slugify(post.category) === category)
    } else if (tag) {
      filtered = allPosts.filter((post) => post.tags.map(slugify).includes(tag))
    }

    const start = (page - 1) * limit
    const paginated = filtered.slice(start, start + limit)
    const categories = [...new Set(allPosts.map((p) => p.category))]
    const totalPages = Math.ceil(filtered.length / limit)

    return { paginated, categories, totalPages }
  }, [category, tag, page, limit, allPosts])

  return {
    posts: paginated,
    categories,
    totalPages,
    isLoading,
    error,
    allPosts,
  }
}
