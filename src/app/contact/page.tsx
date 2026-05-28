import React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import AccordionPageLayout from '@/components/ui/AccordionPageLayout'
import ContactForm from '@/components/ui/ContactForm'
import { getContactPageData } from '@/lib/contact'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Manhattan Plumbing for all your plumbing needs. We are available 24/7 for emergencies.',
  alternates: {
    canonical: '/contact',
    types: {
      'text/markdown': 'https://manhattan-plumbing.pages.dev/contact/index.md',
    },
  },
  openGraph: {
    title: 'Contact Us | Manhattan Plumbing',
    description:
      'Get in touch with Manhattan Plumbing for all your plumbing needs. We are available 24/7 for emergencies.',
    url: '/contact',
  },
}

export default async function ContactPage() {
  const page = await getContactPageData()

  if (!page) {
    notFound()
  }

  return (
    <>
      <AccordionPageLayout
        title={page.title}
        lastUpdated={page.lastUpdated}
        sections={page.sections}
      />
      <div className="container mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <ContactForm
          heading="Send us a message"
          headingSize="sm"
          shadow={false}
          variant="minimal"
        />
      </div>
    </>
  )
}
