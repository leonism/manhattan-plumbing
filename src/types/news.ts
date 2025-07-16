export interface Post {
  slug: string
  title: string
  seoTitle?: string
  date: string
  lastModified?: string
  jsonLd?: object
  author: {
    name: string
    role: string
    image: {
      src: string
      webp: string
      avif: string
    }
  }
  category: string
  tags: string[]
  featuredImage: {
    src: string
    alt: string
    width?: number
    height?: number
    webp: string
    avif: string
  }
  excerpt: string
  readingTime: string
  status: string
  featured: boolean
  body: string | React.ComponentType<Record<string, unknown>> // MDX content as a React component or string
}

export interface UseNewsOptions {
  category?: string
  tag?: string
  page?: number
  limit?: number
}
