
import SectionHeading from '../../components/UI/SectionHeading'
import Button from '../../components/UI/Button'
import { Droplets, Wrench, Shield, Clock, CheckCircle, Zap } from 'lucide-react'
import SEO from '../../components/SEO/SEO'

import drainHeroJpg from '../../assets/images/pexels-newyork-001.jpg'
import kitchenClogJpg from '../../assets/images/pexels-newyork-002.jpg'
import bathroomDrainJpg from '../../assets/images/pexels-newyork-003.jpg'
import sewerLineJpg from '../../assets/images/pexels-newyork-004.jpg'
import outdoorDrainJpg from '../../assets/images/pexels-newyork-005.jpg'

const DrainsServicePage = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Drain Cleaning',
    provider: {
      '@type': 'Organization',
      name: 'Manhattan Plumbing',
      url: 'https://manhattan-plumbing.pages.dev',
      logo: 'https://manhattan-plumbing.pages.dev/manhattan-plumber.png',
    },
    areaServed: {
      '@type': 'City',
      name: 'Manhattan',
    },
    description:
      'Expert drain cleaning services in Manhattan. We handle kitchen clogs, bathroom drains, sewer lines, and more.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Main St',
      addressLocality: 'New York',
      addressRegion: 'NY',
      postalCode: '10001',
      addressCountry: 'US',
    },
  }

  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      <SEO
        title="Drain Cleaning Services | Manhattan Plumbing"
        description="Fast and effective drain cleaning services in Manhattan. We clear clogged drains in kitchens, bathrooms, and sewer lines using the latest technology."
        keywords={['drain cleaning', 'clogged drain', 'sewer cleaning', 'Manhattan', 'plumber']}
        canonical="https://manhattan-plumbing.pages.dev/services/drain-service"
        ogTitle="Drain Cleaning Services | Manhattan Plumbing"
        ogDescription="Fast and effective drain cleaning services in Manhattan. We clear clogged drains in kitchens, bathrooms, and sewer lines using the latest technology."
        ogImage={drainHeroJpg}
        ogUrl="https://manhattan-plumbing.pages.dev/services/drain-service"
        localBusiness={jsonLd}
      />
        {/* Hero Section with Background Image */}
        <section className="relative bg-slate-900 text-white">
          <div className="absolute inset-0 z-0 bg-cover bg-center bg-blend-multiply brightness-[0.7] after:absolute after:inset-0 after:bg-linear-to-b after:from-transparent after:via-black/30 after:to-black/70">
            <picture>
              <source srcSet={drainHeroJpg} type="image/avif" />
              <source srcSet={drainHeroJpg} type="image/webp" />
              <img
                src={drainHeroJpg}
                alt="Professional drain cleaning service"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </picture>
          </div>
          <div className="relative z-10 container mx-auto px-4 py-32 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 flex justify-center">
                <Droplets size={56} className="text-blue-400" />
              </div>
              <h1 className="mb-6 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
                Expert Drain Cleaning Services in Manhattan
              </h1>
              <p className="mb-8 text-xl text-blue-100 md:text-2xl">
                Fast, effective solutions for clogged drains that keep your plumbing flowing
                smoothly
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button href="tel:+12125551234" variant="primary" className="group">
                  <div className="flex items-center">
                    <Zap className="mr-3 group-hover:animate-pulse" size={20} />
                    <span>Emergency Call: (212) 555-1234</span>
                  </div>
                </Button>
                <Button href="/#contact" variant="secondary">
                  <div className="flex items-center">
                    <Clock className="mr-3" size={20} />
                    <span>Schedule Service</span>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-slate-50 py-16 dark:bg-slate-800/50">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading
              title="Why Manhattan Choose Us?"
              subtitle="Premium solutions for your plumbing needs"
              centered
            />
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  icon: <Shield size={40} className="text-blue-600 dark:text-blue-400" />,
                  title: '24/7 Emergency Service',
                  description:
                    "We're available round-the-clock for urgent drain emergencies that can't wait.",
                },
                {
                  icon: <CheckCircle size={40} className="text-blue-600 dark:text-blue-400" />,
                  title: '10-Year Guarantee',
                  description:
                    'We stand behind our work with industry-leading warranties on all services.',
                },
                {
                  icon: <Wrench size={40} className="text-blue-600 dark:text-blue-400" />,
                  title: 'Advanced Technology',
                  description:
                    'Using state-of-the-art hydro jetting and camera inspection equipment.',
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl dark:bg-slate-700"
                >
                  <div className="mb-6 flex justify-center">{feature.icon}</div>
                  <h3 className="mb-4 text-2xl font-bold text-slate-800 dark:text-white">
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

        {/* Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading
              title="Comprehensive Drain Solutions"
              subtitle="Tailored services for every plumbing challenge"
              centered
            />

            <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
              {[
                {
                  image: { jpg: kitchenClogJpg },
                  title: 'Kitchen Sink Clogs',
                  description:
                    'Grease, food particles, and soap buildup can create stubborn clogs in your kitchen drains. Our hydro jetting technology blasts away even the toughest blockages.',
                  features: [
                    'Grease and food particle removal',
                    'Garbage disposal cleaning',
                    'Preventative maintenance plans',
                  ],
                },
                {
                  image: { jpg: bathroomDrainJpg },
                  title: 'Bathroom Drain Cleaning',
                  description:
                    'Hair, soap scum, and mineral deposits slow down your drains. We use specialized tools to completely clear your bathroom plumbing.',
                  features: [
                    'Hair and soap scum removal',
                    'Tub and shower drain service',
                    'Odor elimination',
                  ],
                },
                {
                  image: { jpg: sewerLineJpg },
                  title: 'Sewer Line Services',
                  description:
                    'When multiple drains are slow or you notice sewage backups, you may have a main line issue. Our camera inspections pinpoint the exact problem.',
                  features: ['Camera inspections', 'Trenchless repairs', 'Root intrusion removal'],
                },
                {
                  image: { jpg: outdoorDrainJpg },
                  title: 'Outdoor Drain Solutions',
                  description:
                    'Keep your property dry with professional cleaning of outdoor drains, gutters, and downspouts that protect your foundation from water damage.',
                  features: [
                    'Leaf and debris removal',
                    'French drain cleaning',
                    'Flood prevention',
                  ],
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl dark:bg-slate-800"
                >
                  <div className="h-64 overflow-hidden">
                    <picture>
                      <source srcSet={service.image.jpg} type="image/avif" />
                      <source srcSet={service.image.jpg} type="image/webp" />
                      <img
                        src={service.image.jpg}
                        alt={service.title}
                        className="h-full w-full bg-cover bg-center object-cover bg-blend-multiply brightness-[0.7] after:absolute after:inset-0 after:bg-linear-to-b after:from-transparent after:via-black/30 after:to-black/70"
                        loading="lazy"
                      />
                    </picture>
                  </div>
                  <div className="p-8">
                    <h3 className="mb-4 text-2xl font-bold text-slate-800 dark:text-white">
                      {service.title}
                    </h3>
                    <p className="mb-6 text-lg text-slate-600 dark:text-slate-300">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
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
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready for Free-Flowing Drains?</h2>
            <p className="mx-auto mb-8 max-w-3xl text-xl text-blue-100">
              Don't let slow drains become a major problem. Contact Manhattan Plumbing today for
              fast, reliable service.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button href="tel:+12125551234" variant="primary" className="group">
                <div className="flex items-center">
                  <Zap className="mr-3 group-hover:animate-pulse" size={20} />
                  <span>Emergency Call: (212) 555-1234</span>
                </div>
              </Button>
              <Button href="/#contact" variant="secondary">
                <div className="flex items-center">
                  <Clock className="mr-3" size={20} />
                  <span>Schedule Service</span>
                </div>
              </Button>
            </div>
          </div>
        </section>
      </main>
  )
}

export default DrainsServicePage
