import React from 'react'
import { Droplets } from 'lucide-react'

interface LogoProps {
  inverted?: boolean
  size?: 'small' | 'default'
}

const Logo: React.FC<LogoProps> = ({ inverted = false, size = 'default' }) => {
  const sizeClasses = size === 'small' ? 'h-6 w-6' : 'h-8 w-8'
  const textSize = size === 'small' ? 'text-lg' : 'text-xl'

  return (
    <a href="/" className="flex items-center space-x-1">
      <Droplets
        className={`${sizeClasses} ${
          inverted ? 'text-blue-400' : 'text-blue-600 dark:text-blue-400'
        }`}
      />
      <div
        className={`font-bold ${textSize} mt-auto ${
          inverted ? 'text-white' : 'text-slate-800 dark:text-white'
        }`}
      >
        Manhattan
        <span className="text-blue-600 dark:text-blue-400">Plumbing</span>
      </div>
    </a>
  )
}

export default Logo
