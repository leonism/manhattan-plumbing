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
    <article className="transform overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg transition-transform duration-300 hover:scale-105 dark:border-slate-700 dark:bg-slate-800">
      <div className="relative aspect-video overflow-hidden">
        <Link to={`/news/${post.slug}`} className="block">
          <picture>
            <source srcSet={post.featuredImage.avif} type="image/avif" />
            <source srcSet={post.featuredImage.webp} type="image/webp" />
            <img
              src={post.featuredImage.src}
              alt={post.featuredImage.alt}
              className="h-full w-full transform object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
          </picture>
        </Link>
        <Link
          to={`/news/category/${slugify(post.category)}`}
          className="absolute top-4 left-4 rounded-full bg-blue-600 px-3 py-1 text-sm font-semibold text-white dark:bg-blue-400"
        >
          {post.category}
        </Link>
      </div>

      <div className="p-6">
        <div className="mb-4 flex items-center space-x-1 text-left text-base text-slate-600 md:text-sm dark:text-slate-400">
          <picture>
            <source srcSet={post.author.image.avif} type="image/avif" />
            <source srcSet={post.author.image.webp} type="image/webp" />
            <img
              src={post.author.image.src}
              alt={post.author.name}
              className="h-8 w-8 rounded-full border border-slate-200 dark:border-slate-700"
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
        <h2 className="mb-3 text-xl font-semibold transition-colors hover:text-blue-600 dark:text-white/90 dark:hover:text-blue-400">
          <Link to={`/news/${post.slug}`}>{post.title}</Link>
        </h2>
        <p className="mb-4 line-clamp-3 text-slate-600 dark:text-slate-400">{post.excerpt}</p>
        <div className="flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag) => (
            <Link
              key={tag}
              to={`/news/tag/${slugify(tag)}`}
              className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700 transition-colors hover:text-blue-900 dark:bg-blue-900 dark:text-blue-200 dark:hover:text-blue-50"
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
