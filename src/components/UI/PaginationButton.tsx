import React from 'react'
import { Link } from 'react-router-dom'

interface PaginationButtonProps {
  to: string
  isActive?: boolean
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'icon'
  isDisabled?: boolean
}

const PaginationButton: React.FC<PaginationButtonProps> = ({
  to,
  isActive = false,
  children,
  className = '',
  size = 'icon',
  isDisabled = false,
}) => {
  const baseStyles = `inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-hidden focus:ring-2 focus:ring-offset-2 ${size === 'icon' ? 'rounded-full' : 'rounded-md'}`

  const variantStyles = isActive
    ? 'bg-blue-600 hover:bg-blue-700 text-white hover:text-white focus:ring-blue-500'
    : 'border border-slate-300 dark:border-slate-600 bg-transparent hover:bg-blue-600 dark:hover:bg-blue-600 text-slate-800 dark:text-white focus:ring-blue-500'

  const sizeStyles = {
    sm: 'text-sm px-3 py-1.5',
    icon: 'h-9 w-9',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3',
  }

  const disabledStyles = isDisabled ? 'opacity-50 cursor-not-allowed' : ''

  const styles = `
    ${baseStyles}
    ${variantStyles}
    ${sizeStyles[size]}
    ${disabledStyles}
    ${className}
  `

  if (isDisabled) {
    return <span className={styles}>{children}</span>
  }

  return (
    <Link to={to} className={styles}>
      {children}
    </Link>
  )
}

export default PaginationButton
