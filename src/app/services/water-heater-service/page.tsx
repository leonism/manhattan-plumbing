import { Metadata } from 'next'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { Thermometer, Shield, Clock, CheckCircle, Zap, Flame } from 'lucide-react'
import Image from 'next/image'

// Import images
import heaterHeroJpg from '@/assets/images/pexels-newyork-001.jpg'
import tanklessJpg from '@/assets/images/pexels-newyork-002.jpg'
import tankHeaterJpg from '@/assets/images/pexels-newyork-003.jpg'
import gasHeaterJpg from '@/assets/images/pexels-newyork-004.jpg'
import electricHeaterJpg from '@/assets/images/pexels-newyork-005.jpg'

export const metadata: Metadata = {
  title: 'Water Heater Repair & Installation',
  description: 'Expert water heater services in Manhattan. We install and repair tankless, gas, and electric water heaters from all major brands.',
  alternates: {
    canonical: '/services/water-heater-service',
  },
}

const WaterHeaterServicePage = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src={heaterHeroJpg}
            alt="Professional water heater service"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/30 to-black/70" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-32 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex justify-center">
              <Thermometer size={56} className="text-orange-400" />
            </div>
            <h1 className="mb-6 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
              Reliable Water Heater Solutions
            </h1>
            <p className="mb-8 text-xl text-blue-100 md:text-2xl">
              Expert installation, rapid repair, and maintenance for all water heater types in Manhattan
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button href="tel:+12125551234" variant="default" className="group">
                <div className="flex items-center">
                  <Zap className="mr-3 group-hover:animate-pulse" size={20} />
                  <span>Emergency Service: (212) 555-1234</span>
                </div>
              </Button>
              <Button href="/#contact" variant="secondary">
                <div className="flex items-center">
                  <Clock className="mr-3" size={20} />
                  <span>Schedule Appointment</span>
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
            title="Consistent Hot Water"
            subtitle="Never worry about a cold shower again"
            centered
          />
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: <Zap size={40} className="text-orange-600 dark:text-orange-400" />,
                title: 'Same-Day Repair',
                description: "We understand hot water is a necessity. Our teams prioritize rapid repairs to restore your comfort.",
              },
              {
                icon: <Shield size={40} className="text-orange-600 dark:text-orange-400" />,
                title: 'Expert Installation',
                description: 'Professional sizing and installation of top brands like Rheem, Bradford White, and Navien.',
              },
              {
                icon: <Flame size={40} className="text-orange-600 dark:text-orange-400" />,
                title: 'Efficiency Focused',
                description: 'Upgrade to energy-efficient models that lower your monthly utility bills and reduce waste.',
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
            title="Water Heater Expertise"
            subtitle="Comprehensive service for every heating technology"
            centered
          />

          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
            {[
              {
                image: tanklessJpg,
                title: 'Tankless Water Heaters',
                description:
                  'Enjoy endless hot water and save space with modern tankless technology. We specialize in installation and descaling maintenance.',
                features: ['Infinite hot water', 'Space-saving design', 'Lower utility costs'],
              },
              {
                image: tankHeaterJpg,
                title: 'Traditional Tank Systems',
                description:
                  'We repair and install all sizes of traditional gas and electric tank water heaters with expert precision.',
                features: ['Fast recovery rates', 'Cost-effective install', 'Multi-unit capacity'],
              },
              {
                image: gasHeaterJpg,
                title: 'Gas Water Heaters',
                description:
                  'Specialized service for gas lines, venting, and burners. We ensure your gas heater operates safely and efficiently.',
                features: ['Venting inspections', 'Burner cleaning', 'Thermocouple repair'],
              },
              {
                image: electricHeaterJpg,
                title: 'Electric Water Heaters',
                description:
                  'Expert troubleshooting of heating elements, thermostats, and wiring for all electric water heater models.',
                features: ['Element replacement', 'Thermostat calibration', 'Safety valve testing'],
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
                          className="mt-1 mr-3 shrink-0 text-orange-600 dark:text-orange-400"
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

      {/* Maintenance Tip Section */}
      <section className="bg-orange-600 py-16 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            <div className="lg:w-1/2">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">Pro Maintenance Tip</h2>
              <p className="mb-8 text-xl text-orange-100">
                To double the life of your traditional tank water heater, flush it annually to remove sediment buildup. This simple maintenance task prevents corrosion and maintains efficiency.
              </p>
              <Button href="/#contact" variant="default" className="bg-white text-orange-600 hover:bg-orange-50">
                Book Maintenance Now
              </Button>
            </div>
            <div className="relative h-80 w-full overflow-hidden rounded-2xl lg:w-1/2 border-4 border-white/20">
              <Image
                src={tankHeaterJpg}
                alt="Water heater maintenance"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl dark:text-white">Is Your Water Heater Leaking?</h2>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-slate-600 dark:text-slate-400">
            A leaking water heater is an emergency. Contact us immediately to prevent flooding and structural damage.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="tel:+12125551234" variant="default" className="bg-orange-600 hover:bg-orange-700 border-orange-600">
              <span>Emergency Repair</span>
            </Button>
            <Button href="/#contact" variant="outline">
              <span>Request New Installation</span>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default WaterHeaterServicePage
