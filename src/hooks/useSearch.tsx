import { useState, useEffect, useMemo, useRef } from 'react'
import FlexSearch from 'flexsearch'
import { SearchResult, CategorizedResults, SearchIndexItem } from '@/types'

// Singleton index and data to avoid re-fetching and re-indexing on every mount
let flexIndex: any = null
let searchData: SearchIndexItem[] = []

export const useSearch = (query: string) => {
  const [results, setResults] = useState<CategorizedResults>({ news: [], services: [] })
  const [isLoading, setIsLoading] = useState(false)
  const [isReady, setIsReady] = useState(!!flexIndex)

  // Initialize FlexSearch and fetch data
  useEffect(() => {
    if (flexIndex) return

    const initSearch = async () => {
      try {
        setIsLoading(true)
        const response = await fetch('/api/search')
        if (!response.ok) throw new Error('Failed to fetch search index')
        const data: (SearchIndexItem & { type: string })[] = await response.json()
        
        // Initialize FlexSearch Document Index
        // Using "Document" for multi-field indexing and easy retrieval
        flexIndex = new FlexSearch.Document({
          document: {
            id: 'slug',
            index: ['title', 'excerpt', 'category', 'tags'],
            store: ['title', 'excerpt', 'slug', 'featuredImage', 'type']
          },
          tokenize: 'forward',
          resolution: 9,
          cache: true
        })

        // Add items to index (both news and services are now in the data)
        data.forEach(item => {
          flexIndex.add(item)
        })

        searchData = data
        setIsReady(true)
      } catch (error) {
        console.error('Search initialization failed:', error)
      } finally {
        setIsLoading(false)
      }
    }

    initSearch()
  }, [])

  // Perform search
  useEffect(() => {
    if (!isReady || !flexIndex) return

    const search = async () => {
      if (!query.trim()) {
        setResults({ news: [], services: [] })
        return
      }

      // FlexSearch is incredibly fast
      const searchResults = flexIndex.search(query, {
        limit: 20,
        enrich: true, // This returns the stored fields
        suggest: true
      })

      const news: SearchResult[] = []
      const services: SearchResult[] = []

      // FlexSearch returns results grouped by index field, we need to flatten and deduplicate
      const seen = new Set()
      
      searchResults.forEach((fieldResult: any) => {
        fieldResult.result.forEach((item: any) => {
          if (seen.has(item.id)) return
          seen.add(item.id)

          const doc = item.doc
          const result: SearchResult = {
            slug: doc.type === 'news' ? `/news/${doc.slug}` : doc.slug,
            title: doc.title,
            excerpt: doc.excerpt,
            featuredImage: doc.featuredImage,
            icon: doc.type === 'service' ? 'Wrench' : undefined
          }

          if (doc.type === 'news') {
            news.push(result)
          } else {
            services.push(result)
          }
        })
      })

      setResults({ news, services })
    }

    // Small debounce for rapid typing
    const debounceTimeout = setTimeout(search, 50)
    return () => clearTimeout(debounceTimeout)
  }, [query, isReady])

  return { results, isLoading: isLoading || (!isReady && query.length > 0) }
}
