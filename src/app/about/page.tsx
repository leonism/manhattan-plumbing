import React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import AccordionPageLayout from '@/components/ui/AccordionPageLayout'
import { getAboutPageData } from '@/lib/about'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Manhattan Plumbing, your trusted plumbing experts in New York City since 2010.',
  alternates: {
    canonical: '/about/',
    types: {
      'text/markdown': 'https://manhattan-plumbing.pages.dev/about/index.md',
    },
  },
  openGraph: {
    title: 'About Us | Manhattan Plumbing',
    description:
      'Learn about Manhattan Plumbing, your trusted plumbing experts in New York City since 2010.',
    url: '/about/',
  },
}

export default async function AboutPage() {
  const page = await getAboutPageData()

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
          afterSectionTitle: 'Have Questions?',
          heading: '',
          headingSize: 'sm',
          shadow: false,
          variant: 'minimal',
        }}
      />
    </>
  )
}
