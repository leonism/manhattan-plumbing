import React from 'react';
import { useParams } from 'react-router-dom';
import SectionHeading from '../components/UI/SectionHeading';
import NewsCard from '../components/News/NewsCard';
import PaginationControls from '../components/UI/PaginationControls';
import { useNews } from '../hooks/useNews';
import SkeletonLoader from '../components/UI/SkeletonLoader';
import SEO from '../components/SEO/SEO';
import CategoryList from '../components/News/CategoryList';

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

  const pageTitle = category
    ? `${category} News${currentPage > 1 ? ` - Page ${currentPage}` : ''} | Manhattan Plumbing`
    : tag
      ? `${tag} Articles${currentPage > 1 ? ` - Page ${currentPage}` : ''} | Manhattan Plumbing`
      : `Latest News${currentPage > 1 ? ` - Page ${currentPage}` : ''} | Manhattan Plumbing`
  const pageDescription = category
    ? `Explore all news articles categorized under ${category} from Manhattan Plumbing.${currentPage > 1 ? ` Page ${currentPage}.` : ''}`
    : tag
      ? `Read articles tagged with ${tag} from Manhattan Plumbing.${currentPage > 1 ? ` Page ${currentPage}.` : ''}`
      : `Stay informed about the latest plumbing news, tips, and company updates from Manhattan Plumbing.${currentPage > 1 ? ` Page ${currentPage}.` : ''}`
  const pageCanonical = category
    ? `https://manhattan-plumbing.pages.dev/news/category/${slugify(category)}${currentPage > 1 ? `/${currentPage}` : ''}`
    : tag
      ? `https://manhattan-plumbing.pages.dev/news/tag/${slugify(tag)}${currentPage > 1 ? `/${currentPage}` : ''}`
      : `https://manhattan-plumbing.pages.dev/news${currentPage > 1 ? `/page/${currentPage}` : ''}`
  const ogImage = 'https://manhattan-plumbing.pages.dev/manhattan-plumber.png' // Generic image for news page

  const { posts, categories, totalPages, isLoading } = useNews({
    category,
    tag,
    page: currentPage,
  })

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
          <header className="mt-12 mb-12 text-center">
            <SectionHeading
              title={category ? `${category} News` : tag ? `${tag} Articles` : 'Latest News'}
              subtitle="Stay informed about the latest updates and insights"
              centered={true}
            />

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
    </React.Fragment>
  )
}

export default NewsPage
