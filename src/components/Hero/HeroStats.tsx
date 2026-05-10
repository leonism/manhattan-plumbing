import StatItem from './StatItem'
import { Award, Smile, Clock } from 'lucide-react'

const HeroStats = () => {
  return (
    <section
      id="HeroStats"
      className="flex flex-wrap items-center justify-start gap-3 text-left md:gap-6 xl:gap-9"
      aria-label="Key Statistics"
    >
      <StatItem icon={Award} value="30+" label="Years Experience" />
      <span className="block h-12 w-px bg-white/20" role="separator" aria-hidden="true" />
      <StatItem icon={Smile} value="10K+" label="Happy Customers" />
      <span className="block h-12 w-px bg-white/20" role="separator" aria-hidden="true" />
      <StatItem icon={Clock} value="24/7" label="Emergency Service" />
    </section>
  )
}

export default HeroStats
