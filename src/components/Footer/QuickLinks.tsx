import React from 'react'

interface QuickLinksProps {
  className?: string
}

const QuickLinks: React.FC<QuickLinksProps> = ({ className }) => {
  return (
    <section aria-labelledby="quick-links" className={className}>
      <h3 id="quick-links" className="mb-6 text-xl font-semibold">
        Quick Links
      </h3>
      <nav aria-label="Quick links">
        <ul className="space-y-3">
          {[
            { href: '/', text: 'Home' },
            { href: '/news', text: 'News & Updates' },
            { href: '/#services', text: 'Services' },
            { href: '/#about', text: 'About Us' },
            { href: '/location', text: 'Location' },
            { href: '/#testimonials', text: 'Testimonials' },
            { href: '/#contact', text: 'Contact' },
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

export default QuickLinks
