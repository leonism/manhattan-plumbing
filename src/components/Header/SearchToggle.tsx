"use client"

import React, { useState } from 'react'
import { Search } from 'lucide-react'
import SearchModal from '@/components/ui/SearchModal'

interface SearchToggleProps {
  theme: string
  scrolled: boolean
  isHomePage?: boolean
}

const SearchToggle: React.FC<SearchToggleProps> = ({ theme, scrolled, isHomePage }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  React.useEffect(() => {
    setMounted(true)
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsSearchOpen((prev) => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const iconColorClass =
    isHomePage && !scrolled
      ? 'text-white hover:bg-white/10'
      : theme === 'light'
        ? 'text-slate-700 hover:bg-slate-100'
        : 'text-slate-200 hover:bg-white/10'

  if (!mounted) return <div className="p-2 w-10 h-10" />

  return (
    <>
      <button
        type="button"
        onClick={() => setIsSearchOpen(true)}
        className={`group relative inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium transition-all ${iconColorClass} border border-transparent hover:border-slate-200 dark:hover:border-slate-700`}
        aria-label="Search (⌘K)"
      >
        <Search size={18} className="transition-transform group-hover:scale-110" />
        <span className="hidden lg:inline-block">Search</span>
        <kbd className="hidden lg:inline-flex h-5 select-none items-center gap-1 rounded border border-slate-200 bg-slate-50 px-1.5 font-sans text-[10px] font-medium text-slate-500 opacity-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  )
}

export default SearchToggle
