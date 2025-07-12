import SectionHeading from '../../components/UI/SectionHeading'
import Button from '../../components/UI/Button'
import { Droplets, Wrench, Shield, Clock, CheckCircle, Zap } from 'lucide-react'

import drainHeroJpg from '../../assets/images/pexels-newyork-001.jpg'
import drainHeroWebp from '../../assets/images/pexels-newyork-001.jpg?format=webp'
import drainHeroAvif from '../../assets/images/pexels-newyork-001.jpg?format=avif'

import kitchenClogJpg from '../../assets/images/pexels-newyork-002.jpg'
import kitchenClogWebp from '../../assets/images/pexels-newyork-002.jpg?format=webp'
import kitchenClogAvif from '../../assets/images/pexels-newyork-002.jpg?format=avif'

import bathroomDrainJpg from '../../assets/images/pexels-newyork-003.jpg'
import bathroomDrainWebp from '../../assets/images/pexels-newyork-003.jpg?format=webp'
import bathroomDrainAvif from '../../assets/images/pexels-newyork-003.jpg?format=avif'

import sewerLineJpg from '../../assets/images/pexels-newyork-004.jpg'
import sewerLineWebp from '../../assets/images/pexels-newyork-004.jpg?format=webp'
import sewerLineAvif from '../../assets/images/pexels-newyork-004.jpg?format=avif'

import outdoorDrainJpg from '../../assets/images/pexels-newyork-005.jpg'
import outdoorDrainWebp from '../../assets/images/pexels-newyork-005.jpg?format=webp'
import outdoorDrainAvif from '../../assets/images/pexels-newyork-005.jpg?format=avif'

const DrainsServicePage = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section with Background Image */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0 z-0 bg-center bg-cover bg-blend-multiply brightness-[0.7] after:absolute after:inset-0 after:bg-linear-to-b after:from-transparent after:via-black/30 after:to-black/70">
          <picture>
            <source srcSet={drainHeroAvif} type="image/avif" />
            <source srcSet={drainHeroWebp} type="image/webp" />
            <img
              src={drainHeroJpg}
              alt="Professional drain cleaning service"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </picture>
        </div>
        <div className="container mx-auto px-4 md:px-6 py-32 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Droplets size={56} className="text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Expert Drain Cleaning Services in Manhattan
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Fast, effective solutions for clogged drains that keep your plumbing flowing smoothly
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
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
      <section className="py-16 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Why Manhattan Choose Us?"
            subtitle="Premium solutions for your plumbing needs"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
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
                className="bg-white dark:bg-slate-700 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-center mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-center text-slate-800 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-lg text-center text-slate-600 dark:text-slate-300">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 ">
            {[
              {
                image: { jpg: kitchenClogJpg, webp: kitchenClogWebp, avif: kitchenClogAvif },
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
                image: { jpg: bathroomDrainJpg, webp: bathroomDrainWebp, avif: bathroomDrainAvif },
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
                image: { jpg: sewerLineJpg, webp: sewerLineWebp, avif: sewerLineAvif },
                title: 'Sewer Line Services',
                description:
                  'When multiple drains are slow or you notice sewage backups, you may have a main line issue. Our camera inspections pinpoint the exact problem.',
                features: ['Camera inspections', 'Trenchless repairs', 'Root intrusion removal'],
              },
              {
                image: { jpg: outdoorDrainJpg, webp: outdoorDrainWebp, avif: outdoorDrainAvif },
                title: 'Outdoor Drain Solutions',
                description:
                  'Keep your property dry with professional cleaning of outdoor drains, gutters, and downspouts that protect your foundation from water damage.',
                features: ['Leaf and debris removal', 'French drain cleaning', 'Flood prevention'],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <picture>
                    <source srcSet={service.image.avif} type="image/avif" />
                    <source srcSet={service.image.webp} type="image/webp" />
                    <img
                      src={service.image.jpg}
                      alt={service.title}
                      className="w-full h-full object-cover bg-center bg-cover bg-blend-multiply brightness-[0.7] after:absolute after:inset-0 after:bg-linear-to-b after:from-transparent after:via-black/30 after:to-black/70"
                      loading="lazy"
                    />
                  </picture>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle
                          className="shrink-0 mt-1 mr-3 text-blue-600 dark:text-blue-400"
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
      <section className="py-16 bg-linear-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Free-Flowing Drains?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Don't let slow drains become a major problem. Contact Manhattan Plumbing today for fast,
            reliable service.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
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
