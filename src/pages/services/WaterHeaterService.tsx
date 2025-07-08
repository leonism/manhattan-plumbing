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

  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section with Pexels Background Image */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0 z-0 bg-center bg-cover bg-blend-multiply brightness-[0.6] after:absolute after:inset-0 after:bg-linear-to-b after:from-transparent after:via-black/30 after:to-black/70">
          <img
            src={heroImage}
            alt="Professional water heater installation"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 py-32 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Flame size={56} className="text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Expert Water Heater Services in Manhattan
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Reliable hot water solutions with 24/7 emergency service and 10-year guarantees
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
            title="Why Choose Manhattan Plumbing for Water Heaters"
            subtitle="Premium solutions for continuous hot water"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: <Flame size={40} className="text-blue-600 dark:text-blue-400" />,
                title: '24/7 Emergency Service',
                description:
                  "We're available anytime your water heater fails - nights, weekends, and holidays included.",
              },
              {
                icon: <CheckCircle size={40} className="text-blue-600 dark:text-blue-400" />,
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

      {/* Services Section with Pexels Images */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Comprehensive Water Heater Solutions"
            subtitle="Tailored services for every home and business"
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
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
                className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
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

      {/* Energy Efficiency CTA */}
      <section className="py-16 bg-linear-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Save Up To 34% On Energy Bills</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Modern tankless water heaters can significantly reduce your energy consumption. Ask
            about our special rebates and financing options.
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

export default WaterHeatersServicePage
