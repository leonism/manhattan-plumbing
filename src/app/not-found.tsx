import Link from 'next/link'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { Home, Phone, Wrench } from 'lucide-react'
import { TypographyH3, TypographyP } from '@/components/ui/typography'

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4 py-16 dark:bg-slate-900">
      <div className="text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <Wrench size={120} className="text-blue-600/20 dark:text-blue-400/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl font-black text-blue-600 dark:text-blue-400">404</span>
            </div>
          </div>
        </div>

        <SectionHeading
          title="Page Not Found"
          subtitle="The plumbing connection you're looking for seems to be missing."
          centered
        />

        <TypographyP className="mx-auto mb-12 max-w-lg text-lg text-slate-600 dark:text-slate-400">
          Sorry, the page you are looking for might have been removed, had its name changed, or is
          temporarily unavailable. Let's get you back on track.
        </TypographyP>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button href="/" variant="default">
            <div className="flex items-center">
              <Home className="mr-2" size={18} />
              <span>Back to Home</span>
            </div>
          </Button>
          <Button href="/#contact" variant="outline">
            <div className="flex items-center">
              <Phone className="mr-2" size={18} />
              <span>Contact Support</span>
            </div>
          </Button>
        </div>

        <div className="mt-16">
          <TypographyH3 className="mb-6 text-xl font-bold text-slate-800 dark:text-white">
            Popular Services
          </TypographyH3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: 'Drain Cleaning', href: '/services/drain-service' },
              { name: 'Emergency Plumbing', href: '/services/emergency-service' },
              { name: 'Water Heaters', href: '/services/water-heater-service' },
              { name: 'Pipe Repair', href: '/services/pipe-service' },
            ].map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="rounded-full bg-white px-6 py-2 text-sm font-medium text-slate-600 shadow-sm transition-colors hover:bg-blue-50 hover:text-blue-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-blue-400"
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
