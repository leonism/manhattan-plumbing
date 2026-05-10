import { Metadata } from 'next'
import { getPostData, getAllPostSlugs, getAdjacentPosts } from '@/lib/news'
import { notFound } from 'next/navigation'
import NewsPostBody from '@/components/News/NewsPostBody'
import NewsPostHero from '@/components/News/NewsPostHero'
import NewsPostSidebar from '@/components/News/NewsPostSidebar'
import NewsPostCTA from '@/components/News/NewsPostCTA'
import NewsPostJSONLD from '@/components/News/NewsPostJSONLD'
import { ArticleNavigation } from '@/components/News/ArticleNavigation'
import TableOfContents from '@/components/News/TableOfContents'
import { SocialShare } from '@/components/News/SocialShare'
import Link from 'next/link'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((s) => ({
    slug: s.params.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostData(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | Manhattan Plumbing News`,
    description: post.excerpt,
    alternates: {
      canonical: `/news/${slug}`,
      types: {
        'text/markdown': `https://manhattan-plumbing.pages.dev/news/${slug}/index.md`,
      },
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.featuredImage.src],
      type: 'article',
    },
  }
}

export default async function NewsPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPostData(slug)

  if (!post) {
    notFound()
  }

  const { prev, next } = getAdjacentPosts(slug)

  return (
    <main className="min-h-screen bg-white pb-20 dark:bg-slate-900">
      <NewsPostJSONLD post={post} slug={slug} />

      <NewsPostHero post={post} />

      <div className="container mx-auto mt-12 px-4">
        <div className="flex flex-col gap-12 lg:flex-row">
          <article className="lg:w-2/3">
            {/* Mobile TOC */}
            <TableOfContents content={post.content || ''} className="lg:hidden" />

            <NewsPostBody content={post.content || ''} />

            <div className="prose prose-lg dark:prose-invert prose-blue mt-8 max-w-none">
              <p className="border-t pt-8 text-slate-500 italic">
                This article was originally published in our news section. For more tips and
                updates, follow us on social media.
              </p>
            </div>

            <SocialShare title={post.title} url={`https://manhattan-plumbing.pages.dev/news/${slug}`} />

            <div className="mt-12 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/news?tag=${tag}`}
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
