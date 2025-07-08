import bgImage from '/src/assets/images/pexels-newyork-004.jpg'

const HeroBackground = () => {
  return (
    <div
      className="absolute inset-0 z-0 bg-center bg-cover bg-blend-multiply brightness-[0.3] after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent after:via-black/30 after:to-black/70"
      style={{ backgroundImage: `url(${bgImage})` }}
      role="img"
      aria-label="New York City skyline background"
    />
  )
}

export default HeroBackground
