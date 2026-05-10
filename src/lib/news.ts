import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import { slugify } from '@/utils/slugify'
import type { Post } from '@/types/news'

const newsDirectory = path.join(process.cwd(), 'src/content/news')

export function getAllPosts(): Post[] {
  // Get file names under /content/news
  const fileNames = fs.readdirSync(newsDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      // Remove ".mdx" from file name to get slug
      const fullPath = path.join(newsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      // Use gray-matter to parse the post metadata section
      const { data, content } = matter(fileContents)

      if (data.status !== 'published') return null

      // Combine the data with the slug
      return {
        ...data,
        title: data.title,
        date: data.date,
        category: data.category,
        tags: data.tags || [],
        excerpt: data.excerpt || '',
        readingTime: data.readingTime || '',
        status: data.status || 'published',
        featured: data.featured || false,
        slug: slugify(data.title),
        content,
        body: '',
        featuredImage: formatFeaturedImage(data.featuredImage),
        author: {
          ...data.author,
          image: formatAuthorImage(data.author.image),
        },
      } as Post
    })
    .filter(Boolean) as Post[]

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(newsDirectory)
  return fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const fullPath = path.join(newsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)
      return {
        params: {
          slug: slugify(data.title),
        },
      }
    })
}

export async function getPostData(slug: string): Promise<Post | undefined> {
  const allPosts = getAllPosts()
  const post = allPosts.find((post) => post.slug === slug)
  
  if (post && typeof post.content === 'string') {
    // Process markdown to HTML using marked
    post.content = await marked.parse(post.content)
  }
  
  return post
}

// Helpers from useNews.tsx
function formatFeaturedImage(image: any) {
  const src = image.src || ''
  const isRemote = src.startsWith('http')
  const base = isRemote ? src : `/images/${src}`

  return {
    src: base,
    webp: isRemote ? base : `${base}?format=webp`,
    avif: isRemote ? base : `${base}?format=avif`,
    alt: image.alt || '',
    caption: image.caption,
  }
}

function formatAuthorImage(img: any) {
  const getBase = (src: string) => ({
    src,
    webp: src,
    avif: src,
  })

  if (typeof img === 'string') {
    return img.startsWith('http')
      ? getBase(img)
      : {
          src: `/images/${img}`,
          webp: `/images/${img}`,
          avif: `/images/${img}`,
          alt: '',
        }
  }

  const src = img?.src || ''
  const base = src.startsWith('http') ? src : `/images/${src}`
  return {
    src: base,
    webp: base,
    avif: base,
    alt: img.alt || '',
    caption: img.caption,
  }
}
