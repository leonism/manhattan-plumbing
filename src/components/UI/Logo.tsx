import React from 'react'
import { Droplets } from 'lucide-react'

interface LogoProps {
  inverted?: boolean
  size?: 'small' | 'default'
}

const Logo: React.FC<LogoProps> = ({ inverted = false, size = 'default' }) => {
  // Define icon and text sizes based on prop and viewport
  const iconSize = size === 'small' ? 'h-5 w-5 sm:h-6 sm:w-6' : 'h-7 w-7 sm:h-8 sm:w-8'
  const textSize = size === 'small' ? 'text-base sm:text-lg' : 'text-lg sm:text-xl'

  return (
    <a
      href="/"
      aria-label="Go to Manhattan Plumbing homepage"
      className="inline-flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 sm:gap-2"
    >
      <Droplets
        className={`${iconSize} ${inverted ? 'text-blue-400' : 'text-blue-600 dark:text-blue-400'}`}
        aria-hidden="true"
      />
      <span
        className={`font-bold ${textSize} ${
          inverted ? 'text-white' : 'text-slate-800 dark:text-white'
        }`}
      >
        Manhattan
        <span className="mr-2 text-blue-600 dark:text-blue-400">Plumbing</span>
      </span>
    </a>
  )
}

export default Logo
