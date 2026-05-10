import HeroBackground from '../Hero/HeroBackground'
import HeroContent from '../Hero/HeroContent'
import HeroStats from '../Hero/HeroStats'

const HeroSection = () => {
  return (
    <section
      className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-32"
      aria-label="Main hero section"
    >
      <HeroBackground />
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <HeroContent />
        <HeroStats />
      </div>
    </section>
  )
}

export default HeroSection
