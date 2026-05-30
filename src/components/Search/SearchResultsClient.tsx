'use client'

import React, { useState, useEffect, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { Search, MapPin, Wrench, Newspaper, AlertCircle, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { TypographyH2, TypographyH3, TypographyP } from '@/components/ui/typography'

// In a real app, these would be fetched or passed from server
// For this migration, we'll simulate the search across available data
const SERVICES = [
  { title: 'Drain Cleaning', href: '/services/drain-service', category: 'Service' },
  { title: 'Emergency Plumbing', href: '/services/emergency-service', category: 'Service' },
  { title: 'Fixture Installation', href: '/services/fixture-service', category: 'Service' },
  { title: 'Pipe Repair', href: '/services/pipe-service', category: 'Service' },
  { title: 'Water Heaters', href: '/services/water-heater-service', category: 'Service' },
  { title: 'Kitchen & Bath Remodeling', href: '/services/remodeling-service', category: 'Service' },
]

const PAGES = [
  { title: 'Home', href: '/', category: 'Page' },
  { title: 'Our Location', href: '/location', category: 'Page' },
  { title: 'News & Articles', href: '/news', category: 'Page' },
  { title: 'Privacy Policy', href: '/privacy-policy', category: 'Legal' },
  { title: 'Terms of Service', href: '/terms-of-service', category: 'Legal' },
]

export default function SearchResultsClient() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''

  const results = useMemo(() => {
    if (!query || query.length < 2) return []

    const normalizedQuery = query.toLowerCase()

    const allItems = [...SERVICES, ...PAGES]

    return allItems.filter(
      (item) =>
        item.title.toLowerCase().includes(normalizedQuery) ||
        item.category.toLowerCase().includes(normalizedQuery)
    )
  }, [query])

  if (!query) {
    return (
      <div className="py-20 text-center">
        <AlertCircle size={48} className="mx-auto mb-4 text-slate-400" />
        <TypographyH3 className="text-xl font-medium text-slate-900 dark:text-white">
          No search query provided
        </TypographyH3>
        <TypographyP className="mt-2 text-slate-500">
          Please enter a search term to find what you're looking for.
        </TypographyP>
        <div className="mx-auto mt-8 max-w-md">
          <Button href="/" variant="outline" className="w-full">
            Return Home
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto mt-12 max-w-4xl">
      <div className="mb-8 flex items-center justify-between border-b pb-6 dark:border-slate-800">
        <TypographyH2 className="text-2xl font-bold text-slate-900 dark:text-white">
          {results.length} results for "{query}"
        </TypographyH2>
      </div>

      {results.length > 0 ? (
        <div className="space-y-6">
          {results.map((result, idx) => (
            <Link
              key={idx}
              href={result.href}
              className="group block rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-800 dark:hover:border-blue-900"
            >
              <div className="flex items-center justify-between">
                <div className="flex min-w-0 items-center gap-4">
                  <div className="shrink-0 rounded-full bg-blue-50 p-3 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    {result.category === 'Service' ? (
                      <Wrench size={20} />
                    ) : result.category === 'Page' ? (
                      <Search size={20} />
                    ) : (
                      <Newspaper size={20} />
                    )}
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-bold tracking-wider text-blue-600 uppercase dark:text-blue-400">
                      {result.category}
                    </span>
                    <TypographyH3 className="line-clamp-2 text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                      {result.title}
                    </TypographyH3>
                  </div>
                </div>
                <ChevronRight className="text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-blue-600" />
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="rounded-3xl bg-slate-50 py-20 text-center dark:bg-slate-800/50">
          <Search size={48} className="mx-auto mb-4 text-slate-300" />
          <TypographyH3 className="text-xl font-medium text-slate-900 dark:text-white">No matches found</TypographyH3>
          <TypographyP className="mt-2 text-slate-500">
            We couldn't find anything matching your search. Try different keywords or browse our
            services.
          </TypographyP>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/news" variant="outline">
              Browse News
            </Button>
            <Button href="/#services" variant="default">
              All Services
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
