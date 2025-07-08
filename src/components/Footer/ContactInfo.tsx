import React from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'

interface ContactInfoProps {
  className?: string
}

const ContactInfo: React.FC<ContactInfoProps> = ({ className }) => {
  return (
    <section aria-labelledby="contact-us" className={className}>
      <h3 id="contact-us" className="text-xl font-semibold mb-6">
        Contact Us
      </h3>
      <address className="not-italic space-y-4">
        <div className="flex gap-3">
          <MapPin size={20} className="text-blue-400 mt-1 shrink-0" />
          <span className="text-slate-300">
            123 Plumbing Ave, Manhattan
            <br />
            New York, NY 10001
          </span>
        </div>
        <div className="flex gap-3">
          <Phone size={20} className="text-blue-400 shrink-0" />
          <a href="tel:+12125551234" className="text-slate-300 hover:text-white transition-colors">
            (212) 555-1234
          </a>
        </div>
        <div className="flex gap-3">
          <Mail size={20} className="text-blue-400 shrink-0" />
          <a
            href="mailto:info@manhattanplumbing.com"
            className="text-slate-300 hover:text-white transition-colors"
          >
            info@manhattanplumbing.com
          </a>
        </div>
      </address>
    </section>
  )
}

export default ContactInfo
