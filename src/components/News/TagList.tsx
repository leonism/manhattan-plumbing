import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Tag } from 'lucide-react'

interface TagListProps {
  tags: string[]
  slugify: (text: string) => string
  className?: string
}

const TagList: React.FC<TagListProps> = ({ tags, slugify, className }) => {
  const [showAllTags, setShowAllTags] = useState(false)
  const visibleTags = showAllTags ? tags : tags.slice(0, 3)

  return (
    <div className={`mb-4 flex flex-wrap justify-center gap-1 text-xs ${className || ''}`}>
      {visibleTags.map((tag: string) => (
        <Link
          key={tag}
          to={`/news/tag/${slugify(tag)}`}
          className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-700 transition-colors hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-200 dark:hover:bg-blue-800"
        >
          <Tag className="mr-1 h-4 w-4" />
          {tag}
        </Link>
      ))}
      {tags.length > 3 && (
        <button
          onClick={() => setShowAllTags(!showAllTags)}
          className="text-sm text-blue-600 hover:underline dark:text-blue-400"
        >
          {showAllTags ? 'Show Less' : `+ ${tags.length - 3} More`}
        </button>
      )}
    </div>
  )
}

export default TagList
