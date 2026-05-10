import { Metadata } from 'next'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { Bath, Wrench, Shield, Clock, CheckCircle, Zap, PenTool as Tool } from 'lucide-react'
import Image from 'next/image'

// Import images
import fixtureHeroJpg from '@/assets/images/pexels-newyork-001.jpg'
import faucetJpg from '@/assets/images/pexels-newyork-002.jpg'
import toiletJpg from '@/assets/images/pexels-newyork-003.jpg'
import showerJpg from '@/assets/images/pexels-newyork-004.jpg'
import sinkJpg from '@/assets/images/pexels-newyork-005.jpg'

export const metadata: Metadata = {
  title: 'Fixture Installation & Repair',
  description: 'Professional fixture installation and repair services in Manhattan. We handle faucets, toilets, showers, and sinks with precision and care.',
  alternates: {
    canonical: '/services/fixture-service',
    types: {
      'text/markdown': 'https://manhattan-plumbing.pages.dev/services/fixture-service/index.md',
    },
  },
}

const FixtureServicePage = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src={fixtureHeroJpg}
            alt="Beautiful bathroom fixtures"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/30 to-black/70" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-32 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex justify-center">
              <Bath size={56} className="text-blue-400" />
            </div>
            <h1 className="mb-6 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
              Premium Fixture Installation & Repair
            </h1>
            <p className="mb-8 text-xl text-blue-100 md:text-2xl">
              Elevate your kitchen and bathroom with expert plumbing fixture services in Manhattan
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button href="/#contact" variant="default">
                <div className="flex items-center">
                  <Tool className="mr-3" size={20} />
                  <span>Request a Quote</span>
                </div>
              </Button>
              <Button href="tel:+12125551234" variant="secondary">
                <div className="flex items-center">
                  <Zap className="mr-3" size={20} />
                  <span>Call: (212) 555-1234</span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-50 py-16 dark:bg-slate-800/50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Expert Craftsmanship"
            subtitle="Why we are Manhattan's favorite fixture experts"
            centered
          />
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: <Shield size={40} className="text-blue-600 dark:text-blue-400" />,
                title: 'Quality Guaranteed',
                description: "We use only high-grade materials and parts for all installations and repairs.",
              },
              {
                icon: <Clock size={40} className="text-blue-600 dark:text-blue-400" />,
                title: 'Efficient Service',
                description: 'Our technicians work quickly and cleanly to minimize disruption to your home.',
              },
              {
                icon: <Wrench size={40} className="text-blue-600 dark:text-blue-400" />,
                title: 'Master Technicians',
                description: 'Licensed plumbers with years of experience in high-end fixture installation.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="rounded-xl bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl dark:bg-slate-700"
              >
                <div className="mb-6 flex justify-center">{feature.icon}</div>
                <h3 className="mb-4 text-2xl font-bold text-slate-800 dark:text-white text-center">
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

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Fixtures We Service"
            subtitle="From minor repairs to complete upgrades"
            centered
          />

          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
            {[
              {
                image: faucetJpg,
                title: 'Faucets & Sinks',
                description:
                  'Whether it is a leaky kitchen faucet or a stylish new bathroom sink installation, we handle all models and brands with expert care.',
                features: ['Leak repair', 'New installation', 'Water pressure optimization'],
              },
              {
                image: toiletJpg,
                title: 'Toilet Repair & Install',
                description:
                  'From modern low-flow models to traditional repairs, we ensure your toilets function perfectly and efficiently.',
                features: ['Running toilet fix', 'Full replacement', 'Smart toilet installation'],
              },
              {
                image: showerJpg,
                title: 'Shower & Tub Fixtures',
                description:
                  'Upgrade your shower experience with new heads, valves, and hardware that combine style with reliable performance.',
                features: ['Showerhead upgrades', 'Mixing valve repair', 'Drain integration'],
              },
              {
                image: sinkJpg,
                title: 'Garbage Disposals',
                description:
                  'We install and repair heavy-duty garbage disposals to keep your kitchen sink flowing freely and smelling fresh.',
                features: ['Jam removal', 'New unit installation', 'Leak prevention'],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl dark:bg-slate-800"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover brightness-[0.7]"
                  />
                  <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/30 to-black/70" />
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
      <section className="bg-linear-to-r from-slate-800 to-slate-900 py-16 text-white">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Upgrade Your Home Today</h2>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-slate-300">
            Professional fixture installation adds value and beauty to your property. Contact us for a free estimate.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/#contact" variant="default">
              <span>Get Free Estimate</span>
            </Button>
            <Button href="tel:+12125551234" variant="secondary">
              <span>Call (212) 555-1234</span>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default FixtureServicePage
