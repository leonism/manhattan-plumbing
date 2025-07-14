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
  const allPosts = getNewsData()
  const postsPerPage = 9 // Matches the limit in useNews hook
  const totalPages = Math.ceil(allPosts.length / postsPerPage)

  // Prerender individual news posts
  for (const post of allPosts) {
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

  // Prerender news pagination pages
  for (let i = 1; i <= totalPages; i++) {
    const $ = cheerio.load(templateHtml)
    const pagePath = i === 1 ? 'news' : `news/${i}`
    const outputDirPath = path.join(DIST_DIR, pagePath)
    if (!fs.existsSync(outputDirPath)) {
      fs.mkdirSync(outputDirPath, { recursive: true })
    }

    const start = (i - 1) * postsPerPage
    const paginatedPosts = allPosts.slice(start, start + postsPerPage)

    let newsCardsHtml = '';
    for (const post of paginatedPosts) {
      // This is a simplified representation. In a real scenario, you'd render the NewsCard component here.
      // For static prerendering, you might need to duplicate some of the NewsCard's HTML structure.
      newsCardsHtml += `
        <div class="news-card">
          <h2><a href="/news/${post.slug}">${post.title}</a></h2>
          <p>${post.excerpt}</p>
          <p>Date: ${new Date(post.date).toLocaleDateString()}</p>
        </div>
      `;
    }

    let paginationControlsHtml = '';
    if (totalPages > 1) {
      paginationControlsHtml += '<nav class="mt-12 flex items-center justify-center space-x-2">';
      // Previous button
      paginationControlsHtml += `
        <button class="inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-hidden focus:ring-2 focus:ring-offset-2 rounded-md hover:bg-blue-50 dark:hover:bg-blue-950 text-slate-800 dark:text-white focus:ring-blue-500 text-sm px-3 py-1.5"
                ${i === 1 ? 'disabled' : ''}
                onclick="window.location.href='/${i === 2 ? 'news' : `news/${i - 1}`}'">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left h-4 w-4"><path d="m15 18-6-6 6-6"/></svg>
          Previous
        </button>
      `;

      // Page number buttons
      for (let p = 1; p <= totalPages; p++) {
        const isActive = i === p;
        paginationControlsHtml += `
          <button class="inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-hidden focus:ring-2 focus:ring-offset-2 rounded-full h-8 w-8 ${isActive ? 'bg-blue-600 hover:bg-blue-700 text-white hover:text-white focus:ring-blue-500' : 'border border-slate-300 dark:border-slate-600 bg-transparent hover:bg-blue-50 dark:hover:bg-blue-950 text-slate-800 dark:text-white focus:ring-blue-500'}"
                  onclick="window.location.href='/${p === 1 ? 'news' : `news/${p}`}'">
            ${p}
          </button>
        `;
      }

      // Next button
      paginationControlsHtml += `
        <button class="inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-hidden focus:ring-2 focus:ring-offset-2 rounded-md hover:bg-blue-50 dark:hover:bg-blue-950 text-slate-800 dark:text-white focus:ring-blue-500 text-sm px-3 py-1.5"
                ${i === totalPages ? 'disabled' : ''}
                onclick="window.location.href='/${i === totalPages - 1 ? 'news' : `news/${i + 1}`}'">
          Next
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right h-4 w-4"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      `;
      paginationControlsHtml += '</nav>';
    }

    $('#root').html(`
      <header class="mb-12 text-center">
        <h1 class="text-4xl font-bold">Latest News</h1>
        <p class="text-lg text-gray-600 dark:text-gray-300">Stay informed about the latest updates and insights</p>
      </header>
      <section class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        ${newsCardsHtml}
      </section>
      ${paginationControlsHtml}
    `);

    // Set SEO for pagination pages
    const pageTitle = i === 1 ? 'Latest News | Manhattan Plumbing' : `News Page ${i} | Manhattan Plumbing`;
    const pageDescription = i === 1 ? 'Stay informed about the latest plumbing news, tips, and company updates from Manhattan Plumbing.' : `Page ${i} of latest news articles from Manhattan Plumbing.`;
    const pageCanonical = i === 1 ? 'https://manhattan-plumbing.pages.dev/news' : `https://manhattan-plumbing.pages.dev/news/${i}`;
    const ogImage = 'https://manhattan-plumbing.pages.dev/manhattan-plumber.png';

    $('title').remove();
    $('meta[name="description"]').remove();
    $('meta[property^="og:"]').remove();
    $('meta[name^="twitter:"]').remove();

    $('head').append(`<title>${pageTitle}</title>`);
    $('head').append(`<meta name="description" content="${pageDescription}">`);
    $('head').append(`<meta property="og:title" content="${pageTitle}">`);
    $('head').append(`<meta property="og:description" content="${pageDescription}">`);
    $('head').append(`<meta property="og:url" content="${pageCanonical}">`);
    $('head').append(`<meta property="og:image" content="${ogImage}">`);
    $('head').append(`<meta property="og:type" content="website">`);
    $('head').append(`<meta name="twitter:card" content="summary_large_image">`);
    $('head').append(`<meta name="twitter:title" content="${pageTitle}">`);
    $('head').append(`<meta name="twitter:description" content="${pageDescription}">`);
    $('head').append(`<meta name="twitter:image" content="${ogImage}">`);

    const outputFilePath = path.join(outputDirPath, 'index.html')
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
