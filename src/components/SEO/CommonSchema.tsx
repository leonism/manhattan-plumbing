'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import { testimonials } from '@/lib/testimonials'

interface CommonSchemaProps {
  title?: string
  description?: string
  url?: string
  imageUrl?: string
  datePublished?: string
  dateModified?: string
}

const CommonSchema: React.FC<CommonSchemaProps> = ({
  title = 'Manhattan Plumbing',
  description = 'Expert plumbing services in Manhattan',
  url: propUrl,
  imageUrl = 'https://manhattan-plumbing.pages.dev/images/manhattan-plumber.png',
  datePublished,
  dateModified,
}) => {
  const pathname = usePathname()
  const baseUrl = 'https://manhattan-plumbing.pages.dev'
  const currentUrl = propUrl || `${baseUrl}${pathname === '/' ? '' : pathname}`
  const publishDate = datePublished || new Date('2025-01-01').toISOString()
  const modifiedDate = dateModified || publishDate

  const schemas = [
    // 1. Organization Schema
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': 'https://manhattan-plumbing.pages.dev/#organization',
      name: 'Manhattan Plumbing',
      url: 'https://manhattan-plumbing.pages.dev',
      logo: {
        '@type': 'ImageObject',
        '@id': 'https://manhattan-plumbing.pages.dev/#logo',
        url: 'https://manhattan-plumbing.pages.dev/images/manhattan-plumber.png',
        contentUrl: 'https://manhattan-plumbing.pages.dev/images/manhattan-plumber.png',
        width: 600,
        height: 600,
        caption: 'Manhattan Plumbing Logo',
      },
      image: {
        '@id': 'https://manhattan-plumbing.pages.dev/#logo',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-212-555-1234',
        contactType: 'customer service',
        areaServed: 'US',
        availableLanguage: 'en',
      },
      sameAs: [
        'https://www.facebook.com/manhattanplumbing',
        'https://www.twitter.com/manhattanplumb',
        'https://www.instagram.com/manhattanplumbing',
      ],
    },
    // 2. Article / NewsArticle Schema
    {
      '@context': 'https://schema.org',
      '@type': 'NewsArticle',
      '@id': `${currentUrl}#article`,
      headline: title,
      description: description,
      image: [imageUrl],
      datePublished: publishDate,
      dateModified: modifiedDate,
      author: {
        '@type': 'Organization',
        name: 'Manhattan Plumbing',
        url: 'https://manhattan-plumbing.pages.dev',
      },
      publisher: {
        '@id': 'https://manhattan-plumbing.pages.dev/#organization',
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': currentUrl,
      },
    },
    // 3. ImageObject Schema (Images)
    {
      '@context': 'https://schema.org',
      '@type': 'ImageObject',
      '@id': `${currentUrl}#primaryimage`,
      url: imageUrl,
      contentUrl: imageUrl,
      caption: title,
      width: 1200,
      height: 630,
    },
    // 4. PlumbingBusiness with AggregateRating and Reviews
    {
      '@context': 'https://schema.org',
      '@type': 'PlumbingBusiness',
      '@id': 'https://manhattan-plumbing.pages.dev/#business',
      name: 'Manhattan Plumbing',
      url: 'https://manhattan-plumbing.pages.dev',
      image: imageUrl,
      logo: 'https://manhattan-plumbing.pages.dev/images/manhattan-plumber.png',
      priceRange: '$$',
      telephone: '+1-212-555-1234',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '123 Manhattan Ave',
        addressLocality: 'New York',
        addressRegion: 'NY',
        postalCode: '10001',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '40.7128',
        longitude: '-74.0060',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        reviewCount: testimonials.length.toString(),
      },
      review: testimonials.slice(0, 5).map((t) => ({
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: t.name,
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: t.rating,
        },
        reviewBody: t.testimonial,
        datePublished: '2024-12-01', // Example date
      })),
    },
  ]

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}

export default CommonSchema

