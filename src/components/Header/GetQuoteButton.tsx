import React from 'react'
import { SparklesIcon } from '@heroicons/react/24/outline'
import Button from '../UI/Button'

const GetQuoteButton: React.FC = () => {
  return (
    <Button
      href="/#contact"
      className="group inline-flex items-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      aria-label="Get a personalized quote by navigating to the contact section"
    >
      <SparklesIcon
        className="mr-2 h-5 w-5 text-current transition-colors group-hover:text-white dark:group-hover:text-white"
        aria-hidden="true"
      />
      <span className="text-sm font-medium whitespace-nowrap md:text-base">Get a Quote</span>
    </Button>
  )
}

export default GetQuoteButton
