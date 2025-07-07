import SectionHeading from "../../components/UI/SectionHeading";
import Button from "../../components/UI/Button";
import {
  Wrench,
  ShowerHead,
  Droplet,
  Home,
  CheckCircle,
  // Zap,
  Clock,
} from "lucide-react";
import fixtureHero from "../../assets/images/pexels-newyork-010.jpg";
import faucetInstall from "../../assets/images/pexels-newyork-011.jpg";
import showerUpgrade from "../../assets/images/pexels-newyork-012.jpg";
import waterEfficiency from "../../assets/images/pexels-newyork-013.jpg";
import fixtureRepair from "../../assets/images/pexels-newyork-014.jpg";

const FixturesServicePage = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section with Modern Fixtures */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0 z-0 bg-center bg-cover bg-blend-multiply brightness-[0.3] after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent after:via-black/30 after:to-black/70">
          <img
            src={fixtureHero}
            alt="Professional installing modern bathroom fixtures"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 py-32 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <ShowerHead
                size={56}
                className="text-blue-400"
              />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Premium Fixture Installation & Repair
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Transform your home with expertly installed, high-performance
              plumbing fixtures
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                href="tel:+12125551234"
                variant="primary"
                className="group">
                <div className="flex items-center">
                  <Wrench
                    className="mr-3"
                    size={20}
                  />
                  <span>Schedule Installation: (212) 555-1234</span>
                </div>
              </Button>
              <Button
                href="#services"
                variant="secondary">
                <div className="flex items-center">
                  <Droplet
                    className="mr-3"
                    size={20}
                  />
                  <span>View Fixture Services</span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Why Choose Our Fixture Services"
            subtitle="Manhattan's trusted plumbing specialists"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: (
                  <Home
                    size={40}
                    className="text-blue-600 dark:text-blue-400"
                  />
                ),
                title: "30+ Years Experience",
                description:
                  "Decades of perfecting fixture installations in NYC homes",
              },
              {
                icon: (
                  <CheckCircle
                    size={40}
                    className="text-blue-600 dark:text-blue-400"
                  />
                ),
                title: "Lifetime Work Guarantee",
                description:
                  "We stand behind every installation with our industry-leading warranty",
              },
              {
                icon: (
                  <Wrench
                    size={40}
                    className="text-blue-600 dark:text-blue-400"
                  />
                ),
                title: "Premium Fixtures",
                description: "Access to top brands at competitive prices",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-700 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-center text-slate-800 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-lg text-center text-slate-600 dark:text-slate-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        className="py-16"
        id="services">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Our Comprehensive Fixture Services"
            subtitle="Enhancing your home's functionality and style"
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            {[
              {
                image: faucetInstall,
                icon: (
                  <Droplet
                    size={32}
                    className="text-blue-600 dark:text-blue-400"
                  />
                ),
                title: "Faucet Installation & Repair",
                description:
                  "Professional installation of kitchen and bathroom faucets from leading brands like Moen, Delta, and Kohler.",
                features: [
                  "Precision installation",
                  "Leak prevention",
                  "Water flow optimization",
                ],
              },
              {
                image: showerUpgrade,
                icon: (
                  <ShowerHead
                    size={32}
                    className="text-blue-600 dark:text-blue-400"
                  />
                ),
                title: "Shower System Upgrades",
                description:
                  "Transform your daily routine with premium shower systems including rainfall, handheld, and body spray options.",
                features: [
                  "Custom shower designs",
                  "Water pressure solutions",
                  "Thermostatic controls",
                ],
              },
              {
                image: waterEfficiency,
                icon: (
                  <CheckCircle
                    size={32}
                    className="text-blue-600 dark:text-blue-400"
                  />
                ),
                title: "Water-Efficient Fixtures",
                description:
                  "Reduce your water bill and environmental impact with high-efficiency fixtures that don't compromise performance.",
                features: [
                  "EPA WaterSense certified",
                  "Smart fixture technology",
                  "Rebate assistance",
                ],
              },
              {
                image: fixtureRepair,
                icon: (
                  <Wrench
                    size={32}
                    className="text-blue-600 dark:text-blue-400"
                  />
                ),
                title: "Fixture Maintenance & Repair",
                description:
                  "Extend the life of your fixtures with professional maintenance and prompt repairs for all makes and models.",
                features: [
                  "Leak diagnostics",
                  "Cartridge replacements",
                  "Preventative maintenance",
                ],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start">
                        <CheckCircle
                          className="flex-shrink-0 mt-1 mr-3 text-blue-600 dark:text-blue-400"
                          size={18}
                        />
                        <span className="text-slate-600 dark:text-slate-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <ShowerHead
            size={48}
            className="mx-auto mb-6"
          />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Upgrade Your Fixtures?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Experience the difference professional fixture installation makes in
            your Manhattan home.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              href="tel:+12125551234"
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-blue-100 dark:hover:bg-slate-200">
              <div className="flex items-center">
                <Wrench
                  className="mr-3"
                  size={20}
                />
                <span>Call Now: (212) 555-1234</span>
              </div>
            </Button>
            <Button
              href="/#contact"
              variant="outline"
              className="text-white border-white hover:bg-white/20 dark:hover:bg-white/20">
              <div className="flex items-center">
                <Clock
                  className="mr-3"
                  size={20}
                />
                <span>Get a Free Estimate</span>
              </div>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FixturesServicePage;
