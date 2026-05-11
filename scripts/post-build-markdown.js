import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';
import TurndownService from 'turndown';

const OUT_DIR = path.resolve(process.cwd(), 'out');
const BASE_URL = 'https://manhattan-plumbing.pages.dev';

const turndownService = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  emDelimiter: '_',
  strongDelimiter: '**',
  bulletListMarker: '-'
});

// Helper to recursively find files
/**
 * @param {string} dir
 * @param {(filePath: string) => void} callback
 */
function walk(dir, callback) {
  fs.readdirSync(dir).forEach( f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

console.log('🚀 Starting post-build markdown generation...');

if (!fs.existsSync(OUT_DIR)) {
  console.error('❌ Error: "out" directory not found. Did the build finish?');
  process.exit(1);
}

walk(OUT_DIR, (filePath) => {
  if (path.extname(filePath) !== '.html') return;

  const relativePath = path.relative(OUT_DIR, filePath).replace(/\\/g, '/');
  if (relativePath === '404.html') return;

  console.log(`📄 Processing ${relativePath}...`);

  try {
    const html = fs.readFileSync(filePath, 'utf8');
    const dom = new JSDOM(html);
    const { document } = dom.window;

    // 1. Metadata Extraction
    const title = document.title || 'Manhattan Plumbing';
    const description = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';
    
    // 2. Determine Markdown Path
    // slug.html -> slug/index.md
    // slug/index.html -> slug/index.md
    const isIndex = relativePath.endsWith('index.html');
    const mdPath = isIndex 
      ? relativePath.replace(/index\.html$/, 'index.md')
      : relativePath.replace(/\.html$/, '/index.md');
      
    const mdUrl = `${BASE_URL}/${mdPath}`;
    let linkTag = /** @type {HTMLLinkElement | null} */(document.querySelector('link[type="text/markdown"]'));
    
    if (linkTag) {
      linkTag.setAttribute('title', 'Markdown version');
      linkTag.setAttribute('href', mdUrl);
    } else {
      linkTag = /** @type {HTMLLinkElement} */(document.createElement('link'));
      linkTag.rel = 'alternate';
      linkTag.type = 'text/markdown';
      linkTag.href = mdUrl;
      linkTag.title = 'Markdown version';
      document.head.appendChild(linkTag);
    }

    // 3. Extract content for Markdown
    const article = document.querySelector('article');
    const main = document.querySelector('main');
    
    // Create a copy of the content to manipulate
    const contentNode = (article || main || document.body).cloneNode(true);
    const contentElement = /** @type {HTMLElement} */(contentNode);
    
    // 3.1 Preserve specific navigation and footer elements before cleaning
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const navs = Array.from(document.querySelectorAll('nav'));
    
    // Clean up content: remove scripts, styles, etc.
    // We KEEP header, footer, and nav now
    contentElement.querySelectorAll('script, style, iframe, noscript, .no-markdown, svg, input, select, textarea, .sr-only, [aria-hidden="true"]').forEach(el => el.remove());

    // 3.2 Enhance Card Extraction
    // If we are on an index/list page, ensure cards are formatted nicely
    contentElement.querySelectorAll('.card, [class*="PostGrid"], [class*="Grid"]').forEach(grid => {
      grid.querySelectorAll('a').forEach(link => {
        // Ensure links in cards have their full text
        if (!link.textContent?.trim()) {
          const title = link.querySelector('h2, h3, h4')?.textContent;
          if (title) link.textContent = title;
        }
      });
    });

    // Fix minified HTML by adding newlines between block tags
    let contentHtml = contentElement.innerHTML;
    
    // Add navigation and footer if they weren't part of the extracted content
    if (!contentElement.contains(header) && header) {
      contentHtml = `<header>${header.innerHTML}</header>\n\n` + contentHtml;
    }
    
    if (!contentElement.contains(footer) && footer) {
      contentHtml = contentHtml + `\n\n<footer>${footer.innerHTML}</footer>`;
    }

    contentHtml = contentHtml.replace(/<\/(p|h[1-6]|div|li|section|article|main|blockquote|ul|ol|tr|table|header|footer|nav)>/gi, '$&\n\n');
    
    let markdown = turndownService.turndown(contentHtml);

    // Strip all remaining HTML tags (to satisfy "Strip all of the html code")
    markdown = markdown.replace(/<[^>]+>/g, '');

    // Final cleanup of the markdown string
    let pageH1 = document.querySelector('h1')?.textContent || '';
    
    // Remove the title from the start of the markdown if it's already there to avoid duplication
    const h1Regex = new RegExp(`^# ${pageH1.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*`, 'i');
    markdown = markdown.replace(h1Regex, '');
    
    // Ensure we have exactly one H1 at the top
    markdown = `# ${pageH1}\n\n${markdown}`;

    // Clean up excessive newlines and escaped headers
    markdown = markdown.replace(/^\\# /gm, '# ');
    markdown = markdown.replace(/\n{3,}/g, '\n\n');
    markdown = markdown.replace(/&nbsp;/g, ' ');

    // 4. Add Frontmatter
    const frontmatter = [
      '---',
      `title: "${title.replace(/"/g, '\\"')}"`,
      `description: "${description.replace(/"/g, '\\"')}"`,
      `url: "${BASE_URL}/${relativePath.replace(/\/index\.html$/, '')}"`,
      `date_generated: "${new Date().toISOString()}"`,
      '---',
      '\n'
    ].join('\n');

    const finalMarkdown = frontmatter + markdown;

    // 5. Save the modified HTML (with fixed link tag)
    fs.writeFileSync(filePath, dom.serialize(), 'utf8');

    // 6. Save the Markdown file in the requested index.md format
    const absoluteMdPath = path.join(OUT_DIR, mdPath);
    const mdDir = path.dirname(absoluteMdPath);
    if (!fs.existsSync(mdDir)) {
      fs.mkdirSync(mdDir, { recursive: true });
    }
    fs.writeFileSync(absoluteMdPath, finalMarkdown, 'utf8');

    console.log(`✅ Generated ${mdPath}`);
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error);
  }
});

console.log('✨ Post-build markdown generation complete!');
