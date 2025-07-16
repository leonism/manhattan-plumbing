import React from 'react'
import Hero from '../components/Home/Hero'
import Services from '../components/Home/Services'
import About from '../components/Home/About'
import NewsSection from '../components/Home/NewsSection'
import Testimonials from '../components/Home/Testimonials'
import Contact from '../components/Home/Contact'
import CallToAction from '../components/Home/CallToAction'
import SEO from '../components/SEO/SEO'

const HomePage: React.FC = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Manhattan Plumbing',
    description:
      'Manhattan Plumbing offers reliable and affordable plumbing services in New York City. From leaky faucets to emergency repairs, our expert plumbers are here to help.',
    url: 'https://manhattan-plumbing.pages.dev',
    telephone: '+1-212-555-1234',
    image: 'https://manhattan-plumbing.pages.dev/manhattan-plumber.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Main St',
      addressLocality: 'New York',
      addressRegion: 'NY',
      postalCode: '10001',
      addressCountry: 'US',
    },
  }

  return (
    <>
      <SEO
        title="Manhattan Plumbing | Your Trusted Local Plumber"
        description="Manhattan Plumbing offers reliable and affordable plumbing services in New York City. From leaky faucets to emergency repairs, our expert plumbers are here to help."
        keywords={['plumber', 'plumbing', 'New York', 'Manhattan', 'emergency plumber']}
        canonical="https://manhattan-plumbing.pages.dev"
        ogTitle="Manhattan Plumbing | Your Trusted Local Plumber"
        ogDescription="Manhattan Plumbing offers reliable and affordable plumbing services in New York City. From leaky faucets to emergency repairs, our expert plumbers are here to help."
        ogImage="https://manhattan-plumbing.pages.dev/manhattan-plumber.png"
        ogUrl="https://manhattan-plumbing.pages.dev"
        localBusiness={jsonLd}
      />
      <Hero />
      <Services />
      <About />
      <NewsSection />
      <Testimonials />
      <CallToAction />
      <Contact />
    </>
  )
}

export default HomePage
