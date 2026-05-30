import React from 'react'
import TableOfContents from './TableOfContents'
import NewsletterForm from './NewsletterForm'
import AuthorBio from './AuthorBio'
import { TypographyH3, TypographyP } from '@/components/ui/typography'
import { Post } from '@/types'

interface NewsPostSidebarProps {
  post: Post
}

const NewsPostSidebar: React.FC<NewsPostSidebarProps> = ({ post }) => {
  return (
    <div className="space-y-12">
      {/* Author Bio */}
      <AuthorBio author={post.author} />

      {/* Newsletter CTA */}
      <div className="rounded-2xl bg-blue-600 p-8 text-white">
        <TypographyH3 className="mb-4 text-xl font-bold">Never Miss an Update</TypographyH3>
        <TypographyP className="mb-6 text-blue-100">
          Get the latest plumbing tips and company news delivered straight to your inbox.
        </TypographyP>
        <NewsletterForm />
      </div>
    </div>
  )
}

export default NewsPostSidebar