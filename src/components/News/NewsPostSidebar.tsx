import React from 'react'
import Image from 'next/image'
import { Post } from '@/types'
import TableOfContents from './TableOfContents'
import NewsletterForm from './NewsletterForm'

interface NewsPostSidebarProps {
  post: Post
}

const NewsPostSidebar: React.FC<NewsPostSidebarProps> = ({ post }) => {
  return (
    <div className="space-y-12">

      {/* Author Bio */}
      <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-800/50">
        <h3 className="mb-6 text-xl font-bold dark:text-white">About the Author</h3>
        <div className="mb-4 flex items-center gap-4">
          <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-blue-600">
            <Image
              src={post.author.image.src}
              alt={post.author.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="text-lg font-bold dark:text-white">{post.author.name}</div>
            <div className="text-sm text-blue-600 dark:text-blue-400">
              Plumbing Specialist
            </div>
          </div>
        </div>
        <p className="text-slate-600 dark:text-slate-400">
          With over 15 years of experience in Manhattan's unique plumbing landscape,{' '}
          {post.author.name.split(' ')[0]} brings expert knowledge to every article.
        </p>
      </div>

      {/* Newsletter CTA */}
      <div className="rounded-2xl bg-blue-600 p-8 text-white">
        <h3 className="mb-4 text-xl font-bold">Never Miss an Update</h3>
        <p className="mb-6 text-blue-100">
          Get the latest plumbing tips and company news delivered straight to your inbox.
        </p>
        <NewsletterForm />
      </div>
    </div>
  )
}

export default NewsPostSidebar
