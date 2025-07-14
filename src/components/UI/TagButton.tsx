import React from 'react'

interface TagButtonProps {
  tag: string
  onClick?: (tag: string) => void
}

const TagButton: React.FC<TagButtonProps> = ({ tag, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(tag)
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
    >
      #{tag}
    </button>
  )
}

export default TagButton
