import React from 'react';
import Hero from '../components/Home/Hero';
import Services from '../components/Home/Services';
import About from '../components/Home/About';
import NewsSection from '../components/Home/NewsSection';
import Testimonials from '../components/Home/Testimonials';
import Contact from '../components/Home/Contact';
import CallToAction from '../components/Home/CallToAction';
import SEO from '../components/SEO/SEO';

const HomePage: React.FC = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Manhattan Plumbing',
    url: 'https://www.manhattanplumbing.com',
    logo: 'https://www.manhattanplumbing.com/manhattan-plumber.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-212-555-1234',
      contactType: 'Customer Service',
    },
  };

  return (
    <>
      <SEO
        title="Manhattan Plumbing | Your Trusted Local Plumber"
        description="Manhattan Plumbing offers reliable and affordable plumbing services in New York City. From leaky faucets to emergency repairs, our expert plumbers are here to help."
        keywords={['plumber', 'plumbing', 'New York', 'Manhattan', 'emergency plumber']}
        canonical="https://www.manhattanplumbing.com"
        ogTitle="Manhattan Plumbing | Your Trusted Local Plumber"
        ogDescription="Manhattan Plumbing offers reliable and affordable plumbing services in New York City. From leaky faucets to emergency repairs, our expert plumbers are here to help."
        ogImage="https://www.manhattanplumbing.com/manhattan-plumber.png"
        ogUrl="https://www.manhattanplumbing.com"
        jsonLd={jsonLd}
      />
      <Hero />
      <Services />
      <About />
      <NewsSection />
      <Testimonials />
      <CallToAction />
      <Contact />
    </>
  );
};

export default HomePage;
