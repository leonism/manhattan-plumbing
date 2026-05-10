import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Post } from '../../types/news'

interface ArticleNavigationProps {
  previousPost: Post | null
  nextPost: Post | null
}

const ArrowLeftCircle: React.FC<{ className?: string }> = ({ className }) => (
  <div
    className={`flex h-8 w-8 items-center justify-center rounded-full border border-current transition-colors group-hover:bg-slate-100 group-hover:text-blue-800 dark:group-hover:bg-slate-800 dark:group-hover:text-blue-200 ${className ?? ''}`}
  >
    <ArrowLeft className="h-4 w-4" />
  </div>
)

const ArrowRightCircle: React.FC<{ className?: string }> = ({ className }) => (
  <div
    className={`flex h-8 w-8 items-center justify-center rounded-full border border-current transition-colors group-hover:bg-slate-100 group-hover:text-blue-800 dark:group-hover:bg-slate-800 dark:group-hover:text-blue-200 ${className ?? ''}`}
  >
    <ArrowRight className="h-4 w-4" />
  </div>
)

const ArticleNavigation: React.FC<ArticleNavigationProps> = ({ previousPost, nextPost }) => {
  return (
    <div className="mx-auto mt-16 flex max-w-4xl flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 sm:flex-row dark:border-slate-700">
      {previousPost ? (
        <Link
          to={`/news/${previousPost.slug}`}
          className="group flex w-full items-center gap-2 rounded-xl border border-slate-200 p-4 text-blue-600 transition-colors hover:bg-slate-100 hover:text-blue-800 sm:w-auto dark:border-slate-700 dark:text-blue-400 dark:hover:bg-slate-800 dark:hover:text-blue-200"
        >
          <ArrowLeftCircle className="shrink-0 transition-transform group-hover:-translate-x-1" />
          <div className="grow">
            <div className="text-sm text-slate-500 dark:text-slate-400">Previous Article</div>
            <div className="line-clamp-1 font-semibold">{previousPost.title}</div>
          </div>
        </Link>
      ) : (
        <div className="w-full sm:w-auto" />
      )}

      {nextPost ? (
        <Link
          to={`/news/${nextPost.slug}`}
          className="group ml-auto flex w-full items-center gap-2 rounded-xl border border-slate-200 p-4 text-right text-blue-600 transition-colors hover:bg-slate-100 hover:text-blue-800 sm:w-auto dark:border-slate-700 dark:text-blue-400 dark:hover:bg-slate-800 dark:hover:text-blue-200"
        >
          <div className="grow">
            <div className="text-sm text-slate-500 dark:text-slate-400">Next Article</div>
            <div className="line-clamp-1 font-semibold">{nextPost.title}</div>
          </div>
          <ArrowRightCircle className="shrink-0 transition-transform group-hover:translate-x-1" />
        </Link>
      ) : (
        <div className="w-full sm:w-auto" />
      )}
    </div>
  )
}

export default ArticleNavigation
