import React from 'react';
import SEO from '../SEO/SEO';
import { Post } from '../../types/news';

interface NewsOgMetaProps {
  post: Post;
  breadcrumbs?: { position: number; name: string; item: string; }[];
  localBusiness?: {
    name: string;
    url: string;
    logo: string;
    telephone?: string;
    address?: {
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
      addressCountry: string;
    };
  };
  review?: {
    itemReviewed: { name: string };
    reviewRating: { ratingValue: string; bestRating: string; worstRating: string };
    author: { name: string };
    datePublished: string;
    reviewBody: string;
  };
  aggregateRating?: {
    ratingValue: string;
    reviewCount: string;
  };
  imageSchema?: {
    contentUrl: string;
    creator?: { type: string; name: string; };
    creditText?: string;
    copyrightNotice?: string;
    license?: string;
  };
}

const NewsOgMeta: React.FC<NewsOgMetaProps> = ({ post, breadcrumbs, localBusiness, review, aggregateRating, imageSchema }) => {
  return (
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
      breadcrumbs={breadcrumbs}
      localBusiness={localBusiness}
      review={review}
      aggregateRating={aggregateRating}
      imageSchema={imageSchema}
    />
  );
};

export default NewsOgMeta;
