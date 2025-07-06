import { useState, useEffect } from "react";
import matter from "gray-matter";

interface SearchResult {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  featuredImage: {
    src: string;
    alt: string;
  };
  author: {
    name: string;
    image: string;
  };
  date: string;
  readingTime: string;
}

export const useSearch = (query: string) => {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const searchPosts = async () => {
      if (!query.trim()) {
        setResults([]);
        return;
      }

      setIsLoading(true);
      try {
        const postFiles = await import.meta.glob("../content/news/*.md");
        const searchResults: SearchResult[] = [];

        for (const path in postFiles) {
          const file = await postFiles[path]();
          const slug = path.split("/").pop()?.replace(".md", "");
          const { data, content } = matter(file.default);

          // Only include published posts
          if (data.status !== "published") continue;

          const searchableContent = [
            data.title,
            data.excerpt,
            data.category,
            ...(data.tags || []),
            content,
          ]
            .join(" ")
            .toLowerCase();

          if (searchableContent.includes(query.toLowerCase())) {
            searchResults.push({
              slug,
              title: data.title,
              excerpt: data.excerpt,
              category: data.category,
              tags: data.tags,
              featuredImage: data.featuredImage,
              author: data.author,
              date: data.date,
              readingTime: data.readingTime,
            });
          }
        }

        // Sort results by date
        searchResults.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        setResults(searchResults);
      } catch (error) {
        console.error("Error searching posts:", error);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    };

    const debounceTimeout = setTimeout(searchPosts, 300);
    return () => clearTimeout(debounceTimeout);
  }, [query]);

  return { results, isLoading };
};
