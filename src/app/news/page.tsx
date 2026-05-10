import { Metadata } from 'next'
import Link from 'next/link'

import NewsCard from '@/components/News/NewsCard'
import CategoryList from '@/components/News/CategoryList'
import { getAllPosts } from '@/lib/news'
import { slugify } from '@/utils/slugify'

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

export default function NewsPage() {
  const allPosts = getAllPosts()
  const filteredPosts = allPosts.slice(0, 6)
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

        {filteredPosts.length > 0 ? (
          <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <NewsCard key={post.slug} post={post} />
            ))}
          </section>
        ) : (
          <div className="py-20 text-center">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">No posts found.</h2>
            <Link href="/news" className="mt-4 inline-block text-blue-600 hover:underline">
              Back to all news
            </Link>
          </div>
        )}
      </div>
    </main>
  )
}
