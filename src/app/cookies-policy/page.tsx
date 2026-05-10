import React from 'react'
import { Metadata } from 'next'
import LegalPageClient from '@/components/Legal/LegalPageClient'
import ContactForm from '@/components/ui/ContactForm'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Learn about how Manhattan Plumbing uses cookies and similar technologies on our website.',
  alternates: {
    canonical: '/cookies-policy',
    types: {
      'text/markdown': 'https://manhattan-plumbing.pages.dev/cookies-policy/index.md',
    },
  },
  openGraph: {
    title: 'Cookie Policy | Manhattan Plumbing',
    description: 'Learn about how Manhattan Plumbing uses cookies and similar technologies on our website.',
    url: '/cookies-policy',
  },
}

export default function CookiesPolicyPage() {
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
      title: '1. What Are Cookies',
      content: (
        <p className="leading-relaxed text-gray-600 dark:text-gray-300">
          Cookies are small text files that are placed on your computer or mobile device when you
          visit our website. They allow us to remember your preferences and improve your browsing
          experience.
        </p>
      ),
    },
    {
      title: '2. Types of Cookies We Use',
      content: (
        <div className="space-y-6">
          {[
            {
              title: 'Essential Cookies',
              description:
                'These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.',
              icon: '🔒',
            },
            {
              title: 'Performance Cookies',
              description:
                'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.',
              icon: '📊',
            },
            {
              title: 'Functional Cookies',
              description:
                'These cookies enable enhanced functionality and personalization, such as remembering your preferences.',
              icon: '⚙️',
            },
            {
              title: 'Marketing Cookies',
              description:
                'These cookies track your online activity to help advertisers deliver more relevant advertising or to limit how many times you see an ad.',
              icon: '📢',
            },
          ].map((type, index) => (
            <div
              key={index}
              className="rounded-lg border-l-4 border-blue-500 bg-gray-50 p-5 dark:bg-gray-700"
            >
              <div className="flex items-start">
                <span className="mr-3 text-2xl" aria-hidden="true">
                  {type.icon}
                </span>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{type.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: '3. Cookie Management',
      content: (
        <p className="leading-relaxed text-gray-600 dark:text-gray-300">
          You can control and/or delete cookies as you wish. You can delete all cookies that are
          already on your computer and you can set most browsers to prevent them from being placed.
          However, if you do this, you may have to manually adjust some preferences every time you
          visit a site, and some services and functionalities may not work.
        </p>
      ),
    },
    {
      title: '4. Your Choices',
      content: (
        <>
          <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-300">
            When you first visit our website, you will be presented with a cookie banner that allows
            you to:
          </p>
          <ul className="space-y-3">
            {[
              { text: 'Accept all cookies', icon: '✅' },
              { text: 'Reject non-essential cookies', icon: '❌' },
              { text: 'Manage cookie preferences', icon: '⚙️' },
              { text: 'Learn more about our cookie policy', icon: '📄' },
            ].map((choice, index) => (
              <li key={index} className="flex items-start">
                <span className="mt-1 mr-2" aria-hidden="true">
                  {choice.icon}
                </span>
                <span className="text-gray-600 dark:text-gray-300">{choice.text}</span>
              </li>
            ))}
          </ul>
        </>
      ),
    },
    {
      title: '5. Third-Party Cookies',
      content: (
        <>
          <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-300">
            We use some third-party services that may set their own cookies, including:
          </p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {[
              { text: 'Google Analytics for website analytics', icon: '📈' },
              { text: 'Social media plugins for sharing content', icon: '💬' },
              {
                text: 'Payment processors for secure transactions',
                icon: '💳',
              },
              { text: 'Chat services for customer support', icon: '💬' },
            ].map((service, index) => (
              <li
                key={index}
                className="flex items-start rounded-lg bg-gray-50 p-3 dark:bg-gray-700"
              >
                <span className="mt-1 mr-2" aria-hidden="true">
                  {service.icon}
                </span>
                <span className="text-gray-600 dark:text-gray-300">{service.text}</span>
              </li>
            ))}
          </ul>
        </>
      ),
    },
    {
      title: '6. Updates to This Policy',
      content: (
        <p className="leading-relaxed text-gray-600 dark:text-gray-300">
          We may update this Cookie Policy from time to time. The latest version will always be
          available on our website.
        </p>
      ),
    },
    {
      title: '7. Contact Us',
      content: (
        <>
          <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-300">
            If you have any questions about our Cookie Policy, please contact us using the form
            below or reach out to us at:
          </p>
          <address className="mb-8 rounded-lg border border-blue-100 bg-blue-50 p-6 not-italic dark:border-gray-600 dark:bg-gray-700">
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
                  href={`tel:${contactInfo.phone}`}
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  {contactInfo.phone}
                </a>
              </p>
            </div>
          </address>
          <div className="mt-8">
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
      title="Cookie Policy"
      lastUpdated={lastUpdated}
      sections={sections}
    />
  )
}
