import React from 'react'

interface ContactDetailProps {
  icon: React.ReactNode
  title: string
  children: React.ReactNode
}

const ContactDetail: React.FC<ContactDetailProps> = ({ icon, title, children }) => (
  <article className="mb-6 flex items-start gap-4">
    <div className="shrink-0 text-blue-600 dark:text-blue-400">{icon}</div>
    <div>
      <h4 className="mb-1 text-lg font-semibold text-slate-800 dark:text-white">{title}</h4>
      <div className="text-base text-slate-600 dark:text-slate-300">{children}</div>
    </div>
  </article>
)

export default ContactDetail
