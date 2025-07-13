import React from 'react'
import { useSearchParams } from 'react-router-dom'
import SectionHeading from '../components/UI/SectionHeading'
import NewsCard from '../components/News/NewsCard'
import SearchBar from '../components/UI/SearchBar'
import { useSearch, SearchResult } from '../hooks/useSearch'
import { useNews } from '../hooks/useNews'
import SkeletonLoader from '../components/UI/SkeletonLoader'
import SEO from '../components/SEO/SEO'

const SearchResultsPage: React.FC = () => {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') || ''
  const { allPosts } = useNews({})
  const { results, isLoading } = useSearch(query, allPosts)

  return (
    <React.Fragment>
      <SEO
        title={`Search Results for "${query}" | Manhattan Plumbing`}
        description={`Displaying search results for your query: "${query}". Find relevant news and services from Manhattan Plumbing.`}
        keywords={['search results', query, 'Manhattan Plumbing']}
        canonical={`https://manhattan-plumbing.pages.dev/search?q=${encodeURIComponent(query)}`}
        ogTitle={`Search Results for "${query}" | Manhattan Plumbing`}
        ogDescription={`Displaying search results for your query: "${query}". Find relevant news and services from Manhattan Plumbing.`}
        ogUrl={`https://manhattan-plumbing.pages.dev/search?q=${encodeURIComponent(query)}`}
      />
      <main className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          <header className="mb-12">
            <SectionHeading
              title="Search Results"
              subtitle={`Found ${results.news.length + results.services.length} results for "${query}"`}
              centered={false}
            />

            <div className="mt-8 max-w-xl">
              <SearchBar onClear={() => {}} onClose={() => {}} />
            </div>
          </header>

          {isLoading ? (
            <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <SkeletonLoader type="card" count={6} className="col-span-1" />
            </section>
          ) : results.news.length > 0 || results.services.length > 0 ? (
            <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {results.news.length > 0 && (
                <div className="col-span-full">
                  <h2 className="mb-4 text-2xl font-semibold">News Articles</h2>
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {results.news.map((post: SearchResult) => (
                      <NewsCard key={post.slug} post={post} />
                    ))}
                  </div>
                </div>
              )}
              {results.services.length > 0 && (
                <div className="col-span-full">
                  <h2 className="mb-4 text-2xl font-semibold">Services</h2>
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {results.services.map((service: SearchResult) => (
                      <NewsCard key={service.slug} post={service} />
                    ))}
                  </div>
                </div>
              )}
            </section>
          ) : (
            <div className="py-12 text-center">
              <h2 className="mb-4 text-2xl font-semibold">No results found</h2>
              <p className="text-gray-600">
                Try adjusting your search terms or browse our{' '}
                <a href="/news" className="text-primary-600 hover:underline">
                  latest news
                </a>
              </p>
            </div>
          )}
        </div>
      </main>
    </React.Fragment>
  )
}

export default SearchResultsPage
