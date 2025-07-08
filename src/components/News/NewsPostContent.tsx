import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Helmet } from 'react-helmet-async'
import SectionHeading from '../UI/SectionHeading'

// Custom components for MDX content
const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-4xl font-bold mb-6 text-gray-900" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-3xl font-bold mb-4 text-gray-800" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-2xl font-semibold mb-3 text-gray-800" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-gray-600 leading-relaxed mb-4" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc list-inside mb-4 text-gray-600" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal list-inside mb-4 text-gray-600" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-4 border-primary-500 pl-4 my-4 italic text-gray-700"
      {...props}
    />
  ),
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img
      className="rounded-lg shadow-md my-6 w-full"
      {...props}
      alt={props.alt || ''}
      loading="lazy"
    />
  ),
}

interface NewsPostContentProps {
  frontmatter: {
    title: string
    seoTitle: string
    date: string
    description: string
    author: {
      name: string
      role: string
      image: {
        src: string
        webp: string
        avif: string
      }
    }
    category: string
    tags: string[]
    image: {
      src: string
      webp: string
      avif: string
    }
  }
  content: React.ReactNode
}

const NewsPostContent: React.FC<NewsPostContentProps> = ({ frontmatter, content }) => {
  const formattedDate = new Date(frontmatter.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <Helmet>
        <title>{frontmatter.seoTitle} | Manhattan Plumbing</title>
        <meta name="description" content={frontmatter.description} />
        <meta property="og:title" content={frontmatter.seoTitle} />
        <meta property="og:description" content={frontmatter.description} />
        {frontmatter.image && <meta property="og:image" content={frontmatter.image.src} />}
      </Helmet>

      <header className="mb-12">
        <SectionHeading
          title={frontmatter.title}
          subtitle={frontmatter.description}
          centered={false}
        />

        <div className="mt-6 flex items-center gap-4">
          <picture>
            <source srcSet={frontmatter.author.image.avif} type="image/avif" />
            <source srcSet={frontmatter.author.image.webp} type="image/webp" />
            <img
              src={frontmatter.author.image.src}
              alt={frontmatter.author.name}
              className="w-12 h-12 rounded-full"
              loading="lazy"
            />
          </picture>
          <div>
            <h3 className="font-medium text-gray-900">{frontmatter.author.name}</h3>
            <p className="text-sm text-gray-500">
              {frontmatter.author.role} · {formattedDate}
            </p>
          </div>
        </div>

        {frontmatter.image && (
          <picture>
            <source srcSet={frontmatter.image.avif} type="image/avif" />
            <source srcSet={frontmatter.image.webp} type="image/webp" />
            <img
              src={frontmatter.image.src}
              alt={frontmatter.title}
              className="mt-8 w-full h-[400px] object-cover rounded-xl"
              loading="lazy"
            />
          </picture>
        )}
      </header>

      <div className="prose prose-lg max-w-none">
        <MDXProvider components={components}>{content}</MDXProvider>
      </div>

      <footer className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex flex-wrap gap-2">
          {frontmatter.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
              #{tag}
            </span>
          ))}
        </div>
      </footer>
    </article>
  )
}

export default NewsPostContent
