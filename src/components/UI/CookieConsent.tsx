import React, { useState, useEffect } from 'react'
import { X } from 'lucide-react'

const COOKIE_CONSENT_KEY = 'manhattan_plumbing_cookie_consent'

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted')
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'declined')
    setIsVisible(false)
    // Optionally, implement logic to disable non-essential cookies here
  }

  if (!isVisible) {
    return null
  }

  return (
    <div className="fixed right-0 bottom-0 left-0 z-50 translate-y-0 transform bg-slate-800 p-4 text-white shadow-lg transition-transform duration-300 ease-out dark:bg-slate-200 dark:text-slate-900">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-sm md:text-left">
          We use cookies to ensure you get the best experience on our website. By continuing to use
          this site, you agree to our use of cookies. For more information, please read our
          <a
            href="/cookie-policy"
            className="ml-1 text-blue-400 hover:underline dark:text-blue-600"
          >
            Cookie Policy
          </a>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={handleAccept}
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 dark:bg-blue-400 dark:hover:bg-blue-500"
          >
            Accept
          </button>
          <button
            onClick={handleDecline}
            className="rounded-md border border-blue-600 px-4 py-2 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-slate-900"
          >
            Decline
          </button>
        </div>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-2 right-2 rounded-full p-1 text-slate-400 hover:text-slate-200 dark:text-slate-700 dark:hover:text-slate-900"
      >
        <X size={18} />
      </button>
    </div>
  )
}

export default CookieConsent
