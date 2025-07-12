import React from 'react'
import { AlertTriangle, PhoneCall } from 'lucide-react'

const EmergencyNotice: React.FC = () => (
  <aside
    aria-label="Emergency plumbing service notice"
    className="mt-8 rounded-lg border border-blue-100 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20"
  >
    <div role="alert" className="flex items-start gap-3">
      <AlertTriangle
        aria-hidden="true"
        className="mt-1 shrink-0 text-red-500 dark:text-red-400"
        size={22}
      />
      <div>
        <h2 className="mb-2 flex items-center gap-2 text-lg font-semibold text-slate-800 dark:text-white">
          Emergency Service
        </h2>
        <p className="text-sm text-slate-600 lg:text-base dark:text-slate-300">
          We offer 24/7 emergency plumbing services. If you have an urgent plumbing issue outside of
          regular business hours, please call our emergency line at{' '}
          <a
            href="tel:+12125551234"
            aria-label="Call emergency line at 2 1 2, 5 5 5, 1 2 3 4"
            className="inline-flex items-center gap-1 rounded-sm font-semibold text-blue-600 hover:underline focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-hidden dark:text-blue-400"
          >
            <PhoneCall aria-hidden="true" size={16} className="inline" />
            (212) 555-1234
          </a>
          .
        </p>
      </div>
    </div>
  </aside>
)

export default EmergencyNotice
