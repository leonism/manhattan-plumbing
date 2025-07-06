import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";

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
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link
        to={`/news/${post.slug}`}
        className="block">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={post.featuredImage.src}
            alt={post.featuredImage.alt}
            className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <span className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm">
            {post.category}
          </span>
        </div>
      </Link>

      <div className="p-6">
        <div className="flex items-center mb-4 space-x-2 text-sm text-gray-600">
          <img
            src={post.author.image}
            alt={post.author.name}
            className="w-8 h-8 rounded-full"
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

        <h2 className="text-xl font-semibold mb-3 hover:text-primary-600 transition-colors">
          <Link to={`/news/${post.slug}`}>{post.title}</Link>
        </h2>

        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

        <div className="flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag) => (
            <Link
              key={tag}
              to={`/news/tag/${tag}`}
              className="text-sm text-gray-500 hover:text-primary-600 bg-gray-100 px-3 py-1 rounded-full transition-colors">
              #{tag}
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
