import { useState, useEffect } from 'react'
import SectionHeading from '../../components/UI/SectionHeading'
import Button from '../../components/UI/Button'
import { Home, Bath, Hammer, Zap, CheckCircle } from 'lucide-react'

interface PexelsImage {
  id: number
  width: number
  height: number
  url: string
  photographer: string
  photographer_url: string
  photographer_id: number
  avg_color: string
  src: {
    original: string
    large2x: string
    large: string
    medium: string
    small: string
    portrait: string
    landscape: string
    tiny: string
  }
  liked: boolean
  alt: string
}

const RemodelingServicePage = () => {
  const [bathroomImages, setBathroomImages] = useState<PexelsImage[]>([])

  useEffect(() => {
    const fetchBathroomImages = async () => {
      try {
        const response = await fetch(
          'https://api.pexels.com/v1/search?query=luxury+bathroom+remodel&per_page=6',
          {
            headers: {
              Authorization: '5bXehp9eT0tv7vpIsJCgLsRK5cKOm5liuVdUphgYKfeJco8Hv2cE1h14', // Replace with your actual API key
            },
          }
        )
        const data = await response.json()
        setBathroomImages(data.photos || [])
      } catch (error) {
        console.error('Error fetching images from Pexels:', error)
      }
    }

    fetchBathroomImages()
  }, [])

  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section with Pexels Background Image */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0 z-0 bg-center bg-cover bg-blend-multiply brightness-[0.6] after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent after:via-black/30 after:to-black/70">
          {bathroomImages[0] && (
            <img
              src={bathroomImages[0].src.large}
              alt={bathroomImages[0].alt || 'Luxury bathroom remodeling'}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          )}
        </div>
        <div className="container mx-auto px-4 md:px-6 py-32 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Home size={56} className="text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Luxury Bathroom Remodeling in Manhattan
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Transform your bathroom into a spa-like retreat with our premium remodeling services
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
                  <Hammer className="mr-3" size={20} />
                  <span>Free Consultation</span>
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
            title="Why Choose Our Remodeling Services"
            subtitle="Manhattan's premier bathroom transformation experts"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: <CheckCircle size={40} className="text-blue-600 dark:text-blue-400" />,
                title: '10-Year Craftsmanship Warranty',
                description:
                  'We stand behind our work with industry-leading guarantees on all remodeling projects.',
              },
              {
                icon: <Home size={40} className="text-blue-600 dark:text-blue-400" />,
                title: 'Minimal Disruption',
                description:
                  'Efficient project management to complete your remodel with minimal downtime.',
              },
              {
                icon: <Bath size={40} className="text-blue-600 dark:text-blue-400" />,
                title: 'Luxury Fixtures',
                description: 'Access to premium brands and materials at competitive prices.',
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

      {/* Gallery Section with Pexels Images */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Our Recent Projects"
            subtitle="Luxury bathroom transformations"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {bathroomImages.slice(1, 7).map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={image.src.medium}
                  alt={image.alt || 'Bathroom remodel example'}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                  <div>
                    <p className="text-white font-semibold text-lg">
                      {image.photographer && `Photo by ${image.photographer}`}
                    </p>
                    <a
                      href={image.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:text-blue-100 text-sm"
                    >
                      View on Pexels
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-blue-50 dark:bg-blue-900/20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Our Remodeling Process"
            subtitle="A seamless experience from concept to completion"
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                title: '1. Consultation',
                description: 'We listen to your vision and assess your space',
                icon: <Home size={32} className="text-blue-600 dark:text-blue-400" />,
              },
              {
                title: '2. Design',
                description: 'Custom 3D renderings of your new bathroom',
                icon: <Bath size={32} className="text-blue-600 dark:text-blue-400" />,
              },
              {
                title: '3. Installation',
                description: 'Professional craftsmanship with premium materials',
                icon: <Hammer size={32} className="text-blue-600 dark:text-blue-400" />,
              },
              {
                title: '4. Final Walkthrough',
                description: 'Ensuring every detail meets your expectations',
                icon: <CheckCircle size={32} className="text-blue-600 dark:text-blue-400" />,
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 text-center"
              >
                <div className="flex justify-center mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Your Dream Bathroom?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Schedule your free design consultation today and take the first step toward your perfect
            bathroom.
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
                <Hammer className="mr-3" size={20} />
                <span>Free Consultation</span>
              </div>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default RemodelingServicePage
