import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface HeroButtonProps {
  href: string
  children: React.ReactNode
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
}

const HeroButton: React.FC<HeroButtonProps> = ({
  href,
  children,
  icon: Icon,
  variant = 'primary',
  className,
}) => {
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-white/10 text-white border border-white hover:bg-white/20',
    outline: 'bg-transparent text-white border-2 border-white hover:bg-white/10',
  }

  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center justify-center rounded-lg px-8 py-4 text-lg font-semibold transition-all duration-200 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:outline-hidden',
        variantClasses[variant],
        className
      )}
    >
      {Icon && <Icon className="mr-2 h-5 w-5" aria-hidden="true" />}
      <span>{children}</span>
    </Link>
  )
}

export default HeroButton
