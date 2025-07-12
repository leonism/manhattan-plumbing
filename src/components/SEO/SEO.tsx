import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string | string[];
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  jsonLd?: object;
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
}) => {
  const keywordsString = Array.isArray(keywords) ? keywords.join(', ') : keywords;

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
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  );
};

export default SEO;
