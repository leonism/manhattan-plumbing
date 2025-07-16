import React, { useState } from 'react'
import { Search } from 'lucide-react'
import SearchModal from '../UI/SearchModal'

interface SearchToggleProps {
  theme: string
  scrolled: boolean
  isHomePage?: boolean
}

const SearchToggle: React.FC<SearchToggleProps> = ({ theme, scrolled, isHomePage }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const iconColorClass =
    isHomePage && !scrolled
      ? 'text-white hover:bg-slate-100 dark:hover:bg-slate-700'
      : theme === 'light'
        ? 'text-slate-800 hover:bg-slate-200'
        : 'text-white hover:bg-slate-100 dark:hover:bg-slate-700'

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
