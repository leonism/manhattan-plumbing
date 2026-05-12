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
        'py-12 text-white',
        variant === 'emergency' ? 'bg-red-600' : 'bg-blue-600 dark:bg-blue-700'
      )}
    >
      <div className="container mx-auto px-4 text-center md:px-6">
        <h2 className="mb-4 text-3xl font-bold">{title}</h2>
        <p
          className={cn('mb-8 text-xl', variant === 'emergency' ? 'text-red-100' : 'text-blue-100')}
        >
          {subtitle}
        </p>
        <Button
          href={buttonHref}
          variant={null}
          className={cn(
            'h-16 px-12 text-xl',
            variant === 'emergency'
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          )}
        >
          {buttonText}
        </Button>
      </div>
    </section>
  )
}

export default ServiceCTA
