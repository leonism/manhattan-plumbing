import { globby } from 'globby'
import fs from 'fs-extra'
import matter from 'gray-matter'
import { Feed } from 'feed'
import { marked } from 'marked'
import * as cheerio from 'cheerio'

const SITE_URL = 'https://manhattan-plumbing.pages.dev' // Ensure no trailing spaces
const SITE_TITLE = 'Manhattan Plumbing'
const SITE_DESCRIPTION = 'Professional plumbing services in Manhattan, NY'

function escapeXmlAttribute(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

async function generateRssFeed() {
  marked.setOptions({
    gfm: true,
    breaks: true,
    escape: true,
  })
  try {
    const feed = new Feed({
      title: SITE_TITLE,
      description: SITE_DESCRIPTION,
      id: SITE_URL,
      link: SITE_URL,
      language: 'en',
      image: `${SITE_URL}/logo.png`,
      favicon: `${SITE_URL}/favicon.ico`,
      copyright: `All rights reserved ${new Date().getFullYear()}, Manhattan Plumbing`,
      updated: new Date(),
      feedLinks: {
        rss2: `${SITE_URL}/rss.xml`,
        json: `${SITE_URL}/feed.json`,
        atom: `${SITE_URL}/atom.xml`,
      },
      author: {
        name: 'Manhattan Plumbing',
        email: 'info@manhattanplumbing.com',
        link: SITE_URL,
      },
    })

    // Get all markdown files
    const contentFiles = await globby(['src/content/**/*.md', 'src/content/**/*.mdx'])

    const staticPages = [
      {
        url: '/',
        title: 'Manhattan Plumbing Home',
        description: 'Your trusted local plumber in Manhattan.',
      },
      {
        url: '/news',
        title: 'Manhattan Plumbing News',
        description: 'Latest news and articles from Manhattan Plumbing.',
      },
      {
        url: '/privacy-policy',
        title: 'Privacy Policy | Manhattan Plumbing',
        description: 'Manhattan Plumbing Privacy Policy.',
      },
      {
        url: '/terms-of-service',
        title: 'Terms of Service | Manhattan Plumbing',
        description: 'Manhattan Plumbing Terms of Service.',
      },
      {
        url: '/cookie-policy',
        title: 'Cookie Policy | Manhattan Plumbing',
        description: 'Manhattan Plumbing Cookie Policy.',
      },
      {
        url: '/services/drain-service',
        title: 'Drain Cleaning Services | Manhattan Plumbing',
        description: 'Fast and effective drain cleaning services in Manhattan.',
      },
      {
        url: '/services/emergency-service',
        title: 'Emergency Plumbing Services | Manhattan Plumbing',
        description: '24/7 emergency plumbing services in Manhattan.',
      },
      {
        url: '/services/fixture-service',
        title: 'Fixture Installation & Repair | Manhattan Plumbing',
        description: 'Expert plumbing fixture installation and repair in Manhattan.',
      },
      {
        url: '/services/pipe-service',
        title: 'Pipe Repair & Replacement | Manhattan Plumbing',
        description: 'Durable solutions for leaky, corroded, or damaged pipes in Manhattan.',
      },
      {
        url: '/services/remodeling-service',
        title: 'Bathroom Remodeling | Manhattan Plumbing',
        description: 'Transform your bathroom with our premium remodeling services in Manhattan.',
      },
      {
        url: '/services/water-heater-service',
        title: 'Water Heater Services | Manhattan Plumbing',
        description: 'Reliable water heater installation, repair, and maintenance in Manhattan.',
      },
      {
        url: '/location',
        title: 'Our Location | Manhattan Plumbing',
        description:
          'Find Manhattan Plumbing at our convenient location in the heart of Manhattan.',
      },
    ]

    staticPages.forEach((page) => {
      feed.addItem({
        title: page.title,
        id: `${SITE_URL}${page.url}`,
        link: `${SITE_URL}${page.url}`,
        description: page.description,
        date: new Date(),
      })
    })

    // Process markdown files
    await Promise.all(
      contentFiles.map(async (file) => {
        const fileContent = await fs.readFile(file, 'utf-8')
        const { data, content: mdxContent } = matter(fileContent, {
          engines: { js: () => ({}) },
        })

        // Convert markdown to HTML
        let htmlContent = marked(mdxContent)

        // Use cheerio to parse HTML and escape ampersands in image src attributes
        const $ = cheerio.load(htmlContent)
        $('img').each((i, elem) => {
          const src = $(elem).attr('src')
          if (
            src &&
            !src.startsWith('http://') &&
            !src.startsWith('https://') &&
            !src.startsWith('//')
          ) {
            $(elem).attr('src', SITE_URL + src)
          } else if (src) {
            $(elem).attr('src', src)
          }
        })
        $('a').each((i, elem) => {
          const href = $(elem).attr('href')
          if (
            href &&
            !href.startsWith('http://') &&
            !href.startsWith('https://') &&
            !href.startsWith('//') &&
            !href.startsWith('#')
          ) {
            $(elem).attr('href', SITE_URL + href)
          } else if (href) {
            $(elem).attr('href', href)
          }
        })
        htmlContent = $('body').html()
        // Explicitly remove html, head, body tags if they somehow persist
        htmlContent = htmlContent.replace(/<\/?(html|head|body)>/g, '')

        const slug = file.replace('src/content/news/', '').replace('.md', '').replace('.mdx', '')
        const url = `${SITE_URL}/news/${slug}`

        feed.addItem({
          title: data.title,
          id: url,
          link: url,
          description: data.excerpt,
          content: htmlContent, // Use the escaped HTML content
          author: [
            {
              name: data.author.name,
              link: url,
            },
          ],
          date: new Date(data.date),
          image: escapeXmlAttribute(encodeURI(data.featuredImage.src)),
          enclosure: {
            url: escapeXmlAttribute(encodeURI(data.featuredImage.src)),
            type: 'image/jpeg',
            length: 0,
          },
          category: data.tags.map((tag) => ({ name: tag })),
        })
      })
    )

    // Write feed files
    await fs.ensureDir('public')
    await Promise.all([
      fs.writeFile('public/rss.xml', feed.rss2()),
      fs.writeFile('public/feed.json', feed.json1()),
      fs.writeFile('public/atom.xml', feed.atom1()),
    ])

    console.log('RSS feeds generated successfully!')
  } catch (error) {
    console.error('Error generating RSS feeds:', error)
  }
}

generateRssFeed()
