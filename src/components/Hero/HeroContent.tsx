import HeroButton from '@/components/Hero/HeroButton'
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
          Schedule Appointment
        </HeroButton>
        <HeroButton 
          href="tel:+12125551234" 
          icon={PhoneCall} 
          variant="outline"
          aria-label="Call us at 212-555-1234"
        >
          Call Now
        </HeroButton>
      </div>
    </section>
  )
}

export default HeroContent
