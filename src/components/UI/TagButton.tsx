import React from 'react'
import { Link } from 'react-router-dom'
import { slugify } from '../../utils/slugify'

interface TagButtonProps {
  tag: string
}

const TagButton: React.FC<TagButtonProps> = ({ tag }) => {
  return (
    <Link
      to={`/news/tag/${slugify(tag)}`}
      className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700 transition-colors hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-200 dark:hover:bg-blue-800"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-tag mr-1 h-4 w-4"
      >
        <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
        <circle cx="7.5" cy="7.5" r="0.5" fill="currentColor" />
      </svg>
      {tag}
    </Link>
  )
}

export default TagButton
