import React from 'react'
import { Metadata } from 'next'
import LegalPageClient from '@/components/Legal/LegalPageClient'
import ContactForm from '@/components/ui/ContactForm'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn about how Manhattan Plumbing collects, uses, and protects your personal information.',
  alternates: {
    canonical: '/privacy-policy',
    types: {
      'text/markdown': 'https://manhattan-plumbing.pages.dev/privacy-policy/index.md',
    },
  },
  openGraph: {
    title: 'Privacy Policy | Manhattan Plumbing',
    description: 'Learn about how Manhattan Plumbing collects, uses, and protects your personal information.',
    url: '/privacy-policy',
  },
}

export default function PrivacyPolicyPage() {
  const lastUpdated = '2025-05-21'

  const contactInfo = {
    company: 'Manhattan Plumbing',
    address: '123 Plumbing Ave',
    city: 'Manhattan, NY 10001',
    email: 'privacy@manhattanplumbing.com',
    phone: '(212) 555-1234',
  }

  const sections = [
    {
      title: '1. Information We Collect',
      content: (
        <>
          <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-300">
            We collect information that you provide directly to us, including:
          </p>
          <ul className="space-y-3">
            {[
              { text: 'Name, email address, and phone number', icon: '👤' },
              { text: 'Service address and billing information', icon: '🏠' },
              { text: 'Service history and preferences', icon: '📋' },
              { text: 'Communications with our team', icon: '✉️' },
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="mt-1 mr-2" aria-hidden="true">
                  {item.icon}
                </span>
                <span className="text-gray-600 dark:text-gray-300">{item.text}</span>
              </li>
            ))}
          </ul>
        </>
      ),
    },
    {
      title: '2. How We Use Your Information',
      content: (
        <>
          <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-300">
            We use the information we collect to:
          </p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {[
              { text: 'Provide and improve our services', icon: '🔧' },
              { text: 'Communicate with you about appointments', icon: '🗓️' },
              {
                text: 'Send service updates and promotional offers',
                icon: '📢',
              },
              { text: 'Process payments and maintain accounts', icon: '💳' },
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-start rounded-lg bg-gray-50 p-3 dark:bg-gray-700"
              >
                <span className="mt-1 mr-2" aria-hidden="true">
                  {item.icon}
                </span>
                <span className="text-gray-600 dark:text-gray-300">{item.text}</span>
              </li>
            ))}
          </ul>
        </>
      ),
    },
    {
      title: '3. Information Sharing',
      content: (
        <>
          <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-300">
            We do not sell or share your personal information with third parties except:
          </p>
          <ul className="space-y-3">
            {[
              { text: 'With your consent', icon: '✅' },
              { text: 'To comply with legal obligations', icon: '⚖️' },
              {
                text: 'With service providers who assist our operations',
                icon: '🤝',
              },
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="mt-1 mr-2" aria-hidden="true">
                  {item.icon}
                </span>
                <span className="text-gray-600 dark:text-gray-300">{item.text}</span>
              </li>
            ))}
          </ul>
        </>
      ),
    },
    {
      title: '4. Security',
      content: (
        <p className="leading-relaxed text-gray-600 dark:text-gray-300">
          We implement appropriate technical and organizational security measures to protect your
          personal information against unauthorized access, alteration, disclosure, or destruction.
        </p>
      ),
    },
    {
      title: '5. Your Rights',
      content: (
        <>
          <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-300">
            You have the right to:
          </p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {[
              { text: 'Access your personal information', icon: '🔍' },
              { text: 'Correct inaccurate information', icon: '✏️' },
              { text: 'Request deletion of your information', icon: '🗑️' },
              { text: 'Opt-out of marketing communications', icon: '✋' },
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-start rounded-lg bg-gray-50 p-3 dark:bg-gray-700"
              >
                <span className="mt-1 mr-2" aria-hidden="true">
                  {item.icon}
                </span>
                <span className="text-gray-600 dark:text-gray-300">{item.text}</span>
              </li>
            ))}
          </ul>
        </>
      ),
    },
    {
      title: '6. Contact Us',
      content: (
        <>
          <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-300">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <address className="rounded-lg border border-blue-100 bg-blue-50 p-6 not-italic dark:border-gray-600 dark:bg-gray-700">
            <div className="space-y-2">
              <p className="font-medium text-gray-800 dark:text-white">{contactInfo.company}</p>
              <p className="text-gray-600 dark:text-gray-300">{contactInfo.address}</p>
              <p className="text-gray-600 dark:text-gray-300">{contactInfo.city}</p>
              <p className="text-gray-600 dark:text-gray-300">
                Email:{' '}
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  {contactInfo.email}
                </a>
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Phone:{' '}
                <a
                  href={`tel:${contactInfo.phone.replace(/[^\d+]/g, '')}`}
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  {contactInfo.phone}
                </a>
              </p>
            </div>
          </address>
          <div className="mt-5">
            <ContactForm
              heading="Quick Question?"
              headingSize="sm"
              shadow={false}
              variant="minimal"
            />
          </div>
        </>
      ),
    },
  ]

  return (
    <LegalPageClient
      title="Privacy Policy"
      lastUpdated={lastUpdated}
      sections={sections}
    />
  )
}
