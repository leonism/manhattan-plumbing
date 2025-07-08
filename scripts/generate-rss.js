import { globby } from "globby";
import fs from "fs-extra";
import matter from "gray-matter";
import { Feed } from "feed";

const SITE_URL = "https://manhattan-plumbing.pages.dev/"; // Ensure no trailing spaces
const SITE_TITLE = "Manhattan Plumbing";
const SITE_DESCRIPTION = "Professional plumbing services in Manhattan, NY";

async function generateRssFeed() {
  try {
    const feed = new Feed({
      title: SITE_TITLE,
      description: SITE_DESCRIPTION,
      id: SITE_URL,
      link: SITE_URL,
      language: "en",
      image: `${SITE_URL}/images/logo.png`,
      favicon: `${SITE_URL}/favicon.ico`,
      copyright: `All rights reserved ${new Date().getFullYear()}, Manhattan Plumbing`,
      updated: new Date(),
      feedLinks: {
        rss2: `${SITE_URL}/rss.xml`,
        json: `${SITE_URL}/feed.json`,
        atom: `${SITE_URL}/atom.xml`,
      },
      author: {
        name: "Manhattan Plumbing",
        email: "info@manhattanplumbing.com",
        link: SITE_URL,
      },
    });

    // Get all markdown files
    const contentFiles = await globby(["src/content/**/*.md"]);

    // Process markdown files
    await Promise.all(
      contentFiles.map(async (file) => {
        const content = await fs.readFile(file, "utf-8");
        const { data, content: markdown } = matter(content, {
          engines: { js: () => ({}) },
        });
        const slug = file.replace("src/content/news/", "").replace(".md", "");
        const url = `${SITE_URL}/news/${slug}`;

        feed.addItem({
          title: data.title,
          id: url,
          link: url,
          description: data.excerpt,
          content: markdown,
          author: [
            {
              name: data.author.name,
              link: url,
            },
          ],
          date: new Date(data.date),
          image: `${SITE_URL}${data.featuredImage.src}`, // Prepend SITE_URL to make the URL absolute
          category: data.tags.map((tag) => ({ name: tag })),
        });
      })
    );

    // Write feed files
    await fs.ensureDir("public");
    await Promise.all([
      fs.writeFile("public/rss.xml", feed.rss2()),
      fs.writeFile("public/feed.json", feed.json1()),
      fs.writeFile("public/atom.xml", feed.atom1()),
    ]);

    console.log("RSS feeds generated successfully!");
  } catch (error) {
    console.error("Error generating RSS feeds:", error);
  }
}

generateRssFeed();
