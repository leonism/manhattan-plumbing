import React from 'react'

interface HeroButtonProps {
  href: string
  children: React.ReactNode
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const HeroButton: React.FC<HeroButtonProps> = ({ href, children, icon: Icon }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    window.location.href = href
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex items-center justify-center rounded-md border border-white bg-blue-600 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-white/10 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:outline-hidden"
    >
      {Icon && <Icon className="mr-2 h-6 w-6" aria-hidden="true" />}
      <span>{children}</span>
    </button>
  )
}

export default HeroButton
