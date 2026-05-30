import React from 'react'
import { TypographyH1, TypographyP } from '@/components/ui/typography'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, centered = false }) => {
  return (
    <div className={`mb-5 ${centered ? 'text-center' : ''}`}>
      <TypographyH1 className="mb-4 text-5xl font-bold tracking-tight text-blue-600 capitalize md:text-5xl dark:text-blue-400">
        {title}
      </TypographyH1>
      {subtitle && (
        <TypographyP
          className={`max-w-3xl text-lg text-slate-600 ${centered ? 'mx-auto' : ''} dark:text-slate-300`}
        >
          {subtitle}
        </TypographyP>
      )}
    </div>
  )
}

export default SectionHeading
