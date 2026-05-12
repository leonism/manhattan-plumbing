import React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import LegalPageClient from '@/components/Legal/LegalPageClient'
import ContactForm from '@/components/ui/ContactForm'
import { getLegalPageData } from '@/lib/legal'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Manhattan Plumbing for all your plumbing needs. We are available 24/7 for emergencies.',
  alternates: {
    canonical: '/contact',
    types: {
      'text/markdown': 'https://manhattan-plumbing.pages.dev/contact/index.md',
    },
  },
  openGraph: {
    title: 'Contact Us | Manhattan Plumbing',
    description: 'Get in touch with Manhattan Plumbing for all your plumbing needs. We are available 24/7 for emergencies.',
    url: '/contact',
  },
}

export default async function ContactPage() {
  const page = await getLegalPageData('contact')
  
  if (!page) {
    notFound()
  }

  return (
    <>
      <LegalPageClient
        title={page.title}
        lastUpdated={page.lastUpdated}
        sections={page.sections}
      />
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-16">
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
