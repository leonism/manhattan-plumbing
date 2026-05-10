"use client"

import React from 'react'
import { Menu, X } from 'lucide-react'

interface MenuToggleProps {
  isOpen: boolean
  toggleMenu: () => void
  scrolled: boolean
  theme: string
  isHomePage?: boolean
}

const MenuToggle: React.FC<MenuToggleProps> = ({
  isOpen,
  toggleMenu,
  scrolled,
  theme,
  isHomePage,
}) => {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const Icon = isOpen ? X : Menu

  const iconColorClass =
    isHomePage && !scrolled
      ? `text-white hover:bg-slate-100 dark:hover:bg-slate-700`
      : `text-slate-800 hover:bg-slate-200 ${theme === 'dark' ? 'dark:text-white dark:hover:bg-slate-700' : ''}`

  if (!mounted) return <div className="p-1 md:p-2 w-[32px] md:w-[40px] h-[32px] md:h-[40px]" />

  return (
    <button
      onClick={toggleMenu}
      className={`rounded-full p-1 transition-colors md:p-2 ${iconColorClass}`}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      <Icon size={20} aria-hidden="true" focusable="false" />
    </button>
  )
}

export default MenuToggle
