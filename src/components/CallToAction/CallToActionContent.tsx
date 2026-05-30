import React from 'react'
import { TypographyH2, TypographyP } from '@/components/ui/typography'

interface CallToActionContentProps {
  heading: string
  text: string
}

const CallToActionContent: React.FC<CallToActionContentProps> = ({ heading, text }) => (
  <>
    <TypographyH2 className="mb-6 text-3xl font-bold text-white md:text-4xl">{heading}</TypographyH2>
    <TypographyP className="mx-auto mb-8 max-w-3xl text-xl text-white/90">{text}</TypographyP>
  </>
)

export default CallToActionContent
