import { Metadata } from 'next'
import Image from 'next/image'
import SectionHeading from '@/components/ui/SectionHeading'
import ServiceCard from '@/components/Services/ServiceCard'
import Button from '@/components/ui/Button'
import { Droplets, UtilityPole, Flame, Home, Wrench, Shield, Phone, CheckCircle2 } from 'lucide-react'

// Import hero image
import servicesHeroJpg from '@/assets/images/pexels-newyork-006.jpg'

export const metadata: Metadata = {
  title: 'Our Services | Manhattan Plumbing',
  description: 'Comprehensive plumbing services in Manhattan, from 24/7 emergency repairs to full bathroom remodeling and water heater installations.',
  alternates: {
    canonical: '/services',
  },
}

const ServicesPage = () => {
  const services = [
    {
      title: 'Emergency Plumbing',
      description:
        'Available 24/7 for all plumbing emergencies. Our rapid response team will be at your door quickly to prevent further damage to your home.',
      icon: <Shield size={32} />,
      href: '/services/emergency-service',
      id: 'emergency',
    },
    {
      title: 'Drain Cleaning',
      description:
        'Professional drain cleaning services to unclog and clean drains in kitchens, bathrooms, and more. Say goodbye to slow-draining sinks!',
      icon: <Droplets size={32} />,
      href: '/services/drain-service',
      id: 'drains',
    },
    {
      title: 'Water Heaters',
      description:
        'Installation, repair, and maintenance of all types of water heaters. Ensure your home has reliable hot water year-round.',
      icon: <Flame size={32} />,
      href: '/services/water-heater-service',
      id: 'water-heaters',
    },
    {
      title: 'Bathroom Remodeling',
      description:
        'Transform your bathroom with our professional remodeling services. From concept to completion, we handle every aspect.',
      icon: <Home size={32} />,
      href: '/services/remodeling-service',
      id: 'remodeling',
    },
    {
      title: 'Pipe Repair',
      description:
        'Expert pipe repair and replacement services. We use the latest technology to detect and fix leaks with minimal disruption.',
      icon: <UtilityPole size={32} />,
      href: '/services/pipe-service',
      id: 'pipes',
    },
    {
      title: 'Fixture Installation',
      description:
        'Professional installation of faucets, toilets, showers, and other fixtures. Quality workmanship guaranteed.',
      icon: <Wrench size={32} />,
      href: '/services/fixture-service',
      id: 'fixture-service',
    },
  ]

  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src={servicesHeroJpg}
            alt="Professional plumbing services in Manhattan"
            fill
            className="object-cover brightness-[0.5]"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/20 to-black/60" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-24 md:px-6 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-black tracking-tight text-white md:text-6xl">
              Professional Plumbing Services
            </h1>
            <p className="mb-8 text-xl text-slate-200">
              Expert solutions for residential and commercial properties across Manhattan. Reliable, licensed, and available 24/7.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="#all-services" variant="default" className="h-12 px-8">
                View All Services
              </Button>
              <Button href="tel:+12125551234" variant="outline" className="h-12 border-white text-white hover:bg-white hover:text-slate-900 px-8">
                <Phone className="mr-2" size={20} />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section id="all-services" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Comprehensive Solutions"
            subtitle="We provide a full range of plumbing services tailored to the unique needs of New York City buildings."
            centered
          />
          
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={service.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-50 py-20 dark:bg-slate-800/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                title="Why Choose Manhattan Plumbing?"
                subtitle="Dedicated to excellence and customer satisfaction in every job we perform."
              />
              <div className="mt-8 space-y-4">
                {[
                  'Licensed & Insured Master Plumbers',
                  '24/7 Emergency Dispatch Services',
                  'Upfront Pricing & No Hidden Fees',
                  'Latest Leak Detection Technology',
                  'Guaranteed Quality Workmanship',
                  'Locally Owned & Operated'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="text-blue-600 dark:text-blue-400 shrink-0" size={24} />
                    <span className="text-lg text-slate-700 dark:text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Button href="/contact" variant="default" className="h-12 px-8">
                  Get a Free Estimate
                </Button>
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={servicesHeroJpg}
                alt="Plumbing technician at work"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16 text-white dark:bg-blue-700">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to Start Your Project?</h2>
          <p className="mb-10 text-xl text-blue-50">
            Whether it's a small leak or a major renovation, we're here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button href="/contact" variant="default" className="bg-white text-blue-600 hover:bg-blue-50 h-14 px-10 text-lg">
              Contact Us Today
            </Button>
            <Button href="tel:+12125551234" variant="outline" className="border-white text-white hover:bg-white/10 h-14 px-10 text-lg">
              Call (212) 555-1234
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ServicesPage
