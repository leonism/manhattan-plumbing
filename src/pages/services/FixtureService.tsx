import SectionHeading from '../../components/UI/SectionHeading'
import Button from '../../components/UI/Button'
import { Wrench, ShowerHead, Droplet, Home, CheckCircle } from 'lucide-react'
import Layout from '../../components/Layout/Layout'

import fixtureHeroJpg from '../../assets/images/pexels-newyork-010.jpg'
import fixtureHeroWebp from '../../assets/images/pexels-newyork-010.jpg?format=webp'
import fixtureHeroAvif from '../../assets/images/pexels-newyork-010.jpg?format=avif'

import faucetInstallJpg from '../../assets/images/pexels-newyork-011.jpg'
import faucetInstallWebp from '../../assets/images/pexels-newyork-011.jpg?format=webp'
import faucetInstallAvif from '../../assets/images/pexels-newyork-011.jpg?format=avif'

import showerUpgradeJpg from '../../assets/images/pexels-newyork-012.jpg'
import showerUpgradeWebp from '../../assets/images/pexels-newyork-012.jpg?format=webp'
import showerUpgradeAvif from '../../assets/images/pexels-newyork-012.jpg?format=avif'

import waterEfficiencyJpg from '../../assets/images/pexels-newyork-013.jpg'
import waterEfficiencyWebp from '../../assets/images/pexels-newyork-013.jpg?format=webp'
import waterEfficiencyAvif from '../../assets/images/pexels-newyork-013.jpg?format=avif'

import fixtureRepairJpg from '../../assets/images/pexels-newyork-014.jpg'
import fixtureRepairWebp from '../../assets/images/pexels-newyork-014.jpg?format=webp'
import fixtureRepairAvif from '../../assets/images/pexels-newyork-014.jpg?format=avif'

const FixturesServicePage = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Fixture Installation & Repair',
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
      'Premium plumbing fixture installation and repair services in Manhattan. We install and repair faucets, showers, and more.',
  }

  return (
    <Layout
      title="Fixture Installation & Repair | Manhattan Plumbing"
      description="Expert plumbing fixture installation and repair in Manhattan. We specialize in faucets, showers, and water-efficient fixtures."
      keywords={[
        'fixture installation',
        'fixture repair',
        'faucet installation',
        'shower upgrade',
        'Manhattan',
      ]}
      canonical="https://manhattan-plumbing.pages.dev/services/fixture-service"
      ogTitle="Fixture Installation & Repair | Manhattan Plumbing"
      ogDescription="Expert plumbing fixture installation and repair in Manhattan. We specialize in faucets, showers, and water-efficient fixtures."
      ogImage={fixtureHeroJpg}
      ogUrl="https://manhattan-plumbing.pages.dev/services/fixture-service"
      jsonLd={jsonLd}
    >
      <main className="min-h-screen bg-white dark:bg-slate-900">
        {/* Hero Section with Modern Fixtures */}
        <section className="relative bg-slate-900 text-white">
          <div className="absolute inset-0 z-0 bg-cover bg-center bg-blend-multiply brightness-[0.9] after:absolute after:inset-0 after:bg-linear-to-b after:from-transparent after:via-black/30 after:to-black/70">
            <picture>
              <source srcSet={fixtureHeroAvif} type="image/avif" />
              <source srcSet={fixtureHeroWebp} type="image/webp" />
              <img
                src={fixtureHeroJpg}
                alt="Professional installing modern bathroom fixtures"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </picture>
          </div>
          <div className="relative z-10 container mx-auto px-4 py-32 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 flex justify-center">
                <ShowerHead size={56} className="text-blue-400" />
              </div>
              <h1 className="mb-6 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
                Premium Fixture Installation & Repair
              </h1>
              <p className="mb-8 text-xl text-blue-100">
                Transform your home with expertly installed, high-performance plumbing fixtures
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button href="tel:+12125551234" variant="primary" className="group">
                  <div className="flex items-center">
                    <Wrench className="mr-3" size={20} />
                    <span>Schedule Installation: (212) 555-1234</span>
                  </div>
                </Button>
                <Button href="#services" variant="secondary">
                  <div className="flex items-center">
                    <Droplet className="mr-3" size={20} />
                    <span>View Fixture Services</span>
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
              title="Why Choose Our Fixture Services"
              subtitle="Manhattan's trusted plumbing specialists"
              centered
            />
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  icon: <Home size={40} className="text-blue-600 dark:text-blue-400" />,
                  title: '30+ Years Experience',
                  description: 'Decades of perfecting fixture installations in NYC homes',
                },
                {
                  icon: <CheckCircle size={40} className="text-blue-600 dark:text-blue-400" />,
                  title: 'Lifetime Work Guarantee',
                  description:
                    'We stand behind every installation with our industry-leading warranty',
                },
                {
                  icon: <Wrench size={40} className="text-blue-600 dark:text-blue-400" />,
                  title: 'Premium Fixtures',
                  description: 'Access to top brands at competitive prices',
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

        {/* Services Section */}
        <section className="py-16" id="services">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading
              title="Our Comprehensive Fixture Services"
              subtitle="Enhancing your home's functionality and style"
              centered
            />

            <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
              {[
                {
                  image: {
                    jpg: faucetInstallJpg,
                    webp: faucetInstallWebp,
                    avif: faucetInstallAvif,
                  },
                  icon: <Droplet size={32} className="text-blue-600 dark:text-blue-400" />,
                  title: 'Faucet Installation & Repair',
                  description:
                    'Professional installation of kitchen and bathroom faucets from leading brands like Moen, Delta, and Kohler.',
                  features: [
                    'Precision installation',
                    'Leak prevention',
                    'Water flow optimization',
                  ],
                },
                {
                  image: {
                    jpg: showerUpgradeJpg,
                    webp: showerUpgradeWebp,
                    avif: showerUpgradeAvif,
                  },
                  icon: <ShowerHead size={32} className="text-blue-600 dark:text-blue-400" />,
                  title: 'Shower System Upgrades',
                  description:
                    'Transform your daily routine with premium shower systems including rainfall, handheld, and body spray options.',
                  features: [
                    'Custom shower designs',
                    'Water pressure solutions',
                    'Thermostatic controls',
                  ],
                },
                {
                  image: {
                    jpg: waterEfficiencyJpg,
                    webp: waterEfficiencyWebp,
                    avif: waterEfficiencyAvif,
                  },
                  icon: <CheckCircle size={32} className="text-blue-600 dark:text-blue-400" />,
                  title: 'Water-Efficient Fixtures',
                  description:
                    "Reduce your water bill and environmental impact with high-efficiency fixtures that don't compromise performance.",
                  features: [
                    'EPA WaterSense certified',
                    'Smart fixture technology',
                    'Rebate assistance',
                  ],
                },
                {
                  image: {
                    jpg: fixtureRepairJpg,
                    webp: fixtureRepairWebp,
                    avif: fixtureRepairAvif,
                  },
                  icon: <Wrench size={32} className="text-blue-600 dark:text-blue-400" />,
                  title: 'Fixture Maintenance & Repair',
                  description:
                    'Extend the life of your fixtures with professional maintenance and prompt repairs for all makes and models.',
                  features: [
                    'Leak diagnostics',
                    'Cartridge replacements',
                    'Preventative maintenance',
                  ],
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl dark:bg-slate-800"
                >
                  <div className="h-64 overflow-hidden">
                    <picture>
                      <source srcSet={service.image.avif} type="image/avif" />
                      <source srcSet={service.image.webp} type="image/webp" />
                      <img
                        src={service.image.jpg}
                        alt={service.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </picture>
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

        {/* CTA Section */}
        <section className="bg-linear-to-r from-blue-600 to-blue-800 py-16 text-white">
          <div className="container mx-auto px-4 text-center md:px-6">
            <ShowerHead size={48} className="mx-auto mb-6" />
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to Upgrade Your Fixtures?</h2>
            <p className="mx-auto mb-8 max-w-3xl text-xl text-blue-100">
              Experience the difference professional fixture installation makes in your Manhattan
              home.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button href="tel:+12125551234" variant="primary" className="group">
                <div className="flex items-center">
                  <Wrench className="mr-3" size={20} />
                  <span>Schedule Installation: (212) 555-1234</span>
                </div>
              </Button>
              <Button href="#services" variant="secondary">
                <div className="flex items-center">
                  <Droplet className="mr-3" size={20} />
                  <span>Get Free Estimate</span>
                </div>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default FixturesServicePage
