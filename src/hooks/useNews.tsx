import { useMemo } from 'react'
import type { Post, UseNewsOptions } from '../types/news'
import { slugify } from '../utils/slugify'

interface MDXModule {
  default: React.ComponentType<object>
  frontmatter: Post
}

type AuthorImage =
  | string
  | {
      src: string
      alt?: string
      caption?: string
    }

const postFiles = import.meta.glob<MDXModule>('../content/news/*.mdx', { eager: true })

// --- Utilities ---
const formatFeaturedImage = (image: Post['featuredImage']) => {
  const isRemote = image.src.startsWith('http')
  const base = isRemote ? image.src : `/src/assets/images/${image.src}`

  return {
    src: base,
    webp: isRemote ? base : `${base}?format=webp`,
    avif: isRemote ? base : `${base}?format=avif`,
    alt: image.alt,
    caption: image.caption,
  }
}

const formatAuthorImage = (img: AuthorImage) => {
  const getBase = (src: string) => ({
    src,
    webp: src,
    avif: src,
  })

  if (typeof img === 'string') {
    return img.startsWith('http')
      ? getBase(img)
      : {
          src: `/src/assets/images/${img}`,
          webp: `/src/assets/images/${img}?format=webp`,
          avif: `/src/assets/images/${img}?format=avif`,
          alt: '',
        }
  }

  const src = img?.src || ''
  const base = src.startsWith('http') ? src : `/src/assets/images/${src}`
  return {
    src: base,
    webp: `${base}?format=webp`,
    avif: `${base}?format=avif`,
    alt: img.alt || '',
    caption: img.caption,
  }
}

// --- Static All Posts Loader ---
const allPostsData: Post[] = Object.entries(postFiles)
  .map(([, module]) => {
    const { frontmatter: data, default: body } = module

    if (data.status !== 'published') return null

    return {
      ...data,
      slug: slugify(data.title),
      featuredImage: formatFeaturedImage(data.featuredImage),
      author: {
        ...data.author,
        image: formatAuthorImage(data.author.image),
      },
      body,
    } as Post
  })
  .filter(Boolean)
  .sort((a, b) => new Date(b!.date).getTime() - new Date(a!.date).getTime()) as Post[]

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
