import React from 'react'
import { useParams } from 'react-router-dom'
import SectionHeading from '../components/UI/SectionHeading'
import NewsCard from '../components/News/NewsCard'
import PaginationControls from '../components/UI/PaginationControls'
import { useNews } from '../hooks/useNews'
import SkeletonLoader from '../components/UI/SkeletonLoader'
import CategoryList from '../components/News/CategoryList'
import SEO from '../components/SEO/SEO'

// Helper function to slugify strings
const slugify = (text: string) => {
  return text
    .toString()
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
}

const NewsPage: React.FC = () => {
  const {
    category,
    tag,
    page: pageParam,
  } = useParams<{ category?: string; tag?: string; page?: string }>()

  const currentPage = pageParam ? parseInt(pageParam, 10) : 1

  const { posts, categories, totalPages, isLoading } = useNews({
    category,
    tag,
    page: currentPage,
  })

  const pageTitle = category
    ? `${category} News - Manhattan Plumbing`
    : tag
      ? `${tag} Articles - Manhattan Plumbing`
      : currentPage > 1
        ? `Latest News - Page ${currentPage} - Manhattan Plumbing`
        : 'Latest News - Manhattan Plumbing'

  const pageDescription = category
    ? `Explore all articles in the ${category} category from Manhattan Plumbing.`
    : tag
      ? `Read articles tagged with ${tag} from Manhattan Plumbing.`
      : 'Stay informed with the latest news and updates from Manhattan Plumbing, your trusted plumbing experts.'

  const pageKeywords = [
    'plumbing news',
    'Manhattan Plumbing',
    'latest updates',
    'plumbing articles',
    category ? `${category} plumbing` : '',
    tag ? `${tag} plumbing` : '',
  ]
    .filter(Boolean)
    .join(', ')

  const canonicalUrl =
    currentPage > 1
      ? `http://localhost:5173/news/page/${currentPage}`
      : category
        ? `http://localhost:5173/news/category/${slugify(category)}`
        : tag
          ? `http://localhost:5173/news/tag/${slugify(tag)}`
          : 'http://localhost:5173/news'

  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
        canonical={canonicalUrl}
      />
      <main className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          <header className="mt-12 mb-12 text-center">
            {category || tag ? (
              <SectionHeading
                title={category ? `${category} News` : tag ? `${tag} Articles` : ''}
                subtitle="Stay informed about the latest updates and insights"
                centered={true}
              />
            ) : (
              <h1 className="mb-4 text-5xl font-bold tracking-tight text-blue-600 md:text-5xl dark:text-blue-400">
                Latest News
              </h1>
            )}
            <CategoryList categories={categories} currentCategory={category} slugify={slugify} />
          </header>

          <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {isLoading ? (
              <SkeletonLoader type="card" count={9} className="col-span-1" />
            ) : (
              posts.map((post) => <NewsCard key={post.slug} post={post} />)
            )}
          </section>

          {totalPages > 1 && (
            <nav className="mt-12 flex items-center justify-center space-x-2">
              <PaginationControls
                currentPage={currentPage}
                totalPages={totalPages}
                basePath={(() => {
                  if (category) return `/news/category/${slugify(category)}`
                  if (tag) return `/news/tag/${slugify(tag)}`
                  return '/news/page'
                })()}
              />
            </nav>
          )}
        </div>
      </main>
    </>
  )
}

export default NewsPage
