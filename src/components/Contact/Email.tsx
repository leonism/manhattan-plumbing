import React from 'react'
import { Mail } from 'lucide-react'
import ContactDetail from './ContactDetail'

const Email: React.FC = () => (
  <ContactDetail icon={<Mail size={24} />} title="Email">
    <a
      href="mailto:info@manhattanplumbing.com"
      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
    >
      info@manhattanplumbing.com
    </a>
  </ContactDetail>
)

export default Email
