import React from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import { Calendar, Clock, Folder } from 'lucide-react'
import TagList from './TagList'
import { Post } from '../../types/news'

interface NewsPostMetaProps {
  post: Post
  slugify: (text: string) => string
}

const NewsPostMeta: React.FC<NewsPostMetaProps> = ({ post, slugify }) => {
  return (
    <div className="text-center">
      {/* Author Info */}
      <div className="mb-3 flex items-center justify-center gap-4">
        <picture>
          <source srcSet={post.author.image.avif} type="image/avif" />
          <source srcSet={post.author.image.webp} type="image/webp" />
          <img
            src={post.author.image.src}
            alt={post.author.name}
            className="h-12 w-12 rounded-full border-2 border-blue-400"
            loading="lazy"
          />
        </picture>
        <div>
          <div className="font-medium text-slate-900 dark:text-white">{post.author.name}</div>
          <div className="text-sm text-slate-600 dark:text-slate-400">{post.author.role}</div>
        </div>
      </div>

      {/* Meta Info (Date, Reading Time, Category) */}
      <div className="my-3 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-600 dark:text-slate-400">
        <div className="flex items-center">
          <Calendar className="mr-2 h-4 w-4" />
          <time dateTime={post.date}>{format(new Date(post.date), 'MMMM d, yyyy')}</time>
        </div>
        <div className="flex items-center">
          <Clock className="mr-2 h-4 w-4" />
          {post.readingTime}
        </div>
        <div className="flex items-center">
          <Folder className="mr-2 h-4 w-4" />
          <Link
            to={`/news/category/${slugify(post.category)}`}
            className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
          >
            {post.category}
          </Link>
        </div>
      </div>

      {/* TagList */}
      <TagList tags={post.tags} slugify={slugify} className="mt-4" />
    </div>
  )
}

export default NewsPostMeta
