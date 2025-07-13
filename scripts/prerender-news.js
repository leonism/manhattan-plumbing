import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';
import { getNewsData } from './get-news-data.js'; // Note the .js extension for ES modules
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const TEMPLATE_PATH = path.resolve(__dirname, '../index.html');
const DIST_DIR = path.resolve(__dirname, '../dist');
const NEWS_DIST_DIR = path.join(DIST_DIR, 'news');

async function prerenderNews() {
  console.log('Starting news pre-rendering...');

  // Ensure dist directory exists
  if (!fs.existsSync(DIST_DIR)) {
    fs.mkdirSync(DIST_DIR, { recursive: true });
  }
  if (!fs.existsSync(NEWS_DIST_DIR)) {
    fs.mkdirSync(NEWS_DIST_DIR, { recursive: true });
  }

  const templateHtml = fs.readFileSync(TEMPLATE_PATH, 'utf-8');

  const posts = getNewsData(); // Get your actual news posts here

  for (const post of posts) {
    const $ = cheerio.load(templateHtml); // Load template for each post inside the loop

    const postPath = path.join(NEWS_DIST_DIR, post.slug);
    if (!fs.existsSync(postPath)) {
      fs.mkdirSync(postPath, { recursive: true });
    }

    // Remove existing meta tags and title to avoid duplication
    $('title').remove();
    $('meta[name="description"]').remove();
    $('meta[name="keywords"]').remove();
    $('meta[name="author"]').remove();
    $('meta[property^="og:"]').remove(); // Remove all OpenGraph tags
    $('meta[name^="twitter:"]').remove(); // Remove all Twitter tags

    // Inject the MDX content directly into the #root div
    $('#root').html(`
      <div id="news-post-container">
        <h1>${post.title}</h1>
        <p>${post.excerpt}</p>
        <div class="mdx-content">
          ${post.body}
        </div>
      </div>
    `);

    // Add new meta tags and title dynamically
    $('head').append(`<title>${post.seoTitle || post.title}</title>`);
    $('head').append(`<meta name="description" content="${post.excerpt}">`);
    if (post.tags && post.tags.length > 0) {
      $('head').append(`<meta name="keywords" content="${post.tags.join(', ')}">`);
    }
    if (post.author && post.author.name) {
      $('head').append(`<meta name="author" content="${post.author.name}">`);
    }

    // OpenGraph tags
    $('head').append(`<meta property="og:title" content="${post.seoTitle || post.title}">`);
    $('head').append(`<meta property="og:description" content="${post.excerpt}">`);
    $('head').append(`<meta property="og:url" content="https://manhattan-plumbing.pages.dev/news/${post.slug}">`);
    if (post.featuredImage && post.featuredImage.src) {
      $('head').append(`<meta property="og:image" content="https://manhattan-plumbing.pages.dev${post.featuredImage.src}">`);
    }
    $('head').append(`<meta property="og:type" content="article">`);

    // Twitter Card tags
    $('head').append(`<meta name="twitter:card" content="summary_large_image">`);
    $('head').append(`<meta name="twitter:title" content="${post.seoTitle || post.title}">`);
    $('head').append(`<meta name="twitter:description" content="${post.excerpt}">`);
    if (post.featuredImage && post.featuredImage.src) {
      $('head').append(`<meta name="twitter:image" content="https://manhattan-plumbing.pages.dev${post.featuredImage.src}">`);
    }

    // Add JSON-LD script if available
    if (post.jsonLd) {
      $('head').append(`<script type="application/ld+json">${JSON.stringify(post.jsonLd)}</script>`);
    }

    const outputFilePath = path.join(postPath, 'index.html');
    fs.writeFileSync(outputFilePath, $.html());
    console.log(`Pre-rendered: ${outputFilePath}`);
  }

  console.log('News pre-rendering complete.');
}

prerenderNews().catch(console.error);