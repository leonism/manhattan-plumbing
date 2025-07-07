import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { slugify } from "../../utils/slugify"; // Assuming slugify is in a utils file

interface NewsCardProps {
  post: {
    slug: string;
    title: string;
    excerpt: string;
    featuredImage: {
      src: string;
      alt: string;
    };
    date: string;
    author: {
      name: string;
      image: string;
    };
    category: string;
    tags: string[];
    readingTime: string;
  };
}

const NewsCard: React.FC<NewsCardProps> = ({ post }) => {
  return (
    <article className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <div className="relative aspect-video overflow-hidden">
        <Link
          to={`/news/${post.slug}`}
          className="block">
          <img
            src={post.featuredImage.src}
            alt={post.featuredImage.alt}
            className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </Link>
        <Link to={`/news/category/${slugify(post.category)}`} className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold dark:bg-blue-400">
          {post.category}
        </Link>
      </div>

      <div className="p-6">
        <div className="flex items-center mb-4 space-x-2 text-sm text-slate-600 dark:text-slate-400">
          <img
            src={post.author.image}
            alt={post.author.name}
            className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-700"
            loading="lazy"
          />
          <span>{post.author.name}</span>
          <span>•</span>
          <time dateTime={post.date}>
            {format(new Date(post.date), "MMM d, yyyy")}
          </time>
          <span>•</span>
          <span>{post.readingTime}</span>
        </div>

        <h2 className="text-xl font-semibold mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          <Link to={`/news/${post.slug}`}>{post.title}</Link>
        </h2>

        <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">{post.excerpt}</p>

        <div className="flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag) => (
            <Link
              key={tag}
              to={`/news/tag/${slugify(tag)}`}
              className="text-sm text-blue-700 dark:text-blue-200 hover:text-blue-900 dark:hover:text-blue-50 bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full transition-colors">
              #{tag}
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
