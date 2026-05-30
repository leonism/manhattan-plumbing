import React from 'react'
import { Star } from 'lucide-react'
import { TypographyH4, TypographyP } from '@/components/ui/typography'

interface TestimonialCardProps {
  name: string
  occupation: string
  testimonial: string
  rating: number
  imgSrc: string
  className?: string
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  occupation,
  testimonial,
  rating,
  imgSrc,
  className = '',
}) => {
  return (
    <div
      className={`flex h-full max-h-[400px] min-h-[300px] max-w-[350px] min-w-[280px] flex-col rounded-lg bg-white p-6 shadow-md dark:bg-slate-800 ${className}`}
    >
      {/* Customer Info */}
      <div className="mt-2 flex items-center">
        <img
          src={imgSrc}
          alt={name}
          className="mr-4 h-12 w-12 rounded-full object-cover"
          loading="lazy"
        />
        <div>
          <TypographyH4 className="font-bold text-slate-800 dark:text-white">{name}</TypographyH4>
          <TypographyP className="text-sm text-slate-500 dark:text-slate-400">{occupation}</TypographyP>
        </div>
      </div>
      {/* Stars */}
      <div className="mt-8 flex text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={20}
            className={i < rating ? 'fill-current' : 'stroke-current opacity-40'}
          />
        ))}
      </div>
      {/* Testimonial Text */}
      <TypographyP className="mt-8 grow text-slate-600 dark:text-slate-300">"{testimonial}"</TypographyP>
    </div>
  )
}

export default TestimonialCard
