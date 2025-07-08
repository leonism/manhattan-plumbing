import { useState, useEffect, useMemo } from "react";
import type { Post, UseNewsOptions } from "../types/news";
import { slugify } from "../utils/slugify";

interface MDXModule {
  default: React.ComponentType<any>;
  frontmatter: Post;
}

const fetchAllPosts = () => {
  const postFiles = import.meta.glob<MDXModule>("../content/news/*.mdx", {
    eager: true,
  });

  const allPosts: Post[] = [];
  for (const path in postFiles) {
    const module = postFiles[path];
    const data = module.frontmatter;

    if (data.status === "published") {
      const featuredImage = data.featuredImage.src.startsWith('http') ? {
        src: data.featuredImage.src,
        webp: data.featuredImage.src,
        avif: data.featuredImage.src,
        alt: data.featuredImage.alt,
        caption: data.featuredImage.caption,
      } : {
        src: `/src/assets/images/${data.featuredImage.src}`,
        webp: `/src/assets/images/${data.featuredImage.src}?format=webp`,
        avif: `/src/assets/images/${data.featuredImage.src}?format=avif`,
        alt: data.featuredImage.alt,
        caption: data.featuredImage.caption,
      };

      const authorImage = data.author.image.startsWith('http') ? {
        src: data.author.image,
        webp: data.author.image,
        avif: data.author.image,
      } : {
        src: `/src/assets/images/${data.author.image}`,
        webp: `/src/assets/images/${data.author.image}?format=webp`,
        avif: `/src/assets/images/${data.author.image}?format=avif`,
      };

      allPosts.push({
        ...data,
        featuredImage: featuredImage,
        author: {
          ...data.author,
          image: authorImage,
        },
        body: module.default,
      } as Post);
    }
  }

  allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return allPosts;
};

export const useNews = ({
  category,
  tag,
  page = 1,
  limit = 9,
}: UseNewsOptions = {}) => {
  const allPosts = useMemo(() => fetchAllPosts(), []);

  const [posts, setPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    let filteredPosts = allPosts;
    if (category) {
      filteredPosts = allPosts.filter((post) => slugify(post.category) === category);
    } else if (tag) {
      filteredPosts = allPosts.filter((post) => post.tags.map(t => slugify(t)).includes(tag));
    }

    const allCategories = [...new Set(allPosts.map(p => p.category))];
    const totalPosts = filteredPosts.length;
    setTotalPages(Math.ceil(totalPosts / limit));

    const start = (page - 1) * limit;
    const paginatedPosts = filteredPosts.slice(start, start + limit);

    setPosts(paginatedPosts);
    setCategories(allCategories);
    setIsLoading(false);
  }, [category, tag, page, limit, allPosts]);

  return {
    posts,
    categories,
    totalPages,
    isLoading,
    allPosts,
  };
};
