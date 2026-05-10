import { Metadata } from 'next'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { Sparkles, Shield, CheckCircle, Zap, Layout, Paintbrush } from 'lucide-react'
import Image from 'next/image'

// Import images
import remodelHeroJpg from '@/assets/images/pexels-newyork-001.jpg'
import bathRemodelJpg from '@/assets/images/pexels-newyork-002.jpg'
import kitchenRemodelJpg from '@/assets/images/pexels-newyork-003.jpg'
import fixtureUpdateJpg from '@/assets/images/pexels-newyork-004.jpg'
import laundryRemodelJpg from '@/assets/images/pexels-newyork-005.jpg'

export const metadata: Metadata = {
  title: 'Kitchen & Bathroom Remodeling Plumbing',
  description: 'Expert plumbing for your kitchen and bathroom remodeling projects in Manhattan. We handle design, layout changes, and high-end fixture installation.',
  alternates: {
    canonical: '/services/remodeling-service',
  },
}

const RemodelingServicePage = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src={remodelHeroJpg}
            alt="Beautifully remodeled bathroom"
            fill
            className="object-cover brightness-[0.65]"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/30 to-black/70" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-32 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex justify-center">
              <Sparkles size={56} className="text-amber-400" />
            </div>
            <h1 className="mb-6 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
              Luxury Kitchen & Bath Remodeling
            </h1>
            <p className="mb-8 text-xl text-blue-100 md:text-2xl">
              Transform your living spaces with Manhattan's premier plumbing remodeling experts
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button href="/#contact" variant="default" className="bg-amber-600 hover:bg-amber-700 border-amber-600">
                <div className="flex items-center">
                  <Paintbrush className="mr-3" size={20} />
                  <span>Start Your Project</span>
                </div>
              </Button>
              <Button href="tel:+12125551234" variant="secondary">
                <div className="flex items-center">
                  <Zap className="mr-3" size={20} />
                  <span>Call: (212) 555-1234</span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-50 py-16 dark:bg-slate-800/50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Beyond Just Plumbing"
            subtitle="Comprehensive remodeling solutions for your dream home"
            centered
          />
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: <Layout size={40} className="text-amber-600 dark:text-amber-400" />,
                title: 'Design-Build Approach',
                description: "We work with your architects or provide in-house design expertise for optimal plumbing layout.",
              },
              {
                icon: <Shield size={40} className="text-amber-600 dark:text-amber-400" />,
                title: 'Permit Management',
                description: 'We handle all necessary NYC plumbing permits and inspections to keep your project compliant.',
              },
              {
                icon: <CheckCircle size={40} className="text-amber-600 dark:text-amber-400" />,
                title: 'Premium Quality',
                description: 'Focusing on high-end finishes and invisible structural integrity that lasts for decades.',
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

      {/* Core Services */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Remodeling Services"
            subtitle="Where functionality meets high-end aesthetics"
            centered
          />

          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
            {[
              {
                image: bathRemodelJpg,
                title: 'Bathroom Transformations',
                description:
                  'From spa-like master baths to efficient guest rooms, we handle everything from pipe relocation to luxury shower systems.',
                features: ['Custom shower systems', 'Bidet & smart toilet installs', 'Double vanity plumbing'],
              },
              {
                image: kitchenRemodelJpg,
                title: 'Modern Kitchen Overhauls',
                description:
                  'Relocating your sink or adding an island? We provide expert plumbing for complex kitchen layouts and high-end appliances.',
                features: ['Island sink plumbing', 'Pot filler installation', 'Ice maker lines'],
              },
              {
                image: fixtureUpdateJpg,
                title: 'Full Plumbing Upgrades',
                description:
                  'We replace old galvanized or aging copper pipes with modern PEX or L-copper during your remodel for a fresh start.',
                features: ['Complete repiping', 'Main shut-off relocation', 'Sump pump installation'],
              },
              {
                image: laundryRemodelJpg,
                title: 'Laundry Room Relocation',
                description:
                  'Bring your laundry room to a more convenient floor with professional drainage and supply lines that prevent leaks.',
                features: ['Drain standpipe install', 'Automatic shut-off valves', 'Venting solutions'],
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
                          className="mt-1 mr-3 shrink-0 text-amber-600 dark:text-amber-400"
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

      {/* Quote Section */}
      <section className="bg-slate-900 py-20 text-white overflow-hidden relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-8 text-4xl font-bold md:text-5xl">Your Vision, Our Expertise</h2>
            <p className="mb-12 text-2xl text-slate-300">
              "Working with Manhattan Plumbing transformed our 1920s bathroom into a modern oasis. Their attention to detail in the hidden plumbing was as impressive as the finish."
            </p>
            <div className="flex flex-col items-center gap-6">
              <div className="h-16 w-16 overflow-hidden rounded-full border-2 border-amber-500">
                <Image src={remodelHeroJpg} alt="Customer" width={64} height={64} className="object-cover" />
              </div>
              <div>
                <div className="text-xl font-bold">Sarah Jenkins</div>
                <div className="text-amber-500">Upper West Side Resident</div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <Sparkles size={400} className="absolute -top-40 -left-40 text-amber-500" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl dark:text-white">Ready to Start Your Remodel?</h2>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-slate-600 dark:text-slate-400">
            Contact us today for a professional consultation and expert plumbing design for your next project.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/#contact" variant="default" className="bg-amber-600 hover:bg-amber-700 border-amber-600">
              <span>Request Project Quote</span>
            </Button>
            <Button href="tel:+12125551234" variant="outline">
              <span>Call (212) 555-1234</span>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default RemodelingServicePage
