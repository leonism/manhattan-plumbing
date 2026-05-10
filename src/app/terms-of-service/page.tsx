import React from 'react'
import { Metadata } from 'next'
import LegalPageClient from '@/components/Legal/LegalPageClient'
import ContactForm from '@/components/ui/ContactForm'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Read our terms of service to understand the conditions for using Manhattan Plumbing\'s services.',
  alternates: {
    canonical: '/terms-of-service',
  },
  openGraph: {
    title: 'Terms of Service | Manhattan Plumbing',
    description: 'Read our terms of service to understand the conditions for using Manhattan Plumbing\'s services.',
    url: '/terms-of-service',
  },
}

export default function TermsOfServicePage() {
  const lastUpdated = '2025-05-21'

  const contactInfo = {
    company: 'Manhattan Plumbing',
    address: '123 Plumbing Ave',
    city: 'Manhattan, NY 10001',
    email: 'legal@manhattanplumbing.com',
    phone: '(212) 555-1234',
  }

  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: (
        <p className="leading-relaxed text-gray-600 dark:text-gray-300">
          By accessing and using Manhattan Plumbing's services, you agree to be bound by these Terms
          of Service and all applicable laws and regulations. If you do not agree with any of these
          terms, you are prohibited from using our services.
        </p>
      ),
    },
    {
      title: '2. Service Description',
      content: (
        <>
          <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-300">
            Manhattan Plumbing provides plumbing services including but not limited to:
          </p>
          <ul className="space-y-2">
            {[
              '🚨 Emergency plumbing repairs',
              '🔧 Installation and maintenance',
              '🚿 Drain cleaning and repair',
              '🔥 Water heater services',
              '🛁 Bathroom remodeling',
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="mt-1 mr-2" aria-hidden="true">
                  {item.split(' ')[0]}
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  {item.split(' ').slice(1).join(' ')}
                </span>
              </li>
            ))}
          </ul>
        </>
      ),
    },
    {
      title: '3. Scheduling and Appointments',
      content: (
        <>
          <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-300">
            When scheduling our services:
          </p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {[
              '⏰ 24-hour notice is required for appointment cancellations',
              '💲 A fee may be charged for missed appointments',
              '🚑 Emergency services are available 24/7 at premium rates',
              '⏱️ Service windows are typically 2-3 hours',
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-start rounded-lg bg-gray-50 p-3 dark:bg-gray-700"
              >
                <span className="mt-1 mr-2" aria-hidden="true">
                  {item.split(' ')[0]}
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  {item.split(' ').slice(1).join(' ')}
                </span>
              </li>
            ))}
          </ul>
        </>
      ),
    },
    {
      title: '4. Pricing and Payment',
      content: (
        <>
          <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-300">
            Our pricing policies include:
          </p>
          <ul className="space-y-3">
            {[
              '💰 Upfront pricing before work begins',
              '💳 Payment is due upon service completion',
              '💵 We accept major credit cards and cash',
              '🏦 Financing options are available for larger projects',
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="mt-1 mr-2" aria-hidden="true">
                  {item.split(' ')[0]}
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  {item.split(' ').slice(1).join(' ')}
                </span>
              </li>
            ))}
          </ul>
        </>
      ),
    },
    {
      title: '5. Warranties and Guarantees',
      content: (
        <>
          <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-300">
            We stand behind our work with:
          </p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {[
              '🛡️ 90-day labor warranty on all services',
              '🏭 Manufacturer warranties on all parts and equipment',
              '✅ 100% satisfaction guarantee',
              '🔧 Free follow-up visits for warranty issues',
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-start rounded-lg bg-gray-50 p-3 dark:bg-gray-700"
              >
                <span className="mt-1 mr-2" aria-hidden="true">
                  {item.split(' ')[0]}
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  {item.split(' ').slice(1).join(' ')}
                </span>
              </li>
            ))}
          </ul>
        </>
      ),
    },
    {
      title: '6. Liability',
      content: (
        <>
          <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-300">
            Manhattan Plumbing is fully licensed and insured. We maintain:
          </p>
          <ul className="space-y-3">
            {[
              '📄 General liability insurance',
              "👷 Workers' compensation insurance",
              '🏛️ Professional liability coverage',
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="mt-1 mr-2" aria-hidden="true">
                  {item.split(' ')[0]}
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  {item.split(' ').slice(1).join(' ')}
                </span>
              </li>
            ))}
          </ul>
        </>
      ),
    },
    {
      title: '7. Contact Information',
      content: (
        <>
          <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-300">
            For questions about these terms, please contact us at:
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
      title="Terms of Service"
      lastUpdated={lastUpdated}
      sections={sections}
    />
  )
}
