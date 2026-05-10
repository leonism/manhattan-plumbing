import React, { Suspense } from 'react'
import { Metadata } from 'next'
import SectionHeading from '@/components/ui/SectionHeading'
import SearchResultsClient from '@/components/Search/SearchResultsClient'

export const metadata: Metadata = {
  title: 'Search Results | Manhattan Plumbing',
  description: 'Search results for plumbing services, news, and information from Manhattan Plumbing.',
  robots: 'noindex, follow',
}

export default function SearchPage() {
  return (
    <main className="min-h-screen py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Search Results"
          subtitle="Finding what you need for your plumbing projects"
          centered
        />
        
        <Suspense fallback={<div className="text-center py-20">Searching...</div>}>
          <SearchResultsClient />
        </Suspense>
      </div>
    </main>
  )
}
