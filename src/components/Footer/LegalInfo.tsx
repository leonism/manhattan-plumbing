import React from 'react'

interface LegalInfoProps {
  className?: string
}

const LegalInfo: React.FC<LegalInfoProps> = ({ className }) => {
  return (
    <section aria-labelledby="legal-info" className={className}>
      <h3 id="legal-info" className="mb-6 text-xl font-semibold">
        Legal
      </h3>
      <nav aria-label="Legal information">
        <ul className="space-y-3">
          {[
            { href: '/privacy-policy', text: 'Privacy Policy' },
            { href: '/terms-of-service', text: 'Terms of Service' },
            { href: '/cookie-policy', text: 'Cookie Policy' },
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

export default LegalInfo
