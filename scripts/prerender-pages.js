import fs from 'fs'
import path from 'path'
import * as cheerio from 'cheerio'
import { getNewsData } from './get-news-data.js' // Note the .js extension for ES modules
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import { gzip, brotliCompress } from 'zlib'
import { promisify } from 'util'

const gzipPromise = promisify(gzip)
const brotliPromise = promisify(brotliCompress)

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const TEMPLATE_PATH = path.resolve(__dirname, '../index.html')
const DIST_DIR = path.resolve(__dirname, '../dist')

async function compressAndWriteFile(filePath, content) {
  fs.writeFileSync(filePath, content)
  console.log(`Pre-rendered: ${filePath}`)

  const gzipPath = `${filePath}.gz`
  const brotliPath = `${filePath}.br`

  try {
    const gzippedContent = await gzipPromise(Buffer.from(content))
    fs.writeFileSync(gzipPath, gzippedContent)
    console.log(`Compressed (gzip): ${gzipPath}`)
  } catch (error) {
    console.error(`Error gzipping ${filePath}:`, error)
  }

  try {
    const brotliContent = await brotliPromise(Buffer.from(content))
    fs.writeFileSync(brotliPath, brotliContent)
    console.log(`Compressed (brotli): ${brotliPath}`)
  } catch (error) {
    console.error(`Error brotli compressing ${filePath}:`, error)
  }
}

async function extractSEOInfo(filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const titleMatch = fileContent.match(/title="([^"]*)"/)
  const descriptionMatch = fileContent.match(/description="([^"]*)"/)

  return {
    title: titleMatch ? titleMatch[1] : 'Manhattan Plumbing',
    description: descriptionMatch ? descriptionMatch[1] : 'Manhattan Plumbing Services',
  }
}

async function prerenderStaticPage(pagePath, title, description, contentHtml = '') {
  const templateHtml = fs.readFileSync(TEMPLATE_PATH, 'utf-8')
  const $ = cheerio.load(templateHtml)

  // Remove existing meta tags and title to avoid duplication
  $('title').remove()
  $('meta[name="description"]').remove()
  $('meta[name="keywords"]').remove()
  $('meta[name="author"]').remove()
  $('meta[property^="og:"]').remove() // Remove all OpenGraph tags
  $('meta[name^="twitter:"]').remove() // Remove all Twitter tags

  // Add new meta tags and title dynamically
  $('head').append(`<title>${title}</title>`)
  $('head').append(`<meta name="description" content="${description}">`)
  // Add other meta tags as needed, similar to news prerendering

  // Remove existing footer to avoid duplication
  $('footer').remove()

  // Inject content into the #root div
  $('#root').html(
    contentHtml ||
      `<div id="static-page-content"><h1>${title}</h1><p>${description}</p><p>This is a static page. Full content will be rendered by the client-side application.</p></div>`
  )

  const outputFilePath = path.join(DIST_DIR, pagePath, 'index.html')
  const outputDirPath = path.dirname(outputFilePath)

  if (!fs.existsSync(outputDirPath)) {
    fs.mkdirSync(outputDirPath, { recursive: true })
  }

  await compressAndWriteFile(outputFilePath, $.html())
}

async function prerenderPages() {
  console.log('Starting page pre-rendering...')

  // Ensure dist directory exists
  if (!fs.existsSync(DIST_DIR)) {
    fs.mkdirSync(DIST_DIR, { recursive: true })
  }

  // Prerender News Pages
  const NEWS_DIST_DIR = path.join(DIST_DIR, 'news')
  if (!fs.existsSync(NEWS_DIST_DIR)) {
    fs.mkdirSync(NEWS_DIST_DIR, { recursive: true })
  }
  const templateHtml = fs.readFileSync(TEMPLATE_PATH, 'utf-8')
  const posts = getNewsData()

  for (const post of posts) {
    const $ = cheerio.load(templateHtml)
    const postPath = path.join(NEWS_DIST_DIR, post.slug)
    if (!fs.existsSync(postPath)) {
      fs.mkdirSync(postPath, { recursive: true })
    }

    $('title').remove()
    $('meta[name="description"]').remove()
    $('meta[name="keywords"]').remove()
    $('meta[name="author"]').remove()
    $('meta[property^="og:"]').remove()
    $('meta[name^="twitter:"]').remove()
    $('footer').remove()

    $('#root').html(`
      <div id="news-post-container">
        <h1>${post.title}</h1>
        <p>${post.excerpt}</p>
        <div class="mdx-content">
          ${post.body}
        </div>
      </div>
    `)

    $('head').append(`<title>${post.seoTitle || post.title}</title>`)
    $('head').append(`<meta name="description" content="${post.excerpt}">`)
    if (post.tags && post.tags.length > 0) {
      $('head').append(`<meta name="keywords" content="${post.tags.join(', ')}">`)
    }
    if (post.author && post.author.name) {
      $('head').append(`<meta name="author" content="${post.author.name}">`)
    }

    $('head').append(`<meta property="og:title" content="${post.seoTitle || post.title}">`)
    $('head').append(`<meta property="og:description" content="${post.excerpt}">`)
    $('head').append(
      `<meta property="og:url" content="https://manhattan-plumbing.pages.dev/news/${post.slug}">`
    )
    if (post.featuredImage && post.featuredImage.src) {
      $('head').append(
        `<meta property="og:image" content="https://manhattan-plumbing.pages.dev${post.featuredImage.src}">`
      )
    }
    $('head').append(`<meta property="og:type" content="article">`)

    $('head').append(`<meta name="twitter:card" content="summary_large_image">`)
    $('head').append(`<meta name="twitter:title" content="${post.seoTitle || post.title}">`)
    $('head').append(`<meta name="twitter:description" content="${post.excerpt}">`)
    if (post.featuredImage && post.featuredImage.src) {
      $('head').append(
        `<meta name="twitter:image" content="https://manhattan-plumbing.pages.dev${post.featuredImage.src}">`
      )
    }

    if (post.jsonLd) {
      $('head').append(`<script type="application/ld+json">${JSON.stringify(post.jsonLd)}</script>`)
    }

    const outputFilePath = path.join(postPath, 'index.html')
    await compressAndWriteFile(outputFilePath, $.html())
  }

  // Prerender Legal Pages
  const legalPagesDir = path.resolve(__dirname, '../src/pages/legal')
  const legalFiles = fs.readdirSync(legalPagesDir).filter((file) => file.endsWith('.tsx'))

  for (const file of legalFiles) {
    const filePath = path.join(legalPagesDir, file)
    const pageSlug = file.replace(/\.tsx$/, '').toLowerCase()
    const pagePath = `legal/${pageSlug}`
    const seoInfo = await extractSEOInfo(filePath)
    await prerenderStaticPage(pagePath, seoInfo.title, seoInfo.description)
  }

  // Prerender Services Pages
  const servicesPagesDir = path.resolve(__dirname, '../src/pages/services')
  const servicesFiles = fs.readdirSync(servicesPagesDir).filter((file) => file.endsWith('.tsx'))

  for (const file of servicesFiles) {
    const filePath = path.join(servicesPagesDir, file)
    const pageSlug = file.replace(/\.tsx$/, '').toLowerCase()
    const pagePath = `services/${pageSlug}`
    const seoInfo = await extractSEOInfo(filePath)
    await prerenderStaticPage(pagePath, seoInfo.title, seoInfo.description)
  }

  console.log('All page pre-rendering complete.')
}

prerenderPages().catch(console.error)
