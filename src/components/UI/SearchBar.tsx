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
          className="h-full w-full object-cover"
        />
      )
    }
    if (item.icon === 'Wrench') {
      return <Wrench size={18} className="text-slate-500" />
    }
    return <Newspaper size={18} className="text-slate-500" />
  }

  return (
    <div className="flex h-full flex-col">
      <div className="relative border-b border-slate-200 p-4 dark:border-slate-700">
        <Search className="absolute top-1/2 left-8 h-5 w-5 -translate-y-1/2 text-slate-400" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="w-full bg-transparent py-3 pr-12 pl-12 text-lg text-slate-900 focus:outline-hidden dark:text-white"
          aria-label="Search"
          autoFocus
        />
        {isLoading && (
          <Loader className="absolute top-1/2 right-16 h-5 w-5 -translate-y-1/2 animate-spin text-slate-400" />
        )}
        <button
          onClick={() => {
            setQuery('')
            onClear()
          }}
          className="absolute top-1/2 right-6 -translate-y-1/2 rounded-full p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
        >
          <X size={20} />
        </button>
      </div>

      <div className="max-h-[60vh] overflow-y-auto">
        <div aria-live="polite" role="status" className="sr-only">
          {isLoading
            ? `Searching for ${query}...`
            : query && allResults.length > 0
              ? `${allResults.length} results found.`
              : query && allResults.length === 0
                ? `No results found for ${query}.`
                : ''}
        </div>
        {query && !isLoading && allResults.length === 0 && (
          <div className="py-12 text-center text-slate-500">
            <p>
              No results for "<span className="font-semibold">{query}</span>"
            </p>
          </div>
        )}

        {results.news.length > 0 && (
          <div className="p-4">
            <h3 className="mb-2 px-4 text-xs font-semibold tracking-wider text-slate-400 uppercase">
              News
            </h3>
            <ul role="listbox">
              {results.news.map((result, index) => (
                <li key={result.slug} role="option" aria-selected={index === activeIndex}>
                  <Link
                    to={result.slug}
                    onClick={onClose}
                    className={`flex items-center gap-4 rounded-lg p-4 transition-colors ${activeIndex === index ? 'bg-slate-100 dark:bg-slate-700' : 'hover:bg-slate-50 dark:hover:bg-slate-700/50'}`}
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-md bg-slate-200 dark:bg-slate-600">
                      {getIcon(result)}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 dark:text-white">{result.title}</p>
                      <p className="line-clamp-1 text-sm text-slate-500 dark:text-slate-400">
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
          <div className="border-t border-slate-100 p-4 dark:border-slate-700/50">
            <h3 className="mb-2 px-4 text-xs font-semibold tracking-wider text-slate-400 uppercase">
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
                    className={`flex items-center gap-4 rounded-lg p-4 transition-colors ${activeIndex === index + results.news.length ? 'bg-slate-100 dark:bg-slate-700' : 'hover:bg-slate-50 dark:hover:bg-slate-700/50'}`}
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-md bg-slate-200 dark:bg-slate-600">
                      {getIcon(result)}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 dark:text-white">{result.title}</p>
                      <p className="line-clamp-1 text-sm text-slate-500 dark:text-slate-400">
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

      <div className="flex items-center justify-between gap-4 border-t border-slate-200 p-2 text-xs text-slate-500 sm:p-4 dark:border-slate-700">
        <div className="flex items-center gap-2">
          <Logo size="small" />
          {/* <span className="font-semibold hidden sm:inline">ManhattanPlumbing</span> */}
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <span className="hidden sm:inline">
            Navigate with{' '}
            <kbd className="rounded-md border bg-slate-100 px-1.5 py-0.5 font-sans dark:border-slate-600 dark:bg-slate-900">
              ↑
            </kbd>{' '}
            <kbd className="rounded-md border bg-slate-100 px-1.5 py-0.5 font-sans dark:border-slate-600 dark:bg-slate-900">
              ↓
            </kbd>
          </span>
          <span className="hidden sm:inline">
            Select with{' '}
            <kbd className="rounded-md border bg-slate-100 px-1.5 py-0.5 font-sans dark:border-slate-600 dark:bg-slate-900">
              ↵
            </kbd>
          </span>
          <span className="sm:hidden">
            Use{' '}
            <kbd className="rounded-md border bg-slate-100 px-1.5 py-0.5 font-sans dark:border-slate-600 dark:bg-slate-900">
              ↑
            </kbd>{' '}
            <kbd className="rounded-md border bg-slate-100 px-1.5 py-0.5 font-sans dark:border-slate-600 dark:bg-slate-900">
              ↓
            </kbd>{' '}
            <kbd className="rounded-md border bg-slate-100 px-1.5 py-0.5 font-sans dark:border-slate-600 dark:bg-slate-900">
              ↵
            </kbd>
          </span>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
