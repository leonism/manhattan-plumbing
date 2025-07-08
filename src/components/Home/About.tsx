import React from 'react'
import SectionHeading from '../UI/SectionHeading'
import Button from '../UI/Button'
import Paragraph from '../About/Paragraph'
import BenefitsList from '../About/BenefitsList'
import AboutImage from '../About/AboutImage'
import { Phone } from 'lucide-react'

const benefits = [
  'Licensed and insured professionals',
  'Over 30 years of industry experience',
  'Transparent, upfront pricing',
  'Satisfaction guaranteed on all services',
  'Latest tools and techniques',
  '24/7 emergency service available',
]

const About: React.FC = () => (
  <section id="about" aria-labelledby="about-heading" className="py-10">
    <div className="container px-4 mx-auto md:px-6">
      <div className="grid grid-cols-1 gap-10 items-center lg:grid-cols-2">
        <article>
          <SectionHeading
            title="About Manhattan Plumbing"
            subtitle="Providing quality plumbing services to Manhattan residents and businesses since 1985."
          />
          <Paragraph>
            At Manhattan Plumbing, we take pride in delivering exceptional plumbing services with
            integrity and professionalism. Our team of highly skilled plumbers is committed to
            solving your plumbing problems efficiently and effectively.
          </Paragraph>
          <Paragraph>
            Whether you're facing a plumbing emergency, need routine maintenance, or are planning a
            major renovation, we have the expertise and resources to handle projects of any size. We
            use only the highest quality materials and the latest techniques to ensure lasting
            results.
          </Paragraph>
          <BenefitsList benefits={benefits} />
          <Button href="/#contact">
            <Phone className="mr-2" size={18} />
            Contact Us Today
          </Button>
        </article>
        <AboutImage />
      </div>
    </div>
  </section>
)

export default About
