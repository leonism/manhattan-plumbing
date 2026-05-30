import React from 'react'
import NewsCard from '@/components/News/NewsCard'
import Pagination from '@/components/ui/Pagination'
import { Post } from '@/types'

interface PaginatedPostGridProps {
  posts: Post[]
  postsPerPage: number
  baseUrl: string
  currentPage: number
  usePathPagination?: boolean
}

export default function PaginatedPostGrid({
  posts,
  postsPerPage,
  baseUrl,
  currentPage = 1,
  usePathPagination,
}: PaginatedPostGridProps) {
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
