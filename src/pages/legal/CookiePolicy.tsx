import React, { useState } from 'react'
import StaticHeading from '../../components/UI/StaticHeading'
import SEO from '../../components/SEO/SEO'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'
import ContactForm from '../../components/UI/ContactForm'
import HeroBackground from '../../components/Hero/HeroBackground'

const CookiePolicy: React.FC = () => {
  const lastUpdated = '2025-05-21'
  const [openSections, setOpenSections] = useState<Record<number, boolean>>({
    0: true, // First section open by default
  })

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

  const toggleSection = (index: number) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  return (
    <>
      <SEO
        title="Cookie Policy | Manhattan Plumbing"
        description="Learn about how Manhattan Plumbing uses cookies and similar technologies on our website."
        canonical="https://manhattan-plumbing.pages.dev/cookie-policy"
        ogTitle="Cookie Policy | Manhattan Plumbing"
        ogDescription="Learn about how Manhattan Plumbing uses cookies and similar technologies on our website."
        ogUrl="https://manhattan-plumbing.pages.dev/cookie-policy"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Cookie Policy',
          description: 'Learn about how Manhattan Plumbing uses cookies and similar technologies on our website.',
          url: 'https://manhattan-plumbing.pages.dev/cookie-policy',
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
                  title="Cookie Policy"
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
                    <h2 className="text-xl font-bold text-slate-600 dark:text-blue-400">
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

export default CookiePolicy
