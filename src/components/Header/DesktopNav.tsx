import React from 'react'
import { NavItem } from './navConfig'
import { ChevronDown } from 'lucide-react'

interface DesktopNavProps {
  navItems: NavItem[]
  activeDropdown: string | null
  toggleDropdown: (label: string) => void
  theme: string
  scrolled: boolean
  isHomePage?: boolean
}

const DropdownButton = ({
  label,
  onClick,
  isActive,
  theme,
  scrolled,
  isHomePage,
}: {
  label: string
  onClick: () => void
  isActive: boolean
  theme: string
  scrolled: boolean
  isHomePage?: boolean
}) => {
  const textColorClass =
    isHomePage && !scrolled
      ? 'text-white group-hover:text-blue-600 dark:group-hover:text-blue-400'
      : theme === 'light'
        ? 'text-slate-800 group-hover:text-blue-600'
        : 'text-white group-hover:text-blue-600 dark:group-hover:text-blue-400'

  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-1 font-medium transition-colors ${textColorClass}`}
      aria-expanded={isActive}
      aria-haspopup="true"
    >
      <span>{label}</span>
      <ChevronDown
        size={16}
        className={`transition-transform ${isActive ? 'rotate-180' : ''} ${textColorClass}`}
      />
    </button>
  )
}

const DropdownMenu = ({ children }: { children: React.ReactNode }) => (
  <ul
    className="invisible absolute left-0 mt-2 w-48 rounded-xl border border-slate-200 bg-white py-2 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:opacity-100 dark:bg-slate-800"
    role="menu"
  >
    {children}
  </ul>
)

const MenuItem = ({ label, href }: { label: string; href: string }) => {
  return (
    <li role="none">
      <a
        href={href}
        className="block px-4 py-2 text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-700"
        role="menuitem"
      >
        {label}
      </a>
    </li>
  )
}

const DesktopNav: React.FC<DesktopNavProps> = ({
  navItems,
  activeDropdown,
  toggleDropdown,
  theme,
  scrolled,
  isHomePage,
}) => {
  const linkColorClass =
    isHomePage && !scrolled
      ? 'text-white hover:text-blue-600 dark:hover:text-blue-400'
      : theme === 'light'
        ? 'text-slate-800 hover:text-blue-600'
        : 'text-white hover:text-blue-600 dark:hover:text-blue-400'

  return (
    <nav className="hidden lg:block" aria-label="Primary">
      <ul className="flex items-center space-x-8">
        {navItems.map((item) => (
          <li key={item.label} className="group relative">
            {item.children ? (
              <>
                <DropdownButton
                  label={item.label}
                  onClick={() => toggleDropdown(item.label)}
                  isActive={activeDropdown === item.label}
                  theme={theme}
                  scrolled={scrolled}
                  isHomePage={isHomePage}
                />
                <DropdownMenu>
                  {item.children.map((child) => (
                    <MenuItem key={child.label} label={child.label} href={child.href} />
                  ))}
                </DropdownMenu>
              </>
            ) : (
              <a href={item.href} className={`font-medium transition-colors ${linkColorClass}`}>
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default DesktopNav
