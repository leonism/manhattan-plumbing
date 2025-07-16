import React, { useState } from 'react'
import { Link } from 'react-router-dom'

interface CategoryListProps {
  categories: string[]
  currentCategory?: string
  slugify: (text: string) => string
}

const CategoryList: React.FC<CategoryListProps> = ({ categories, currentCategory, slugify }) => {
  const [showAllCategories, setShowAllCategories] = useState(false)
  const visibleCategories = showAllCategories ? categories : categories.slice(0, 3)

  return (
    <div className="mt-6 flex flex-wrap justify-center gap-3">
      <Link
        to="/news"
        className={`text-sm ${
          !currentCategory
            ? 'bg-blue-600 text-white dark:bg-blue-400'
            : 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-200'
        } rounded-full px-4 py-2 transition-colors hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-white`}
      >
        All
      </Link>
      {visibleCategories.map((cat) => (
        <Link
          key={cat}
          to={`/news/category/${slugify(cat)}`}
          className={`text-sm ${
            currentCategory === cat
              ? 'bg-blue-600 text-white dark:bg-blue-400'
              : 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-200'
          } rounded-full px-4 py-2 transition-colors hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-white`}
        >
          {cat}
        </Link>
      ))}
      {categories.length > 3 && (
        <button
          onClick={() => setShowAllCategories(!showAllCategories)}
          className="text-sm text-blue-600 hover:underline dark:text-blue-400"
        >
          {showAllCategories ? 'Show Less' : `+ ${categories.length - 3} More`}
        </button>
      )}
    </div>
  )
}

export default CategoryList
