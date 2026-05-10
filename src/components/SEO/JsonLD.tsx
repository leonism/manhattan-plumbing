import React from 'react'

export interface ArticleSchemaProps {
  headline: string
  description: string
  image: string
  datePublished: string
  dateModified: string
  author: {
    name: string
  }
  publisherName: string
  publisherLogo: string
  articleSection?: string
  keywords?: string[]
}

export interface BreadcrumbItem {
  position: number
  name: string
  item: string
}

export interface PostalAddress {
  streetAddress: string
  addressLocality: string
  addressRegion: string
  postalCode: string
  addressCountry: string
}

export interface OpeningHoursSpecification {
  dayOfWeek: string | string[]
  opens: string
  closes: string
}

export interface LocalBusinessSchemaProps {
  name: string
  description: string
  url: string
  telephone: string
  image: string
  priceRange?: string
  address: PostalAddress
  geo?: {
    latitude: string
    longitude: string
  }
  openingHoursSpecification?: OpeningHoursSpecification[]
}

export interface ImageSchemaProps {
  contentUrl: string
  creator?: {
    type: string
    name: string
  }
  creditText?: string
  copyrightNotice?: string
  license?: string
}

export interface Review {
  author: string
  datePublished: string
  reviewBody: string
  reviewRating: {
    bestRating: string
    ratingValue: string
    worstRating: string
  }
}

export interface AggregateRating {
  ratingValue: string
  reviewCount: string
}

export interface ReviewSchemaProps {
  itemReviewed: {
    name: string
  }
  review?: Review
  aggregateRating?: AggregateRating
}

export interface Question {
  name: string
  acceptedAnswer: {
    text: string
  }
}

export interface FAQPageSchemaProps {
  mainEntity: Question[]
}

export interface JsonLDProps {
  article?: ArticleSchemaProps
  breadcrumbs?: BreadcrumbItem[]
  localBusiness?: LocalBusinessSchemaProps
  image?: ImageSchemaProps
  review?: ReviewSchemaProps
  faqPage?: FAQPageSchemaProps
}
type JsonSchema = Record<string, unknown>

const JsonLD: React.FC<JsonLDProps> = ({
  article,
  breadcrumbs,
  localBusiness,
  image,
  review,
  faqPage,
}) => {
  const schemas: JsonSchema[] = []

  if (article) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.headline,
      description: article.description,
      image: article.image,
      datePublished: article.datePublished,
      dateModified: article.dateModified,
      author: {
        '@type': 'Person',
        name: article.author.name,
      },
      publisher: {
        '@type': 'Organization',
        name: article.publisherName,
        logo: {
          '@type': 'ImageObject',
          url: article.publisherLogo,
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': window.location.href,
      },
    })
  }

  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((breadcrumb) => ({
        '@type': 'ListItem',
        position: breadcrumb.position,
        name: breadcrumb.name,
        item: breadcrumb.item,
      })),
    })
  }

  if (localBusiness) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: localBusiness.name,
      description: localBusiness.description,
      url: localBusiness.url,
      telephone: localBusiness.telephone,
      image: localBusiness.image,
      address: {
        '@type': 'PostalAddress',
        streetAddress: localBusiness.address.streetAddress,
        addressLocality: localBusiness.address.addressLocality,
        addressRegion: localBusiness.address.addressRegion,
        postalCode: localBusiness.address.postalCode,
        addressCountry: localBusiness.address.addressCountry,
      },
      ...(localBusiness.geo && {
        geo: {
          '@type': 'GeoCoordinates',
          latitude: localBusiness.geo.latitude,
          longitude: localBusiness.geo.longitude,
        },
      }),
      ...(localBusiness.priceRange && { priceRange: localBusiness.priceRange }),
      ...(localBusiness.openingHoursSpecification && {
        openingHoursSpecification: localBusiness.openingHoursSpecification.map((hours) => ({
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: hours.dayOfWeek,
          opens: hours.opens,
          closes: hours.closes,
        })),
      }),
    })
  }

  if (image) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'ImageObject',
      contentUrl: image.contentUrl,
      ...(image.creator && {
        creator: {
          '@type': image.creator.type,
          name: image.creator.name,
        },
      }),
      ...(image.creditText && { creditText: image.creditText }),
      ...(image.copyrightNotice && { copyrightNotice: image.copyrightNotice }),
      ...(image.license && { license: image.license }),
    })
  }

  if (review) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Review',
      itemReviewed: {
        '@type': 'Thing',
        name: review.itemReviewed.name,
      },
      ...(review.review && {
        reviewRating: {
          '@type': 'Rating',
          ratingValue: review.review.reviewRating.ratingValue,
          bestRating: review.review.reviewRating.bestRating,
          worstRating: review.review.reviewRating.worstRating,
        },
        author: {
          '@type': 'Person',
          name: review.review.author,
        },
        datePublished: review.review.datePublished,
        reviewBody: review.review.reviewBody,
      }),
      ...(review.aggregateRating && {
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: review.aggregateRating.ratingValue,
          reviewCount: review.aggregateRating.reviewCount,
        },
      }),
    })
  }

  if (faqPage) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqPage.mainEntity.map((item) => ({
        '@type': 'Question',
        name: item.name,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.acceptedAnswer.text,
        },
      })),
    })
  }

  return (
    <>
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </>
  )
}

export default JsonLD
