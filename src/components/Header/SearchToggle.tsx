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
  }, [])

  const iconColorClass =
    isHomePage && !scrolled
      ? 'text-white hover:bg-slate-100 dark:hover:bg-slate-700'
      : theme === 'light'
        ? 'text-slate-800 hover:bg-slate-200'
        : 'text-white hover:bg-slate-100 dark:hover:bg-slate-700'

  if (!mounted) return <div className="p-3 w-[44px] h-[44px]" />

  return (
    <>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault()
          setIsSearchOpen(true)
        }}
        className={`inline-flex items-center justify-center rounded-full p-1 transition-colors md:p-3 ${iconColorClass}`}
        aria-label="Search"
      >
        <Search size={20} />
      </a>
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  )
}

export default SearchToggle
