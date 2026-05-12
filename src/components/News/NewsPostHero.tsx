import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, ChevronLeft } from 'lucide-react'
import { format } from 'date-fns'
import { Post } from '@/types'

import { slugify } from '@/utils/slugify'

interface NewsPostHeroProps {
  post: Post
}

const NewsPostHero: React.FC<NewsPostHeroProps> = ({ post }) => {
  return (
    <div className="relative h-[60vh] min-h-[400px] w-full bg-slate-900">
      <Image
        src={post.featuredImage.src}
        alt={post.featuredImage.alt}
        fill
        className="object-cover opacity-60"
        priority
      />
      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/40 to-slate-900" />

      <div className="absolute bottom-0 left-0 w-full pt-24 pb-8 md:pb-12">
        <div className="container mx-auto px-4">
          <Link
            href="/news"
            className="mb-6 inline-flex items-center text-sm font-medium text-blue-400 transition-colors hover:text-blue-300 md:mb-8 md:text-base"
          >
            <ChevronLeft size={18} className="mr-1 md:size-5" />
            <span>Back to News</span>
          </Link>
          <div className="max-w-4xl">
            <h1 className="mb-6 text-4xl leading-tight font-bold text-white md:text-5xl lg:text-6xl">
              {post.title}
            </h1>
            <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-blue-200">
              <Link 
                href={`/news?category=${slugify(post.category)}`}
                className="rounded-full bg-blue-600 px-3 py-1 font-semibold text-white transition-colors hover:bg-blue-700"
              >
                {post.category}
              </Link>
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                {format(new Date(post.date), 'MMMM dd, yyyy')}
              </div>
              <div className="flex items-center">
                <User size={16} className="mr-2" />
                {post.author.name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsPostHero
