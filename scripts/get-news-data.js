import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { slugify } from '../src/utils/slugify.js'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const NEWS_CONTENT_DIR = path.resolve(__dirname, '../src/content/news')

export const getNewsData = () => {
  const allPosts = []
  const files = fs.readdirSync(NEWS_CONTENT_DIR)

  for (const file of files) {
    if (file.endsWith('.mdx')) {
      const filePath = path.join(NEWS_CONTENT_DIR, file)
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      const { data, content } = matter(fileContent)

      // Ensure all necessary fields are present and handle defaults
      const post = {
        slug: data.slug || slugify(data.title),
        title: data.title || '',
        seoTitle: data.seoTitle || data.title,
        date: data.date || '',
        lastModified: data.lastModified || data.date,
        author: data.author || {
          name: 'Manhattan Plumbing',
          role: '',
          image: { src: '', webp: '', avif: '' },
        },
        category: data.category || '',
        tags: data.tags || [],
        featuredImage: data.featuredImage || { src: '', alt: '', caption: '', webp: '', avif: '' },
        excerpt: data.excerpt || '',
        readingTime: data.readingTime || '',
        status: data.status || 'published',
        featured: data.featured || false,
        jsonLd: data.jsonLd || null,
        body: content, // Store the MDX content as a string
        // Note: For client-side rendering, the MDX component itself is passed via module.default
        // This `body` field is primarily for prerendering raw MDX content.
      }

      if (post.status === 'published') {
        allPosts.push(post)
      }
    }
  }

  allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  return allPosts
}
