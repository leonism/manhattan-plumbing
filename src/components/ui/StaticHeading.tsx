import React from 'react'
import { TypographyH1, TypographyP } from '@/components/ui/typography'

interface StaticHeadingProps {
  title: string
  subtitle: string
  centered?: boolean
  className?: string
}

const StaticHeading: React.FC<StaticHeadingProps> = ({
  title,
  subtitle,
  centered = true,
  className,
}) => {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className ? className : ''}`}>
      <TypographyH1 className="mt-10 text-4xl font-bold tracking-tight text-blue-600 md:text-5xl dark:text-blue-400">
        {title}
      </TypographyH1>
      {subtitle && (
        <TypographyP className="md:text-md mx-auto max-w-3xl text-sm font-normal text-slate-600 dark:text-slate-300">
          {subtitle}
        </TypographyP>
      )}
    </div>
  )
}

export default StaticHeading
