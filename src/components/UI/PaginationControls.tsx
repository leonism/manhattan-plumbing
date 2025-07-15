import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import PaginationButton from './PaginationButton'

interface PaginationControlsProps {
  currentPage: number
  totalPages: number
  basePath: string
}

const PaginationControls: React.FC<PaginationControlsProps> = ({
  currentPage,
  totalPages,
  basePath,
}) => {
  const getPageUrl = (page: number) => {
    if (page === 1) {
      // For page 1, we want to go to the base path without the page number
      // If basePath is '/news/page', it should go to '/news'
      if (basePath === '/news/page') {
        return '/news'
      }
      return basePath
    }
    return `${basePath}/${page}`
  }

  return (
    <>
      <PaginationButton
        to={getPageUrl(Math.max(1, currentPage - 1))}
        isDisabled={currentPage === 1}
        size="sm"
        className="flex items-center gap-1 px-3"
      >
        <ChevronLeft className="h-4 w-4" />
        Prev
      </PaginationButton>

      {Array.from({ length: totalPages }, (_, i) => (
        <PaginationButton
          key={i + 1}
          to={getPageUrl(i + 1)}
          isActive={currentPage === i + 1}
          size="icon"
        >
          {i + 1}
        </PaginationButton>
      ))}

      <PaginationButton
        to={getPageUrl(Math.min(totalPages, currentPage + 1))}
        isDisabled={currentPage === totalPages}
        size="sm"
        className="flex items-center gap-1 px-3"
      >
        Next
        <ChevronRight className="h-4 w-4" />
      </PaginationButton>
    </>
  )
}

export default PaginationControls
