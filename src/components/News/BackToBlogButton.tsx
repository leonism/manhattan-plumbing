import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const BackToBlogButton: React.FC = () => {
  return (
    <Link
      to="/news"
      className="mb-3 inline-flex text-left text-xs text-blue-600 transition-colors duration-200 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
      aria-label="Back to Blog"
    >
      <ArrowLeft className="mr-2 h-4 w-4" />
      Back to Blog
    </Link>
  )
}

export default BackToBlogButton
