'use client'

import React, { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'
import StaticHeading from '@/components/ui/StaticHeading'
import ReactMarkdown from 'react-markdown'
import ContactForm from '@/components/ui/ContactForm'

interface Section {
  title: string
  content: string
}

interface FormConfig {
  afterSectionTitle: string
  heading: string
  headingSize?: 'sm' | 'md' | 'lg' | 'xl'
  shadow?: boolean
  variant?: 'default' | 'minimal' | 'highlighted'
}

interface AccordionPageLayoutProps {
  title: string
  lastUpdated: string
  sections: Section[]
  formConfig?: FormConfig
}

const AccordionPageLayout: React.FC<AccordionPageLayoutProps> = ({ title, lastUpdated, sections, formConfig }) => {
  const [openSections, setOpenSections] = useState<Record<number, boolean>>({
    0: true, // First section open by default
  })

  const toggleSection = (index: number) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  return (
    <div className="relative min-h-screen">
      <main id="main-content" className="relative z-10 py-16">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <article className="mt-12 overflow-hidden rounded-2xl bg-white shadow-lg backdrop-blur-xs transition-all duration-300 hover:shadow-xl dark:bg-gray-800/90">
            <div className="mb-10 px-6 pt-6">
              <StaticHeading
                title={title}
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
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    {section.title}
                  </h2>
                  <span className={`ml-4 flex h-8 w-8 items-center justify-center rounded-full border transition-colors border-gray-200 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 ${
                    openSections[index] 
                      ? 'bg-gray-50/50 dark:bg-gray-800/50' 
                      : 'bg-transparent'
                  }`}>
                    {openSections[index] ? (
                      <ChevronUpIcon
                        className="h-5 w-5 text-gray-600 dark:text-gray-300"
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
                  <div className="prose prose-slate max-w-none dark:prose-invert prose-p:leading-relaxed prose-p:text-gray-600 dark:prose-p:text-gray-300">
                    <ReactMarkdown>{section.content}</ReactMarkdown>
                  </div>
                  
                  {formConfig && section.title.includes(formConfig.afterSectionTitle) && (
                    <div className="mt-6">
                      <ContactForm
                        heading={formConfig.heading}
                        headingSize={formConfig.headingSize || 'sm'}
                        shadow={formConfig.shadow ?? false}
                        variant={formConfig.variant || 'minimal'}
                      />
                    </div>
                  )}
                </div>
              </section>
            ))}
          </article>
        </div>
      </main>
    </div>
  )
}

export default AccordionPageLayout

