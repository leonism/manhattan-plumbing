import React from 'react'
import { useParams, Link } from 'react-router-dom'
import SEO from '../components/SEO/SEO'
import { format } from 'date-fns'
import { Calendar, Clock, Folder, Tag } from 'lucide-react';
import BackToBlogButton from '../components/News/BackToBlogButton';
import TagList from '../components/News/TagList';
import { MDXProvider } from '@mdx-js/react'

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

const components = {
  // You can add custom MDX overrides here
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
          <header className="mx-auto mb-12 max-w-4xl text-center">
            <h1 className="mb-6 text-4xl leading-tight font-extrabold md:text-5xl">{post.title}</h1>
            <div className="relative mb-8 overflow-hidden rounded-lg shadow-lg">
              <picture>
                <source srcSet={post.featuredImage.avif} type="image/avif" />
                <source srcSet={post.featuredImage.webp} type="image/webp" />
                <img
                  src={post.featuredImage.src}
                  alt={post.featuredImage.alt}
                  className="h-full max-h-96 w-full object-cover"
                  loading="lazy"
                />
              </picture>
              {post.featuredImage.caption && (
                <div className="absolute right-0 bottom-0 left-0 bg-black/60 p-4 text-sm text-white">
                  {post.featuredImage.caption}
                </div>
              )}
            </div>
            <TagList tags={post.tags} slugify={slugify} />

            <div className="mb-6 flex flex-wrap items-center justify-center gap-4 text-slate-600 dark:text-slate-400">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                <time dateTime={post.date}>{format(new Date(post.date), 'MMMM d, yyyy')}</time>
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                {post.readingTime}
              </div>
              <div className="flex items-center">
                <Folder className="mr-2 h-4 w-4" />
                <Link
                  to={`/news/category/${slugify(post.category)}`}
                  className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {post.category}
                </Link>
              </div>
            </div>
            <div className="mb-8 flex items-center justify-center gap-4">
              <picture>
                <source srcSet={post.author.image.avif} type="image/avif" />
                <source srcSet={post.author.image.webp} type="image/webp" />
                <img
                  src={post.author.image.src}
                  alt={post.author.name}
                  className="h-12 w-12 rounded-full border-2 border-blue-400"
                  loading="lazy"
                />
              </picture>
              <div>
                <div className="font-medium text-slate-900 dark:text-white">{post.author.name}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">{post.author.role}</div>
              </div>
            </div>
          </header>

          <div className="prose prose-lg prose-slate dark:prose-invert prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl prose-h1:font-extrabold prose-h2:font-bold prose-h3:font-semibold prose-h4:font-medium prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline prose-a:hover:underline prose-img:rounded-lg prose-img:shadow-md prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-4 prose-blockquote:italic prose-p:leading-relaxed prose-li:leading-relaxed prose-li:marker:text-blue-500 prose-code:bg-slate-100 dark:prose-code:bg-slate-800 prose-code:px-1 prose-code:rounded-sm prose-strong:font-bold prose-table:w-full prose-table:table-auto prose-table:border-collapse prose-table:rounded-lg prose-table:overflow-hidden prose-th:bg-slate-200 dark:prose-th:bg-slate-700 prose-th:p-3 prose-th:text-left prose-th:font-semibold prose-td:p-3 prose-td:border-b prose-td:border-slate-200 dark:prose-td:border-slate-700 prose-ul:list-disc prose-ul:pl-5 prose-ol:list-decimal prose-ol:pl-5 mx-auto max-w-4xl">
            {typeof post.body === 'string' ? (
              <div dangerouslySetInnerHTML={{ __html: post.body }} />
            ) : (
              <MDXProvider components={components}>{React.createElement(post.body)}</MDXProvider>
            )}
          </div>

          <div className="mx-auto mt-8 max-w-4xl">
            <ShareButtons post={post} />
          </div>

          <ArticleNavigation previousPost={previousPost} nextPost={nextPost} />

          <BackToBlogButton />

          {allPosts.filter((p: Post) => p.slug !== post.slug).length > 0 && (
            <div className="mx-auto mt-16 max-w-4xl">
              <h2 className="mb-8 text-center text-3xl font-bold">More Articles</h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {allPosts
                  .filter((p: Post) => p.slug !== post.slug)
                  .slice(0, 3)
                  .map((relatedPost: Post) => (
                    <div
                      key={relatedPost.slug}
                      className="transform overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-300 hover:scale-105 dark:bg-slate-800"
                    >
                      <Link to={`/news/${relatedPost.slug}`}>
                        <picture>
                          <source srcSet={relatedPost.featuredImage.avif} type="image/avif" />
                          <source srcSet={relatedPost.featuredImage.webp} type="image/webp" />
                          <img
                            src={relatedPost.featuredImage.src}
                            alt={relatedPost.featuredImage.alt}
                            className="h-48 w-full object-cover"
                            loading="lazy"
                          />
                        </picture>
                      </Link>
                      <div className="p-4">
                        <h3 className="mb-2 text-lg font-bold">
                          <Link
                            to={`/news/${relatedPost.slug}`}
                            className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                          >
                            {relatedPost.title}
                          </Link>
                        </h3>
                        <p className="line-clamp-2 text-sm text-slate-600 dark:text-slate-400">
                          {relatedPost.excerpt}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </article>
      </main>
    </>
  )
}

export default NewsPost
