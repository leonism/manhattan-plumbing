import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PaginatedPostGrid from '@/components/News/PaginatedPostGrid'
import CategoryList from '@/components/News/CategoryList'
import NewsIndexJSONLD from '@/components/News/NewsIndexJSONLD'
import { getAllPosts, getAllCategories } from '@/lib/news'
import { slugify } from '@/utils/slugify'
import { TypographyH1, TypographyP } from '@/components/ui/typography'

export const dynamicParams = false

interface Props {
  params: Promise<{ slug: string[] }>
}

export async function generateStaticParams() {
  const allPosts = getAllPosts()
  const categories = getAllCategories()
  const params: { slug: string[] }[] = []
  const seenSlugs = new Set<string>()

  categories.forEach((cat) => {
    const slugCat = slugify(cat)
    if (seenSlugs.has(slugCat)) return
    seenSlugs.add(slugCat)

    const filteredPosts = allPosts.filter(
      (post) =>
        slugify(post.category) === slugCat || post.category.toLowerCase() === slugCat.toLowerCase()
    )
    const totalPages = Math.ceil(filteredPosts.length / 6)

    // Add base category page /news/category/[category]
    params.push({ slug: [slugCat] })

    // Add paginated pages /news/category/[category]/[page]
    for (let i = 2; i <= totalPages; i++) {
      params.push({ slug: [slugCat, String(i)] })
    }
  })

  return params
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  if (!slug || slug.length === 0) return { title: 'Categories' }

  const category = slug[0]
  const pageNum = slug.length > 1 ? parseInt(slug[1], 10) : 1
  const allCategories = getAllCategories()
  const displayCategory = allCategories.find((c) => slugify(c) === category) || category

  const title =
    pageNum === 1
      ? `${displayCategory} News & Articles | Manhattan Plumbing`
      : `${displayCategory} News & Articles - Page ${pageNum} | Manhattan Plumbing`
  const description = `Read the latest news and expert plumbing insights in the ${displayCategory} category from Manhattan Plumbing.${pageNum > 1 ? ` Page ${pageNum} of our collection.` : ''}`

  return {
    title,
    description,
    alternates: {
      canonical:
        pageNum === 1 ? `/news/category/${category}` : `/news/category/${category}/${pageNum}`,
    },
  }
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params
  if (!slug || slug.length === 0) {
    notFound()
  }

  const category = slug[0]
  const pageNum = slug.length > 1 ? parseInt(slug[1], 10) : 1
  const postsPerPage = 6

  const allPosts = getAllPosts()
  const allCategories = getAllCategories()
  const displayCategory = allCategories.find((c) => slugify(c) === category) || category

  const filteredPosts = allPosts.filter(
    (post) =>
      slugify(post.category) === category || post.category.toLowerCase() === category.toLowerCase()
  )

  if (filteredPosts.length === 0) {
    notFound()
  }

  // Validate page number
  const totalPages = Math.ceil(filteredPosts.length / 6)
  if (pageNum > totalPages || pageNum < 1) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white py-16 dark:bg-slate-900">
      <NewsIndexJSONLD
        posts={filteredPosts.slice((pageNum - 1) * postsPerPage, pageNum * postsPerPage)}
        title={
          pageNum === 1
            ? `${displayCategory} News & Articles | Manhattan Plumbing`
            : `${displayCategory} News & Articles - Page ${pageNum} | Manhattan Plumbing`
        }
        description={`Read the latest news and expert plumbing insights in the ${displayCategory} category from Manhattan Plumbing.${pageNum > 1 ? ` Page ${pageNum}.` : ''}`}
        url={`https://manhattan-plumbing.pages.dev/news/category/${category}${pageNum > 1 ? `/${pageNum}` : ''}`}
      />

      <div className="container mx-auto px-4">
        <header className="mt-12 mb-12 text-center">
          <Link
            href="/news"
            className="mb-4 inline-flex items-center text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
          >
            ← Back to All News
          </Link>
          <TypographyH1 className="mt-4 mb-4 text-5xl font-bold tracking-tight text-slate-900 md:text-6xl dark:text-white">
            Category: <span className="text-blue-600 dark:text-blue-400">{displayCategory}</span>
            {pageNum > 1 && (
              <span className="mt-2 block text-3xl font-medium text-slate-400">
                {' '}
                - Page {pageNum}
              </span>
            )}
          </TypographyH1>
          <TypographyP className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Expert insights and latest updates in {displayCategory}.
          </TypographyP>
          <div className="mt-8">
            <CategoryList categories={allCategories} currentCategory={category} />
          </div>
        </header>

        <PaginatedPostGrid
          posts={filteredPosts}
          postsPerPage={postsPerPage}
          baseUrl={`/news/category/${category}`}
          currentPage={pageNum}
          usePathPagination={true}
        />
      </div>
    </main>
  )
}
