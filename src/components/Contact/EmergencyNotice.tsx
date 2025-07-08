import React from 'react'
import { AlertTriangle, PhoneCall } from 'lucide-react'

const EmergencyNotice: React.FC = () => (
  <aside
    aria-label="Emergency plumbing service notice"
    className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800"
  >
    <div role="alert" className="flex items-start gap-3">
      <AlertTriangle
        aria-hidden="true"
        className="flex-shrink-0 mt-1 text-red-500 dark:text-red-400"
        size={22}
      />
      <div>
        <h2 className="flex items-center gap-2 font-semibold text-slate-800 dark:text-white mb-2 text-lg">
          Emergency Service
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-sm lg:text-base">
          We offer 24/7 emergency plumbing services. If you have an urgent plumbing issue outside of
          regular business hours, please call our emergency line at{' '}
          <a
            href="tel:+12125551234"
            aria-label="Call emergency line at 2 1 2, 5 5 5, 1 2 3 4"
            className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded"
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
