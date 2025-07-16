import React from 'react'
import { useParams } from 'react-router-dom'
import SEO from '../components/SEO/SEO'
import BackToBlogButton from '../components/News/BackToBlogButton'
import NewsPostHeader from '../components/News/NewsPostHeader'
import NewsPostMeta from '../components/News/NewsPostMeta'
import NewsPostBody from '../components/News/NewsPostBody'
import RelatedArticles from '../components/News/RelatedArticles'

import ShareButtons from '../components/News/ShareButtons'
import { useNews } from '../hooks/useNews'
import { Post } from '../types/news'
import SkeletonLoader from '../components/UI/SkeletonLoader'
import ArticleNavigation from '../components/News/ArticleNavigation'

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
          <div className="text-center">
            <SkeletonLoader type="text" count={1} className="mx-auto mb-4 h-10 w-3/4" />
            <SkeletonLoader type="text" count={2} className="mx-auto mb-8 w-full" />
            <SkeletonLoader type="image" className="mx-auto mb-8 h-64 w-full" />
            <SkeletonLoader type="text" count={5} className="mx-auto w-full" />
          </div>
        </div>
      </main>
    )
  }

  return (
    <>
      {post && (
        <SEO
          key={post.slug}
          title={`${post.title} | Manhattan Plumbing`}
          description={post.excerpt}
          keywords={post.tags}
          canonical={`https://manhattan-plumbing.pages.dev/news/${post.slug}`}
          ogTitle={post.title}
          ogDescription={post.excerpt}
          ogImage={post.featuredImage.src}
          ogUrl={`https://manhattan-plumbing.pages.dev/news/${post.slug}`}
          jsonLd={{
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.seoTitle || post.title,
            description: post.excerpt,
            image: [post.featuredImage.src],
            datePublished: post.date,
            dateModified: post.lastModified || post.date,
            author: {
              '@type': 'Person',
              name: post.author.name,
            },
            publisher: {
              '@type': 'Organization',
              name: 'Manhattan Plumbing',
              logo: {
                '@type': 'ImageObject',
                url: 'https://manhattan-plumbing.pages.dev/manhattan-plumber.png',
              },
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://manhattan-plumbing.pages.dev/news/${post.slug}`,
            },
            ...(post.jsonLd || {}),
          }}
        />
      )}

      <main className="bg-slate-50 py-20 text-slate-800 sm:py-24 dark:bg-slate-900 dark:text-slate-200">
        <article className="container mx-auto px-4 py-8">
          <header className="mx-auto mb-12 max-w-4xl">
            <BackToBlogButton />
            <NewsPostHeader post={post} />
            <NewsPostMeta post={post} slugify={slugify} />
          </header>
          <NewsPostBody body={post.body} />
          <div className="mx-auto mt-8 max-w-4xl">
            <ShareButtons post={post} />
            <ArticleNavigation previousPost={previousPost} nextPost={nextPost} />
          </div>
          <RelatedArticles allPosts={allPosts} currentPostSlug={post.slug} />
        </article>
      </main>
    </>
  )
}

export default NewsPost
