import SEO from '../../components/SEO/SEO'
import SectionHeading from '../../components/UI/SectionHeading'
import Button from '../../components/UI/Button'
import { Flame, Thermometer, Zap, Clock, CheckCircle } from 'lucide-react'

const WaterHeatersServicePage = () => {
  // Pexels image URLs for water heater services
  const heroImage = 'https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg'
  const tankInstallation = 'https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg'
  const tanklessSystem = 'https://images.pexels.com/photos/5691636/pexels-photo-5691636.jpeg'
  const repairService = 'https://images.pexels.com/photos/5691635/pexels-photo-5691635.jpeg'
  const maintenanceImage = 'https://images.pexels.com/photos/4108795/pexels-photo-4108795.jpeg'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Water Heater Services',
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
      'Expert water heater installation, repair, and maintenance services in Manhattan. We service both tank and tankless water heaters.',
  }

  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      <SEO
        title="Water Heater Services | Manhattan Plumbing"
        description="Reliable water heater installation, repair, and maintenance in Manhattan. We offer 24/7 emergency service and a 10-year guarantee."
        keywords={[
          'water heater',
          'tankless water heater',
          'water heater repair',
          'water heater installation',
          'Manhattan',
        ]}
        canonical="https://manhattan-plumbing.pages.dev/services/water-heater-service"
        ogTitle="Water Heater Services | Manhattan Plumbing"
        ogDescription="Reliable water heater installation, repair, and maintenance in Manhattan. We offer 24/7 emergency service and a 10-year guarantee."
        ogImage={heroImage}
        ogUrl="https://manhattan-plumbing.pages.dev/services/water-heater-service"
        jsonLd={jsonLd}
      />
      {/* Hero Section with Pexels Background Image */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0 z-0 bg-cover bg-center bg-blend-multiply brightness-[0.6] after:absolute after:inset-0 after:bg-linear-to-b after:from-transparent after:via-black/30 after:to-black/70">
          <img
            src={heroImage}
            alt="Professional water heater installation"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-32 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex justify-center">
              <Flame size={56} className="text-blue-400" />
            </div>
            <h1 className="mb-6 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
              Expert Water Heater Services in Manhattan
            </h1>
            <p className="mb-8 text-xl text-blue-100 md:text-2xl">
              Reliable hot water solutions with 24/7 emergency service and 10-year guarantees
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
            title="Why Choose Manhattan Plumbing for Water Heaters"
            subtitle="Premium solutions for continuous hot water"
            centered
          />
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: <Flame size={40} className="text-blue-600 dark:text-blue-400" />,
                title: '24/7 Emergency Service',
                description:
                  "We're available anytime your water heater fails - nights, weekends, and holidays included.",
              },
              {
                icon: <CheckCircle size={40} className="text-blue-600 dark:text-blue-400" />,
          serviceType: 'Bathroom Remodeling',
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
          description: 'Luxury bathroom remodeling services in Manhattan. We transform your bathroom into a spa-like retreat.',
        }}
                title: '10-Year Guarantee',
                description:
                  'Industry-leading warranties on all installations and repairs for your peace of mind.',
              },
              {
                icon: <Thermometer size={40} className="text-blue-600 dark:text-blue-400" />,
                title: 'Energy Efficiency Experts',
                description:
                  "We'll help you choose the most efficient system to reduce your energy bills.",
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

      {/* Services Section with Pexels Images */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Comprehensive Water Heater Solutions"
            subtitle="Tailored services for every home and business"
            centered
          />

          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
            {[
              {
                image: tankInstallation,
                title: 'Tank Water Heater Installation',
                description:
                  'Professional installation of traditional tank water heaters with proper sizing for your household needs.',
                features: [
                  '40-80 gallon capacity options',
                  'Gas and electric models available',
                  'Proper venting and code compliance',
                ],
              },
              {
                image: tanklessSystem,
                title: 'Tankless System Installation',
                description:
                  'Energy-efficient tankless systems that provide endless hot water on demand.',
                features: [
                  'Up to 34% more energy efficient',
                  'Compact wall-mounted design',
                  'Longer lifespan than tank models',
                ],
              },
              {
                image: repairService,
                title: 'Emergency Repair Services',
                description:
                  '24/7 emergency repairs for leaks, no hot water, and other critical issues.',
                features: [
                  'Same-day service available',
                  'Diagnose and fix most issues in one visit',
                  'Genuine manufacturer parts',
                ],
              },
              {
                image: maintenanceImage,
                title: 'Preventative Maintenance',
                description:
                  "Regular maintenance to extend your system's life and prevent costly breakdowns.",
                features: [
                  'Annual inspection and flushing',
                  'Anode rod replacement',
                  'Pressure valve testing',
                ],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl dark:bg-slate-800"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
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

      {/* Energy Efficiency CTA */}
      <section className="bg-linear-to-r from-blue-600 to-blue-800 py-16 text-white">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Save Up To 34% On Energy Bills</h2>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-blue-100">
            Modern tankless water heaters can significantly reduce your energy consumption. Ask
            about our special rebates and financing options.
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

export default WaterHeatersServicePage
