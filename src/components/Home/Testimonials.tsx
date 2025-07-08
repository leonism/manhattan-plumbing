import React from 'react'
import SectionHeading from '../UI/SectionHeading'
import TestimonialCard from '../UI/TestimonialCard'

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      occupation: 'Homeowner',
      testimonial:
        'Manhattan Plumbing responded quickly to my emergency call. The plumber was professional, knowledgeable, and fixed the issue in no time. Highly recommend their services!',
      rating: 5,
      imgSrc:
        'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=120',
    },
    {
      name: 'Michael Chen',
      occupation: 'Property Manager',
      testimonial:
        "We've been using Manhattan Plumbing for all our properties for over 5 years. Their team is reliable, efficient, and always provides exceptional service at fair prices.",
      rating: 5,
      imgSrc:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=120',
    },
    {
      name: 'Emma Rodriguez',
      occupation: 'Restaurant Owner',
      testimonial:
        'When our restaurant faced a major plumbing issue, Manhattan Plumbing came to our rescue. They worked after hours to minimize disruption to our business. True professionals!',
      rating: 5,
      imgSrc:
        'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=120',
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-slate-100 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Customers Testimonials"
          subtitle="Don't just take our word for it. Here's what our satisfied customers have to say about our services."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
