import HeroBackground from "@/components/Hero/HeroBackground"
import HeroContent from "@/components/Hero/HeroContent"
import HeroStats from "@/components/Hero/HeroStats"

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
