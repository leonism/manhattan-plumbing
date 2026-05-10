import { ReactNode } from 'react'

export interface ImageSource {
  src: string
  webp: string
  avif: string
  alt: string
  width?: number
  height?: number
  caption?: string
}

export interface Author {
  name: string
  role: string
  image: ImageSource
  bio?: string
}

export interface Post {
  slug: string
  title: string
  seoTitle?: string
  date: string
  lastModified?: string
  jsonLd?: Record<string, unknown>
  author: Author
  category: string
  tags: string[]
  featuredImage: ImageSource
  excerpt: string
  readingTime: string
  status: 'published' | 'draft' | 'archived'
  featured: boolean
  content: string
}

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

export interface UseNewsOptions {
  category?: string
  tag?: string
  page?: number
  limit?: number
}
