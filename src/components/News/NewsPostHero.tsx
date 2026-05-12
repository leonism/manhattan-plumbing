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

      <div className="absolute bottom-0 left-0 w-full pt-32 pb-8 md:pb-12">
        <div className="container mx-auto px-4">
          <Link
            href="/news"
            className="group inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition-all hover:bg-white/20 md:px-3 md:py-1.5 md:text-xs"
          >
            <ChevronLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Back to News
          </Link>
          
          <h1 className="mt-6 text-3xl font-extrabold text-white md:text-5xl lg:text-6xl lg:leading-tight">
            {post.title}
          </h1>
          
          <div className="mt-6 flex flex-wrap items-center gap-4 text-[11px] text-white/80 md:mt-8 md:gap-6 md:text-base">
            <Link 
              href={`/news/category/${slugify(post.category)}`}
              className="rounded-full bg-blue-600/20 px-3 py-1 text-[9px] font-semibold text-blue-300 backdrop-blur-sm transition-colors hover:bg-blue-600/30 md:px-4 md:py-1.5 md:text-sm"
            >
              {post.category}
            </Link>
            <div className="flex items-center">
              <Calendar className="mr-1 h-3 w-3 md:mr-2 md:h-4 md:w-4" />
              {format(new Date(post.date), 'MMMM dd, yyyy')}
            </div>
            <div className="flex items-center">
              <User className="mr-1 h-3 w-3 md:mr-2 md:h-4 md:w-4" />
              {post.author.name}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsPostHero
