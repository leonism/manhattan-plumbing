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
  ogType?: string
  ogImageAlt?: string
  ogImageWidth?: string | number
  ogImageHeight?: string | number
  ogLocale?: string
  twitterCard?: string
  twitterSite?: string
  twitterCreator?: string
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: string
  robots?: string
  article?: ArticleSchemaProps // Changed from jsonLd to article
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
  ogType = 'website', // Default to 'website'
  ogImageAlt,
  ogImageWidth,
  ogImageHeight,
  ogLocale,
  twitterCard,
  twitterSite,
  twitterCreator,
  twitterTitle,
  twitterDescription,
  twitterImage,
  robots,
  article, // Changed from jsonLd to article
  localBusiness,
  breadcrumbs,
  review,
  aggregateRating,
  imageSchema,
}) => {
  const keywordsString = Array.isArray(keywords) ? keywords.join(', ') : keywords

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        {keywordsString && <meta name="keywords" content={keywordsString} />}
        {canonical && <link rel="canonical" href={canonical} />}
        <meta property="og:title" content={ogTitle || title} />
        <meta property="og:description" content={ogDescription || description} />
        {ogImage && <meta property="og:image" content={ogImage} />}
        {ogUrl && <meta property="og:url" content={ogUrl} />}
        <meta property="og:type" content={ogType} />
        {ogImage && (
          <>
            {ogImageAlt && <meta property="og:image:alt" content={ogImageAlt} />}
            {ogImageWidth && <meta property="og:image:width" content={String(ogImageWidth)} />}
            {ogImageHeight && <meta property="og:image:height" content={String(ogImageHeight)} />}
          </>
        )}
        {ogLocale && <meta property="og:locale" content={ogLocale} />}
        {article && (
          <>
            {article.datePublished && (
              <meta property="article:published_time" content={article.datePublished} />
            )}
            {article.dateModified && (
              <meta property="article:modified_time" content={article.dateModified} />
            )}
            {article.author && <meta property="article:author" content={article.author.name} />}
            {article.articleSection && (
              <meta property="article:section" content={article.articleSection} />
            )}
            {article.keywords &&
              article.keywords.map((tag: string, index: number) => (
                <meta property="article:tag" content={tag} key={index} />
              ))}
          </>
        )}
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content={twitterCard || (ogImage ? 'summary_large_image' : 'summary')} />
        {twitterSite && <meta name="twitter:site" content={twitterSite} />}
        {twitterCreator && <meta name="twitter:creator" content={twitterCreator} />}
        <meta name="twitter:title" content={twitterTitle || ogTitle || title} />
        <meta name="twitter:description" content={twitterDescription || ogDescription || description} />
        {twitterImage && <meta name="twitter:image" content={twitterImage} />}

        {/* Robots Meta Tag */}
        {robots && <meta name="robots" content={robots} />}
      </Helmet>
      <JsonLD
        article={article} // Pass article directly
        localBusiness={localBusiness}
        breadcrumbs={breadcrumbs}
        review={review}
        aggregateRating={aggregateRating}
        image={imageSchema}
        faqPage={undefined} // Assuming no FAQPage for now
      />
    </>
  )
}

export default SEO
