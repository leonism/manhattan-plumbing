import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllPosts, getPostData, getAllPostSlugs, getAdjacentPosts } from '@/lib/news'
import PaginatedPostGrid from '@/components/News/PaginatedPostGrid'
import CategoryList from '@/components/News/CategoryList'
import NewsPostBody from '@/components/News/NewsPostBody'
import NewsPostHero from '@/components/News/NewsPostHero'
import NewsPostSidebar from '@/components/News/NewsPostSidebar'
import NewsPostCTA from '@/components/News/NewsPostCTA'
import NewsPostJSONLD from '@/components/News/NewsPostJSONLD'
import NewsIndexJSONLD from '@/components/News/NewsIndexJSONLD'
import { ArticleNavigation } from '@/components/News/ArticleNavigation'
import TableOfContents from '@/components/News/TableOfContents'
import { SocialShare } from '@/components/News/SocialShare'
import Link from 'next/link'
import { slugify } from '@/utils/slugify'

interface Props {
  params: Promise<{ slug?: string[] }>
}

export const dynamicParams = false

export async function generateStaticParams() {
  const allPosts = getAllPosts()
  const totalPages = Math.ceil(allPosts.length / 6)
  
  const pageParams = []
  for (let i = 2; i <= totalPages; i++) {
    pageParams.push({ slug: [String(i)] })
  }
  
  const postSlugs = getAllPostSlugs().map(s => ({
    slug: [s.params.slug]
  }))
  
  return [
    { slug: [] },
    ...pageParams,
    ...postSlugs
  ]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const path = slug || []
  
  // News Index (Page 1 or N)
  if (path.length === 0 || (path.length === 1 && /^\d+$/.test(path[0]))) {
    const pageNum = path.length === 0 ? 1 : parseInt(path[0], 10)
    const title = pageNum === 1 
      ? 'Latest News - Manhattan Plumbing' 
      : `Latest News - Page ${pageNum} | Manhattan Plumbing`
    const description = `Stay informed with the latest news and updates from Manhattan Plumbing. Page ${pageNum} of our expert plumbing insights.`
    
    return {
      title,
      description,
      alternates: {
        canonical: pageNum === 1 ? '/news' : `/news/${pageNum}`,
      },
    }
  }
  
  // Post Page
  if (path.length === 1) {
    const post = await getPostData(path[0])
    if (post) {
      return {
        title: `${post.title} | Manhattan Plumbing News`,
        description: post.excerpt,
        alternates: {
          canonical: `/news/${path[0]}`,
        },
        openGraph: {
          title: post.title,
          description: post.excerpt,
          images: [post.featuredImage.src],
          type: 'article',
        },
      }
    }
  }
  
  return { title: 'Not Found' }
}

export default async function CombinedNewsPage({ params }: Props) {
  const { slug } = await params
  const path = slug || []
  
  // News Index (Page 1 or N)
  if (path.length === 0 || (path.length === 1 && /^\d+$/.test(path[0]))) {
    const pageNum = path.length === 0 ? 1 : parseInt(path[0], 10)
    const allPosts = getAllPosts()
    const categories = [...new Set(allPosts.map((p) => p.category))]
    
    // Validate page number
    const totalPages = Math.ceil(allPosts.length / 6)
    if (pageNum > totalPages || pageNum < 1) {
      notFound()
    }
    
    return (
      <main className="min-h-screen py-16 bg-white dark:bg-slate-900">
        <NewsIndexJSONLD 
          posts={allPosts.slice((pageNum - 1) * 6, pageNum * 6)} 
          title={pageNum === 1 ? 'Latest News - Manhattan Plumbing' : `Latest News - Page ${pageNum} | Manhattan Plumbing`}
          description={`Stay informed with the latest news and updates from Manhattan Plumbing. Page ${pageNum} of our expert plumbing insights.`}
          url={`https://manhattan-plumbing.pages.dev/news${pageNum > 1 ? `/${pageNum}` : ''}`}
        />
        <div className="container mx-auto px-4">
          <header className="mt-12 mb-12 text-center">
            <h1 className="mb-4 text-5xl font-bold tracking-tight text-blue-600 md:text-5xl dark:text-blue-400">
              Latest News {pageNum > 1 && <span className="text-slate-400 text-3xl font-medium"> - Page {pageNum}</span>}
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
              Stay informed about the latest plumbing tips, company updates, and industry insights.
            </p>
            <div className="mt-8">
              <CategoryList categories={categories} />
            </div>
          </header>

          <PaginatedPostGrid 
            posts={allPosts} 
            postsPerPage={6} 
            baseUrl="/news" 
            initialPage={pageNum}
            usePathPagination={true}
          />
        </div>
      </main>
    )
  }
  
  // Post Page
  if (path.length === 1) {
    const postSlug = path[0]
    const post = await getPostData(postSlug)
    if (!post) notFound()
    
    const { prev, next } = getAdjacentPosts(postSlug)
    
    return (
      <main className="min-h-screen bg-white pb-20 dark:bg-slate-900">
        <NewsPostJSONLD post={post} slug={postSlug} />
        <NewsPostHero post={post} />
        <div className="container mx-auto mt-12 px-4">
          <div className="flex flex-col gap-12 lg:flex-row">
            <article className="lg:w-2/3">
              <TableOfContents content={post.content || ''} className="lg:hidden" />
              <NewsPostBody content={post.content || ''} />
              <div className="prose prose-lg dark:prose-invert prose-blue mt-8 max-w-none">
                <p className="border-t pt-8 text-slate-500 italic">
                  This article was originally published in our news section. For more tips and
                  updates, follow us on social media.
                </p>
              </div>
              <SocialShare title={post.title} url={`https://manhattan-plumbing.pages.dev/news/${postSlug}`} />
              <div className="mt-12 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/news/tag/${slugify(tag)}`}
                    className="rounded-lg bg-slate-100 px-4 py-1 text-sm font-medium text-slate-600 hover:bg-blue-100 hover:text-blue-700 transition-colors dark:bg-slate-800 dark:text-slate-400"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
              <ArticleNavigation prev={prev} next={next} />
            </article>
            <div className="lg:w-1/3 space-y-12">
              <TableOfContents content={post.content || ''} className="hidden lg:block" />
              <NewsPostSidebar post={post} />
            </div>
          </div>
        </div>
        <NewsPostCTA />
      </main>
    )
  }
  
  notFound()
}
