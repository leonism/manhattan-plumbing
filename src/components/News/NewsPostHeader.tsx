import React from 'react'
import { Post } from '../../types/news'

interface NewsPostHeaderProps {
  post: Post
}

const NewsPostHeader: React.FC<NewsPostHeaderProps> = ({ post }) => {
  return (
    <header className="mx-auto mb-5 max-w-4xl text-center">
      <h1 className="mb-3 text-4xl leading-tight font-extrabold md:text-5xl">{post.title}</h1>
      <div className="relative mb-4 overflow-hidden rounded-lg shadow-lg">
        <picture>
          <source srcSet={post.featuredImage.avif} type="image/avif" />
          <source srcSet={post.featuredImage.webp} type="image/webp" />
          <img
            src={post.featuredImage.src}
            alt={post.featuredImage.alt}
            className="h-full max-h-96 w-full object-cover"
            loading="lazy"
          />
        </picture>
        {post.featuredImage.caption && (
          <div className="absolute right-0 bottom-0 left-0 bg-black/60 p-4 text-sm text-white">
            {post.featuredImage.caption}
          </div>
        )}
      </div>
    </header>
  )
}

export default NewsPostHeader
