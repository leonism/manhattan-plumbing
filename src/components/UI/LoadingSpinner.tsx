import React from 'react'

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 dark:bg-slate-900">
      <div className="h-32 w-32 animate-spin rounded-full border-t-2 border-b-2 border-blue-500"></div>
    </div>
  )
}

export default LoadingSpinner
