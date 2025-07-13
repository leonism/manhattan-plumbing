import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import SectionHeading from '../components/UI/SectionHeading'
import NewsCard from '../components/News/NewsCard'
import Button from '../components/UI/Button'
import { useNews } from '../hooks/useNews'
import SkeletonLoader from '../components/UI/SkeletonLoader'
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
  const { category, tag } = useParams()
  const [currentPage, setCurrentPage] = useState(1)
  const { posts, categories, totalPages, isLoading } = useNews({
    category,
    tag,
    page: currentPage,
  })

  const pageTitle = category
    ? `${category} News | Manhattan Plumbing`
    : tag
      ? `${tag} Articles | Manhattan Plumbing`
      : 'Latest News | Manhattan Plumbing'
  const pageDescription = category
    ? `Explore all news articles categorized under ${category} from Manhattan Plumbing.`
    : tag
      ? `Read articles tagged with ${tag} from Manhattan Plumbing.`
      : 'Stay informed about the latest plumbing news, tips, and company updates from Manhattan Plumbing.'
  const pageCanonical = category
    ? `https://manhattan-plumbing.pages.dev/news/category/${slugify(category)}`
    : tag
      ? `https://manhattan-plumbing.pages.dev/news/tag/${slugify(tag)}`
      : 'https://manhattan-plumbing.pages.dev/news'
  const ogImage = 'https://manhattan-plumbing.pages.dev/manhattan-plumber.png' // Generic image for news page

  return (
    <React.Fragment>
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonical={pageCanonical}
        ogTitle={pageTitle}
        ogDescription={pageDescription}
        ogImage={ogImage}
        ogUrl={pageCanonical}
      />
      <main className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          <header className="mb-12 text-center">
            <SectionHeading
              title={category ? `${category} News` : tag ? `${tag} Articles` : 'Latest News'}
              subtitle="Stay informed about the latest updates and insights"
              centered={true}
            />

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                to="/news"
                className={`text-sm ${
                  !category && !tag
                    ? 'bg-blue-600 text-white dark:bg-blue-400'
                    : 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-200'
                } rounded-full px-4 py-2 transition-colors hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-white`}
              >
                All
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat}
                  to={`/news/category/${slugify(cat)}`}
                  className={`text-sm ${
                    category === cat
                      ? 'bg-blue-600 text-white dark:bg-blue-400'
                      : 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-200'
                  } rounded-full px-4 py-2 transition-colors hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-white`}
                >
                  {cat}
                </Link>
              ))}
            </div>
          </header>

          <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {isLoading ? (
              <SkeletonLoader type="card" count={9} className="col-span-1" />
            ) : (
              posts.map((post) => <NewsCard key={post.slug} post={post} />)
            )}
          </section>

          {totalPages > 1 && (
            <nav className="mt-12 flex justify-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                isDisabled={currentPage === 1}
              >
                <ChevronLeft className="mr-1 h-5 w-5" />
                Previous
              </Button>

              {Array.from({ length: totalPages }, (_, i) => (
                <Button
                  key={i + 1}
                  variant={currentPage === i + 1 ? 'primary' : 'outline-solid'}
                  size="sm"
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </Button>
              ))}

              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                isDisabled={currentPage === totalPages}
              >
                Next
                <ChevronRight className="ml-1 h-5 w-5" />
              </Button>
            </nav>
          )}
        </div>
      </main>
    </React.Fragment>
  )
}

export default NewsPage
