import React from 'react'
import SectionHeading from '../UI/SectionHeading'
import ServiceCard from '../Services/ServiceCard'
import { Droplets, UtilityPole, Flame, Home, Wrench, Shield } from 'lucide-react'

const Services: React.FC = () => {
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
      href: '/services/fixtures',
      id: 'fixture-service',
    },
  ]

  return (
    <section
      id="services"
      className="py-20 bg-slate-100 dark:bg-slate-800/50"
      aria-labelledby="services-heading"
    >
      {/* Semantic header for the section */}
      <header className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Our Services"
          subtitle="From emergency repairs to complete bathroom remodels, we offer a comprehensive range of plumbing services to meet all your needs."
          centered
        />
      </header>

      {/* Semantic article wrapper for service cards */}
      <article className="container mx-auto px-4 md:px-6 mt-12">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="list"
          aria-label="List of plumbing services"
        >
          {services.map((service) => (
            <article
              key={service.title}
              id={service.id}
              role="listitem"
              aria-labelledby={`${service.id}-heading`}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={service.href}
              />
            </article>
          ))}
        </div>
      </article>
    </section>
  )
}

export default Services
