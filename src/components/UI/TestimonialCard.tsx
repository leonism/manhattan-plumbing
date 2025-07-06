import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  occupation: string;
  testimonial: string;
  rating: number;
  imgSrc: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  occupation,
  testimonial,
  rating,
  imgSrc,
}) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 flex flex-col h-full">
      {/* Stars */}
      <div className="flex text-yellow-400 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={20}
            className={i < rating ? 'fill-current' : 'stroke-current opacity-40'}
          />
        ))}
      </div>
      
      {/* Testimonial Text */}
      <p className="text-slate-600 dark:text-slate-300 mb-6 flex-grow">
        "{testimonial}"
      </p>
      
      {/* Customer Info */}
      <div className="flex items-center mt-2">
        <img
          src={imgSrc}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-bold text-slate-800 dark:text-white">{name}</h4>
          <p className="text-sm text-slate-500 dark:text-slate-400">{occupation}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;