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
import crypto from 'crypto'

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
 * @param {boolean} isForMarkdown
 */
function cleanContent(document, relativePath, isForMarkdown = false) {
  // 1. Remove Vercel Insights & other scripts (for Cloudflare parity)
  const elementsToRemove = [
    'noscript',
    'iframe',
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

  // 2. ONLY for Markdown: Pre-process cards for better readability
  // We want to simplify cards in lists, but PRESERVE main articles
  if (isForMarkdown) {
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
  }

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

      // 1. Clean the content for HTML (minimal)
      cleanContent(document, relativePath, false)

      // 2. Prepare Markdown-specific content
      // Create a temporary container for markdown conversion to avoid polluting the main document
      const markdownDoc = new JSDOM(html).window.document
      cleanContent(markdownDoc, relativePath, true) // Aggressive cleaning for Markdown

      // Structure: Header -> Main -> Footer
      const header = markdownDoc.querySelector('header')
      const main =
        markdownDoc.querySelector('main') || markdownDoc.querySelector('article') || markdownDoc.body
      const footer = markdownDoc.querySelector('footer')

      const combinedContainer = markdownDoc.createElement('div')
      if (header) combinedContainer.appendChild(header.cloneNode(true))

      // Add other navigation elements if found
      markdownDoc.querySelectorAll('nav').forEach((nav) => {
        if (!header?.contains(nav) && !footer?.contains(nav)) {
          combinedContainer.appendChild(nav.cloneNode(true))
        }
      })

      if (main) {
        const mainClone = /** @type {HTMLElement} */ (main.cloneNode(true))
        // Remove header/footer if they were nested in body fallback
        if (main === markdownDoc.body) {
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

  // 1. Process Robots.txt Content Signals
  const robotsPath = path.join(OUT_DIR, 'robots.txt')
  if (fs.existsSync(robotsPath)) {
    console.log('🤖 Injecting Content Signals into robots.txt...')
    let robotsTxt = fs.readFileSync(robotsPath, 'utf-8')
    if (robotsTxt.includes('User-agent: *')) {
      robotsTxt = robotsTxt.replace(
        'User-agent: *',
        'User-agent: *\nContent-Signal: ai-train=no, search=yes, ai-input=no'
      )
      fs.writeFileSync(robotsPath, robotsTxt)
      console.log('✅ Injected Content-Signal into robots.txt successfully.')
    } else {
      console.warn('⚠️ User-agent: * not found in robots.txt. Appending signal at the top.')
      robotsTxt = 'User-agent: *\nContent-Signal: ai-train=no, search=yes, ai-input=no\n\n' + robotsTxt
      fs.writeFileSync(robotsPath, robotsTxt)
    }
  } else {
    console.warn('⚠️ robots.txt not found in build output.')
  }

  // 2. Build Agent Skills Discovery Index
  const skillsDir = path.join(OUT_DIR, '.well-known', 'agent-skills')
  if (!fs.existsSync(skillsDir)) {
    fs.mkdirSync(skillsDir, { recursive: true })
  }

  const contentNegPath = path.join(skillsDir, 'content-negotiation.md')
  const webmcpSkillPath = path.join(skillsDir, 'webmcp.md')

  // If the skill files weren't copied automatically, write fallback versions
  if (!fs.existsSync(contentNegPath)) {
    const fallbackCN = `# Content Negotiation Skill\n\nSupports Accept: text/markdown to serve Markdown.`
    fs.writeFileSync(contentNegPath, fallbackCN)
  }
  if (!fs.existsSync(webmcpSkillPath)) {
    const fallbackWebMCP = `# WebMCP Tools Skill\n\nExposes search_articles, list_services, get_plumbing_quote.`
    fs.writeFileSync(webmcpSkillPath, fallbackWebMCP)
  }

  console.log('🔍 Computing digests for agent skills...')
  const cnData = fs.readFileSync(contentNegPath)
  const cnHash = crypto.createHash('sha256').update(cnData).digest('hex')

  const webmcpData = fs.readFileSync(webmcpSkillPath)
  const webmcpHash = crypto.createHash('sha256').update(webmcpData).digest('hex')

  const discoveryIndex = {
    $schema: 'https://schemas.agentskills.io/discovery/0.2.0/schema.json',
    skills: [
      {
        name: 'content-negotiation',
        type: 'skill-md',
        description: 'Standard content negotiation to serve Markdown pages when requested with Accept: text/markdown.',
        url: `${BASE_URL}/.well-known/agent-skills/content-negotiation.md`,
        digest: `sha256:${cnHash}`
      },
      {
        name: 'webmcp',
        type: 'skill-md',
        description: 'Exposes browser-based tools for searching articles, listing services, and getting plumbing quotes.',
        url: `${BASE_URL}/.well-known/agent-skills/webmcp.md`,
        digest: `sha256:${webmcpHash}`
      }
    ]
  }

  const indexJsonPath = path.join(skillsDir, 'index.json')
  fs.writeFileSync(indexJsonPath, JSON.stringify(discoveryIndex, null, 2))
  console.log('✅ Generated /.well-known/agent-skills/index.json discovery document.')

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
