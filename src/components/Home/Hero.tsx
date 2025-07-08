import HeroBackground from '../Hero/HeroBackground'
import HeroContent from '../Hero/HeroContent'
import HeroStats from '../Hero/HeroStats'

const HeroSection = () => {
  return (
    <section
      className="relative pt-24 md:pt-32 pb-20 md:pb-32 overflow-hidden"
      aria-label="Main hero section"
    >
      <HeroBackground />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <HeroContent />
        <HeroStats />
      </div>
    </section>
  )
}

export default HeroSection
