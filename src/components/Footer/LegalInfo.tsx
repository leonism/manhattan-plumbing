import React from 'react'
import { TypographyH3 } from '@/components/ui/typography'

const LegalInfo: React.FC = () => (
  <section aria-labelledby="legal-links">
    <TypographyH3 id="legal-links" className="mb-6 text-xl font-semibold">
      Legal
    </TypographyH3>
    <nav aria-label="Legal links">
      <ul className="space-y-3">
        <li>
          <a href="/privacy-policy" className="text-slate-300 transition-colors hover:text-white">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="/terms-of-service" className="text-slate-300 transition-colors hover:text-white">
            Terms of Service
          </a>
        </li>
        <li>
          <a href="/cookies-policy" className="text-slate-300 transition-colors hover:text-white">
            Cookies Policy
          </a>
        </li>
      </ul>
    </nav>
  </section>
)

export default LegalInfo
