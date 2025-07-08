import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { NavItem } from './navConfig'

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
  if (!isOpen) return null

  return (
    <div className="lg:hidden fixed inset-0 bg-slate-900/95 backdrop-blur-sm z-40">
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-8 h-full overflow-y-auto">
        <nav className="flex flex-col space-y-4">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.dropdown ? (
                <div className="text-white">
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="w-full flex justify-between items-center py-3 text-lg font-semibold hover:text-primary-400 transition-colors"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {activeDropdown === item.label && (
                    <div className="pl-4 pt-2 space-y-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          onClick={() => setIsOpen(false)}
                          className="block py-2 text-slate-300 hover:text-white transition-colors"
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
                  className="block py-3 text-lg font-semibold text-white hover:text-primary-400 transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default MobileNav
