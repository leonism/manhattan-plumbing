import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'danger' | 'outline' | 'outline-solid' | 'ghost'
  size?: 'sm' | 'md' | 'lg' | 'icon'
  fullWidth?: boolean
  className?: string
  onClick?: () => void
  isDisabled?: boolean // Add isDisabled prop
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  onClick,
  isDisabled = false, // Destructure and provide a default value
}) => {
  const baseStyles = `inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-hidden focus:ring-2 focus:ring-offset-2 ${size === 'icon' ? 'rounded-full' : 'rounded-md'}`

  const variantStyles = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white hover:text-white focus:ring-blue-500',
    secondary: 'bg-green-900 hover:bg-slate-900 text-white focus:ring-slate-500',
    danger: 'bg-red-900 text-white hover:bg-slate-900 focus:ring-salte-500',
    outline:
      'border border-slate-300 dark:border-slate-600 bg-transparent hover:bg-blue-50 dark:hover:bg-blue-950 text-slate-800 dark:text-white focus:ring-blue-500',
    ghost:
      'hover:bg-blue-50 dark:hover:bg-blue-950 text-slate-800 dark:text-white focus:ring-blue-500',
  }

  const sizeStyles = {
    sm: 'text-sm px-3 py-1.5',
    icon: 'h-9 w-9',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3',
  }

  const styles = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `

  if (href) {
    return (
      <a href={href} className={styles} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <button
      className={styles}
      onClick={onClick}
      disabled={isDisabled} // Apply the disabled attribute
    >
      {children}
    </button>
  )
}

export default Button
