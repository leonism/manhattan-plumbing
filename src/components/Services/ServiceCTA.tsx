import React from 'react'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils'

interface ServiceCTAProps {
  title: string
  subtitle: string
  buttonText: string
  buttonHref: string
  variant?: 'default' | 'emergency'
}

const ServiceCTA = ({
  title,
  subtitle,
  buttonText,
  buttonHref,
  variant = 'default',
}: ServiceCTAProps) => {
  return (
    <section
      className={cn(
        'py-16 text-white',
        variant === 'emergency'
          ? 'bg-red-600 dark:bg-red-900'
          : 'bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white'
      )}
    >
      <div className="container mx-auto px-4 text-center md:px-6">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">{title}</h2>
        <p
          className={cn(
            'mx-auto mb-10 max-w-2xl text-xl',
            variant === 'emergency' ? 'text-red-100' : 'text-slate-600 dark:text-slate-300'
          )}
        >
          {subtitle}
        </p>
        <Button href={buttonHref} variant="default" size="lg" className="h-16 px-12 text-xl">
          {buttonText}
        </Button>
      </div>
    </section>
  )
}

export default ServiceCTA
