import React from 'react'
import { Star } from 'lucide-react'

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
    <div className={`flex h-full flex-col rounded-lg bg-white p-6 shadow-md dark:bg-slate-800 min-h-[300px] max-h-[400px] min-w-[280px] max-w-[350px] ${className}`}>
      {/* Stars */}
      <div className="mb-4 flex text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={20}
            className={i < rating ? 'fill-current' : 'stroke-current opacity-40'}
          />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="mb-6 grow text-slate-600 dark:text-slate-300">"{testimonial}"</p>

      {/* Customer Info */}
      <div className="mt-2 flex items-center">
        <img
          src={imgSrc}
          alt={name}
          className="mr-4 h-12 w-12 rounded-full object-cover"
          loading="lazy"
        />
        <div>
          <h4 className="font-bold text-slate-800 dark:text-white">{name}</h4>
          <p className="text-sm text-slate-500 dark:text-slate-400">{occupation}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
