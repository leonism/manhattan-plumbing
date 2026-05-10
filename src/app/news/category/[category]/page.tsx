import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import NewsCard from '@/components/News/NewsCard'
import CategoryList from '@/components/News/CategoryList'
import { getAllPosts, getAllCategories } from '@/lib/news'
import { slugify } from '@/utils/slugify'
import Pagination from '@/components/ui/Pagination'

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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params
  const allCategories = getAllCategories()
  const displayCategory = allCategories.find(c => slugify(c) === category) || category

  const title = `${displayCategory} News & Articles | Manhattan Plumbing`
  const description = `Read the latest news and expert plumbing insights in the ${displayCategory} category from Manhattan Plumbing.`

  return {
    title,
    description,
    alternates: {
      canonical: `/news/category/${category}`,
    },
  }
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const { category } = await params
  const { page } = await searchParams
  const currentPage = parseInt(page || '1', 10)
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

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const startIndex = (currentPage - 1) * postsPerPage
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `${displayCategory} Articles`,
    "description": `Browse all articles and news in the ${displayCategory} category from Manhattan Plumbing.`,
    "url": `https://manhattan-plumbing.pages.dev/news/category/${category}`,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": paginatedPosts.map((post, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `https://manhattan-plumbing.pages.dev/news/${post.slug}`
      }))
    }
  }

  return (
    <main className="min-h-screen py-16 bg-white dark:bg-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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

        <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {paginatedPosts.map((post) => (
            <NewsCard key={post.slug} post={post} />
          ))}
        </section>

        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          baseUrl={`/news/category/${category}`} 
        />
      </div>
    </main>
  )
}
