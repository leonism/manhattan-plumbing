import React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import LegalPageClient from '@/components/Legal/LegalPageClient'
import ContactForm from '@/components/ui/ContactForm'
import { getLegalPageData } from '@/lib/legal'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn about how Manhattan Plumbing collects, uses, and protects your personal information.',
  alternates: {
    canonical: '/privacy-policy',
    types: {
      'text/markdown': 'https://manhattan-plumbing.pages.dev/privacy-policy/index.md',
    },
  },
  openGraph: {
    title: 'Privacy Policy | Manhattan Plumbing',
    description: 'Learn about how Manhattan Plumbing collects, uses, and protects your personal information.',
    url: '/privacy-policy',
  },
}

export default async function PrivacyPolicyPage() {
  const page = await getLegalPageData('privacy-policy')
  
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
