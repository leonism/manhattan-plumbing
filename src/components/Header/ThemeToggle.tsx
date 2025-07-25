import React from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'

interface ThemeToggleProps {
  theme: string
  scrolled: boolean
  isHomePage?: boolean
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, scrolled, isHomePage }) => {
  const { toggleTheme } = useTheme()

  const iconColorClass =
    isHomePage && !scrolled
      ? 'text-white hover:bg-slate-100 dark:hover:bg-slate-700'
      : theme === 'light'
        ? 'text-slate-800 hover:bg-slate-200'
        : 'text-white hover:bg-slate-100 dark:hover:bg-slate-700'

  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault()
        toggleTheme()
      }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          toggleTheme()
        }
      }}
      className={`rounded-full p-1 transition-colors md:mr-3 md:p-3 ${iconColorClass}`}
      aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
    >
      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
    </a>
  )
}

export default ThemeToggle
