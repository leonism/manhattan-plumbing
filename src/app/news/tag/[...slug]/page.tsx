import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PaginatedPostGrid from '@/components/News/PaginatedPostGrid'
import NewsIndexJSONLD from '@/components/News/NewsIndexJSONLD'
import { getAllPosts, getAllTags } from '@/lib/news'
import { slugify } from '@/utils/slugify'
import { TypographyH1, TypographyP } from '@/components/ui/typography'

export const dynamicParams = false

interface Props {
  params: Promise<{ slug: string[] }>
}

export async function generateStaticParams() {
  const allPosts = getAllPosts()
  const tags = getAllTags()
  const params: { slug: string[] }[] = []
  const seenSlugs = new Set<string>()

  tags.forEach((tag) => {
    const slugTag = slugify(tag)
    if (seenSlugs.has(slugTag)) return
    seenSlugs.add(slugTag)

    const filteredPosts = allPosts.filter((post) =>
      post.tags.some((t) => slugify(t) === slugTag || t.toLowerCase() === slugTag.toLowerCase())
    )
    const totalPages = Math.ceil(filteredPosts.length / 6)

    // Add base tag page /news/tag/[tag]
    params.push({ slug: [slugTag] })

    // Add paginated pages /news/tag/[tag]/[page]
    for (let i = 2; i <= totalPages; i++) {
      params.push({ slug: [slugTag, String(i)] })
    }
  })

  return params
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  if (!slug || slug.length === 0) return { title: 'Tags' }

  const tag = slug[0]
  const pageNum = slug.length > 1 ? parseInt(slug[1], 10) : 1
  const displayTag = tag.charAt(0).toUpperCase() + tag.slice(1).replace(/-/g, ' ')

  const title =
    pageNum === 1
      ? `Articles Tagged: ${displayTag} | Manhattan Plumbing`
      : `Articles Tagged: ${displayTag} - Page ${pageNum} | Manhattan Plumbing`
  const description = `Browse all news and plumbing articles related to ${displayTag} from the Manhattan Plumbing team.${pageNum > 1 ? ` Page ${pageNum}.` : ''}`

  return {
    title,
    description,
    alternates: {
      canonical: pageNum === 1 ? `/news/tag/${tag}` : `/news/tag/${tag}/${pageNum}`,
    },
    openGraph: {
      title,
      description,
      type: 'website',
    },
  }
}

export default async function TagPage({ params }: Props) {
  const { slug } = await params
  if (!slug || slug.length === 0) {
    notFound()
  }

  const tag = slug[0]
  const pageNum = slug.length > 1 ? parseInt(slug[1], 10) : 1
  const postsPerPage = 6

  const allPosts = getAllPosts()
  const allTags = getAllTags()
  const displayTag = allTags.find((t) => slugify(t) === tag) || tag

  const filteredPosts = allPosts.filter((post) =>
    post.tags.some((t) => slugify(t) === tag || t.toLowerCase() === tag.toLowerCase())
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
            ? `Articles Tagged: ${displayTag} | Manhattan Plumbing`
            : `Articles Tagged: ${displayTag} - Page ${pageNum} | Manhattan Plumbing`
        }
        description={`Browse all news and plumbing articles related to ${displayTag} from the Manhattan Plumbing team.${pageNum > 1 ? ` Page ${pageNum}.` : ''}`}
        url={`https://manhattan-plumbing.pages.dev/news/tag/${tag}${pageNum > 1 ? `/${pageNum}` : ''}`}
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
            Tag: <span className="text-blue-600 dark:text-blue-400">#{displayTag}</span>
            {pageNum > 1 && (
              <span className="mt-2 block text-3xl font-medium text-slate-400">
                {' '}
                - Page {pageNum}
              </span>
            )}
          </TypographyH1>
          <TypographyP className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}{' '}
            tagged with #{displayTag}.
          </TypographyP>
        </header>

        <PaginatedPostGrid
          posts={filteredPosts}
          postsPerPage={postsPerPage}
          baseUrl={`/news/tag/${tag}`}
          currentPage={pageNum}
          usePathPagination={true}
        />
      </div>
    </main>
  )
}
