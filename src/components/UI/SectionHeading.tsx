import React from 'react'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, centered = false }) => {
  return (
    <div className={`mb-5 ${centered ? 'text-center' : ''}`}>
      <h1 className="mb-4 text-4xl font-bold tracking-tight text-blue-600 md:text-5xl dark:text-blue-400">
        {title}
      </h1>
      {subtitle && (
        <p
          className={`max-w-3xl text-lg text-slate-600 ${centered ? 'mx-auto' : ''} dark:text-slate-300`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
