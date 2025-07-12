import React from 'react'
import CompanyInfo from '../Footer/CompanyInfo'
import QuickLinks from '../Footer/QuickLinks'

import ServicesList from '../Footer/ServicesList'
import ContactInfo from '../Footer/ContactInfo'

const currentYear = new Date().getFullYear()

const Footer: React.FC = () => (
  <footer className="bg-slate-900 pt-16 pb-8 text-white" role="contentinfo">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
        <CompanyInfo className="lg:col-span-2" />
        <QuickLinks />
        <ServicesList />
        <ContactInfo />
      </div>

      <div className="mt-12 border-t border-slate-800 pt-8 text-center">
        <p className="text-sm text-slate-400">
          <a
            href="/privacy-policy"
            className="transition-colors hover:text-white"
            aria-label="Privacy Policy"
          >
            Privacy Policy
          </a>{' '}
          |{' '}
          <a
            href="/terms-of-service"
            className="transition-colors hover:text-white"
            aria-label="Terms of Service"
          >
            Terms of Service
          </a>{' '}
          |{' '}
          <a
            href="/cookie-policy"
            className="transition-colors hover:text-white"
            aria-label="Terms of Service"
          >
            Cookie Policy
          </a>
          <br />© {currentYear} Manhattan Plumbing. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
