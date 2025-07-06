import { useState, useEffect } from "react";
import type { Post, UseNewsOptions } from "../types/news";

interface MDXModule {
  default: React.ComponentType<any>;
  frontmatter: Post; // Use Post interface for frontmatter
}

export const useNews = ({
  category,
  tag,
  page = 1,
  limit = 9,
}: UseNewsOptions = {}) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const postFiles = import.meta.glob<MDXModule>("../content/news/*.mdx", {
          eager: true,
        });
        const allPosts: Post[] = [];
        const allCategories = new Set<string>();

        for (const path in postFiles) {
          const module = postFiles[path];
          const data = module.frontmatter as Post; // Access frontmatter directly

          // Ensure slug exists in frontmatter and is a string
          if (!data.slug || typeof data.slug !== "string") {
            console.warn(
              `Slug missing or invalid in frontmatter for file: ${path}. Skipping this post.`
            );
            continue;
          }

          if (data.status === "published") {
            allCategories.add(data.category);
            allPosts.push({ ...data, body: module.default } as Post); // Store MDX component as body
          }
        }

        // Sort posts by date
        allPosts.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );

        // Filter by category if specified
        let filteredPosts = allPosts;
        if (category) {
          filteredPosts = allPosts.filter((post) => post.category === category);
        }
        if (tag) {
          filteredPosts = allPosts.filter((post) => post.tags.includes(tag));
        }

        // Calculate pagination
        const totalPosts = filteredPosts.length;
        setTotalPages(Math.ceil(totalPosts / limit));

        // Get posts for current page
        const start = (page - 1) * limit;
        const paginatedPosts = filteredPosts.slice(start, start + limit);

        setPosts(paginatedPosts);
        setCategories(Array.from(allCategories));
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [category, tag, page, limit]);

  return {
    posts,
    categories,
    totalPages,
    isLoading,
  };
};
