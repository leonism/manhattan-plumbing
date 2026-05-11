'use client'

import React, { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import NewsCard from '@/components/News/NewsCard'
import Pagination from '@/components/ui/Pagination'
import { Post } from '@/types'

interface PaginatedPostGridProps {
  posts: Post[]
  postsPerPage: number
  baseUrl: string
  initialPage?: number
  usePathPagination?: boolean
}

const PostGrid: React.FC<PaginatedPostGridProps> = ({ 
  posts, 
  postsPerPage, 
  baseUrl, 
  initialPage,
  usePathPagination 
}) => {
  const searchParams = useSearchParams()
  const pageParam = searchParams.get('page')
  const currentPage = initialPage || parseInt(pageParam || '1', 10)

  const totalPages = Math.ceil(posts.length / postsPerPage)
  const startIndex = (currentPage - 1) * postsPerPage
  const paginatedPosts = posts.slice(startIndex, startIndex + postsPerPage)

  return (
    <>
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {paginatedPosts.map((post) => (
          <NewsCard key={post.slug} post={post} />
        ))}
      </section>

      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        baseUrl={baseUrl} 
        usePathPagination={usePathPagination}
      />
    </>
  )
}

export default function PaginatedPostGrid(props: PaginatedPostGridProps) {
  return (
    <Suspense fallback={<div className="h-96 animate-pulse bg-slate-100 dark:bg-slate-800 rounded-lg" />}>
      <PostGrid {...props} />
    </Suspense>
  )
}
