import React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import AccordionPageLayout from '@/components/ui/AccordionPageLayout'
import { getLegalPageData } from '@/lib/legal'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description:
    'Learn about how Manhattan Plumbing uses cookies and similar technologies on our website.',
  alternates: {
    canonical: '/cookies-policy',
    types: {
      'text/markdown': 'https://manhattan-plumbing.pages.dev/cookies-policy/index.md',
    },
  },
  openGraph: {
    title: 'Cookie Policy | Manhattan Plumbing',
    description:
      'Learn about how Manhattan Plumbing uses cookies and similar technologies on our website.',
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
      <AccordionPageLayout
        title={page.title}
        lastUpdated={page.lastUpdated}
        sections={page.sections}
        formConfig={{
          afterSectionTitle: '8. Quick Question?',
          heading: '',
          headingSize: 'sm',
          shadow: false,
          variant: 'minimal',
        }}
      />
    </>
  )
}
