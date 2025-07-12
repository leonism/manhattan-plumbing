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
      <div className="h-4 bg-gray-300 rounded w-full animate-pulse"></div>
      <div className="h-4 bg-gray-300 rounded w-5/6 animate-pulse"></div>
      <div className="h-4 bg-gray-300 rounded w-4/6 animate-pulse"></div>
    </div>
  )

  const renderImageSkeleton = () => (
    <div className={`bg-gray-300 rounded w-full h-48 animate-pulse ${className}`}></div>
  )

  const renderCardSkeleton = () => (
    <div className={`bg-gray-200 rounded-lg shadow-md p-4 ${className}`}>
      <div className="h-6 bg-gray-300 rounded w-3/4 mb-4 animate-pulse"></div>
      <div className="h-4 bg-gray-300 rounded w-full mb-2 animate-pulse"></div>
      <div className="h-4 bg-gray-300 rounded w-5/6 animate-pulse"></div>
      <div className="h-4 bg-gray-300 rounded w-4/6 animate-pulse"></div>
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
