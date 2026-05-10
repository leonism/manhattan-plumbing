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
    <nav className="mt-12 py-12 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row gap-6 items-stretch">
      {prev ? (
        <Link 
          href={`/news/${prev.slug}`}
          className="flex-1 group flex flex-col gap-2 p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors border border-slate-200 dark:border-transparent hover:border-blue-100 dark:hover:border-blue-800"
        >
          <span className="flex items-center gap-2 text-sm font-medium text-slate-500 group-hover:text-blue-600 dark:text-slate-400 dark:group-hover:text-blue-400">
            <ArrowLeft className="w-4 h-4" />
            Previous Article
          </span>
          <span className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-blue-900 dark:group-hover:text-blue-200 line-clamp-2">
            {prev.title}
          </span>
        </Link>
      ) : (
        <div className="flex-1 hidden sm:block" />
      )}

      {next ? (
        <Link 
          href={`/news/${next.slug}`}
          className="flex-1 group flex flex-col gap-2 p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors border border-slate-200 dark:border-transparent hover:border-blue-100 dark:hover:border-blue-800 text-right items-end"
        >
          <span className="flex items-center gap-2 text-sm font-medium text-slate-500 group-hover:text-blue-600 dark:text-slate-400 dark:group-hover:text-blue-400">
            Next Article
            <ArrowRight className="w-4 h-4" />
          </span>
          <span className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-blue-900 dark:group-hover:text-blue-200 line-clamp-2">
            {next.title}
          </span>
        </Link>
      ) : (
        <div className="flex-1 hidden sm:block" />
      )}
    </nav>
  )
}
