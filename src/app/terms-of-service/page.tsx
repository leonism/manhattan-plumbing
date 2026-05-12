import React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import AccordionPageLayout from '@/components/ui/AccordionPageLayout'
import { getLegalPageData } from '@/lib/legal'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Read our terms of service to understand the conditions for using Manhattan Plumbing\'s services.',
  alternates: {
    canonical: '/terms-of-service',
    types: {
      'text/markdown': 'https://manhattan-plumbing.pages.dev/terms-of-service/index.md',
    },
  },
  openGraph: {
    title: 'Terms of Service | Manhattan Plumbing',
    description: 'Read our terms of service to understand the conditions for using Manhattan Plumbing\'s services.',
    url: '/terms-of-service',
  },
}

export default async function TermsOfServicePage() {
  const page = await getLegalPageData('terms-of-service')
  
  if (!page) {
    notFound()
  }

  return (
    <>
      <AccordionPageLayout
        title={page.title}
        lastUpdated={page.lastUpdated}
        sections={page.sections}
        formConfig={{
          afterSectionTitle: '8. Quick Question?',
          heading: '',
          headingSize: 'sm',
          shadow: false,
          variant: 'minimal'
        }}
      />
    </>
  )
}

