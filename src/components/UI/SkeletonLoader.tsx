import React from 'react'

interface SkeletonLoaderProps {
  type?: 'text' | 'image' | 'card'
  count?: number
  className?: string
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  type = 'text',
  count = 1,
  className = '',
}) => {
  const renderTextSkeleton = () => (
    <div className={`space-y-2 ${className}`}>
      <div className="h-4 w-full animate-pulse rounded bg-gray-300"></div>
      <div className="h-4 w-5/6 animate-pulse rounded bg-gray-300"></div>
      <div className="h-4 w-4/6 animate-pulse rounded bg-gray-300"></div>
    </div>
  )

  const renderImageSkeleton = () => (
    <div className={`h-48 w-full animate-pulse rounded bg-gray-300 ${className}`}></div>
  )

  const renderCardSkeleton = () => (
    <div className={`rounded-lg bg-gray-200 p-4 shadow-md ${className}`}>
      <div className="mb-4 h-6 w-3/4 animate-pulse rounded bg-gray-300"></div>
      <div className="mb-2 h-4 w-full animate-pulse rounded bg-gray-300"></div>
      <div className="h-4 w-5/6 animate-pulse rounded bg-gray-300"></div>
      <div className="h-4 w-4/6 animate-pulse rounded bg-gray-300"></div>
    </div>
  )

  const skeletons = Array.from({ length: count }).map((_, i) => {
    switch (type) {
      case 'image':
        return <React.Fragment key={i}>{renderImageSkeleton()}</React.Fragment>
      case 'card':
        return <React.Fragment key={i}>{renderCardSkeleton()}</React.Fragment>
      case 'text':
      default:
        return <React.Fragment key={i}>{renderTextSkeleton()}</React.Fragment>
    }
  })

  return <>{skeletons}</>
}

export default SkeletonLoader
