import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Helmet } from 'react-helmet-async'
import SectionHeading from '../UI/SectionHeading'
import TagButton from '../UI/TagButton'

// Custom components for MDX content
const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="mb-6 text-4xl font-bold text-gray-900" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="mb-4 text-3xl font-bold text-gray-800" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="mb-3 text-2xl font-semibold text-gray-800" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mb-4 leading-relaxed text-gray-600" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="mb-4 list-inside list-disc text-gray-600" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="mb-4 list-inside list-decimal text-gray-600" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="border-primary-500 my-4 border-l-4 pl-4 text-gray-700 italic"
      {...props}
    />
  ),
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img
      className="my-6 w-full rounded-lg shadow-md"
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
    <article className="mx-auto max-w-4xl px-4 py-12">
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
              className="h-12 w-12 rounded-full"
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
              className="mt-8 h-[400px] w-full rounded-xl object-cover"
              loading="lazy"
            />
          </picture>
        )}
      </header>

      <div className="prose prose-lg max-w-none">
        <MDXProvider components={components}>{content}</MDXProvider>
      </div>

      <footer className="mt-12 border-t border-gray-200 pt-8">
        <div className="flex flex-wrap gap-2">
          {frontmatter.tags.map((tag) => (
            <TagButton key={tag} tag={tag} />
          ))}
        </div>
      </footer>
    </article>
  )
}

export default NewsPostContent
