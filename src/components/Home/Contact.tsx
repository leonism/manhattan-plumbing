import React from 'react'
import SectionHeading from '../UI/SectionHeading'
import ContactForm from '../UI/ContactForm'
import Address from '../Contact/Address'
import PhoneComponent from '../Contact/Phone'
import Email from '../Contact/Email'
import Hours from '../Contact/Hours'
import EmergencyNotice from '../Contact/EmergencyNotice'

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="bg-white py-12 lg:py-20 dark:bg-slate-900"
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Heading */}
        <header className="mb-8 text-center lg:mb-12" id="contact-heading">
          <SectionHeading
            title="Contact Us"
            subtitle="Have a plumbing issue or need a quote? Get in touch with our team today."
            centered
          />
        </header>

        {/* Main Content */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_400px] lg:gap-12">
          {/* Left Column: Contact Information */}
          <article aria-labelledby="contact-info">
            <h3
              id="contact-info"
              className="mb-6 text-xl font-bold text-slate-800 lg:text-2xl dark:text-white"
            >
              Get In Touch
            </h3>

            <p className="mb-8 text-base text-slate-600 lg:text-lg dark:text-slate-300">
              Our friendly customer service team is standing by to answer your questions and
              schedule your appointment. Contact us through the form or using the information below.
            </p>

            {/* Address */}
            <Address />

            {/* Phone */}
            <PhoneComponent />

            {/* Email */}
            <Email />

            {/* Business Hours */}
            <Hours />

            {/* Emergency Service */}
            <EmergencyNotice />
          </article>

          {/* Right Column: Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default Contact
