"use client"

import { useMemo } from 'react'
import type { Post, UseNewsOptions } from '@/types/news'
import { slugify } from '@/utils/slugify'

// In Next.js, we don't use import.meta.glob.
// Data should be passed from server components or fetched via API.

// --- Static All Posts Loader ---
// Fallback empty array for client-side search if data isn't passed down yet
const allPostsData: Post[] = []

// --- Main Hook ---
export const useNews = ({ category, tag, page = 1, limit = 9 }: UseNewsOptions = {}) => {
  const allPosts = useMemo(() => allPostsData, [])

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

    return { filtered, paginated, categories, totalPages }
  }, [category, tag, page, limit, allPosts])

  return {
    posts: paginated,
    categories,
    totalPages,
    isLoading: false,
    allPosts,
  }
}
