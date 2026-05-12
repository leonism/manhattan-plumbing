import React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import LegalPageClient from '@/components/Legal/LegalPageClient'
import ContactForm from '@/components/ui/ContactForm'
import { getLegalPageData } from '@/lib/legal'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Manhattan Plumbing, your trusted plumbing experts in New York City since 2010.',
  alternates: {
    canonical: '/about',
    types: {
      'text/markdown': 'https://manhattan-plumbing.pages.dev/about/index.md',
    },
  },
  openGraph: {
    title: 'About Us | Manhattan Plumbing',
    description: 'Learn about Manhattan Plumbing, your trusted plumbing experts in New York City since 2010.',
    url: '/about',
  },
}

export default async function AboutPage() {
  const page = await getLegalPageData('about')
  
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
          heading="Have Questions?"
          headingSize="sm"
          shadow={false}
          variant="minimal"
        />
      </div>
    </>
  )
}
