import React from 'react'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, centered = false }) => {
  return (
    <div className={`mb-5 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-blue-600 dark:text-blue-400">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg text-slate-600 max-w-3xl ${centered ? 'mx-auto' : ''} dark:text-slate-300`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
