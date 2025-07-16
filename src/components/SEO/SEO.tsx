import React from 'react'
import { Helmet } from 'react-helmet-async'

import JsonLD, {
  ArticleSchemaProps,
  BreadcrumbItem,
  LocalBusinessSchemaProps,
  ImageSchemaProps,
  ReviewSchemaProps,
  AggregateRating,
} from './JsonLD'

interface SEOProps {
  title: string
  description: string
  keywords?: string | string[]
  canonical?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogUrl?: string
  jsonLd?: ArticleSchemaProps
  localBusiness?: LocalBusinessSchemaProps
  breadcrumbs?: BreadcrumbItem[]
  review?: ReviewSchemaProps
  aggregateRating?: AggregateRating
  imageSchema?: ImageSchemaProps
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  jsonLd,
  localBusiness,
  breadcrumbs,
  review,
  aggregateRating,
  imageSchema,
}) => {
  const keywordsString = Array.isArray(keywords) ? keywords.join(', ') : keywords

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywordsString && <meta name="keywords" content={keywordsString} />}
      {canonical && <link rel="canonical" href={canonical} />}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      {ogUrl && <meta property="og:url" content={ogUrl} />}
      <meta property="og:type" content="website" />
      <JsonLD
        article={jsonLd as ArticleSchemaProps}
        localBusiness={localBusiness}
        breadcrumbs={breadcrumbs}
        review={review}
        aggregateRating={aggregateRating}
        image={imageSchema}
        faqPage={undefined} // Assuming no FAQPage for now
      />
    </Helmet>
  )
}

export default SEO
