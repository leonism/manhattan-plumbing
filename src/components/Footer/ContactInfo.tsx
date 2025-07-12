import React from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'

interface ContactInfoProps {
  className?: string
}

const ContactInfo: React.FC<ContactInfoProps> = ({ className }) => {
  return (
    <section aria-labelledby="contact-us" className={className}>
      <h3 id="contact-us" className="mb-6 text-xl font-semibold">
        Contact Us
      </h3>
      <address className="space-y-4 not-italic">
        <div className="flex gap-3">
          <MapPin size={20} className="mt-1 shrink-0 text-blue-400" />
          <span className="text-slate-300">
            123 Plumbing Ave, Manhattan
            <br />
            New York, NY 10001
          </span>
        </div>
        <div className="flex gap-3">
          <Phone size={20} className="shrink-0 text-blue-400" />
          <a href="tel:+12125551234" className="text-slate-300 transition-colors hover:text-white">
            (212) 555-1234
          </a>
        </div>
        <div className="flex gap-3">
          <Mail size={20} className="shrink-0 text-blue-400" />
          <a
            href="mailto:info@manhattanplumbing.com"
            className="text-slate-300 transition-colors hover:text-white"
          >
            info@manhattanplumbing.com
          </a>
        </div>
      </address>
    </section>
  )
}

export default ContactInfo
