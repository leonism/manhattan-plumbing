import React from 'react'
import { Post } from '@/types'

interface NewsPostJSONLDProps {
  post: Post
  slug: string
}

const NewsPostJSONLD: React.FC<NewsPostJSONLDProps> = ({ post, slug }) => {
  const publishDate = new Date(post.date).toISOString()
  const modifiedDate = post.lastModified
    ? new Date(post.lastModified).toISOString()
    : publishDate

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'NewsArticle',
        '@id': `https://manhattan-plumbing.pages.dev/news/${slug}#article`,
        headline: post.title,
        description: post.excerpt,
        image: {
          '@type': 'ImageObject',
          url: post.featuredImage.src,
          width: 1200,
          height: 630,
        },
        datePublished: publishDate,
        dateModified: modifiedDate,
        author: {
          '@type': 'Person',
          name: post.author.name,
          jobTitle: 'Plumbing Specialist',
          url: 'https://manhattan-plumbing.pages.dev/about',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Manhattan Plumbing',
          logo: {
            '@type': 'ImageObject',
            url: 'https://manhattan-plumbing.pages.dev/images/manhattan-plumber.png',
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://manhattan-plumbing.pages.dev/news/${slug}`,
        },
        articleSection: post.category,
        keywords: post.tags.join(', '),
      },
      {
        '@type': 'BlogPosting',
        '@id': `https://manhattan-plumbing.pages.dev/news/${slug}#blogposting`,
        headline: post.title,
        description: post.excerpt,
        image: post.featuredImage.src,
        datePublished: publishDate,
        dateModified: modifiedDate,
        author: {
          '@type': 'Person',
          name: post.author.name,
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export default NewsPostJSONLD
