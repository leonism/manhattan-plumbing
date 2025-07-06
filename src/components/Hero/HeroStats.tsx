import StatItem from "./StatItem";
import { Award, Smile, Clock } from "lucide-react";

const HeroStats = () => {
  return (
    <section
      id="HeroStats"
      className="flex flex-wrap items-center justify-start gap-3 md:gap-6 xl:gap-9 text-left"
      aria-label="Key Statistics">
      <StatItem
        icon={Award}
        value="30+"
        label="Years Experience"
      />
      <span
        className="w-px h-12 bg-white/20 block"
        role="separator"
        aria-hidden="true"
      />
      <StatItem
        icon={Smile}
        value="10K+"
        label="Happy Customers"
      />
      <span
        className="w-px h-12 bg-white/20 block"
        role="separator"
        aria-hidden="true"
      />
      <StatItem
        icon={Clock}
        value="24/7"
        label="Emergency Service"
      />
    </section>
  );
};

export default HeroStats;
