import React from 'react'
import { Metadata } from 'next'
import '@/assets/styles/index.css'
import { Providers } from './providers'
import Footer from '@/components/Footer/Footer'
import BackToTop from '@/components/ui/BackToTop'
import HeaderWrapper from '@/components/Header/HeaderWrapper'

export const metadata: Metadata = {
  title: {
    default: 'Manhattan Plumbing | Your Trusted Local Plumber',
    template: '%s | Manhattan Plumbing',
  },
  description: 'Manhattan Plumbing offers reliable and affordable plumbing services in New York City. From leaky faucets to emergency repairs, our expert plumbers are here to help.',
  metadataBase: new URL('https://manhattan-plumbing.pages.dev'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://manhattan-plumbing.pages.dev',
    siteName: 'Manhattan Plumbing',
    images: [
      {
        url: '/images/manhattan-plumber.png',
        width: 1200,
        height: 630,
        alt: 'Manhattan Plumbing',
      },
    ],
  },
  alternates: {
    canonical: '/',
    types: {
      'text/markdown': 'https://manhattan-plumbing.pages.dev/index.md',
    },
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased selection:bg-blue-100 selection:text-blue-900 dark:selection:bg-blue-900 dark:selection:text-blue-100">
        {/* Local Business Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'PlumbingBusiness',
              name: 'Manhattan Plumbing',
              image: 'https://manhattan-plumbing.pages.dev/images/manhattan-plumber.png',
              '@id': 'https://manhattan-plumbing.pages.dev',
              url: 'https://manhattan-plumbing.pages.dev',
              telephone: '+12125551234',
              priceRange: '$$',
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
                latitude: 40.7128,
                longitude: -74.006,
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                  'Sunday',
                ],
                opens: '00:00',
                closes: '23:59',
              },
              areaServed: {
                '@type': 'City',
                name: 'Manhattan',
              },
            }),
          }}
        />
        <Providers>
          <div className="flex min-h-screen flex-col bg-white/90 transition-colors duration-300 dark:bg-slate-900">
            <HeaderWrapper />
            <main className="grow">{children}</main>
            <Footer />
            <BackToTop />
          </div>
        </Providers>
      </body>
    </html>
  )
}
