import React from 'react'

interface CallToActionContentProps {
  heading: string
  text: string
}

const CallToActionContent: React.FC<CallToActionContentProps> = ({ heading, text }) => (
  <>
    <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">{heading}</h2>
    <p className="mx-auto mb-8 max-w-3xl text-xl text-white/90">{text}</p>
  </>
)

export default CallToActionContent
