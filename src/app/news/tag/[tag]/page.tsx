import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PaginatedPostGrid from '@/components/News/PaginatedPostGrid'
import { getAllPosts, getAllTags } from '@/lib/news'
import { slugify } from '@/utils/slugify'

interface Props {
  params: Promise<{ tag: string }>
  searchParams: Promise<{ page?: string }>
}

export async function generateStaticParams() {
  const tags = getAllTags()
  return tags.map((tag) => ({
    tag: slugify(tag),
  }))
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { tag } = await params
  const { page } = await searchParams
  const pageNum = parseInt(page || '1', 10)
  const displayTag = tag.charAt(0).toUpperCase() + tag.slice(1).replace(/-/g, ' ')

  const title = pageNum === 1 
    ? `Articles Tagged: ${displayTag} | Manhattan Plumbing`
    : `Articles Tagged: ${displayTag} - Page ${pageNum} | Manhattan Plumbing`
  const description = `Browse all news and plumbing articles related to ${displayTag} from the Manhattan Plumbing team.${pageNum > 1 ? ` Page ${pageNum}.` : ''}`

  return {
    title,
    description,
    alternates: {
      canonical: pageNum === 1 ? `/news/tag/${tag}` : `/news/tag/${tag}?page=${pageNum}`,
    },
    openGraph: {
      title,
      description,
      type: 'website',
    },
  }
}

export default async function TagPage({ params, searchParams }: Props) {
  const { tag } = await params
  const { page } = await searchParams
  const pageNum = parseInt(page || '1', 10)
  const postsPerPage = 6

  const allPosts = getAllPosts()
  const allTags = getAllTags()
  const displayTag = allTags.find(t => slugify(t) === tag) || tag

  const filteredPosts = allPosts.filter((post) => 
    post.tags.some((t) => slugify(t) === tag || t.toLowerCase() === tag.toLowerCase())
  )

  if (filteredPosts.length === 0) {
    notFound()
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `Articles tagged with #${displayTag}`,
    "description": `Browse all articles and news tagged with #${displayTag} from Manhattan Plumbing.`,
    "url": `https://manhattan-plumbing.pages.dev/news/tag/${tag}`,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": filteredPosts.slice(0, 6).map((post, index) => ({
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
            Tag: <span className="text-blue-600 dark:text-blue-400">#{displayTag}</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} tagged with #{displayTag}.
          </p>
        </header>

        <PaginatedPostGrid 
          posts={filteredPosts} 
          postsPerPage={postsPerPage} 
          baseUrl={`/news/tag/${tag}`} 
          initialPage={pageNum}
        />
      </div>
    </main>
  )
}
