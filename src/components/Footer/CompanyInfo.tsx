import React from 'react'
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Rss } from 'lucide-react'
import LogoFooter from '@/components/ui/LogoFooter'
import { TypographyH2, TypographyP } from '@/components/ui/typography'

interface CompanyInfoProps {
  className?: string
}

const CompanyInfo: React.FC<CompanyInfoProps> = ({ className }) => {
  return (
    <section aria-labelledby="company-info" className={className}>
      <TypographyH2 id="company-info" className="sr-only">
        Company Information
      </TypographyH2>
      <LogoFooter />
      <TypographyP className="mt-4 mb-6 text-slate-300">
        Professional plumbing services with a commitment to quality and customer satisfaction since
        1985.
      </TypographyP>
      <nav aria-label="Social media">
        <ul className="flex gap-4">
          {[
            { icon: Facebook, label: 'Facebook' },
            { icon: Twitter, label: 'Twitter' },
            { icon: Instagram, label: 'Instagram' },
            { icon: Linkedin, label: 'LinkedIn' },
            { icon: Youtube, label: 'YouTube' },
            { icon: Rss, label: 'RSS Feed', href: '/rss.xml' },
          ].map(({ icon: Icon, label, href }) => (
            <li key={label}>
              <a
                href={href || '#'}
                className="text-slate-300 transition-colors hover:text-white"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  )
}

export default CompanyInfo
