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
    <nav className="mt-12 flex flex-col items-stretch gap-6 border-t border-slate-100 py-12 sm:flex-row dark:border-slate-800">
      {prev ? (
        <Link
          href={`/news/${prev.slug}`}
          className="group flex flex-1 flex-col gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-colors hover:border-blue-100 hover:bg-blue-50 dark:border-transparent dark:bg-slate-800/50 dark:hover:border-blue-800 dark:hover:bg-blue-900/20"
        >
          <span className="flex items-center gap-2 text-sm font-medium text-slate-500 group-hover:text-blue-600 dark:text-slate-400 dark:group-hover:text-blue-400">
            <ArrowLeft className="h-4 w-4" />
            Previous Article
          </span>
          <span className="line-clamp-2 text-lg font-semibold text-slate-900 group-hover:text-blue-900 dark:text-white dark:group-hover:text-blue-200">
            {prev.title}
          </span>
        </Link>
      ) : (
        <div className="hidden flex-1 sm:block" />
      )}

      {next ? (
        <Link
          href={`/news/${next.slug}`}
          className="group flex flex-1 flex-col items-end gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-right transition-colors hover:border-blue-100 hover:bg-blue-50 dark:border-transparent dark:bg-slate-800/50 dark:hover:border-blue-800 dark:hover:bg-blue-900/20"
        >
          <span className="flex items-center gap-2 text-sm font-medium text-slate-500 group-hover:text-blue-600 dark:text-slate-400 dark:group-hover:text-blue-400">
            Next Article
            <ArrowRight className="h-4 w-4" />
          </span>
          <span className="line-clamp-2 text-lg font-semibold text-slate-900 group-hover:text-blue-900 dark:text-white dark:group-hover:text-blue-200">
            {next.title}
          </span>
        </Link>
      ) : (
        <div className="hidden flex-1 sm:block" />
      )}
    </nav>
  )
}
