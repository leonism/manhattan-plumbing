import React from 'react';
import { Helmet } from 'react-helmet';

interface ArticleSchemaProps {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  publisherName: string;
  publisherLogo: string;
}

interface BreadcrumbItem {
  position: number;
  name: string;
  item: string;
}

interface PostalAddress {
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
}

interface OpeningHoursSpecification {
  dayOfWeek: string | string[];
  opens: string;
  closes: string;
}

interface LocalBusinessSchemaProps {
  name: string;
  description: string;
  url: string;
  telephone: string;
  image: string;
  priceRange?: string;
  address: PostalAddress;
  geo?: {
    latitude: string;
    longitude: string;
  };
  openingHoursSpecification?: OpeningHoursSpecification[];
}

interface JsonLDProps {
  article?: ArticleSchemaProps;
  breadcrumbs?: BreadcrumbItem[];
  localBusiness?: LocalBusinessSchemaProps;
}

const JsonLD: React.FC<JsonLDProps> = ({ article, breadcrumbs }) => {
  const schemas: any[] = [];

  if (article) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": article.headline,
      "description": article.description,
      "image": article.image,
      "datePublished": article.datePublished,
      "dateModified": article.dateModified,
      "author": {
        "@type": "Person",
        "name": article.authorName
      },
      "publisher": {
        "@type": "Organization",
        "name": article.publisherName,
        "logo": {
          "@type": "ImageObject",
          "url": article.publisherLogo
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": window.location.href
      }
    });
  }

  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map(breadcrumb => ({
        "@type": "ListItem",
        "position": breadcrumb.position,
        "name": breadcrumb.name,
        "item": breadcrumb.item
      }))
    });
  }

  return (
    <Helmet>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
        >
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default JsonLD;
