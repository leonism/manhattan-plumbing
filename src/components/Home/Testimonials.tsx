import React from 'react'
import SectionHeading from '../UI/SectionHeading'
import TestimonialCard from '../UI/TestimonialCard'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

interface CustomDotProps {
  index: number;
  className?: string;
}

const NextArrow = (props: ArrowProps) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} custom-arrow next-arrow absolute top-1/2 -translate-y-1/2 z-10 bg-transparent border border-blue-600 text-blue-600 rounded-full p-4 shadow-md hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
      style={{ ...style, display: "flex", alignItems: "center", justifyContent: "center", right: "5px" }}
      onClick={onClick}
      aria-label="Next testimonial"
    >
      <ChevronRight size={32} className="text-blue-600" />
    </button>
  );
};

const PrevArrow = (props: ArrowProps) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} custom-arrow prev-arrow absolute top-1/2 -translate-y-1/2 z-10 bg-transparent border border-blue-600 text-blue-600 rounded-full p-4 shadow-md hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
      style={{ ...style, display: "flex", alignItems: "center", justifyContent: "center", left: "5px" }}
      onClick={onClick}
      aria-label="Previous testimonial"
    >
      <ChevronLeft size={32} className="text-blue-600" />
    </button>
  );
};

const CustomDot = (props: CustomDotProps) => {
  const { index, className } = props
  const isActive = className && className.includes('slick-active')
  return (
    <li key={index} className={className}>
      <button
        aria-label={`Go to slide ${index + 1}`}
        className={`w-4 h-4 rounded-full mx-1 transition-all duration-300 ${isActive ? 'bg-blue-600 w-6' : 'bg-slate-300 hover:bg-slate-400'}`}
      >
        <span className="sr-only">{`Go to slide ${index + 1}`}</span>
      </button>
    </li>
  )
}

const Testimonials: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: '60px',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots: React.ReactNode[]) => (
      <div style={{ position: 'absolute', bottom: '-30px', width: '100%' }}>
        <ul style={{ margin: '0px', display: 'flex', justifyContent: 'center' }}> {dots} </ul>
      </div>
    ),
    customPaging: (i: number) => <CustomDot index={i} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerPadding: '20px',
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          centerPadding: '0px',
        },
      },
    ],
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
        "I had a persistent leaky faucet that other plumbers couldn't fix. Manhattan Plumbing diagnosed the problem quickly and fixed it perfectly. So grateful for their expertise!",
      rating: 5,
      imgSrc:
        'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=120',
    },
    {
      name: 'Robert Davis',
      occupation: 'Building Superintendent',
      testimonial:
        "Their team handles all our building's plumbing needs, from routine maintenance to complex installations. Always on time, always professional, and their work is top-notch.",
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
            <div key={index}>
              <TestimonialCard
                name={testimonial.name}
                occupation={testimonial.occupation}
                testimonial={testimonial.testimonial}
                rating={testimonial.rating}
                imgSrc={testimonial.imgSrc}
                className="px-4"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Testimonials
