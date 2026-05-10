import React from 'react'
import { Post } from '@/types'

interface NewsPostJSONLDProps {
  post: Post
  slug: string
}

const NewsPostJSONLD: React.FC<NewsPostJSONLDProps> = ({ post, slug }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'NewsArticle',
          headline: post.title,
          image: [post.featuredImage.src],
          datePublished: new Date(post.date).toISOString(),
          dateModified: post.lastModified
            ? new Date(post.lastModified).toISOString()
            : new Date(post.date).toISOString(),
          author: [
            {
              '@type': 'Person',
              name: post.author.name,
              jobTitle: 'Plumbing Specialist',
            },
          ],
          publisher: {
            '@type': 'Organization',
            name: 'Manhattan Plumbing',
            logo: {
              '@type': 'ImageObject',
              url: 'https://manhattan-plumbing.pages.dev/images/manhattan-plumber.png',
            },
          },
          description: post.excerpt,
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://manhattan-plumbing.pages.dev/news/${slug}`,
          },
        }),
      }}
    />
  )
}

export default NewsPostJSONLD
