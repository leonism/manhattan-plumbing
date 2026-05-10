import Hero from '@/components/Home/Hero'
import Services from '@/components/Home/Services'
import About from '@/components/Home/About'
import NewsSection from '@/components/Home/NewsSection'
import Testimonials from '@/components/Home/Testimonials'
import CallToAction from '@/components/Home/CallToAction'
import Contact from '@/components/Home/Contact'

export default function Home() {
  return (
    <>
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
