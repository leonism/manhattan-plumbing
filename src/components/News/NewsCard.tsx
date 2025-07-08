import React from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import { slugify } from '../../utils/slugify' // Assuming slugify is in a utils file

import type { Post } from '../../types/news'

interface NewsCardProps {
  post: Post
}

const NewsCard: React.FC<NewsCardProps> = ({ post }) => {
  return (
    <article className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 border border-slate-200 dark:border-slate-700">
      <div className="relative aspect-video overflow-hidden">
        <Link to={`/news/${post.slug}`} className="block">
          <picture>
            <source srcSet={post.featuredImage.avif} type="image/avif" />
            <source srcSet={post.featuredImage.webp} type="image/webp" />
            <img
              src={post.featuredImage.src}
              alt={post.featuredImage.alt}
              className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </picture>
        </Link>
        <Link
          to={`/news/category/${slugify(post.category)}`}
          className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold dark:bg-blue-400"
        >
          {post.category}
        </Link>
      </div>

      <div className="p-6">
        <div className="flex mb-4 items-center text-left space-x-1 text-base md:text-sm text-slate-600 dark:text-slate-400">
          <picture>
            <source srcSet={post.author.image.avif} type="image/avif" />
            <source srcSet={post.author.image.webp} type="image/webp" />
            <img
              src={post.author.image.src}
              alt={post.author.name}
              className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-700"
              loading="lazy"
            />
          </picture>
          <span className="md:text-nowrap">{post.author.name}</span>
          <span>•</span>
          <span className="md:text-nowrap">
            <time dateTime={post.date}>{format(new Date(post.date), 'MMM d, yyyy')}</time>
          </span>
          <span className="hidden md:inline">•</span>
          <span className="hidden md:inline md:text-nowrap">{post.readingTime}</span>
        </div>
        <h2 className="text-xl dark:text-white/90 font-semibold mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          <Link to={`/news/${post.slug}`}>{post.title}</Link>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">{post.excerpt}</p>
        <div className="flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag) => (
            <Link
              key={tag}
              to={`/news/tag/${slugify(tag)}`}
              className="text-sm text-blue-700 dark:text-blue-200 hover:text-blue-900 dark:hover:text-blue-50 bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full transition-colors"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </div>
    </article>
  )
}

export default NewsCard
