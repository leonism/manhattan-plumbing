import React from 'react'
import { Link } from 'react-router-dom'
import type { SearchResult } from '../../hooks/useSearch'

interface SearchResultCardProps {
  result: SearchResult
}

const SearchResultCard: React.FC<SearchResultCardProps> = ({ result }) => {
  return (
    <article className="transform overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg transition-transform duration-300 hover:scale-105 dark:border-slate-700 dark:bg-slate-800">
      <Link to={result.slug} className="block">
        {result.featuredImage && (
          <div className="relative aspect-video overflow-hidden">
            <img
              src={result.featuredImage.src}
              alt={result.featuredImage.alt}
              className="h-full w-full transform object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
          </div>
        )}

        <div className="p-6">
          <h2 className="mb-3 text-xl font-semibold transition-colors hover:text-blue-600 dark:text-white/90 dark:hover:text-blue-400">
            {result.title}
          </h2>
          <p className="mb-4 line-clamp-3 text-slate-600 dark:text-slate-400">{result.excerpt}</p>
        </div>
      </Link>
    </article>
  )
}

export default SearchResultCard
