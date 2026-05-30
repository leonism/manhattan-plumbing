import React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import DynamicIcon from '@/components/ui/DynamicIcon'
import Image from 'next/image'
import { getLegalPageData } from '@/lib/legal'
import { TypographyH1, TypographyH2, TypographyH3, TypographyP } from '@/components/ui/typography'

export async function generateMetadata(): Promise<Metadata> {
  const page = await getLegalPageData('location')

  if (!page) {
    return {
      title: 'Location Not Found',
    }
  }

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: '/location/',
      types: {
        'text/markdown': 'https://manhattan-plumbing.pages.dev/location/index.md',
      },
    },
  }
}

const LocationPage = async () => {
  const page = (await getLegalPageData('location')) as any

  if (!page) {
    notFound()
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Manhattan Plumbing',
    address: {
      streetAddress: '123 Plumbing Ave',
      addressLocality: 'Manhattan',
      addressRegion: 'NY',
      postalCode: '10001',
      addressCountry: 'US',
    },
    telephone: '+12125551234',
    email: 'info@manhattanplumbing.com',
    url: 'https://manhattan-plumbing.pages.dev/location/',
    image: 'https://manhattan-plumbing.pages.dev/manhattan-plumber.png',
    priceRange: '$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '09:00',
        closes: '15:00',
      },
    ],
  }

  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src={page.hero.image}
            alt="New York City skyline"
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/30 to-black/70" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-32 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex justify-center">
              <DynamicIcon name="MapPin" size={56} className="text-blue-400" />
            </div>
            <TypographyH1 className="mb-6 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
              {page.hero.title}
            </TypographyH1>
            <TypographyP className="mb-8 text-xl text-blue-100 md:text-2xl">{page.hero.subtitle}</TypographyP>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button href="tel:+12125551234" variant="default" className="group">
                <div className="flex items-center">
                  <DynamicIcon name="Zap" className="mr-3 group-hover:animate-pulse" size={20} />
                  <span>Call Us: (212) 555-1234</span>
                </div>
              </Button>
              <Button href="/contact/" variant="secondary">
                <div className="flex items-center">
                  <DynamicIcon name="Clock" className="mr-3" size={20} />
                  <span>Schedule a Visit</span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-slate-50 py-16 dark:bg-slate-800/50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title={page.whyVisit.title} subtitle={page.whyVisit.subtitle} centered />
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {page.whyVisit.items.map((feature: any, index: number) => (
              <div
                key={index}
                className="rounded-xl bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl dark:bg-slate-700"
              >
                <div className="mb-6 flex justify-center">
                  <DynamicIcon
                    name={feature.icon}
                    size={40}
                    className="text-blue-600 dark:text-blue-400"
                  />
                </div>
                <TypographyH3 className="mb-4 text-center text-2xl font-bold text-slate-800 dark:text-white">
                  {feature.title}
                </TypographyH3>
                <TypographyP className="text-center text-lg text-slate-600 dark:text-slate-300">
                  {feature.description}
                </TypographyP>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map and Contact Info Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title={page.findUs.title} subtitle={page.findUs.subtitle} centered />

          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Map Column */}
            <div className="overflow-hidden rounded-xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl dark:bg-slate-800">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={page.hero.image}
                  alt="Manhattan Location Map"
                  fill
                  className="object-cover brightness-[0.7]"
                />
                <div className="absolute bottom-4 left-4 rounded-full bg-white p-3 text-blue-600 shadow-md">
                  <DynamicIcon name="MapPin" size={32} />
                </div>
              </div>
              <div className="p-8">
                <TypographyH3 className="mb-4 text-2xl font-bold text-slate-800 dark:text-white">
                  {page.findUs.office.title}
                </TypographyH3>
                <TypographyP className="mb-6 text-lg text-slate-600 dark:text-slate-300">
                  {page.findUs.office.description}
                </TypographyP>
                <div className="aspect-w-16 aspect-h-9 mb-6 overflow-hidden rounded-lg shadow-lg">
                  <iframe
                    src={page.findUs.office.mapEmbedUrl}
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Manhattan Plumbing Location"
                  ></iframe>
                </div>
                <ul className="space-y-3">
                  {[page.findUs.office.address, ...page.findUs.office.hours].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <DynamicIcon
                        name="CheckCircle"
                        className="mt-1 mr-3 shrink-0 text-blue-600 dark:text-blue-400"
                        size={18}
                      />
                      <span className="text-slate-600 dark:text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Info Column */}
            <div className="overflow-hidden rounded-xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl dark:bg-slate-800">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={page.getInTouch.image}
                  alt="Contact Manhattan Plumbing"
                  fill
                  className="object-cover brightness-[0.7]"
                />
                <div className="absolute bottom-4 left-4 rounded-full bg-white p-3 text-blue-600 shadow-md">
                  <DynamicIcon name="Phone" size={32} />
                </div>
              </div>
              <div className="p-8">
                <TypographyH3 className="mb-4 text-2xl font-bold text-slate-800 dark:text-white">
                  {page.getInTouch.title}
                </TypographyH3>
                <TypographyP className="mb-6 text-lg text-slate-600 dark:text-slate-300">
                  {page.getInTouch.description}
                </TypographyP>
                <div className="space-y-6 text-lg text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-4">
                    <DynamicIcon
                      name="Phone"
                      size={24}
                      className="shrink-0 text-blue-600 dark:text-blue-400"
                    />
                    <a
                      href={`tel:${page.getInTouch.phone.replace(/[^0-9+]/g, '')}`}
                      className="hover:underline"
                    >
                      {page.getInTouch.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <DynamicIcon
                      name="Mail"
                      size={24}
                      className="shrink-0 text-blue-600 dark:text-blue-400"
                    />
                    <a href={`mailto:${page.getInTouch.email}`} className="hover:underline">
                      {page.getInTouch.email}
                    </a>
                  </div>
                  <TypographyH3 className="mt-10 mb-4 text-2xl font-bold text-slate-800 dark:text-white">
                    Business Hours
                  </TypographyH3>
                  <ul className="space-y-2 text-lg text-slate-700 dark:text-slate-300">
                    {page.getInTouch.hours.map((hour: string, i: number) => (
                      <li key={i}>{hour}</li>
                    ))}
                  </ul>
                </div>
                <ul className="mt-10 space-y-3">
                  {page.getInTouch.features.map((feature: string, i: number) => (
                    <li key={i} className="flex items-start">
                      <DynamicIcon
                        name="CheckCircle"
                        className="mt-1 mr-3 shrink-0 text-blue-600 dark:text-blue-400"
                        size={18}
                      />
                      <span className="text-slate-600 dark:text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-r from-blue-600 to-blue-800 py-16 text-white">
        <div className="container mx-auto px-4 text-center md:px-6">
          <DynamicIcon name="MapPin" size={48} className="mx-auto mb-6" />
          <TypographyH2 className="mb-6 text-3xl font-bold md:text-4xl">{page.cta.title}</TypographyH2>
          <TypographyP className="mx-auto mb-8 max-w-3xl text-xl text-blue-100">{page.cta.subtitle}</TypographyP>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="tel:+12125551234" variant="default" className="group">
              <div className="flex items-center">
                <DynamicIcon name="Zap" className="mr-3 group-hover:animate-pulse" size={20} />
                <span>Call Now: (212) 555-1234</span>
              </div>
            </Button>
            <Button
              href="https://www.google.com/maps/dir/?api=1&destination=Manhattan+Plumbing,+New+York,+NY"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              <div className="flex items-center">
                <DynamicIcon name="MapPin" className="mr-3" size={20} />
                <span>Get Directions</span>
              </div>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default LocationPage
