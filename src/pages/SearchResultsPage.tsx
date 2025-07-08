import React from 'react'
import { useSearchParams } from 'react-router-dom'
import SectionHeading from '../components/UI/SectionHeading'
import NewsCard from '../components/News/NewsCard'
import SearchBar from '../components/UI/SearchBar'
import { useSearch } from '../hooks/useSearch'

const SearchResultsPage: React.FC = () => {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') || ''
  const { results, isLoading } = useSearch(query)

  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <header className="mb-12">
          <SectionHeading
            title="Search Results"
            subtitle={`Found ${results.length} results for "${query}"`}
            alignment="left"
          />

          <div className="mt-8 max-w-xl">
            <SearchBar />
          </div>
        </header>

        {isLoading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
          </div>
        ) : results.length > 0 ? (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {results.map((post) => (
              <NewsCard key={post.slug} post={post} />
            ))}
          </section>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold mb-4">No results found</h2>
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
  )
}

export default SearchResultsPage
