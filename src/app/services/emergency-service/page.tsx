import { Metadata } from 'next'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { AlertTriangle, Clock, Shield, Phone, Zap, Search, Droplets, Thermometer, Flame } from 'lucide-react'
import Image from 'next/image'

// Import images
import emergencyHeroJpg from '@/assets/images/pexels-newyork-001.jpg'
import pipeBurstJpg from '@/assets/images/pexels-newyork-002.jpg'
import waterHeaterJpg from '@/assets/images/pexels-newyork-003.jpg'
import gasLeakJpg from '@/assets/images/pexels-newyork-004.jpg'
import floodJpg from '@/assets/images/pexels-newyork-005.jpg'

export const metadata: Metadata = {
  title: '24/7 Emergency Plumbing Services',
  description: 'Fast response emergency plumbing in Manhattan. Available 24/7 for burst pipes, gas leaks, water heater failures, and major floods. Call (212) 555-1234 now.',
  alternates: {
    canonical: '/services/emergency-service',
  },
}

const EmergencyServicePage = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src={emergencyHeroJpg}
            alt="Emergency plumbing response team"
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/30 to-black/70" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-32 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex justify-center">
              <AlertTriangle size={64} className="text-red-500 animate-pulse" />
            </div>
            <h1 className="mb-6 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl text-red-50">
              24/7 Emergency Plumbing in Manhattan
            </h1>
            <p className="mb-8 text-xl text-blue-100 md:text-2xl">
              Rapid response when you need it most. We're on our way within minutes.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button href="tel:+12125551234" variant="destructive" className="group h-16 text-lg px-8">
                <div className="flex items-center">
                  <Phone className="mr-3 group-hover:animate-bounce" size={24} />
                  <span>Call Emergency Line: (212) 555-1234</span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Response Features */}
      <section className="bg-slate-50 py-16 dark:bg-slate-800/50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Fast Response. Expert Care."
            subtitle="What sets our emergency response apart"
            centered
          />
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: <Clock size={40} className="text-red-600 dark:text-red-400" />,
                title: '30-Minute Response',
                description: "Our local teams are strategically positioned across Manhattan for ultra-fast arrival times.",
              },
              {
                icon: <Zap size={40} className="text-red-600 dark:text-red-400" />,
                title: 'Fully Stocked Vans',
                description: 'We arrive with all the tools and parts needed to fix most emergencies on the first visit.',
              },
              {
                icon: <Shield size={40} className="text-red-600 dark:text-red-400" />,
                title: 'No Extra Fees',
                description: 'Transparent pricing even during nights, weekends, and holidays. No surprises.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="rounded-xl bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl dark:bg-slate-700 border-t-4 border-red-500"
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

      {/* Emergency Situations We Handle */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="What Constitutes an Emergency?"
            subtitle="We handle all critical plumbing issues"
            centered
          />

          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
            {[
              {
                image: pipeBurstJpg,
                icon: <Droplets className="text-blue-500" size={32} />,
                title: 'Burst Pipes & Flooding',
                description:
                  'A burst pipe can cause thousands of dollars in damage in just minutes. We provide immediate shut-off and rapid repair to minimize water damage.',
                priority: 'CRITICAL',
              },
              {
                image: gasLeakJpg,
                icon: <Flame className="text-orange-500" size={32} />,
                title: 'Gas Leaks & Detection',
                description:
                  'If you smell gas, leave immediately and call us. We specialize in rapid gas leak detection and professional repair to keep your home safe.',
                priority: 'IMMEDIATE',
              },
              {
                image: waterHeaterJpg,
                icon: <Thermometer className="text-red-500" size={32} />,
                title: 'Water Heater Failure',
                description:
                  'No hot water or a leaking tank? We provide emergency repairs and replacements for all types of water heaters, including tankless systems.',
                priority: 'HIGH',
              },
              {
                image: floodJpg,
                icon: <Search className="text-green-500" size={32} />,
                title: 'Sewer Line Backups',
                description:
                  'Raw sewage backups are a major health hazard. Our emergency teams use specialized equipment to clear blockages and sanitize affected areas.',
                priority: 'CRITICAL',
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
                  <div className="absolute top-4 right-4 z-10 rounded-full bg-red-600 px-4 py-1 text-sm font-bold text-white shadow-lg">
                    {service.priority}
                  </div>
                  <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/30 to-black/70" />
                </div>
                <div className="p-8">
                  <div className="mb-4 flex items-center gap-4">
                    {service.icon}
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                      {service.title}
                    </h3>
                  </div>
                  <p className="mb-6 text-lg text-slate-600 dark:text-slate-300">
                    {service.description}
                  </p>
                  <Button href="tel:+12125551234" variant="outline" className="w-full">
                    Emergency Call Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Protocol Section */}
      <section className="bg-slate-900 py-16 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="rounded-2xl bg-slate-800 p-8 md:p-12 border border-slate-700">
            <h2 className="mb-8 text-3xl font-bold md:text-4xl text-center">What to do in a Plumbing Emergency</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              {[
                { step: '01', title: 'Stay Calm', text: 'Assess the situation carefully and keep everyone away from the area.' },
                { step: '02', title: 'Shut Off Water', text: 'Turn off the main water valve if possible to prevent further damage.' },
                { step: '03', title: 'Open Taps', text: 'Open outside taps to drain remaining water from the pipes.' },
                { step: '04', title: 'Call Us', text: 'Contact our emergency line immediately for professional help.' },
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4 text-5xl font-black text-blue-500/30">{step.step}</div>
                  <h4 className="mb-3 text-xl font-bold">{step.title}</h4>
                  <p className="text-slate-400">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="bg-red-600 py-12 text-white">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h2 className="mb-4 text-3xl font-bold">Need Help Right Now?</h2>
          <p className="mb-8 text-xl text-red-100">Our emergency dispatchers are standing by 24/7.</p>
          <Button href="tel:+12125551234" variant="default" className="bg-white text-red-600 hover:bg-red-50 h-16 text-xl px-12">
            Call (212) 555-1234
          </Button>
        </div>
      </section>
    </main>
  )
}

export default EmergencyServicePage
