import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import SectionHeading from '../components/UI/SectionHeading'
import NewsCard from '../components/News/NewsCard'
import Button from '../components/UI/Button'
import { useNews } from '../hooks/useNews'
import SkeletonLoader from '../components/UI/SkeletonLoader'

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

  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <header className="mb-12 text-center">
          <SectionHeading
            title={category ? `${category} News` : tag ? `${tag} Articles` : 'Latest News'}
            subtitle="Stay informed about the latest updates and insights"
            centered={true}
          />

          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Link
              to="/news"
              className={`text-sm ${
                !category && !tag
                  ? 'bg-blue-600 text-white dark:bg-blue-400'
                  : 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-200'
              } px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-white transition-colors`}
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
                } px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-white transition-colors`}
              >
                {cat}
              </Link>
            ))}
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <ChevronLeft className="w-5 h-5 mr-1" />
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
              <ChevronRight className="w-5 h-5 ml-1" />
            </Button>
          </nav>
        )}
      </div>
    </main>
  )
}

export default NewsPage
