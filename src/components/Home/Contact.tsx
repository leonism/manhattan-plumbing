import React from "react";
import SectionHeading from "../UI/SectionHeading";
import ContactForm from "../UI/ContactForm";
import Address from "../Contact/Address";
import PhoneComponent from "../Contact/Phone";
import Email from "../Contact/Email";
import Hours from "../Contact/Hours";
import EmergencyNotice from "../Contact/EmergencyNotice";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-12 lg:py-20 bg-white dark:bg-slate-900"
      aria-labelledby="contact-heading">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Heading */}
        <header
          className="text-center mb-8 lg:mb-12"
          id="contact-heading">
          <SectionHeading
            title="Contact Us"
            subtitle="Have a plumbing issue or need a quote? Get in touch with our team today."
            centered
          />
        </header>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 lg:gap-12 items-start">
          {/* Left Column: Contact Information */}
          <article aria-labelledby="contact-info">
            <h3
              id="contact-info"
              className="text-xl lg:text-2xl font-bold mb-6 text-slate-800 dark:text-white">
              Get In Touch
            </h3>

            <p className="text-slate-600 dark:text-slate-300 mb-8 text-base lg:text-lg">
              Our friendly customer service team is standing by to answer your
              questions and schedule your appointment. Contact us through the
              form or using the information below.
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
  );
};

export default Contact;
