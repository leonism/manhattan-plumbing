import React, { useEffect, useState, Suspense, lazy } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import {
  Wrench, // General service icon
  Droplet, // For DrainService, PipeService
  Thermometer, // For WaterHeaterService
  Hammer, // For RemodelingService
  Zap, // For EmergencyService
  ShowerHead, // For FixtureService
} from 'lucide-react'

interface Service {
  name: string
  path: string
  icon: React.ReactNode
  component?: React.ComponentType | React.LazyExoticComponent<React.ComponentType>
  title?: string
  description?: string
  keywords?: string[]
}

const serviceIconMap: { [key: string]: React.ReactNode } = {
  'Drain Service': <Droplet size={24} />,
  'Emergency Service': <Zap size={24} />,
  'Fixture Service': <ShowerHead size={24} />,
  'Pipe Service': <Droplet size={24} />,
  'Remodeling Service': <Hammer size={24} />,
  'Water Heater Service': <Thermometer size={24} />,
  Default: <Wrench size={24} />,
}

const IndividualServicePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const [CurrentServiceComponent, setCurrentServiceComponent] = useState<
    React.ComponentType | React.LazyExoticComponent<React.ComponentType> | null
  >(null)
  const [serviceData, setServiceData] = useState<Service | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadIndividualService = async () => {
      setLoading(true)
      setError(null)
      if (!slug) {
        setError('Service not found: No slug provided.')
        setLoading(false)
        return
      }

      try {
        const serviceModules = import.meta.glob('./services/*.tsx')
        let foundService: Service | null = null

        for (const path in serviceModules) {
          const fileName = path.split('/').pop()
          if (fileName) {
            const serviceName = fileName
              .replace('.tsx', '')
              .replace(/([A-Z])/g, ' $1')
              .trim()
            const servicePath = serviceName.toLowerCase().replace(/\s/g, '-')

            if (servicePath === slug) {
              foundService = {
                name: serviceName,
                path: `/services/${servicePath}`,
                icon: serviceIconMap[serviceName] || serviceIconMap['Default'],
                component: lazy(
                  serviceModules[path] as () => Promise<{ default: React.ComponentType }>
                ),
              }
              break
            }
          }
        }

        if (foundService && foundService.component) {
          setCurrentServiceComponent(foundService.component)
          setServiceData(foundService)
        } else {
          setError(`Service not found for slug: ${slug}`)
          setCurrentServiceComponent(null)
          setServiceData(null)
        }
      } catch (err) {
        console.error('Failed to load service component:', err)
        setError('Failed to load service content. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    loadIndividualService()
  }, [slug])

  const jsonLd = serviceData
    ? {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: serviceData.name,
        description: serviceData.description,
        url: `https://manhattan-plumbing.pages.dev/services/${slug}`,
        provider: {
          '@type': 'Organization',
          name: 'Manhattan Plumbing',
          url: 'https://manhattan-plumbing.pages.dev',
          logo: 'https://manhattan-plumbing.pages.dev/manhattan-plumber.png',
        },
      }
    : {}

  if (loading) {
    return (
      <Layout
        title="Loading Service..."
        description="Loading service details..."
        keywords={['plumbing', 'manhattan', 'nyc']}
        canonical={`https://manhattan-plumbing.pages.dev/services/${slug}`}
        ogTitle="Loading Service..."
        ogDescription="Loading service details..."
        ogImage="https://manhattan-plumbing.pages.dev/manhattan-plumber.png"
        ogUrl={`https://manhattan-plumbing.pages.dev/services/${slug}`}
        jsonLd={jsonLd}
      >
        <div className="container mx-auto mt-20 py-8 text-center">
          <p>Loading service details...</p>
        </div>
      </Layout>
    )
  }

  if (error) {
    return (
      <Layout
        title="Service Not Found"
        description={error}
        keywords={['plumbing', 'manhattan', 'nyc', 'error']}
        canonical={`https://manhattan-plumbing.pages.dev/services/${slug}`}
        ogTitle="Service Not Found"
        ogDescription={error}
        ogImage="https://manhattan-plumbing.pages.dev/manhattan-plumber.png"
        ogUrl={`https://manhattan-plumbing.pages.dev/services/${slug}`}
        jsonLd={jsonLd}
      >
        <div className="container mx-auto mt-20 py-8 text-center text-red-500">
          <p>{error}</p>
          <p>
            Please check the URL or return to the{' '}
            <a href="/services" className="text-blue-500 hover:underline">
              services list
            </a>
            .
          </p>
        </div>
      </Layout>
    )
  }

  if (CurrentServiceComponent && serviceData) {
    return (
      <Suspense
        fallback={
          <Layout
            title={`Loading ${serviceData.name}...`}
            description={`Loading ${serviceData.name} content...`}
            keywords={serviceData.keywords || ['plumbing', 'manhattan', 'nyc']}
            canonical={`https://manhattan-plumbing.pages.dev/services/${slug}`}
            ogTitle={`Loading ${serviceData.name}...`}
            ogDescription={`Loading ${serviceData.name} content...`}
            ogImage="https://manhattan-plumbing.pages.dev/manhattan-plumber.png"
            ogUrl={`https://manhattan-plumbing.pages.dev/services/${slug}`}
            jsonLd={jsonLd}
          >
            <div className="container mx-auto mt-20 py-8 text-center">
              <p>Loading service content...</p>
            </div>
          </Layout>
        }
      >
        <Layout
          title={serviceData.title || serviceData.name}
          description={
            serviceData.description || `Learn more about our ${serviceData.name} services.`
          }
          keywords={serviceData.keywords || ['plumbing', 'manhattan', 'nyc']}
          canonical={`https://manhattan-plumbing.pages.dev/services/${slug}`}
          ogTitle={serviceData.title || serviceData.name}
          ogDescription={
            serviceData.description || `Learn more about our ${serviceData.name} services.`
          }
          ogImage="https://manhattan-plumbing.pages.dev/manhattan-plumber.png"
          ogUrl={`https://manhattan-plumbing.pages.dev/services/${slug}`}
          jsonLd={jsonLd}
        >
          <CurrentServiceComponent />
        </Layout>
      </Suspense>
    )
  }

  return (
    <Layout
      title="No Service Content"
      description="No service content to display."
      keywords={['plumbing', 'manhattan', 'nyc', 'error']}
      canonical={`https://manhattan-plumbing.pages.dev/services/${slug}`}
      ogTitle="No Service Content"
      ogDescription="No service content to display."
      ogImage="https://manhattan-plumbing.pages.dev/manhattan-plumber.png"
      ogUrl={`https://manhattan-plumbing.pages.dev/services/${slug}`}
      jsonLd={jsonLd}
    >
      <div className="container mx-auto mt-20 py-8 text-center">
        <p>No service content to display.</p>
      </div>
    </Layout>
  )
}

export default IndividualServicePage
