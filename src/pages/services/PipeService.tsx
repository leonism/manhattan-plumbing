import SectionHeading from '../../components/UI/SectionHeading'
import Button from '../../components/UI/Button'
import { Wrench, Shield, CheckCircle, Zap, Clock } from 'lucide-react'
import pipeHero from '../../assets/images/pexels-newyork-001.jpg'
import leakDetection from '../../assets/images/pexels-newyork-001.jpg'
import pipeReplacement from '../../assets/images/pexels-newyork-002.jpg'
import corrosion from '../../assets/images/pexels-newyork-003.jpg'
import pressure from '../../assets/images/pexels-newyork-004.jpg'

const PipesServicePage = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0 z-0 bg-center bg-cover bg-blend-multiply brightness-[0.6] after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent after:via-black/30 after:to-black/70">
          <img
            src={pipeHero}
            alt="Professional pipe repair service"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 py-32 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Wrench size={56} className="text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Expert Pipe Repair & Replacement in Manhattan
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Durable solutions for leaky, corroded, or damaged pipes that protect your property
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
            title="Why Our Pipe Services Stand Out"
            subtitle="Premium solutions for lasting results"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
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
            title="Comprehensive Pipe Services"
            subtitle="Solutions for every pipe challenge"
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            {[
              {
                image: leakDetection,
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
                image: pipeReplacement,
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
                image: corrosion,
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
                image: pressure,
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
                          className="flex-shrink-0 mt-1 mr-3 text-blue-600 dark:text-blue-400"
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
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't Risk Water Damage - Act Now!
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Pipe issues only get worse with time. Contact Manhattan Plumbing today for immediate
            assistance.
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
