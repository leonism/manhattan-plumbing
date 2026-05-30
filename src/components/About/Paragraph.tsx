import React from 'react'
import { TypographyP } from '@/components/ui/typography'

const Paragraph: React.FC<{
  children: React.ReactNode
  className?: string
}> = ({ children, className = 'mb-6' }) => (
  <TypographyP className={`text-slate-600 dark:text-slate-300 ${className}`}>{children}</TypographyP>
)

export default Paragraph
