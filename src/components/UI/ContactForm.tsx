import React from "react";
import Button from "./Button";
import useContactForm from "../../hooks/useContactForm";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

interface ContactFormProps {
  shadow?: boolean;
  rounded?: boolean;
  heading?: string;
  headingSize?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "minimal" | "highlighted";
}

const ContactForm: React.FC<ContactFormProps> = ({
  shadow = true,
  rounded = true,
  heading = "Get a Free Quote",
  headingSize = "sm",
  variant = "default",
}) => {
  const { formData, handleChange, handleSubmit } = useContactForm();

  // Dynamic class composition
  const getFormClasses = () => {
    const baseClasses = [
      "bg-white dark:bg-slate-800",
      "p-4 sm:p-6 md:p-8", // Responsive padding
      "transition-all duration-200",
      rounded ? "rounded-lg sm:rounded-xl" : "", // Responsive rounding
      shadow ? "shadow-sm sm:shadow-md" : "", // Responsive shadow
    ];

    const variantClasses = {
      default: "border border-gray-100 dark:border-slate-700",
      minimal: "",
      highlighted: "ring-2 ring-blue-500 dark:ring-blue-600",
    };

    return [...baseClasses, variantClasses[variant]].filter(Boolean).join(" ");
  };

  const headingSizes = {
    sm: "text-xl sm:text-2xl",
    md: "text-2xl sm:text-3xl",
    lg: "text-3xl sm:text-4xl",
    xl: "text-4xl sm:text-5xl",
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={getFormClasses()}
      aria-labelledby="form-title">
      {/* Configurable Heading */}
      {heading && (
        <h3
          id="form-title"
          className={`${headingSizes[headingSize]} font-bold mb-4 sm:mb-6 md:mb-8 text-slate-800 dark:text-white text-center sm:text-left`}>
          {heading}
        </h3>
      )}

      {/* Fieldset with responsive spacing */}
      <fieldset className="space-y-3 sm:space-y-4 md:space-y-5">
        {/* Full Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm sm:text-base font-medium text-slate-700 dark:text-slate-300 mb-1 sm:mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            placeholder="John Doe"
          />
        </div>

        {/* Responsive Grid for Email/Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm sm:text-base font-medium text-slate-700 dark:text-slate-300 mb-1 sm:mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm sm:text-base font-medium text-slate-700 dark:text-slate-300 mb-1 sm:mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="(212) 555-1234"
            />
          </div>
        </div>

        {/* Service Dropdown */}
        <div>
          <label
            htmlFor="service"
            className="block text-sm sm:text-base font-medium text-slate-700 dark:text-slate-300 mb-1 sm:mb-2">
            Service Needed *
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors">
            <option value="">Select a service</option>
            <option value="emergency">Emergency Plumbing</option>
            <option value="drains">Drain Cleaning</option>
            <option value="water-heaters">Water Heater Service</option>
            <option value="remodeling">Bathroom Remodeling</option>
            <option value="pipes">Pipe Repair & Replacement</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Message Textarea */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm sm:text-base font-medium text-slate-700 dark:text-slate-300 mb-1 sm:mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            placeholder="Please provide details about your plumbing needs..."
          />
        </div>
      </fieldset>

      {/* Responsive Button */}
      <div className="pt-3 sm:pt-4">
        <Button
          size="md"
          fullWidth
          className="group flex items-center justify-center gap-2 py-2 sm:py-3 text-sm sm:text-base">
          <span>Submit Request</span>
          <PaperAirplaneIcon className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>

      {/* Responsive Footer Text */}
      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-3 sm:mt-4">
        By submitting this form, you agree to our{" "}
        <a
          href="#privacy"
          className="text-blue-600 dark:text-blue-400 hover:underline">
          Privacy Policy
        </a>{" "}
        and{" "}
        <a
          href="#terms"
          className="text-blue-600 dark:text-blue-400 hover:underline">
          Terms of Service
        </a>
        .
      </p>
    </form>
  );
};

export default ContactForm;

// Default usage
// <ContactForm />

// Custom heading with large size
// <ContactForm heading="Request a Callback" headingSize="lg" />

// No heading
// <ContactForm heading="" />

// Small heading for compact forms
// <ContactForm heading="Quick Contact" headingSize="sm" />

// Responsive Breakpoints:

// Padding: p-4 sm:p-6 md:p-8

// Text sizes: text-sm sm:text-base

// Input heights: py-2 sm:py-3

// Grid layout: grid-cols-1 sm:grid-cols-2

// Shadows: shadow-sm sm:shadow-md

// Rounded corners: rounded-lg sm:rounded-xl

// // Default (with border)
// <ContactForm variant="default" />

// // Minimal (no border)
// <ContactForm variant="minimal" />

// // Highlighted (with blue ring)
// <ContactForm variant="highlighted" />

// <ContactForm
//   heading="Quick Question?"
//   headingSize="sm"
//   shadow={false}
//   rounded="sm"
//   variant="minimal"
// />

// <ContactForm
//   heading="Schedule Your Free Consultation"
//   headingSize="xl"
//   variant="highlighted"
// />

// <ContactForm
//   heading="Contact Us"
//   headingSize="md"
//   rounded={false}
//   shadow={false}
// />
