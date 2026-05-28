import React from 'react'
import SectionHeading from '@/components/ui/SectionHeading'
import TestimonialCard from '@/components/ui/TestimonialCard'

import { testimonials } from '@/lib/testimonials'

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="bg-slate-100 py-20 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Customers Testimonials"
          subtitle="Don't just take our word for it. Here's what our satisfied customers have to say about our services."
          centered
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              occupation={testimonial.occupation}
              testimonial={testimonial.testimonial}
              rating={testimonial.rating}
              imgSrc={testimonial.imgSrc}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
