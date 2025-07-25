import HeroButton from './HeroButton'
import { PhoneCall, CheckCircle } from 'lucide-react'

const HeroContent = () => {
  return (
    <section className="mt-40 max-w-3xl md:max-w-4xl">
      <h1 className="ty-auto text-5xl/10 leading-tight font-bold text-white md:text-5xl lg:text-6xl dark:text-white">
        Your Trusted <span className="text-blue-600">Plumbing Experts</span> in Manhattan
      </h1>
      <p className="text-md mt-5 mb-5 leading-relaxed text-white/90 md:text-lg lg:text-xl">
        Professional, reliable plumbing services available 24/7. From emergency repairs to complete
        bathroom remodels, we've got you covered.
      </p>
      <div className="mb-5 flex flex-col gap-4 sm:flex-row">
        <HeroButton href="/#contact" icon={CheckCircle}>
          Get a Free Quote
        </HeroButton>
        <a
          href="tel:+12125551234"
          className="inline-flex items-center justify-center rounded-md border-2 border-white px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-white/10 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:outline-hidden"
          aria-label="Call us at 212-555-1234"
        >
          <PhoneCall size={20} className="mr-2" aria-hidden="true" />
          <span>(212) 555-1234</span>
        </a>
      </div>
    </section>
  )
}

export default HeroContent
