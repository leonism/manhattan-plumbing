import HeroBackground from './HeroBackground'
import HeroContent from './HeroContent'
import HeroStats from './HeroStats'

const HeroSection = () => {
  return (
    <section
      className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-32"
      aria-label="Main hero section"
    >
      <HeroBackground />

      <HeroContent />
      <HeroStats />
    </section>
  )
}

export default HeroSection
