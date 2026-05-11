import { Metadata } from 'next'
import Image from 'next/image'
import SectionHeading from '@/components/ui/SectionHeading'
import ServiceCard from '@/components/Services/ServiceCard'
import Button from '@/components/ui/Button'
import { Phone, CheckCircle2 } from 'lucide-react'
import { getAllServices, getServicesIndexData } from '@/lib/services'
import DynamicIcon from '@/components/ui/DynamicIcon'

export async function generateMetadata(): Promise<Metadata> {
  const indexData = getServicesIndexData()
  
  return {
    title: indexData?.title || 'Our Services | Manhattan Plumbing',
    description: indexData?.description || 'Comprehensive plumbing services in Manhattan.',
    alternates: {
      canonical: '/services',
    },
  }
}

export default async function ServicesPage() {
  const indexData = getServicesIndexData()
  const allServices = getAllServices()
  
  if (!indexData) {
    return <div>Loading services...</div>
  }

  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src={`/images/${indexData.hero.image}`}
            alt={indexData.hero.title}
            fill
            className="object-cover brightness-[0.5]"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/20 to-black/60" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-24 md:px-6 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-black tracking-tight text-white md:text-6xl">
              {indexData.hero.title}
            </h1>
            <p className="mb-8 text-xl text-slate-200">
              {indexData.hero.subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href={indexData.hero.primaryButton.href} variant="default" className="h-12 px-8">
                {indexData.hero.primaryButton.text}
              </Button>
              <Button href={indexData.hero.secondaryButton.href} variant="outline" className="h-12 border-white text-white hover:bg-white hover:text-slate-900 px-8">
                <Phone className="mr-2" size={20} />
                {indexData.hero.secondaryButton.text}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section id="all-services" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title={indexData.solutions.title}
            subtitle={indexData.solutions.subtitle}
            centered
          />
          
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {allServices.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.indexDescription || service.description}
                icon={<DynamicIcon name={service.indexIcon || 'Wrench'} size={32} />}
                href={`/services/${service.slug}`}
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
                title={indexData.whyChooseUs.title}
                subtitle={indexData.whyChooseUs.subtitle}
              />
              <div className="mt-8 space-y-4">
                {indexData.whyChooseUs.items.map((item: string, index: number) => (
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
                src={`/images/${indexData.hero.image}`}
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
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">{indexData.cta.title}</h2>
          <p className="mb-10 text-xl text-blue-50">
            {indexData.cta.subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button href={indexData.cta.primaryButton.href} variant="default" className="bg-white text-blue-600 hover:bg-blue-50 h-14 px-10 text-lg">
              {indexData.cta.primaryButton.text}
            </Button>
            <Button href={indexData.cta.secondaryButton.href} variant="outline" className="border-white text-white hover:bg-white/10 h-14 px-10 text-lg">
              {indexData.cta.secondaryButton.text}
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
