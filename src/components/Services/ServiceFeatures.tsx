import React from 'react'
import DynamicIcon from '@/components/ui/DynamicIcon'
import SectionHeading from '@/components/ui/SectionHeading'
import { cn } from '@/lib/utils'
import { TypographyH3, TypographyP } from '@/components/ui/typography'

interface Feature {
  icon: string
  title: string
  description: string
}

interface ServiceFeaturesProps {
  title: string
  subtitle?: string
  items: Feature[]
  centered?: boolean
  variant?: 'default' | 'emergency'
}

const ServiceFeatures = ({
  title,
  subtitle,
  items,
  centered = true,
  variant = 'default',
}: ServiceFeaturesProps) => {
  return (
    <section className="bg-slate-50 py-16 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title={title} subtitle={subtitle} centered={centered} />
        <div
          className={cn(
            'mt-12 grid grid-cols-1 gap-8 md:grid-cols-3',
            items.length === 2 && 'mx-auto max-w-4xl md:grid-cols-2',
            items.length === 1 && 'mx-auto max-w-2xl md:grid-cols-1'
          )}
        >
          {items.map((feature, index) => (
            <div
              key={index}
              className={cn(
                'rounded-xl border-t-4 bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl dark:bg-slate-700',
                variant === 'emergency' ? 'border-red-500' : 'border-blue-500'
              )}
            >
              <div className="mb-6 flex justify-center">
                <DynamicIcon
                  name={feature.icon}
                  size={40}
                  className={
                    variant === 'emergency'
                      ? 'text-red-600 dark:text-red-400'
                      : 'text-blue-600 dark:text-blue-400'
                  }
                />
              </div>
              <TypographyH3 className="mb-4 text-center text-2xl font-bold text-slate-800 dark:text-white">
                {feature.title}
              </TypographyH3>
              <TypographyP className="text-center text-lg text-slate-600 dark:text-slate-300">
                {feature.description}
              </TypographyP>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceFeatures
