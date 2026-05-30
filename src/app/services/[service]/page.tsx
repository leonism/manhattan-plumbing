import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { getAllServices, getServiceData } from '@/lib/services'
import DynamicIcon from '@/components/ui/DynamicIcon'
import ServiceFeatures from '@/components/Services/ServiceFeatures'
import ServiceSituations from '@/components/Services/ServiceSituations'
import ServiceProtocols from '@/components/Services/ServiceProtocols'
import ServiceCTA from '@/components/Services/ServiceCTA'
import NewsPostBody from '@/components/News/NewsPostBody'
import { cn } from '@/lib/utils'
import { TypographyH1, TypographyP } from '@/components/ui/typography'

interface Props {
  params: Promise<{ service: string }>
}

export const dynamicParams = false

export async function generateStaticParams() {
  const services = getAllServices()
  return services.map((service) => ({
    service: service.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: slug } = await params
  const service = await getServiceData(slug)

  if (!service) {
    return { title: 'Service Not Found' }
  }

  return {
    title: service.title,
    description: service.description,
    alternates: {
      canonical: `/services/${slug}`,
    },
  }
}

export default async function ServicePage({ params }: Props) {
  const { service: slug } = await params
  const service = await getServiceData(slug)

  if (!service) {
    notFound()
  }

  const isEmergency = service.slug === 'emergency-service'

  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src={typeof service.heroImage === 'string' ? service.heroImage : service.heroImage.src}
            alt={service.title}
            fill
            className="dark:object-cover dark:brightness-[0.6]"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/30 to-black/70" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-32 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            {service.heroIcon && (
              <div className="mb-6 flex justify-center">
                <DynamicIcon
                  name={service.heroIcon}
                  size={64}
                  className={cn(isEmergency ? 'animate-pulse text-red-500' : 'text-blue-500')}
                />
              </div>
            )}
            <TypographyH1
              className={cn(
                'mb-6 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl',
                isEmergency ? 'text-red-50' : 'text-white'
              )}
            >
              {service.heroTitle}
            </TypographyH1>
            <TypographyP className="mb-8 text-xl text-blue-100 md:text-2xl">{service.heroSubtitle}</TypographyP>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <ServiceHeroButton service={service} />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {service.features && (
        <ServiceFeatures
          title={service.features.title}
          subtitle={service.features.subtitle}
          items={service.features.items}
          variant={service.features.variant}
        />
      )}

      {/* Situations Section */}
      {service.situations && (
        <ServiceSituations
          title={service.situations.title}
          subtitle={service.situations.subtitle}
          items={service.situations.items}
        />
      )}

      {/* Content Section */}
      {service.content && (
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <NewsPostBody content={service.content} />
          </div>
        </section>
      )}

      {/* Protocols Section */}
      {service.protocols && (
        <ServiceProtocols title={service.protocols.title} steps={service.protocols.steps} />
      )}

      {/* CTA Section */}
      {service.cta && (
        <ServiceCTA
          title={service.cta.title}
          subtitle={service.cta.subtitle}
          buttonText={service.cta.buttonText}
          buttonHref={service.cta.buttonHref}
          variant={service.cta.variant}
        />
      )}
    </main>
  )
}

function ServiceHeroButton({ service }: { service: any }) {
  if (service.slug === 'emergency-service') {
    return (
      <a
        href="tel:+12125551234"
        className="group inline-flex h-16 items-center justify-center rounded-md bg-red-600 px-8 text-lg font-medium text-white transition-colors hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none"
      >
        <DynamicIcon name="Phone" className="mr-3 group-hover:animate-bounce" size={24} />
        <span>Call Emergency Line: (212) 555-1234</span>
      </a>
    )
  }

  return (
    <a
      href="/contact/"
      className="inline-flex h-16 items-center justify-center rounded-md bg-blue-600 px-8 text-lg font-medium text-white transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
    >
      Request a Quote
    </a>
  )
}
