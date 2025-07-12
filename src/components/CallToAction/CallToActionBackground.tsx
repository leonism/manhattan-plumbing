import React from 'react'

interface CallToActionBackgroundProps {
  imageUrl: string
}

const CallToActionBackground: React.FC<CallToActionBackgroundProps> = ({ imageUrl }) => (
  <div
    className="absolute inset-0 z-0 bg-cover bg-center"
    style={{
      backgroundImage: `url(${imageUrl})`,
      filter: 'brightness(0.3)',
    }}
    aria-hidden="true"
  />
)

export default CallToActionBackground
