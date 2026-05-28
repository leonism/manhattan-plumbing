/**
 * Post-build script to generate .md versions of all static pages
 * This script runs after 'next build' and 'next export'
 * It uses JSDOM to parse the static HTML and Turndown to convert it to Markdown
 */

import fs from 'fs'
import path from 'path'
import { JSDOM } from 'jsdom'
import TurndownService from 'turndown'
import zlib from 'zlib'
import { spawnSync } from 'child_process'

const OUT_DIR = path.resolve(process.cwd(), 'out')
const BASE_URL = 'https://manhattan-plumbing.pages.dev'

// Configure Turndown
const turndownService = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  hr: '---',
  bulletListMarker: '-',
  emDelimiter: '_',
  strongDelimiter: '**',
})

// Custom rule for images to ensure absolute paths or correct relative paths
turndownService.addRule('images', {
  filter: 'img',
  replacement: function (content, node) {
    const img = /** @type {HTMLImageElement} */ (node)
    const alt = img.getAttribute('alt') || ''
    let src = img.getAttribute('src') || ''
    return `![${alt}](${src})`
  },
})

// Custom rule for Article Navigation (Next/Prev links) to ensure they are on new lines
turndownService.addRule('articleNav', {
  /**
   * @param {HTMLElement} node
   * @returns {boolean}
   */
  filter: function (node) {
    return (
      node.tagName === 'DIV' &&
      !!node.className &&
      (node.className.includes('ArticleNavigation') || node.className.includes('navigation'))
    )
  },
  replacement: function (content) {
    // Ensure links are separated and on new lines
    // content usually looks like [Text](/url)[Text](/url)
    return '\n\n' + content.trim().replace(/\]\(/g, ']\n\n(') + '\n\n'
  },
})

/**
 * Recursively find all HTML files
 * @param {string} dir
 * @param {(filePath: string) => void} callback
 */
function walk(dir, callback) {
  if (!fs.existsSync(dir)) return
  fs.readdirSync(dir).forEach((f) => {
    let dirPath = path.join(dir, f)
    let isDirectory = fs.statSync(dirPath).isDirectory()
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f))
  })
}

/**
 * Clean up content specifically for our plumbing site structure
 * @param {Document} document
 * @param {string} relativePath
 */
function cleanContent(document, relativePath) {
  // 1. Remove Vercel Insights & other scripts (for Cloudflare parity)
  const elementsToRemove = [
    'script',
    'style',
    'noscript',
    'iframe',
    'svg',
    '.skip-to-content',
    '#vercel-live-feedback',
    '.vercel-insights',
    'script[src*="va.js"]',
    'script[src*="insights"]',
    'script[src*="vercel"]',
    'script[id*="vercel"]',
  ]

  elementsToRemove.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el) => el.remove())
  })

  // 2. Pre-process cards for better Markdown (Home page, News Index, Category/Tag pages)
  // We want to simplify cards in lists, but PRESERVE main articles
  const isLegalPage =
    relativePath.includes('privacy-policy') ||
    relativePath.includes('terms-of-service') ||
    relativePath.includes('cookies-policy') ||
    relativePath.includes('about') ||
    relativePath.includes('contact')

  document.querySelectorAll('.NewsCard, .PostCard, .card, article').forEach((card) => {
    const cardEl = /** @type {HTMLElement} */ (card)

    // Robust main article detection:
    // A main article is typically the only <article> inside <main>,
    // or has specific semantic markers. In this app, main articles for news/legal
    // are NOT inside a grid container.
    const isInGrid = !!cardEl.closest('.grid') || !!cardEl.closest('[class*="Grid"]')
    const isMainArticle = cardEl.tagName === 'ARTICLE' && !isInGrid

    if (isMainArticle || isLegalPage) return

    const h2 = cardEl.querySelector('h2, h3, h4')
    const link = cardEl.querySelector('a')
    const time = cardEl.querySelector('time')
    const p = cardEl.querySelector('p')
    const author = cardEl
      .querySelector('[class*="author"], .flex.items-center.space-x-1')
      ?.textContent?.trim()

    if (h2 && link) {
      const titleText = h2.textContent?.trim() || ''
      const href = link.getAttribute('href')
      const dateText = time ? ` | ${time.textContent?.trim()}` : ''
      const authorText = author ? ` | By ${author.split('•')[0].trim()}` : ''
      const excerptText = p ? `\n\n${p.textContent?.trim()}` : ''

      const replacement = document.createElement('div')
      replacement.innerHTML = `
                <h3><a href="${href}">${titleText}</a></h3>
                <p><em>${dateText}${authorText}</em></p>
                <p>${excerptText}</p>
                <hr />
            `
      cardEl.parentNode?.replaceChild(replacement, cardEl)
    }
  })

  return document
}

/**
 * Compress a file using Brotli (built-in zlib) and Zstandard (cli tool)
 * @param {string} filePath
 */
function compressFile(filePath) {
  try {
    const data = fs.readFileSync(filePath)
    
    // Brotli compression (.br)
    const brPath = filePath + '.br'
    const brData = zlib.brotliCompressSync(data, {
      params: {
        [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
      },
    })
    fs.writeFileSync(brPath, brData)
    
    // Zstandard compression (.zst)
    const zstPath = filePath + '.zst'
    const result = spawnSync('zstd', ['-q', '-f', '-19', '-T0', filePath, '-o', zstPath])
    if (result.status !== 0) {
      throw new Error(result.stderr ? result.stderr.toString() : 'zstd failed with non-zero exit code')
    }
  } catch (error) {
    console.error(`❌ Compression failed for ${filePath}:`, error)
  }
}

async function main() {
  console.log('🚀 Starting post-build markdown generation...')

  if (!fs.existsSync(OUT_DIR)) {
    console.error('❌ Error: "out" directory not found.')
    process.exit(1)
  }

  walk(OUT_DIR, (filePath) => {
    if (path.extname(filePath) !== '.html') return

    const relativePath = path.relative(OUT_DIR, filePath).replace(/\\/g, '/')
    if (relativePath === '404.html' || relativePath.includes('/_next/')) return

    console.log(`📄 Processing ${relativePath}...`)

    try {
      const html = fs.readFileSync(filePath, 'utf-8')
      const dom = new JSDOM(html)
      const document = dom.window.document

      // Extract metadata
      const title = document.title || 'Manhattan Plumbing'
      const description =
        document.querySelector('meta[name="description"]')?.getAttribute('content') || ''

      // Determine Markdown Path
      const isIndex = relativePath.endsWith('index.html')
      const mdPath = isIndex
        ? relativePath.replace(/index\.html$/, 'index.md')
        : relativePath.replace(/\.html$/, '/index.md')

      const canonicalUrl = `${BASE_URL}/${relativePath.replace(/\/index\.html$/, '').replace(/\.html$/, '')}`

      // Clean the content
      cleanContent(document, relativePath)

      // Structure: Header -> Main -> Footer
      const header = document.querySelector('header')
      const main =
        document.querySelector('main') || document.querySelector('article') || document.body
      const footer = document.querySelector('footer')

      const combinedContainer = document.createElement('div')
      if (header) combinedContainer.appendChild(header.cloneNode(true))

      // Add other navigation elements if found
      document.querySelectorAll('nav').forEach((nav) => {
        if (!header?.contains(nav) && !footer?.contains(nav)) {
          combinedContainer.appendChild(nav.cloneNode(true))
        }
      })

      if (main) {
        const mainClone = /** @type {HTMLElement} */ (main.cloneNode(true))
        // Remove header/footer if they were nested in body fallback
        if (main === document.body) {
          mainClone.querySelectorAll('header, footer').forEach((el) => el.remove())
        }
        combinedContainer.appendChild(mainClone)
      }
      if (footer) combinedContainer.appendChild(footer.cloneNode(true))

      // Convert to Markdown
      let markdown = turndownService.turndown(combinedContainer.innerHTML)

      // Final cleanup
      // Strip remaining HTML tags
      markdown = markdown.replace(/<[^>]+>/g, '')

      // Clean up excessive newlines
      markdown = markdown.replace(/\n{4,}/g, '\n\n\n')
      markdown = markdown.replace(/\n{3}/g, '\n\n')
      markdown = markdown.replace(/&nbsp;/g, ' ')

      // Ensure H1
      let pageH1 = document.querySelector('h1')?.textContent?.trim() || title
      const h1Regex = new RegExp(`^# ${pageH1.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*`, 'i')
      markdown = markdown.replace(h1Regex, '')
      markdown = `# ${pageH1}\n\n${markdown}`

      // Add frontmatter
      const frontmatter = `---
title: "${title.replace(/"/g, '\\"')}"
description: "${description.replace(/"/g, '\\"')}"
url: "${canonicalUrl}"
date_generated: "${new Date().toISOString()}"
---

`
      const finalMarkdown = frontmatter + markdown

      // Save .md file
      const absoluteMdPath = path.join(OUT_DIR, mdPath)
      const mdDir = path.dirname(absoluteMdPath)
      if (!fs.existsSync(mdDir)) fs.mkdirSync(mdDir, { recursive: true })
      fs.writeFileSync(absoluteMdPath, finalMarkdown)

      // Add alternate link to the HTML head pointing to the markdown version
      let altLink = document.querySelector('link[rel="alternate"][type="text/markdown"]')
      if (!altLink) {
        altLink = document.createElement('link')
        altLink.setAttribute('rel', 'alternate')
        altLink.setAttribute('type', 'text/markdown')
        const head = document.head || document.getElementsByTagName('head')[0]
        if (head) {
          head.appendChild(altLink)
        }
      }
      const mdUrl = '/' + mdPath.replace(/\\/g, '/')
      altLink.setAttribute('href', mdUrl)
      altLink.setAttribute('title', 'Markdown version')

      // Save modified HTML without Vercel scripts and React hydration markers
      let finalHtml = dom.serialize()
      finalHtml = finalHtml.replace(/<!--\$-->|<!--\/\$-->/g, '')
      fs.writeFileSync(filePath, finalHtml)

    } catch (error) {
      console.error(`❌ Error processing ${filePath}:`, error)
    }
  })

  console.log('✨ Markdown generation complete!')

  console.log('📦 Starting Brotli and Zstandard compression for static assets...')
  let compressedCount = 0
  const COMPRESSIBLE_EXTENSIONS = ['.html', '.md', '.js', '.css', '.json', '.xml', '.svg', '.txt']

  walk(OUT_DIR, (filePath) => {
    const ext = path.extname(filePath).toLowerCase()
    if (ext === '.br' || ext === '.zst') return
    
    if (COMPRESSIBLE_EXTENSIONS.includes(ext)) {
      compressFile(filePath)
      compressedCount++
    }
  })

  console.log(`✨ Compression complete! Pre-compressed ${compressedCount} assets to .br and .zst.`)
}

main()
