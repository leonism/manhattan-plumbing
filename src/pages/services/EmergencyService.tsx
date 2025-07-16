import Layout from '../../components/Layout/Layout'
import SectionHeading from '../../components/UI/SectionHeading'
import Button from '../../components/UI/Button'
import {
  Shield,
  CheckCircle,
  Clock,
  Wrench,
  Zap,
  AlertTriangle,
  Droplet,
  Flame,
  Bath,
} from 'lucide-react'

import emergencyHeroJpg from '../../assets/images/pexels-newyork-005.jpg'
import emergencyHeroWebp from '../../assets/images/pexels-newyork-005.jpg?format=webp'
import emergencyHeroAvif from '../../assets/images/pexels-newyork-005.jpg?format=avif'

import burstPipeJpg from '../../assets/images/pexels-newyork-006.jpg'
import burstPipeWebp from '../../assets/images/pexels-newyork-006.jpg?format=webp'
import burstPipeAvif from '../../assets/images/pexels-newyork-006.jpg?format=avif'

import sewerBackupJpg from '../../assets/images/pexels-newyork-007.jpg'
import sewerBackupWebp from '../../assets/images/pexels-newyork-007.jpg?format=webp'
import sewerBackupAvif from '../../assets/images/pexels-newyork-007.jpg?format=avif'

import waterHeaterJpg from '../../assets/images/pexels-newyork-008.jpg'
import waterHeaterWebp from '../../assets/images/pexels-newyork-008.jpg?format=webp'
import waterHeaterAvif from '../../assets/images/pexels-newyork-008.jpg?format=avif'

import gasLeakJpg from '../../assets/images/pexels-newyork-009.jpg'
import gasLeakWebp from '../../assets/images/pexels-newyork-009.jpg?format=webp'
import gasLeakAvif from '../../assets/images/pexels-newyork-009.jpg?format=avif'

const EmergencyServicePage = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Emergency Plumbing',
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
      '24/7 emergency plumbing services in Manhattan. We handle burst pipes, sewer backups, water heater failures, and gas leaks.',
  }

  return (
    <Layout
      title="24/7 Emergency Plumbing Services | Manhattan Plumbing"
      description="Immediate response for plumbing emergencies in Manhattan. Our certified plumbers are available 24/7 for burst pipes, sewer backups, and more."
      keywords={['emergency plumber', '24/7 plumber', 'burst pipe', 'sewer backup', 'Manhattan']}
      canonical="https://manhattan-plumbing.pages.dev/services/emergency-service"
      ogTitle="24/7 Emergency Plumbing Services | Manhattan Plumbing"
      ogDescription="Immediate response for plumbing emergencies in Manhattan. Our certified plumbers are available 24/7 for burst pipes, sewer backups, and more."
      ogImage={emergencyHeroJpg}
      ogUrl="https://manhattan-plumbing.pages.dev/services/emergency-service"
      jsonLd={jsonLd}
    >
      <main className="min-h-screen bg-white dark:bg-slate-900">
        {/* Hero Section with Urgent CTA */}
        <section className="relative bg-slate-900 text-white">
          <div className="absolute inset-0 z-0 bg-cover bg-center bg-blend-multiply brightness-[1.1] after:absolute after:inset-0 after:bg-linear-to-b after:from-transparent after:via-black/30 after:to-black/70">
            <picture>
              <source srcSet={emergencyHeroAvif} type="image/avif" />
              <source srcSet={emergencyHeroWebp} type="image/webp" />
              <img
                src={emergencyHeroJpg}
                alt="Emergency plumbing service technician working"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </picture>
          </div>
          <div className="relative z-10 container mx-auto px-4 py-32 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 flex justify-center">
                <AlertTriangle size={56} className="animate-pulse text-red-400" />
              </div>
              <h1 className="mb-6 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
                Emergency Plumbing Services Available Now
              </h1>
              <p className="mb-8 text-xl text-red-100">
                Immediate response to prevent water damage and restore your plumbing
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button
                  href="tel:+12125551234"
                  variant="primary"
                  className="group bg-red-600 hover:bg-red-700"
                >
                  <div className="flex items-center">
                    <Zap className="mr-3 group-hover:animate-pulse" size={20} />
                    <span>Emergency Call: (212) 555-1234</span>
                  </div>
                </Button>
                <Button href="/#contact" variant="secondary">
                  <div className="flex items-center">
                    <Clock className="mr-3" size={20} />
                    <span>Schedule Emergency Service</span>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Urgent Response Section */}
        <section className="bg-slate-50 py-16 dark:bg-slate-800/50">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading
              title="Emergency Response Promise"
              subtitle="When every minute counts"
              centered
            />
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  icon: <Clock size={40} className="text-blue-600" />,
                  title: '60-Minute Response',
                  description:
                    'Guaranteed arrival within 60 minutes for all emergency calls in Manhattan.',
                },
                {
                  icon: <Shield size={40} className="text-blue-600" />,
                  title: '24/7 Availability',
                  description: 'Our team is standing by 365 days a year, including holidays.',
                },
                {
                  icon: <Wrench size={40} className="text-blue-600" />,
                  title: 'Certified Experts',
                  description: 'Licensed master plumbers with 10+ years emergency experience.',
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

        {/* Emergency Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading
              title="Emergency Services We Handle"
              subtitle="Immediate solutions for urgent plumbing crises"
              centered
            />

            <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
              {[
                {
                  image: { jpg: burstPipeJpg, webp: burstPipeWebp, avif: burstPipeAvif },
                  icon: <Droplet size={32} className="text-blue-600" />,
                  title: 'Burst Pipe Repairs',
                  description:
                    'Immediate shut-off and repair to prevent catastrophic water damage to your property.',
                  features: [
                    'Instant water shut-off',
                    'Pipe replacement',
                    'Water damage mitigation',
                  ],
                },
                {
                  image: { jpg: sewerBackupJpg, webp: sewerBackupWebp, avif: sewerBackupAvif },
                  icon: <Bath size={32} className="text-blue-600" />,
                  title: 'Sewer Line Emergencies',
                  description:
                    'Rapid response to raw sewage backups that pose health risks and property damage.',
                  features: [
                    'Camera inspections',
                    'Hydro jet clearing',
                    'Temporary bypass solutions',
                  ],
                },
                {
                  image: { jpg: waterHeaterJpg, webp: waterHeaterWebp, avif: waterHeaterAvif },
                  icon: <Flame size={32} className="text-blue-600" />,
                  title: 'Water Heater Failures',
                  description:
                    'Emergency repairs for leaks, no hot water, or dangerous pressure buildup.',
                  features: ['Same-day replacements', 'Leak containment', 'Safety valve repairs'],
                },
                {
                  image: { jpg: gasLeakJpg, webp: gasLeakWebp, avif: gasLeakAvif },
                  icon: <AlertTriangle size={32} className="text-blue-600" />,
                  title: 'Gas Line Leaks',
                  description:
                    'Immediate response to potentially dangerous gas leaks with 24/7 monitoring.',
                  features: ['Gas leak detection', 'Emergency shut-off', 'Line replacement'],
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl dark:bg-slate-800"
                >
                  <div className="relative h-64 overflow-hidden">
                    <picture>
                      <source srcSet={service.image.avif} type="image/avif" />
                      <source srcSet={service.image.webp} type="image/webp" />
                      <img
                        src={service.image.jpg}
                        alt={service.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </picture>
                    <div className="absolute bottom-4 left-4 rounded-full bg-white p-3 text-white">
                      {service.icon}
                    </div>
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
                          <CheckCircle className="mt-1 mr-3 shrink-0 text-blue-400" size={18} />
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

        {/* Emergency CTA Section */}
        <section className="bg-linear-to-r from-red-600 to-red-800 py-16 text-white">
          <div className="container mx-auto px-4 text-center md:px-6">
            <AlertTriangle size={48} className="mx-auto mb-6 animate-pulse" />
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Plumbing Emergency? Don't Wait!</h2>
            <p className="mx-auto mb-8 max-w-3xl text-xl text-red-100">
              Every minute counts when dealing with water or gas emergencies. Our team is standing
              by 24/7.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button href="tel:+12125551234" variant="danger">
                <div className="flex items-center">
                  <Zap className="mr-3" size={20} />
                  <span>Call Now: (212) 555-1234</span>
                </div>
              </Button>
              <Button
                href="/#contact"
                variant="outline"
                className="border-white text-white hover:bg-white/20 dark:hover:bg-white/20"
              >
                <div className="flex items-center">
                  <Clock className="mr-3" size={20} />
                  <span>Request Emergency Dispatch</span>
                </div>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default EmergencyServicePage
