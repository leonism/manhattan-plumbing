import Link from 'next/link'
import { Post } from '@/lib/news'
import { ArrowLeft, ArrowRight } from 'lucide-react'

interface ArticleNavigationProps {
  prev: Post | null
  next: Post | null
}

export function ArticleNavigation({ prev, next }: ArticleNavigationProps) {
  if (!prev && !next) return null

  return (
    <nav className="mt-12 py-12 border-t border-gray-100 flex flex-col sm:flex-row gap-6 items-stretch">
      {prev ? (
        <Link 
          href={`/news/${prev.slug}`}
          className="flex-1 group flex flex-col gap-2 p-6 rounded-2xl bg-gray-50 hover:bg-primary-50 transition-colors border border-transparent hover:border-primary-100"
        >
          <span className="flex items-center gap-2 text-sm font-medium text-gray-500 group-hover:text-primary-600">
            <ArrowLeft className="w-4 h-4" />
            Previous Article
          </span>
          <span className="text-lg font-semibold text-gray-900 group-hover:text-primary-900 line-clamp-2">
            {prev.title}
          </span>
        </Link>
      ) : (
        <div className="flex-1 hidden sm:block" />
      )}

      {next ? (
        <Link 
          href={`/news/${next.slug}`}
          className="flex-1 group flex flex-col gap-2 p-6 rounded-2xl bg-gray-50 hover:bg-primary-50 transition-colors border border-transparent hover:border-primary-100 text-right items-end"
        >
          <span className="flex items-center gap-2 text-sm font-medium text-gray-500 group-hover:text-primary-600">
            Next Article
            <ArrowRight className="w-4 h-4" />
          </span>
          <span className="text-lg font-semibold text-gray-900 group-hover:text-primary-900 line-clamp-2">
            {next.title}
          </span>
        </Link>
      ) : (
        <div className="flex-1 hidden sm:block" />
      )}
    </nav>
  )
}
