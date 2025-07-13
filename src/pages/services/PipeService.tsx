import SEO from '../../components/SEO/SEO'
import SectionHeading from '../../components/UI/SectionHeading'
import Button from '../../components/UI/Button'
import { Wrench, Shield, CheckCircle, Zap, Clock } from 'lucide-react'

import pipeHeroJpg from '../../assets/images/pexels-newyork-001.jpg'
import pipeHeroWebp from '../../assets/images/pexels-newyork-001.jpg?format=webp'
import pipeHeroAvif from '../../assets/images/pexels-newyork-001.jpg?format=avif'

import leakDetectionJpg from '../../assets/images/pexels-newyork-001.jpg'
import leakDetectionWebp from '../../assets/images/pexels-newyork-001.jpg?format=webp'
import leakDetectionAvif from '../../assets/images/pexels-newyork-001.jpg?format=avif'

import pipeReplacementJpg from '../../assets/images/pexels-newyork-002.jpg'
import pipeReplacementWebp from '../../assets/images/pexels-newyork-002.jpg?format=webp'
import pipeReplacementAvif from '../../assets/images/pexels-newyork-002.jpg?format=avif'

import corrosionJpg from '../../assets/images/pexels-newyork-003.jpg'
import corrosionWebp from '../../assets/images/pexels-newyork-003.jpg?format=webp'
import corrosionAvif from '../../assets/images/pexels-newyork-003.jpg?format=avif'

import pressureJpg from '../../assets/images/pexels-newyork-004.jpg'
import pressureWebp from '../../assets/images/pexels-newyork-004.jpg?format=webp'
import pressureAvif from '../../assets/images/pexels-newyork-004.jpg?format=avif'

const PipesServicePage = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Pipe Repair & Replacement',
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
      'Expert pipe repair and replacement services in Manhattan. We handle leak detection, corrosion, and pressure issues.',
  }

  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      <SEO
        title="Pipe Repair & Replacement | Manhattan Plumbing"
        description="Durable solutions for leaky, corroded, or damaged pipes in Manhattan. We offer advanced leak detection and trenchless pipe replacement."
        keywords={['pipe repair', 'pipe replacement', 'leak detection', 'repipe', 'Manhattan']}
        canonical="https://manhattan-plumbing.pages.dev/services/pipe-service"
        ogTitle="Pipe Repair & Replacement | Manhattan Plumbing"
        ogDescription="Durable solutions for leaky, corroded, or damaged pipes in Manhattan. We offer advanced leak detection and trenchless pipe replacement."
        ogImage={pipeHeroJpg}
        ogUrl="https://manhattan-plumbing.pages.dev/services/pipe-service"
        jsonLd={jsonLd}
      />
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0 z-0 bg-cover bg-center bg-blend-multiply brightness-[0.6] after:absolute after:inset-0 after:bg-linear-to-b after:from-transparent after:via-black/30 after:to-black/70">
          <picture>
            <source srcSet={pipeHeroAvif} type="image/avif" />
            <source srcSet={pipeHeroWebp} type="image/webp" />
            <img
              src={pipeHeroJpg}
              alt="Professional pipe repair service"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </picture>
        </div>
        <div className="relative z-10 container mx-auto px-4 py-32 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex justify-center">
              <Wrench size={56} className="text-blue-400" />
            </div>
            <h1 className="mb-6 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
              Expert Pipe Repair & Replacement in Manhattan
            </h1>
            <p className="mb-8 text-xl text-blue-100 md:text-2xl">
              Durable solutions for leaky, corroded, or damaged pipes that protect your property
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
            title="Why Our Pipe Services Stand Out"
            subtitle="Premium solutions for lasting results"
            centered
          />
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: <Shield size={40} className="text-blue-600 dark:text-blue-400" />,
                title: 'Lifetime Workmanship Guarantee',
                description: 'We stand behind our pipe repairs with industry-leading warranties.',
              },
              {
                icon: <CheckCircle size={40} className="text-blue-600 dark:text-blue-400" />,
                title: 'Non-Invasive Techniques',
                description: 'Trenchless technology minimizes property disruption.',
              },
              {
                icon: <Wrench size={40} className="text-blue-600 dark:text-blue-400" />,
                title: 'All Pipe Materials',
                description: 'Experts in copper, PVC, PEX, cast iron, and galvanized pipes.',
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

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Comprehensive Pipe Services"
            subtitle="Solutions for every pipe challenge"
            centered
          />

          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
            {[
              {
                image: { jpg: leakDetectionJpg, webp: leakDetectionWebp, avif: leakDetectionAvif },
                title: 'Advanced Leak Detection',
                description:
                  'Using infrared technology and acoustic sensors to pinpoint hidden leaks without unnecessary demolition.',
                features: [
                  'Non-invasive detection methods',
                  'Thermal imaging technology',
                  'Moisture mapping',
                ],
              },
              {
                image: {
                  jpg: pipeReplacementJpg,
                  webp: pipeReplacementWebp,
                  avif: pipeReplacementAvif,
                },
                title: 'Pipe Replacement',
                description:
                  'Complete replacement of aging or damaged pipe systems using the highest quality materials.',
                features: [
                  'Trenchless replacement options',
                  'Whole-house repiping',
                  'Material upgrade consulting',
                ],
              },
              {
                image: { jpg: corrosionJpg, webp: corrosionWebp, avif: corrosionAvif },
                title: 'Corrosion Solutions',
                description:
                  'Specialized treatments to extend the life of corroding pipes and prevent future damage.',
                features: [
                  'Pipe relining technology',
                  'Corrosion inhibitors',
                  'Protective coatings',
                ],
              },
              {
                image: { jpg: pressureJpg, webp: pressureWebp, avif: pressureAvif },
                title: 'Pressure Optimization',
                description:
                  'Diagnosing and correcting water pressure issues that strain your plumbing system.',
                features: [
                  'Pressure regulator installation',
                  'Flow testing',
                  'Pipe sizing analysis',
                ],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl dark:bg-slate-800"
              >
                <div className="h-64 overflow-hidden">
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
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Don't Risk Water Damage - Act Now!
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-blue-100">
            Pipe issues only get worse with time. Contact Manhattan Plumbing today for immediate
            assistance.
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
                <span>Schedule Inspection</span>
              </div>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default PipesServicePage
