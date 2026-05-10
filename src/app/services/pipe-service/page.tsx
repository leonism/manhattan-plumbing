import { Metadata } from 'next'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { Shield, Clock, CheckCircle, Zap, Search, Layers } from 'lucide-react'
import Image from 'next/image'

// Import images
import pipeHeroJpg from '@/assets/images/pexels-newyork-001.jpg'
import pipeRepairJpg from '@/assets/images/pexels-newyork-002.jpg'
import repipingJpg from '@/assets/images/pexels-newyork-003.jpg'
import leakDetectionJpg from '@/assets/images/pexels-newyork-004.jpg'
import frozenPipeJpg from '@/assets/images/pexels-newyork-005.jpg'

export const metadata: Metadata = {
  title: 'Pipe Repair & Replacement Services',
  description: 'Expert pipe repair, repiping, and leak detection services in Manhattan. We fix burst pipes, frozen lines, and handle whole-home repiping projects.',
  alternates: {
    canonical: '/services/pipe-service',
    types: {
      'text/markdown': 'https://manhattan-plumbing.pages.dev/services/pipe-service/index.md',
    },
  },
}

const PipeServicePage = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src={pipeHeroJpg}
            alt="Professional pipe repair service"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/30 to-black/70" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-32 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex justify-center">
              <Layers size={56} className="text-blue-400" />
            </div>
            <h1 className="mb-6 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
              Professional Pipe Repair & Replacement
            </h1>
            <p className="mb-8 text-xl text-blue-100 md:text-2xl">
              Reliable solutions for leaks, burst pipes, and comprehensive repiping in Manhattan
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button href="tel:+12125551234" variant="default" className="group">
                <div className="flex items-center">
                  <Zap className="mr-3 group-hover:animate-pulse" size={20} />
                  <span>Emergency Repair: (212) 555-1234</span>
                </div>
              </Button>
              <Button href="/#contact" variant="secondary">
                <div className="flex items-center">
                  <Search className="mr-3" size={20} />
                  <span>Free Inspection</span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="bg-slate-50 py-16 dark:bg-slate-800/50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Durable Piping Solutions"
            subtitle="Built to last and engineered for reliability"
            centered
          />
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: <Shield size={40} className="text-blue-600 dark:text-blue-400" />,
                title: 'Lifetime Integrity',
                description: "We use premium PEX, copper, and PVC materials that exceed industry standards for longevity.",
              },
              {
                icon: <CheckCircle size={40} className="text-blue-600 dark:text-blue-400" />,
                title: 'Licensed & Insured',
                description: 'Our master plumbers handle complex piping systems with complete professional certification.',
              },
              {
                icon: <Clock size={40} className="text-blue-600 dark:text-blue-400" />,
                title: 'Rapid Deployment',
                description: 'Most pipe repairs can be completed same-day to restore your water service quickly.',
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

      {/* Core Services */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Our Piping Expertise"
            subtitle="Specialized services for every plumbing infrastructure"
            centered
          />

          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
            {[
              {
                image: pipeRepairJpg,
                title: 'Emergency Leak Repair',
                description:
                  'From pinhole leaks to major blowouts, we offer fast, reliable repairs that protect your property from water damage.',
                features: ['Copper & PEX repair', 'Joint stabilization', 'Pressure testing'],
              },
              {
                image: repipingJpg,
                title: 'Whole-Home Repiping',
                description:
                  'Replace aging, corroded, or low-pressure pipes with modern, high-flow systems that improve water quality and pressure.',
                features: ['Minimal wall intrusion', 'Modern material upgrade', 'Long-term warranty'],
              },
              {
                image: leakDetectionJpg,
                title: 'Advanced Leak Detection',
                description:
                  'We use electronic sound detection and thermal imaging to find hidden leaks behind walls or under floors without unnecessary damage.',
                features: ['Non-invasive methods', 'Precise location tracking', 'Full system audit'],
              },
              {
                image: frozenPipeJpg,
                title: 'Frozen Pipe Prevention',
                description:
                  'Specialized services to thaw frozen pipes safely and implement insulation strategies to prevent future winter emergencies.',
                features: ['Safe thawing techniques', 'Winterization service', 'Insulation installation'],
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

      {/* Pipe Material Guide Section */}
      <section className="bg-blue-900 py-16 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            <div className="lg:w-1/2">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">Modern Materials for a Better Home</h2>
              <p className="mb-8 text-xl text-blue-100">
                Plumbing technology has evolved. We help you choose the right materials for your specific needs, balancing performance, cost, and longevity.
              </p>
              <div className="space-y-6">
                {[
                  { name: 'Copper', benefit: 'Durable, naturally antimicrobial, and recyclable.' },
                  { name: 'PEX', benefit: 'Flexible, freeze-resistant, and cost-effective.' },
                  { name: 'PVC/CPVC', benefit: 'Ideal for drains and chemical resistance.' },
                ].map((material, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <span className="font-bold">{material.name}: </span>
                      <span className="text-blue-200">{material.benefit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-80 w-full overflow-hidden rounded-2xl lg:w-1/2">
              <Image
                src={repipingJpg}
                alt="Modern pipe materials"
                fill
                className="object-cover brightness-75"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-50 py-16 dark:bg-slate-900">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl dark:text-white">Is Your Plumbing Showing Its Age?</h2>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-slate-600 dark:text-slate-400">
            Low water pressure, discolored water, or frequent leaks are signs your pipes need attention. Get a professional evaluation today.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/#contact" variant="default">
              <span>Schedule Inspection</span>
            </Button>
            <Button href="tel:+12125551234" variant="outline">
              <span>Call (212) 555-1234</span>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default PipeServicePage
