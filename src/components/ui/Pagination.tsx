import React from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PaginationProps {
  currentPage: number
  totalPages: number
  baseUrl: string
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, baseUrl }) => {
  if (totalPages <= 1) return null

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <nav className="mt-12 flex items-center justify-center space-x-2" aria-label="Pagination">
      {/* Previous Page */}
      <Link
        href={`${baseUrl}${currentPage > 2 ? `?page=${currentPage - 1}` : ''}`}
        className={`flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition-colors hover:bg-blue-50 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-blue-900/20 dark:hover:text-blue-400 ${
          currentPage === 1 ? 'pointer-events-none opacity-50' : ''
        }`}
        aria-disabled={currentPage === 1}
      >
        <ChevronLeft size={20} />
      </Link>

      {/* Page Numbers */}
      {pages.map((page) => (
        <Link
          key={page}
          href={`${baseUrl}${page > 1 ? `?page=${page}` : ''}`}
          className={`flex h-10 w-10 items-center justify-center rounded-lg border transition-all duration-300 ${
            currentPage === page
              ? 'border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-600/20'
              : 'border-slate-200 bg-white text-slate-600 hover:bg-blue-50 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-blue-900/20 dark:hover:text-blue-400'
          }`}
          aria-current={currentPage === page ? 'page' : undefined}
        >
          {page}
        </Link>
      ))}

      {/* Next Page */}
      <Link
        href={`${baseUrl}?page=${currentPage + 1}`}
        className={`flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition-colors hover:bg-blue-50 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-blue-900/20 dark:hover:text-blue-400 ${
          currentPage === totalPages ? 'pointer-events-none opacity-50' : ''
        }`}
        aria-disabled={currentPage === totalPages}
      >
        <ChevronRight size={20} />
      </Link>
    </nav>
  )
}

export default Pagination
