import React from 'react'
import Button from './Button' // Assuming Button component is in the same directory

interface PaginationButtonProps {
  onClick: () => void
  isDisabled?: boolean
  isActive?: boolean
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'icon' // Add size prop
}

const PaginationButton: React.FC<PaginationButtonProps> = ({
  onClick,
  isDisabled = false,
  isActive = false,
  children,
  className = '',
  size = 'icon', // Default size to icon
}) => {
  return (
    <Button
      variant={isActive ? 'primary' : 'outline'}
      size={size}
      onClick={onClick}
      isDisabled={isDisabled}
      className={`${size === 'icon' ? 'h-8 w-8' : ''} ${className}`}
    >
      {children}
    </Button>
  )
}

export default PaginationButton
