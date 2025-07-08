import React from 'react'

interface ServicesListProps {
  className?: string
}

const ServicesList: React.FC<ServicesListProps> = ({ className }) => {
  return (
    <section aria-labelledby="our-services" className={className}>
      <h3 id="our-services" className="text-xl font-semibold mb-6">
        Services
      </h3>
      <nav aria-label="Our services">
        <ul className="space-y-3">
          {[
            { href: '/services/emergency', text: 'Emergency Plumbing' },
            { href: '/services/drains', text: 'Drain Cleaning' },
            { href: '/services/water-heaters', text: 'Water Heaters' },
            { href: '/services/remodeling', text: 'Bathroom Remodeling' },
            { href: '/services/pipes', text: 'Pipe Replacement' },
            {
              href: '/services/fixtures',
              text: 'Fixtures Service',
            },
          ].map(({ href, text }) => (
            <li key={text}>
              <a href={href} className="text-slate-300 hover:text-white transition-colors">
                {text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  )
}

export default ServicesList
