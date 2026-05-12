import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { slugify } from '@/utils/slugify'
import { getAllServices } from '@/lib/services'
import { getAllLegalPages } from '@/lib/legal'
import type { Post, Author, ImageSource } from '@/types'
export type { Post, Author, ImageSource }

const newsDirectory = path.join(process.cwd(), 'src/content/news')

/**
 * Formats a raw image object or string into a structured ImageSource.
 */
interface RawImage {
  src?: string
  alt?: string
  webp?: string
  avif?: string
  width?: number
  height?: number
  caption?: string
}

function formatImage(img: string | RawImage | undefined | null, defaultAlt: string = ''): ImageSource {
  if (typeof img === 'string') {
    const src = img.startsWith('http') ? img : `/images/${img}`
    return {
      src,
      webp: src,
      avif: src,
      alt: defaultAlt,
    }
  }

  const rawSrc = img?.src || ''
  const src = rawSrc.startsWith('http') ? rawSrc : `/images/${rawSrc}`
  
  return {
    src,
    webp: img?.webp || (rawSrc.startsWith('http') ? src : `${src}?format=webp`),
    avif: img?.avif || (rawSrc.startsWith('http') ? src : `${src}?format=avif`),
    alt: img?.alt || defaultAlt,
    width: img?.width,
    height: img?.height,
    caption: img?.caption,
  }
}

/**
 * Retrieves all published news posts.
 */
export function getAllPosts(): Post[] {
  if (!fs.existsSync(newsDirectory)) return []

  const fileNames = fs.readdirSync(newsDirectory)
  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
    .map((fileName) => {
      const fullPath = path.join(newsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      if (data.status !== 'published') return null

      const author: Author = {
        name: data.author?.name || 'Manhattan Plumbing Team',
        role: data.author?.role || 'Expert Plumber',
        image: formatImage(data.author?.image, data.author?.name),
        bio: data.author?.bio,
      }

      return {
        ...data,
        slug: data.slug || slugify(data.title),
        title: data.title,
        date: data.date,
        author,
        category: data.category,
        tags: data.tags || [],
        featuredImage: formatImage(data.featuredImage, data.title),
        excerpt: data.excerpt || '',
        readingTime: data.readingTime || '5 min read',
        status: data.status || 'published',
        featured: data.featured || false,
        content,
      } as Post
    })
    .filter((post): post is Post => post !== null)

  return allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

/**
 * Retrieves a lightweight version of all posts for search indexing.
 * Excludes full content and complex author objects to minimize payload.
 */
export function getSearchIndex() {
  const posts = getAllPosts()
  const services = getAllServices()
  const legalPages = getAllLegalPages()

  const postIndex = posts.map(post => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    tags: post.tags,
    featuredImage: {
      src: post.featuredImage.src,
      alt: post.featuredImage.alt
    },
    type: 'news'
  }))

  const serviceIndex = services.map(service => ({
    slug: `/services/${service.slug}`,
    title: service.title,
    excerpt: service.description,
    category: 'Services',
    tags: [],
    featuredImage: {
      src: (service.heroImage as ImageSource).src,
      alt: (service.heroImage as ImageSource).alt
    },
    type: 'service'
  }))

  const legalIndex = legalPages.map(page => ({
    slug: `/${page.slug}`,
    title: page.title,
    excerpt: page.description,
    category: 'Legal',
    tags: [],
    featuredImage: {
      src: '/images/legal-placeholder.jpg',
      alt: page.title
    },
    type: 'legal'
  }))

  return [...postIndex, ...serviceIndex, ...legalIndex]
}

/**
 * Retrieves all unique tags from all published posts.
 */
export function getAllTags(): string[] {
  const allPosts = getAllPosts()
  const tags = new Set<string>()
  allPosts.forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag))
  })
  return Array.from(tags)
}

/**
 * Retrieves all unique categories from all published posts.
 */
export function getAllCategories(): string[] {
  const allPosts = getAllPosts()
  const categories = new Set<string>()
  allPosts.forEach((post) => {
    if (post.category) categories.add(post.category)
  })
  return Array.from(categories)
}

/**
 * Gets all slugs for static generation.
 */
export function getAllPostSlugs() {
  return getAllPosts().map((post) => ({
    params: { slug: post.slug },
  }))
}

/**
 * Retrieves a single post by slug.
 */
export async function getPostData(slug: string): Promise<Post | undefined> {
  const allPosts = getAllPosts()
  return allPosts.find((post) => post.slug === slug)
}

/**
 * Gets adjacent posts for navigation.
 */
export function getAdjacentPosts(currentSlug: string) {
  const allPosts = getAllPosts()
  const currentIndex = allPosts.findIndex((post) => post.slug === currentSlug)
  
  return {
    // Newer post (lower index)
    next: currentIndex > 0 ? allPosts[currentIndex - 1] : null,
    // Older post (higher index)
    prev: currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null,
  }
}
