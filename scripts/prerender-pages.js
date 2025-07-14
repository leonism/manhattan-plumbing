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



