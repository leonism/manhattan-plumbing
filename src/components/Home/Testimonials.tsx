import React from 'react'
import SectionHeading from '../UI/SectionHeading'
import TestimonialCard from '../UI/TestimonialCard'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Testimonials: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      }
    ]
  }

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
    {
      name: 'David Lee',
      occupation: 'Small Business Owner',
      testimonial:
        'Manhattan Plumbing saved our business from a major flood. Their quick response and efficient work were truly impressive. Professional and reliable!',
      rating: 5,
      imgSrc:
        'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=120',
    },
    {
      name: 'Jessica Brown',
      occupation: 'Apartment Resident',
      testimonial:
        'I had a persistent leaky faucet that other plumbers couldn\'t fix. Manhattan Plumbing diagnosed the problem quickly and fixed it perfectly. So grateful for their expertise!',
      rating: 5,
      imgSrc:
        'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=120',
    },
    {
      name: 'Robert Davis',
      occupation: 'Building Superintendent',
      testimonial:
        'Their team handles all our building\'s plumbing needs, from routine maintenance to complex installations. Always on time, always professional, and their work is top-notch.',
      rating: 5,
      imgSrc:
        'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=120',
    },
  ]

  return (
    <section id="testimonials" className="bg-slate-100 py-20 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Customers Testimonials"
          subtitle="Don't just take our word for it. Here's what our satisfied customers have to say about our services."
          centered
        />

        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-2">
              <TestimonialCard
                name={testimonial.name}
                occupation={testimonial.occupation}
                testimonial={testimonial.testimonial}
                rating={testimonial.rating}
                imgSrc={testimonial.imgSrc}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Testimonials
