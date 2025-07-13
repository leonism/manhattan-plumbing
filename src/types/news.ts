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
    caption: string
    webp: string
    avif: string
  }
  excerpt: string
  readingTime: string
  status: string
  featured: boolean
  body: React.ComponentType<object> // MDX content as a React component
}

export interface UseNewsOptions {
  category?: string
  tag?: string
  page?: number
  limit?: number
}
