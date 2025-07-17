import React from 'react'
import { useParams } from 'react-router-dom'
import SEO from '../components/SEO/SEO'
import BackToBlogButton from '../components/News/BackToBlogButton'
import NewsPostHeader from '../components/News/NewsPostHeader'
import NewsPostMeta from '../components/News/NewsPostMeta'
import NewsPostBody from '../components/News/NewsPostBody'
import RelatedArticles from '../components/News/RelatedArticles'
import ShareButtons from '../components/News/ShareButtons'
import SkeletonLoader from '../components/UI/SkeletonLoader'
import ArticleNavigation from '../components/News/ArticleNavigation'
import { useNews } from '../hooks/useNews'
import { Post } from '../types/news'

// Util: slugify
const slugify = (text: string) =>
  text
    .toString()
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')

const NewsPost: React.FC = () => {
  const { slug } = useParams()
  const { allPosts } = useNews()

  const postIndex = allPosts.findIndex((post: Post) => post.slug === slug)
  const post = allPosts[postIndex]
  const previousPost = postIndex > 0 ? allPosts[postIndex - 1] : null
  const nextPost = postIndex < allPosts.length - 1 ? allPosts[postIndex + 1] : null

  if (!post) {
    return (
      <main className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          <section className="text-center">
            <SkeletonLoader type="text" count={1} className="mx-auto mb-4 h-10 w-3/4" />
            <SkeletonLoader type="text" count={2} className="mx-auto mb-8 w-full" />
            <SkeletonLoader type="image" className="mx-auto mb-8 h-64 w-full" />
            <SkeletonLoader type="text" count={5} className="mx-auto w-full" />
          </section>
        </div>
      </main>
    )
  }

  const {
    title,
    excerpt,
    seoTitle,
    tags,
    slug: postSlug,
    featuredImage,
    author,
    date,
    lastModified,
    category,
    body,
  } = post

  return (
    <>
      <SEO
        title={seoTitle || title}
        description={excerpt}
        keywords={tags}
        canonical={`http://localhost:5173/news/${postSlug}`}
        ogTitle={seoTitle || title}
        ogDescription={excerpt}
        ogImage={featuredImage.src}
        ogUrl={`http://localhost:5173/news/${postSlug}`}
        ogType="article"
        ogImageAlt={featuredImage.alt}
        ogImageWidth={featuredImage.width}
        ogImageHeight={featuredImage.height}
        twitterSite="@ManhattanPlumb"
        twitterCreator={author.name ? `@${author.name.replace(/\s/g, '')}` : undefined}
        article={{
          headline: title,
          description: excerpt,
          image: featuredImage.src,
          datePublished: date,
          dateModified: lastModified || date,
          author: { name: author.name },
          publisherName: 'Manhattan Plumbing',
          publisherLogo: 'http://localhost:5173/logo.png',
          articleSection: category,
          keywords: tags,
        }}
      />

      <main className="bg-slate-50 py-20 text-slate-800 sm:py-24 dark:bg-slate-900 dark:text-slate-200">
        <article
          className="container mx-auto px-4 py-8"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header className="mx-auto mb-12 max-w-4xl">
            <BackToBlogButton />
            <NewsPostHeader post={post} />
            <NewsPostMeta post={post} slugify={slugify} />
          </header>

          <section aria-labelledby="article-body">
            <NewsPostBody body={body} />
          </section>

          <section className="mx-auto mt-8 max-w-4xl" aria-labelledby="share-navigation">
            <ShareButtons post={post} />
            <nav aria-label="Article navigation">
              <ArticleNavigation previousPost={previousPost} nextPost={nextPost} />
            </nav>
          </section>

          <aside className="mt-12" aria-label="Related articles">
            <RelatedArticles allPosts={allPosts} currentPostSlug={postSlug} />
          </aside>
        </article>
      </main>
    </>
  )
}

export default NewsPost
