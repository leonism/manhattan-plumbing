import React, { useState, useEffect, useRef, useMemo } from 'react'
import { useSearch } from '../../hooks/useSearch'
import { useNews } from '../../hooks/useNews'
import { Link, useNavigate } from 'react-router-dom'
import { Search, Loader, Newspaper, Wrench, X } from 'lucide-react'
import Logo from './Logo'

export interface SearchBarProps {
  onClear: () => void
  onClose: () => void
}

interface SearchResultItem {
  slug: string
  title: string
  excerpt: string
  featuredImage?: { src: string; alt: string }
  icon?: string
}

const SearchBar: React.FC<SearchBarProps> = ({ onClear, onClose }) => {
  const [query, setQuery] = useState('')
  const { allPosts } = useNews()
  const { results, isLoading } = useSearch(query, allPosts)
  const [activeIndex, setActiveIndex] = useState(-1)
  const navigate = useNavigate()
  const inputRef = useRef<HTMLInputElement>(null)

  const allResults = useMemo(
    () => [...results.news, ...results.services],
    [results.news, results.services]
  )

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setActiveIndex((prev) => (prev < allResults.length - 1 ? prev + 1 : prev))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : -1))
      } else if (e.key === 'Enter' && activeIndex >= 0) {
        e.preventDefault()
        navigate(allResults[activeIndex].slug)
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeIndex, allResults, navigate, onClose])

  const getIcon = (item: SearchResultItem) => {
    if (item.featuredImage) {
      return (
        <img
          src={item.featuredImage.src}
          alt={item.featuredImage.alt}
          className="w-full h-full object-cover"
        />
      )
    }
    if (item.icon === 'Wrench') {
      return <Wrench size={18} className="text-slate-500" />
    }
    return <Newspaper size={18} className="text-slate-500" />
  }

  return (
    <div className="flex flex-col h-full">
      <div className="relative p-4 border-b border-slate-200 dark:border-slate-700">
        <Search className="absolute left-8 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="w-full pl-12 pr-12 py-3 bg-transparent focus:outline-hidden text-lg text-slate-900 dark:text-white"
          aria-label="Search"
          autoFocus
        />
        {isLoading && (
          <Loader className="absolute right-16 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 animate-spin" />
        )}
        <button
          onClick={() => {
            setQuery('')
            onClear()
          }}
          className="absolute right-6 top-1/2 -translate-y-1/2 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full"
        >
          <X size={20} />
        </button>
      </div>

      <div className="overflow-y-auto max-h-[60vh]">
        {query && !isLoading && allResults.length === 0 && (
          <div className="text-center py-12 text-slate-500">
            <p>
              No results for "<span className="font-semibold">{query}</span>"
            </p>
          </div>
        )}

        {results.news.length > 0 && (
          <div className="p-4">
            <h3 className="text-xs font-semibold uppercase text-slate-400 tracking-wider px-4 mb-2">
              News
            </h3>
            <ul role="listbox">
              {results.news.map((result, index) => (
                <li key={result.slug} role="option" aria-selected={index === activeIndex}>
                  <Link
                    to={result.slug}
                    onClick={onClose}
                    className={`flex items-center gap-4 p-4 rounded-lg transition-colors ${activeIndex === index ? 'bg-slate-100 dark:bg-slate-700' : 'hover:bg-slate-50 dark:hover:bg-slate-700/50'}`}
                  >
                    <div className="w-12 h-12 rounded-md bg-slate-200 dark:bg-slate-600 flex items-center justify-center shrink-0 overflow-hidden">
                      {getIcon(result)}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 dark:text-white">{result.title}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-1">
                        {result.excerpt}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {results.services.length > 0 && (
          <div className="p-4 border-t border-slate-100 dark:border-slate-700/50">
            <h3 className="text-xs font-semibold uppercase text-slate-400 tracking-wider px-4 mb-2">
              Services
            </h3>
            <ul role="listbox">
              {results.services.map((result, index) => (
                <li
                  key={result.slug}
                  role="option"
                  aria-selected={index + results.news.length === activeIndex}
                >
                  <Link
                    to={result.slug}
                    onClick={onClose}
                    className={`flex items-center gap-4 p-4 rounded-lg transition-colors ${activeIndex === index + results.news.length ? 'bg-slate-100 dark:bg-slate-700' : 'hover:bg-slate-50 dark:hover:bg-slate-700/50'}`}
                  >
                    <div className="w-12 h-12 rounded-md bg-slate-200 dark:bg-slate-600 flex items-center justify-center shrink-0 overflow-hidden">
                      {getIcon(result)}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 dark:text-white">{result.title}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-1">
                        {result.excerpt}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="p-2 sm:p-4 border-t border-slate-200 dark:border-slate-700 text-xs text-slate-500 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Logo size="small" />
          {/* <span className="font-semibold hidden sm:inline">ManhattanPlumbing</span> */}
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <span className="hidden sm:inline">
            Navigate with{' '}
            <kbd className="font-sans border rounded-md px-1.5 py-0.5 bg-slate-100 dark:bg-slate-900 dark:border-slate-600">
              ↑
            </kbd>{' '}
            <kbd className="font-sans border rounded-md px-1.5 py-0.5 bg-slate-100 dark:bg-slate-900 dark:border-slate-600">
              ↓
            </kbd>
          </span>
          <span className="hidden sm:inline">
            Select with{' '}
            <kbd className="font-sans border rounded-md px-1.5 py-0.5 bg-slate-100 dark:bg-slate-900 dark:border-slate-600">
              ↵
            </kbd>
          </span>
          <span className="sm:hidden">
            Use{' '}
            <kbd className="font-sans border rounded-md px-1.5 py-0.5 bg-slate-100 dark:bg-slate-900 dark:border-slate-600">
              ↑
            </kbd>{' '}
            <kbd className="font-sans border rounded-md px-1.5 py-0.5 bg-slate-100 dark:bg-slate-900 dark:border-slate-600">
              ↓
            </kbd>{' '}
            <kbd className="font-sans border rounded-md px-1.5 py-0.5 bg-slate-100 dark:bg-slate-900 dark:border-slate-600">
              ↵
            </kbd>
          </span>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
