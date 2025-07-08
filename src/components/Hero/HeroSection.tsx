import HeroBackground from './HeroBackground'
import HeroContent from './HeroContent'
import HeroStats from './HeroStats'

const HeroSection = () => {
  return (
    <section
      className="relative pt-24 md:pt-32 pb-20 md:pb-32 overflow-hidden"
      aria-label="Main hero section"
    >
      <HeroBackground />

      <HeroContent />
      <HeroStats />
    </section>
  )
}

export default HeroSection
