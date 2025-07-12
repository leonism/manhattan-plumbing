import React from 'react'
import { MapPin } from 'lucide-react'
import ContactDetail from './ContactDetail'

const Address: React.FC = () => (
  <ContactDetail icon={<MapPin size={24} />} title="Address">
    <address className="text-slate-600 not-italic dark:text-slate-300">
      123 Plumbing Ave
      <br />
      Manhattan, NY 10001
    </address>
  </ContactDetail>
)

export default Address
