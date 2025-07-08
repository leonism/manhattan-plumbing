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
import emergencyHero from '../../assets/images/pexels-newyork-005.jpg'
import burstPipe from '../../assets/images/pexels-newyork-006.jpg'
import sewerBackup from '../../assets/images/pexels-newyork-007.jpg'
import waterHeater from '../../assets/images/pexels-newyork-008.jpg'
import gasLeak from '../../assets/images/pexels-newyork-009.jpg'

const EmergencyServicePage = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section with Urgent CTA */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0 z-0 bg-center bg-cover bg-blend-multiply brightness-[1.1] after:absolute after:inset-0 after:bg-linear-to-b after:from-transparent after:via-black/30 after:to-black/70">
          <img
            src={emergencyHero}
            alt="Emergency plumbing service technician working"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 py-32 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <AlertTriangle size={56} className="text-red-400 animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Emergency Plumbing Services Available Now
            </h1>
            <p className="text-xl text-red-100 mb-8">
              Immediate response to prevent water damage and restore your plumbing
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                href="tel:+12125551234"
                variant="primary"
                className="bg-red-600 hover:bg-red-700 group"
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
      <section className="py-16 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Emergency Response Promise"
            subtitle="When every minute counts"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
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

      {/* Emergency Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Emergency Services We Handle"
            subtitle="Immediate solutions for urgent plumbing crises"
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            {[
              {
                image: burstPipe,
                icon: <Droplet size={32} className="text-blue-600" />,
                title: 'Burst Pipe Repairs',
                description:
                  'Immediate shut-off and repair to prevent catastrophic water damage to your property.',
                features: ['Instant water shut-off', 'Pipe replacement', 'Water damage mitigation'],
              },
              {
                image: sewerBackup,
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
                image: waterHeater,
                icon: <Flame size={32} className="text-blue-600" />,
                title: 'Water Heater Failures',
                description:
                  'Emergency repairs for leaks, no hot water, or dangerous pressure buildup.',
                features: ['Same-day replacements', 'Leak containment', 'Safety valve repairs'],
              },
              {
                image: gasLeak,
                icon: <AlertTriangle size={32} className="text-blue-600" />,
                title: 'Gas Line Leaks',
                description:
                  'Immediate response to potentially dangerous gas leaks with 24/7 monitoring.',
                features: ['Gas leak detection', 'Emergency shut-off', 'Line replacement'],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-4 left-4 bg-white text-white p-3 rounded-full">
                    {service.icon}
                  </div>
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
                        <CheckCircle className="shrink-0 mt-1 mr-3 text-blue-400" size={18} />
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
      <section className="py-16 bg-linear-to-r from-red-600 to-red-800 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <AlertTriangle size={48} className="mx-auto mb-6 animate-pulse" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Plumbing Emergency? Don't Wait!</h2>
          <p className="text-xl text-red-100 max-w-3xl mx-auto mb-8">
            Every minute counts when dealing with water or gas emergencies. Our team is standing by
            24/7.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="tel:+12125551234" variant="danger">
              <div className="flex items-center">
                <Zap className="mr-3" size={20} />
                <span>Call Now: (212) 555-1234</span>
              </div>
            </Button>
            <Button
              href="/#contact"
              variant="outline"
              className="text-white border-white hover:bg-white/20 dark:hover:bg-white/20"
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
  )
}

export default EmergencyServicePage
