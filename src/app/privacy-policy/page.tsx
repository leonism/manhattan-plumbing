import React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import AccordionPageLayout from '@/components/ui/AccordionPageLayout'
import { getLegalPageData } from '@/lib/legal'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Learn about how Manhattan Plumbing collects, uses, and protects your personal information.',
  alternates: {
    canonical: '/privacy-policy',
    types: {
      'text/markdown': 'https://manhattan-plumbing.pages.dev/privacy-policy/index.md',
    },
  },
  openGraph: {
    title: 'Privacy Policy | Manhattan Plumbing',
    description:
      'Learn about how Manhattan Plumbing collects, uses, and protects your personal information.',
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
      <AccordionPageLayout
        title={page.title}
        lastUpdated={page.lastUpdated}
        sections={page.sections}
        formConfig={{
          afterSectionTitle: '7. Quick Question?',
          heading: '',
          headingSize: 'sm',
          shadow: false,
          variant: 'minimal',
        }}
      />
    </>
  )
}
