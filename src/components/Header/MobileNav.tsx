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
      className={`fixed inset-0 z-40 bg-white transition-transform duration-300 ease-in-out lg:hidden dark:bg-slate-900 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="container mx-auto flex h-full flex-col px-4 py-6 sm:px-6">
        <div className="mb-8 flex items-center justify-between">
          <Logo />
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-full p-2 text-slate-800 transition-colors hover:bg-slate-100 dark:text-white dark:hover:bg-slate-800"
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
                    className="flex w-full items-center justify-between py-3 text-xl font-medium text-slate-800 transition-colors hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`h-6 w-6 transition-transform duration-300 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {activeDropdown === item.label && (
                    <div className="space-y-3 pt-2 pl-6">
                      {item.children.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          onClick={() => setIsOpen(false)}
                          className="block py-2 text-lg text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
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
                  className="block py-3 text-xl font-medium text-slate-800 transition-colors hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
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
