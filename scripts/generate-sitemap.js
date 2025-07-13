import { globby } from 'globby'
import fs from 'fs-extra'
import matter from 'gray-matter'
const slugify = (text) => {
  return text
    .toString()
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
}

const SITE_URL = 'https://manhattan-plumbing.pages.dev'

async function generateSitemap() {
  try {
    // Get all markdown files in the content directory
    const contentFiles = await globby(['src/content/**/*.md', 'src/content/**/*.mdx'])

    // Get all static pages
    const staticPages = [
      '/',
      '/news',
      '/privacy-policy',
      '/terms-of-service',
      '/cookie-policy',
      '/services/drain-service',
      '/services/emergency-service',
      '/services/fixture-service',
      '/services/pipe-service',
      '/services/remodeling-service',
      '/services/water-heater-service',
      '/location',
    ]

    const allCategories = new Set()
    const allTags = new Set()

    // Process markdown files to get their data and collect categories/tags
    const newsPages = await Promise.all(
      contentFiles.map(async (file) => {
        const content = await fs.readFile(file, 'utf-8')
        const { data } = matter(content, { engines: { js: () => ({}) } })
        const slug = file.replace('src/content/news/', '').replace(/\.mdx?$/, '')

        if (data.category) {
          allCategories.add(data.category)
        }
        if (data.tags && Array.isArray(data.tags)) {
          data.tags.forEach((tag) => allTags.add(tag))
        }

        return {
          url: `/news/${slug}`,
          lastMod: data.lastModified || data.date,
          priority: data.priority === 'high' ? '0.8' : '0.6',
        }
      })
    )

    // Generate category pages
    const categoryPages = Array.from(allCategories).map((category) => ({
      url: `/news/category/${slugify(category)}`,
      lastMod: new Date().toISOString(), // Use current date for dynamic pages
      priority: '0.7',
    }))

    // Generate tag pages
    const tagPages = Array.from(allTags).map((tag) => ({
      url: `/news/tag/${slugify(tag)}`,
      lastMod: new Date().toISOString(), // Use current date for dynamic pages
      priority: '0.7',
    }))

    // Combine all pages
    const allPages = [
      ...staticPages,
      ...newsPages.map((p) => p.url),
      ...categoryPages.map((p) => p.url),
      ...tagPages.map((p) => p.url),
    ]

    // Generate sitemap XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages
    .map((page) => {
      let lastMod = new Date().toISOString()
      let priority = '0.7'

      // Find specific lastMod and priority for news pages
      const newsPage = newsPages.find((np) => np.url === page)
      if (newsPage) {
        lastMod = new Date(newsPage.lastMod).toISOString()
        priority = newsPage.priority
      } else if (page === '/') {
        priority = '1.0'
      }

      return `
  <url>
    <loc>${SITE_URL}${page}</loc>
    <lastmod>${lastMod}</lastmod>
    <priority>${priority}</priority>
  </url>`
    })
    .join('')}
</urlset>`

    // Write sitemap to public directory
    await fs.writeFile('public/sitemap.xml', sitemap)
    console.log('Sitemap generated successfully!')
  } catch (error) {
    console.error('Error generating sitemap:', error)
  }
}

generateSitemap()
