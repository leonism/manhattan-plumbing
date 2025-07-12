import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, X } from 'lucide-react'
import { NavItem } from './navConfig'
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
      className={`lg:hidden fixed inset-0 bg-white dark:bg-slate-900 z-40 transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-6 flex flex-col h-full">
        <div className="flex justify-between items-center mb-8">
          <Logo />
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
            aria-label="Close mobile navigation"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-grow space-y-4">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.children && item.children.length > 0 ? (
                <div>
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="w-full flex justify-between items-center py-3 text-xl font-medium text-slate-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-6 h-6 transition-transform duration-300 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {activeDropdown === item.label && (
                    <div className="pl-6 pt-2 space-y-3">
                      {item.children.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          onClick={() => setIsOpen(false)}
                          className="block py-2 text-lg text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
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
                  className="block py-3 text-xl font-medium text-slate-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="mt-auto pt-8 pb-4 text-center">
          <GetQuoteButton />
        </div>
      </div>
    </div>
  )
}

export default MobileNav
