import React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import LegalPageClient from '@/components/Legal/LegalPageClient'
import ContactForm from '@/components/ui/ContactForm'
import { getLegalPageData } from '@/lib/legal'

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

export default async function CookiesPolicyPage() {
  const page = await getLegalPageData('cookies-policy')
  
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
          heading="Quick Question?"
          headingSize="sm"
          shadow={false}
          variant="minimal"
        />
      </div>
    </>
  )
}
