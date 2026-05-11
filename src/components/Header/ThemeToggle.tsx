"use client"

import React from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'
import { cn } from '@/lib/utils'

interface ThemeToggleProps {
  theme: string
  scrolled: boolean
  isHomePage?: boolean
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, scrolled, isHomePage }) => {
  const { toggleTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const iconColorClass = cn(
    'relative flex items-center justify-center rounded-full transition-all duration-200',
    isHomePage && !scrolled
      ? 'text-white hover:bg-white/10'
      : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800'
  )

  if (!mounted) return <div className="h-10 w-10 md:mr-3" />

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn('p-2 md:mr-3 md:p-3', iconColorClass)}
      aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
    >
      <span className="sr-only">Toggle theme</span>
      {theme === 'light' ? (
        <Moon size={20} className="transition-transform group-hover:rotate-12" />
      ) : (
        <Sun size={20} className="transition-transform group-hover:rotate-45" />
      )}
    </button>
  )
}

export default ThemeToggle
