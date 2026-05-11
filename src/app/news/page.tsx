import { Metadata } from 'next'
import { getAllPosts } from '@/lib/news'
import PaginatedPostGrid from '@/components/News/PaginatedPostGrid'
import CategoryList from '@/components/News/CategoryList'

export const metadata: Metadata = {
  title: 'Latest News - Manhattan Plumbing',
  description: 'Stay informed with the latest news and updates from Manhattan Plumbing, your trusted plumbing experts.',
  alternates: {
    canonical: '/news',
    types: {
      'text/markdown': 'https://manhattan-plumbing.pages.dev/news/index.md',
    },
  },
}

export default async function NewsPage() {
  const allPosts = getAllPosts()
  const categories = [...new Set(allPosts.map((p) => p.category))]

  return (
    <main className="min-h-screen py-16 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <header className="mt-12 mb-12 text-center">
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-blue-600 md:text-5xl dark:text-blue-400">
            Latest News
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Stay informed about the latest plumbing tips, company updates, and industry insights.
          </p>
          <div className="mt-8">
            <CategoryList categories={categories} />
          </div>
        </header>

        <PaginatedPostGrid 
          posts={allPosts} 
          postsPerPage={6} 
          baseUrl="/news" 
        />
      </div>
    </main>
  )
}
