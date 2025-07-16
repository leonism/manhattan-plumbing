import React from 'react'
import SectionHeading from '../components/UI/SectionHeading'
import Button from '../components/UI/Button'
import { MapPin, Phone, Mail, Clock, Zap, CheckCircle, Home } from 'lucide-react'
import SEO from '../components/SEO/SEO'

import locationHeroJpg from '../assets/images/pexels-newyork-001.jpg'
import locationHeroWebp from '../assets/images/pexels-newyork-001.jpg?format=webp'
import locationHeroAvif from '../assets/images/pexels-newyork-001.jpg?format=avif'

import mapImageJpg from '../assets/images/pexels-newyork-001.jpg' // Reusing for map
import mapImageWebp from '../assets/images/pexels-newyork-001.jpg?format=webp'
import mapImageAvif from '../assets/images/pexels-newyork-001.jpg?format=avif'

import contactImageJpg from '../assets/images/pexels-newyork-002.jpg' // Reusing for contact
import contactImageWebp from '../assets/images/pexels-newyork-002.jpg?format=webp'
import contactImageAvif from '../assets/images/pexels-newyork-002.jpg?format=avif'

const LocationPage: React.FC = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Manhattan Plumbing',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Plumbing Ave',
      addressLocality: 'Manhattan',
      addressRegion: 'NY',
      postalCode: '10001',
      addressCountry: 'US',
    },
    telephone: '+12125551234',
    email: 'info@manhattanplumbing.com',
    url: 'https://manhattan-plumbing.pages.dev/location',
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
      <SEO
        title="Our Location | Manhattan Plumbing"
        description="Find Manhattan Plumbing at our convenient location in the heart of Manhattan. View our address, contact details, and service area."
        keywords={[
          'plumber location',
          'Manhattan plumbing address',
          'plumbing service area New York',
        ]}
        canonical="https://manhattan-plumbing.pages.dev/location"
        ogTitle="Our Location | Manhattan Plumbing"
        ogDescription="Find Manhattan Plumbing at our convenient location in the heart of Manhattan. View our address, contact details, and service area."
        ogImage="https://manhattan-plumbing.pages.dev/manhattan-plumber.png"
        ogUrl="https://manhattan-plumbing.pages.dev/location"
        jsonLd={jsonLd}
      />

      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0 z-0 bg-cover bg-center bg-blend-multiply brightness-[0.6] after:absolute after:inset-0 after:bg-linear-to-b after:from-transparent after:via-black/30 after:to-black/70">
          <picture>
            <source srcSet={locationHeroAvif} type="image/avif" />
            <source srcSet={locationHeroWebp} type="image/webp" />
            <img
              src={locationHeroJpg}
              alt="New York City skyline"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </picture>
        </div>
        <div className="relative z-10 container mx-auto px-4 py-32 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex justify-center">
              <MapPin size={56} className="text-blue-400" />
            </div>
            <h1 className="mb-6 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
              Visit Our Manhattan Location
            </h1>
            <p className="mb-8 text-xl text-blue-100 md:text-2xl">
              Conveniently located to serve all your plumbing needs
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button href="tel:+12125551234" variant="primary" className="group">
                <div className="flex items-center">
                  <Zap className="mr-3 group-hover:animate-pulse" size={20} />
                  <span>Call Us: (212) 555-1234</span>
                </div>
              </Button>
              <Button href="/#contact" variant="secondary">
                <div className="flex items-center">
                  <Clock className="mr-3" size={20} />
                  <span>Schedule a Visit</span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section (Location Advantages) */}
      <section className="bg-slate-50 py-16 dark:bg-slate-800/50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Why Visit Our Location?"
            subtitle="Experience the Manhattan Plumbing difference in person"
            centered
          />
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: <CheckCircle size={40} className="text-blue-600 dark:text-blue-400" />,
                title: 'Expert Consultations',
                description: 'Meet our certified plumbers for personalized advice and solutions.',
              },
              {
                icon: <Home size={40} className="text-blue-600 dark:text-blue-400" />,
                title: 'Product Showroom',
                description: 'Explore a wide range of plumbing fixtures and parts.',
              },
              {
                icon: <MapPin size={40} className="text-blue-600 dark:text-blue-400" />,
                title: 'Easy Access',
                description: 'Conveniently located near major transport links in Manhattan.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="rounded-xl bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl dark:bg-slate-700"
              >
                <div className="mb-6 flex justify-center">{feature.icon}</div>
                <h3 className="mb-4 text-center text-2xl font-bold text-slate-800 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-center text-lg text-slate-600 dark:text-slate-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map and Contact Info Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Find Us & Get in Touch"
            subtitle="Your direct line to Manhattan Plumbing experts"
            centered
          />

          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
            {[
              {
                image: { jpg: mapImageJpg, webp: mapImageWebp, avif: mapImageAvif },
                icon: <MapPin size={32} className="text-blue-600" />,
                title: 'Our Manhattan Location',
                description:
                  'Visit our office for in-person consultations or to view our product selection.',
                content: (
                  <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96708.35377212726!2d-74.0516318508202!3d40.75903219750165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0xa0b3281fcecc08c!2sManhattan%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sid!4v1752327321331!5m2!1sen!2sid"
                      width="100%"
                      height="450"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Manhattan Plumbing Location"
                    ></iframe>
                  </div>
                ),
                features: [
                  '123 Plumbing Ave, Manhattan, New York, NY 10001',
                  'Monday - Friday: 8:00 AM - 5:00 PM',
                  'Saturday - Sunday: 9:00 AM - 3:00 PM',
                ],
              },
              {
                image: { jpg: contactImageJpg, webp: contactImageWebp, avif: contactImageAvif },
                icon: <Phone size={32} className="text-blue-600" />,
                title: 'Get in Touch',
                description:
                  'Contact us for immediate assistance, scheduling, or general inquiries.',
                content: (
                  <div className="space-y-6 text-lg text-slate-700 dark:text-slate-300">
                    <div className="flex items-center gap-4">
                      <Phone size={24} className="shrink-0 text-blue-600 dark:text-blue-400" />
                      <a href="tel:+12125551234" className="hover:underline">
                        (212) 555-1234
                      </a>
                    </div>
                    <div className="flex items-center gap-4">
                      <Mail size={24} className="shrink-0 text-blue-600 dark:text-blue-400" />
                      <a href="mailto:info@manhattanplumbing.com" className="hover:underline">
                        info@manhattanplumbing.com
                      </a>
                    </div>
                    <h3 className="mt-10 mb-4 text-2xl font-bold text-slate-800 dark:text-white">
                      Business Hours
                    </h3>
                    <ul className="space-y-2 text-lg text-slate-700 dark:text-slate-300">
                      <li>Monday - Friday: 8:00 AM - 5:00 PM</li>
                      <li>Saturday - Sunday: 9:00 AM - 3:00 PM</li>
                      <li>24/7 Emergency Service Available</li>
                    </ul>
                  </div>
                ),
                features: [
                  '24/7 Emergency Service Available',
                  'Online Contact Form',
                  'Free Estimates',
                ],
              },
            ].map((item, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl dark:bg-slate-800"
              >
                <div className="relative h-64 overflow-hidden">
                  <picture>
                    <source srcSet={item.image.avif} type="image/avif" />
                    <source srcSet={item.image.webp} type="image/webp" />
                    <img
                      src={item.image.jpg}
                      alt={item.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </picture>
                  <div className="absolute bottom-4 left-4 rounded-full bg-white p-3 text-white">
                    {item.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="mb-4 text-2xl font-bold text-slate-800 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mb-6 text-lg text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>
                  {item.content}
                  <ul className="mt-6 space-y-3">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle
                          className="mt-1 mr-3 shrink-0 text-blue-600 dark:text-blue-400"
                          size={18}
                        />
                        <span className="text-slate-600 dark:text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-r from-blue-600 to-blue-800 py-16 text-white">
        <div className="container mx-auto px-4 text-center md:px-6">
          <MapPin size={48} className="mx-auto mb-6" />
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to Visit Us?</h2>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-blue-100">
            Stop by our Manhattan location or contact us to schedule an appointment.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="tel:+12125551234" variant="primary" className="group">
              <div className="flex items-center">
                <Zap className="mr-3 group-hover:animate-pulse" size={20} />
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
                <MapPin className="mr-3" size={20} />
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
