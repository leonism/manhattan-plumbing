import React from 'react'

interface ServicesListProps {
  className?: string
}

const ServicesList: React.FC<ServicesListProps> = ({ className }) => {
  return (
    <section aria-labelledby="our-services" className={className}>
      <h3 id="our-services" className="mb-6 text-xl font-semibold">
        Services
      </h3>
      <nav aria-label="Our services">
        <ul className="space-y-3">
          {[
            { href: '/services/emergency-service', text: 'Emergency Plumbing' },
            { href: '/services/drain-service', text: 'Drain Cleaning' },
            { href: '/services/water-heater-service', text: 'Water Heaters' },
            { href: '/services/remodeling-service', text: 'Bathroom Remodeling' },
            { href: '/services/pipe-service', text: 'Pipe Replacement' },
            { href: '/services/fixture-service', text: 'Fixtures Service' },
          ].map(({ href, text }) => (
            <li key={text}>
              <a href={href} className="text-slate-300 transition-colors hover:text-white">
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
