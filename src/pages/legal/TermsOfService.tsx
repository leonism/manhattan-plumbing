import React, { useState } from 'react'
import StaticHeading from '../../components/UI/StaticHeading'
import SEO from '../../components/SEO/SEO'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'
import ContactForm from '../../components/UI/ContactForm'
import HeroBackground from '../../components/Hero/HeroBackground'

const TermsOfService: React.FC = () => {
  const lastUpdated = '2025-05-21'
  const [openSections, setOpenSections] = useState<Record<number, boolean>>({
    0: true, // First section open by default
  })

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

  const toggleSection = (index: number) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  return (
    <>
      <SEO
        title="Terms of Service | Manhattan Plumbing"
        description="Read our terms of service to understand the conditions for using Manhattan Plumbing's services."
        canonical="https://manhattan-plumbing.pages.dev/terms-of-service"
        ogTitle="Terms of Service | Manhattan Plumbing"
        ogDescription="Read our terms of service to understand the conditions for using Manhattan Plumbing's services."
        ogUrl="https://manhattan-plumbing.pages.dev/terms-of-service"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Terms of Service',
          description: 'Read our terms of service to understand the conditions for using Manhattan Plumbing's services.',
          url: 'https://manhattan-plumbing.pages.dev/terms-of-service',
        }}
      />

      <div className="relative min-h-screen">
        {/* Hero Background with NYC skyline */}
        <HeroBackground />

        <main id="main-content" className="relative z-10 py-16">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <article className="mt-12 overflow-hidden rounded-2xl bg-white shadow-lg backdrop-blur-xs transition-all duration-300 hover:shadow-xl dark:bg-gray-800/90">
              <div className="mb-10 px-6 pt-6">
                <StaticHeading
                  title="Terms of Service"
                  subtitle={`(Last updated: ${lastUpdated})`}
                  className="mb-10"
                />
              </div>
              {sections.map((section, index) => (
                <section
                  key={index}
                  className={`border-b border-gray-200 dark:border-gray-700 ${
                    index === 0 ? 'border-t' : ''
                  }`}
                >
                  <button
                    className="flex w-full items-center justify-between p-6 text-left focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500"
                    onClick={() => toggleSection(index)}
                    aria-expanded={openSections[index]}
                    aria-controls={`section-${index}`}
                  >
                    <h2
                      className="text-xl font-bold text-gray-900 dark:text-white"
                      id={`section-${index}-heading`}
                    >
                      {section.title}
                    </h2>
                    <span className="ml-4 flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-gray-100 dark:hover:bg-gray-700">
                      {openSections[index] ? (
                        <ChevronUpIcon
                          className="h-5 w-5 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                        />
                      ) : (
                        <ChevronDownIcon
                          className="h-5 w-5 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                        />
                      )}
                    </span>
                  </button>
                  <div
                    id={`section-${index}`}
                    className={`px-6 pb-6 ${openSections[index] ? 'block' : 'hidden'}`}
                    aria-labelledby={`section-${index}-heading`}
                  >
                    {section.content}
                  </div>
                </section>
              ))}
            </article>
          </div>
        </main>
      </div>
    </>
  )
}

export default TermsOfService
