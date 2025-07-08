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
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-slate-800 text-white dark:bg-slate-200 dark:text-slate-900 shadow-lg transition-transform duration-300 ease-out transform translate-y-0">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-center md:text-left">
          We use cookies to ensure you get the best experience on our website. By continuing to use
          this site, you agree to our use of cookies. For more information, please read our
          <a
            href="/cookie-policy"
            className="text-blue-400 hover:underline ml-1 dark:text-blue-600"
          >
            Cookie Policy
          </a>
          .
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={handleAccept}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition-colors dark:bg-blue-400 dark:hover:bg-blue-500"
          >
            Accept
          </button>
          <button
            onClick={handleDecline}
            className="px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-md text-sm font-medium transition-colors dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-slate-900"
          >
            Decline
          </button>
        </div>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-2 right-2 p-1 text-slate-400 hover:text-slate-200 dark:text-slate-700 dark:hover:text-slate-900 rounded-full"
      >
        <X size={18} />
      </button>
    </div>
  )
}

export default CookieConsent
