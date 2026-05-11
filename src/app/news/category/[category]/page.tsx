import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PaginatedPostGrid from '@/components/News/PaginatedPostGrid'
import CategoryList from '@/components/News/CategoryList'
import NewsIndexJSONLD from '@/components/News/NewsIndexJSONLD'
import { getAllPosts, getAllCategories } from '@/lib/news'
import { slugify } from '@/utils/slugify'

export const dynamicParams = false

interface Props {
  params: Promise<{ category: string }>
  searchParams: Promise<{ page?: string }>
}

export async function generateStaticParams() {
  const categories = getAllCategories()
  return categories.map((cat) => ({
    category: slugify(cat),
  }))
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { category } = await params
  const { page } = await searchParams
  const pageNum = parseInt(page || '1', 10)
  const allCategories = getAllCategories()
  const displayCategory = allCategories.find(c => slugify(c) === category) || category

  const title = pageNum === 1 
    ? `${displayCategory} News & Articles | Manhattan Plumbing`
    : `${displayCategory} News & Articles - Page ${pageNum} | Manhattan Plumbing`
  const description = `Read the latest news and expert plumbing insights in the ${displayCategory} category from Manhattan Plumbing.${pageNum > 1 ? ` Page ${pageNum} of our collection.` : ''}`

  return {
    title,
    description,
    alternates: {
      canonical: pageNum === 1 ? `/news/category/${category}` : `/news/category/${category}?page=${pageNum}`,
    },
  }
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const { category } = await params
  const { page } = await searchParams
  const pageNum = parseInt(page || '1', 10)
  const postsPerPage = 6

  const allPosts = getAllPosts()
  const allCategories = getAllCategories()
  const displayCategory = allCategories.find(c => slugify(c) === category) || category

  const filteredPosts = allPosts.filter((post) => 
    slugify(post.category) === category || post.category.toLowerCase() === category.toLowerCase()
  )

  if (filteredPosts.length === 0) {
    notFound()
  }


  return (
    <main className="min-h-screen py-16 bg-white dark:bg-slate-900">
      <NewsIndexJSONLD 
        posts={filteredPosts.slice((pageNum - 1) * 6, pageNum * 6)} 
        title={pageNum === 1 ? `${displayCategory} News & Articles | Manhattan Plumbing` : `${displayCategory} News & Articles - Page ${pageNum} | Manhattan Plumbing`}
        description={`Read the latest news and expert plumbing insights in the ${displayCategory} category from Manhattan Plumbing.${pageNum > 1 ? ` Page ${pageNum}.` : ''}`}
        url={`https://manhattan-plumbing.pages.dev/news/category/${category}${pageNum > 1 ? `?page=${pageNum}` : ''}`}
      />
      
      <div className="container mx-auto px-4">
        <header className="mt-12 mb-12 text-center">
          <Link
            href="/news"
            className="mb-4 inline-flex items-center text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
          >
            ← Back to All News
          </Link>
          <h1 className="mt-4 mb-4 text-5xl font-bold tracking-tight text-slate-900 md:text-6xl dark:text-white">
            Category: <span className="text-blue-600 dark:text-blue-400">{displayCategory}</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Expert insights and latest updates in {displayCategory}.
          </p>
          <div className="mt-8">
            <CategoryList categories={allCategories} currentCategory={category} />
          </div>
        </header>

        <PaginatedPostGrid 
          posts={filteredPosts} 
          postsPerPage={postsPerPage} 
          baseUrl={`/news/category/${category}`} 
          initialPage={pageNum}
        />
      </div>
    </main>
  )
}
