import React from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

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
    <button
      onClick={toggleTheme}
      className={`p-1 md:p-3 md:mr-3 rounded-full transition-colors ${iconColorClass}`}
      aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
    >
      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  )
}

export default ThemeToggle
