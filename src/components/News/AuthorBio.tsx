// components/AuthorBio.tsx
import React from 'react'
import Image from 'next/image'
import { Post } from '@/types'
import { TypographyH3, TypographyP } from '@/components/ui/typography'

interface AuthorBioProps {
  author: Post['author']
}

const AuthorBio: React.FC<AuthorBioProps> = ({ author }) => {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-800/50">
      <TypographyH3 className="mb-6 text-xl font-bold dark:text-white">About the Author</TypographyH3>
      <div className="mb-4 flex items-center gap-4">
        <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-blue-600">
          <Image
            src={author.image.src}
            alt={author.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <div className="text-lg font-bold dark:text-white">{author.name}</div>
          <div className="text-sm text-blue-600 dark:text-blue-400">Plumbing Specialist</div>
        </div>
      </div>
      <TypographyP className="text-slate-600 dark:text-slate-400">
        With over 15 years of experience in Manhattan's unique plumbing landscape,{' '}
        {author.name.split(' ')[0]} brings expert knowledge to every article.
      </TypographyP>
    </div>
  )
}

export default AuthorBio