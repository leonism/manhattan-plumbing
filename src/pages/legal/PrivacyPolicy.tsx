import React, { useState } from 'react'
import StaticHeading from '../../components/UI/StaticHeading'
import { Helmet } from 'react-helmet-async'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'
import ContactForm from '../../components/UI/ContactForm'
import HeroBackground from '../../components/Hero/HeroBackground'

const PrivacyPolicy: React.FC = () => {
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

  const toggleSection = (index: number) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Manhattan Plumbing</title>
        <meta
          name="description"
          content="Learn about how Manhattan Plumbing collects, uses, and protects your personal information."
        />
        <link rel="canonical" href="https://manhattan-plumbing.pages.dev/privacy-policy" />
      </Helmet>

      <div className="relative min-h-screen">
        {/* Add HeroBackground with reduced opacity for better text readability */}
        <HeroBackground />
        <main id="main-content" className="relative z-10 py-16">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <article className="mt-12 overflow-hidden rounded-2xl bg-white shadow-lg backdrop-blur-xs transition-all duration-300 hover:shadow-xl dark:bg-gray-800/90">
              <div className="mb-10 px-6 pt-6">
                <StaticHeading
                  title="Privacy Policy"
                  subtitle={`(Last updated: ${lastUpdated})`}
                  className=""
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
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
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

export default PrivacyPolicy
