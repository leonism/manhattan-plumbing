import React from 'react'
import { Link } from 'react-router-dom'
import { Post } from '../../types/news'

interface RelatedArticlesProps {
  allPosts: Post[]
  currentPostSlug: string
}

const RelatedArticles: React.FC<RelatedArticlesProps> = ({ allPosts, currentPostSlug }) => {
  const relatedPosts = allPosts.filter((p: Post) => p.slug !== currentPostSlug).slice(0, 3)

  if (relatedPosts.length === 0) {
    return null
  }

  return (
    <div className="mx-auto mt-16 max-w-4xl">
      <h2 className="mb-8 text-center text-3xl font-bold">More Articles</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {relatedPosts.map((relatedPost: Post) => (
          <div
            key={relatedPost.slug}
            className="transform overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-300 hover:scale-105 dark:bg-slate-800"
          >
            <Link to={`/news/${relatedPost.slug}`}>
              <picture>
                <source srcSet={relatedPost.featuredImage.avif} type="image/avif" />
                <source srcSet={relatedPost.featuredImage.webp} type="image/webp" />
                <img
                  src={relatedPost.featuredImage.src}
                  alt={relatedPost.featuredImage.alt}
                  className="h-48 w-full object-cover"
                  loading="lazy"
                />
              </picture>
            </Link>
            <div className="p-4">
              <h3 className="mb-2 text-lg font-bold">
                <Link
                  to={`/news/${relatedPost.slug}`}
                  className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {relatedPost.title}
                </Link>
              </h3>
              <p className="line-clamp-2 text-sm text-slate-600 dark:text-slate-400">
                {relatedPost.excerpt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RelatedArticles
