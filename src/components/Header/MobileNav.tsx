import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, X } from 'lucide-react'
import { NavItem } from './navConfig'
import SearchBar from '../UI/SearchBar'
import Logo from '../UI/Logo'
import GetQuoteButton from './GetQuoteButton'

interface MobileNavProps {
  navItems: NavItem[]
  isOpen: boolean
  activeDropdown: string | null
  toggleDropdown: (label: string) => void
  setIsOpen: (isOpen: boolean) => void
}

const MobileNav: React.FC<MobileNavProps> = ({
  navItems,
  isOpen,
  activeDropdown,
  toggleDropdown,
  setIsOpen,
}) => {
  return (
    <div
      className={`lg:hidden fixed inset-0 bg-white dark:bg-slate-900 z-40 overflow-y-auto transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 py-6">
        {/* Mobile Nav Header */}
        <div className="flex justify-between items-center mb-8">
          <Logo />
          <button
            onClick={() => setIsOpen(false)}
            className="text-slate-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="Close mobile navigation"
          >
            <X size={28} />
          </button>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar onClear={() => {}} />
        </div>

        {/* Main Navigation */}
        <nav className="flex flex-col space-y-2">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.children && item.children.length > 0 ? (
                <div className="text-slate-800 dark:text-white">
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="w-full flex justify-between items-center py-3 text-lg font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {activeDropdown === item.label && (
                    <div className="pl-4 pt-2 space-y-2 transition-all duration-300 ease-in-out">
                      {item.children.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          onClick={() => setIsOpen(false)}
                          className="block py-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={item.href!}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-lg font-semibold text-slate-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="mt-8">
          <GetQuoteButton />
        </div>
      </div>
    </div>
  )
}

export default MobileNav
