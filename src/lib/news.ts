import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { slugify } from '@/utils/slugify'
import type { Post, Author, ImageSource } from '@/types'

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
