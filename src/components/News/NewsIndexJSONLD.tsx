import React from 'react'
import { Post } from '@/types'

interface NewsIndexJSONLDProps {
  posts: Post[]
  title: string
  description: string
  url: string
}

const NewsIndexJSONLD: React.FC<NewsIndexJSONLDProps> = ({ posts, title, description, url }) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${url}#collection`,
        name: title,
        description: description,
        url: url,
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: posts.length,
          itemListElement: posts.map((post, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
              '@type': 'BlogPosting',
              headline: post.title,
              description: post.excerpt,
              url: `https://manhattan-plumbing.pages.dev/news/${post.slug}`,
              image: post.featuredImage.src,
              datePublished: new Date(post.date).toISOString(),
              author: {
                '@type': 'Person',
                name: post.author.name,
              },
            },
          })),
        },
      },
      {
        '@type': 'Blog',
        '@id': `${url}#blog`,
        name: 'Manhattan Plumbing Blog',
        description: 'Latest news and insights from Manhattan Plumbing.',
        publisher: {
          '@type': 'Organization',
          name: 'Manhattan Plumbing',
          logo: {
            '@type': 'ImageObject',
            url: 'https://manhattan-plumbing.pages.dev/images/manhattan-plumber.png',
          },
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

export default NewsIndexJSONLD
