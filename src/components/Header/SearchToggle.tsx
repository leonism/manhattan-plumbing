'use client'

import React, { useState } from 'react'
import { Search } from 'lucide-react'
import { usePathname } from 'next/navigation'
import SearchModal from '@/components/ui/SearchModal'
import { cn } from '@/lib/utils'

interface SearchToggleProps {
  theme: string
  scrolled: boolean
  isHomePage?: boolean
}

const SearchToggle: React.FC<SearchToggleProps> = ({ theme, scrolled, isHomePage }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  // Close search modal on route change
  React.useEffect(() => {
    setIsSearchOpen(false)
  }, [pathname])

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

  const iconColorClass = cn(
    'relative flex items-center justify-center transition-all duration-200',
    isHomePage && !scrolled
      ? 'text-white hover:bg-white/10'
      : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800'
  )

  if (!mounted) return <div className="h-10 w-10" />

  return (
    <>
      <button
        type="button"
        onClick={() => setIsSearchOpen(true)}
        className={cn(
          'group relative inline-flex items-center gap-2 rounded-lg border border-transparent px-3 py-1.5 text-sm font-medium transition-all hover:border-slate-200 dark:hover:border-slate-700',
          iconColorClass
        )}
        aria-label="Search (⌘K)"
      >
        <Search size={18} className="transition-transform group-hover:scale-110" />
        <span className="hidden lg:inline-block">Search</span>
        <kbd className="hidden h-5 items-center gap-1 rounded border border-slate-200 bg-slate-50 px-1.5 font-sans text-[10px] font-medium text-slate-500 opacity-100 select-none lg:inline-flex dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  )
}

export default SearchToggle
