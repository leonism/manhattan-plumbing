import React from 'react'
import { Phone } from 'lucide-react'
import ContactDetail from './ContactDetail'

const PhoneComponent: React.FC = () => (
  <ContactDetail icon={<Phone size={24} />} title="Phone">
    <a
      href="tel:+12125551234"
      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
    >
      (212) 555-1234
    </a>
    <br />
    <span className="text-sm lg:text-base">24/7 Emergency Service</span>
  </ContactDetail>
)

export default PhoneComponent
