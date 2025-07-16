import React from 'react'
import { useParams } from 'react-router-dom'
import NewsOgMeta from '../components/News/NewsOgMeta'
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

  const breadcrumbs = [
    { position: 1, name: 'Home', item: 'https://manhattan-plumbing.pages.dev/' },
    { position: 2, name: 'News', item: 'https://manhattan-plumbing.pages.dev/news' },
    {
      position: 3,
      name: post.category,
      item: `https://manhattan-plumbing.pages.dev/news/category/${slugify(post.category)}`,
    },
    {
      position: 4,
      name: post.title,
      item: `https://manhattan-plumbing.pages.dev/news/${post.slug}`,
    },
  ]

  const localBusinessData = {
    name: 'Manhattan Plumbing',
    url: 'https://manhattan-plumbing.pages.dev/',
    logo: 'https://manhattan-plumbing.pages.dev/manhattan-plumber.png',
    telephone: '+1-212-555-1234',
    address: {
      streetAddress: '123 Main St',
      addressLocality: 'New York',
      addressRegion: 'NY',
      postalCode: '10001',
      addressCountry: 'US',
    },
  }

  const reviewData = {
    itemReviewed: { name: post.title },
    reviewRating: { ratingValue: '5', bestRating: '5', worstRating: '1' },
    author: { name: 'Manhattan Plumbing' },
    datePublished: post.date,
    reviewBody: post.excerpt,
  }

  const aggregateRatingData = {
    ratingValue: '4.5',
    reviewCount: '100',
  }

  const imageSchemaData = {
    contentUrl: post.featuredImage.src,
    creator: {
      type: 'Person',
      name: post.author.name,
    },
    creditText: post.featuredImage.caption,
  }

  return (
    <>
      {post && (
        <NewsOgMeta
          post={post}
          breadcrumbs={breadcrumbs}
          localBusiness={localBusinessData}
          review={reviewData}
          aggregateRating={aggregateRatingData}
          imageSchema={imageSchemaData}
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
