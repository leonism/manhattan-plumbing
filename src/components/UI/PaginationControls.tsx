import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import PaginationButton from './PaginationButton'

interface PaginationControlsProps {
  currentPage: number
  totalPages: number
  setCurrentPage: (page: number) => void
}

const PaginationControls: React.FC<PaginationControlsProps> = ({
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  return (
    <>
      <PaginationButton
        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
        isDisabled={currentPage === 1}
        size="sm"
        className="flex items-center gap-1 px-3"
      >
        <ChevronLeft className="h-4 w-4" />
        Previous
      </PaginationButton>

      {Array.from({ length: totalPages }, (_, i) => (
        <PaginationButton
          key={i + 1}
          onClick={() => setCurrentPage(i + 1)}
          isActive={currentPage === i + 1}
          size="icon"
        >
          {i + 1}
        </PaginationButton>
      ))}

      <PaginationButton
        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
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
