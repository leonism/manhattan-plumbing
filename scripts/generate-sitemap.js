import { globby } from "globby";
import fs from "fs-extra";
import matter from "gray-matter";

const SITE_URL = "https://manhattan-plumbing.pages.dev/";

async function generateSitemap() {
  try {
    // Get all markdown files in the content directory
    const contentFiles = await globby(["src/content/**/*.md"]);

    // Get all static pages
    const staticPages = [
      "/",
      "/news",
      "/privacy-policy",
      "/terms-of-service",
      "/cookie-policy",
    ];

    // Process markdown files to get their data
    const newsPages = await Promise.all(
      contentFiles.map(async (file) => {
        const content = await fs.readFile(file, "utf-8");
        const { data } = matter(content, { engines: { js: () => ({}) } });
        const slug = file.replace("src/content/news/", "").replace(".md", "");

        return {
          url: `/news/${slug}`,
          lastMod: data.lastModified || data.date,
          priority: data.priority === "high" ? "0.8" : "0.6",
        };
      })
    );

    // Generate sitemap XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
    .map(
      (page) => `
  <url>
    <loc>${SITE_URL}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>${page === "/" ? "1.0" : "0.7"}</priority>
  </url>`
    )
    .join("")}
  ${newsPages
    .map(
      (page) => `
  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${new Date(page.lastMod).toISOString()}</lastmod>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join("")}
</urlset>`;

    // Write sitemap to public directory
    await fs.writeFile("public/sitemap.xml", sitemap);
    console.log("Sitemap generated successfully!");
  } catch (error) {
    console.error("Error generating sitemap:", error);
  }
}

generateSitemap();
