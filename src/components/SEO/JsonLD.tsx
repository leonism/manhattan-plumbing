import React from 'react';
import { Helmet } from 'react-helmet';

interface JsonLdArticleProps {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  publisherName: string;
  publisherLogo: string;
}

const JsonLD: React.FC<JsonLdArticleProps> = ({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  authorName,
  publisherName,
  publisherLogo,
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "image": image,
    "datePublished": datePublished,
    "dateModified": dateModified,
    "author": {
      "@type": "Person",
      "name": authorName
    },
    "publisher": {
      "@type": "Organization",
      "name": publisherName,
      "logo": {
        "@type": "ImageObject",
        "url": publisherLogo
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": window.location.href
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default JsonLD;
