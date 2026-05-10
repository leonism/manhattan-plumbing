import React from 'react'
import Button from '@/components/ui/Button'
import useContactForm from '@/hooks/useContactForm'
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'

interface ContactFormProps {
  shadow?: boolean
  rounded?: boolean
  heading?: string
  headingSize?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'default' | 'minimal' | 'highlighted'
}

const ContactForm: React.FC<ContactFormProps> = ({
  shadow = true,
  rounded = true,
  heading = 'Get a Free Quote',
  headingSize = 'sm',
  variant = 'default',
}) => {
  const { formData, errors, handleChange, handleSubmit } = useContactForm()

  // Dynamic class composition
  const getFormClasses = () => {
    const baseClasses = [
      'bg-white dark:bg-slate-800',
      'p-4 sm:p-6 md:p-8', // Responsive padding
      'transition-all duration-200',
      rounded ? 'rounded-lg sm:rounded-xl' : '', // Responsive rounding
      shadow ? 'shadow-xs sm:shadow-md' : '', // Responsive shadow
    ]

    const variantClasses = {
      default: 'border border-gray-100 dark:border-slate-700',
      minimal: '',
      highlighted: 'ring-2 ring-blue-500 dark:ring-blue-600',
    }

    return [...baseClasses, variantClasses[variant]].filter(Boolean).join(' ')
  }

  const headingSizes = {
    sm: 'text-xl sm:text-2xl',
    md: 'text-2xl sm:text-3xl',
    lg: 'text-3xl sm:text-4xl',
    xl: 'text-4xl sm:text-5xl',
  }

  return (
    <form onSubmit={handleSubmit} className={getFormClasses()} aria-labelledby="form-title">
      {/* Configurable Heading */}
      {heading && (
        <h3
          id="form-title"
          className={`${headingSizes[headingSize]} mb-4 text-center font-bold text-slate-800 sm:mb-6 sm:text-left md:mb-8 dark:text-white`}
        >
          {heading}
        </h3>
      )}

      {/* Fieldset with responsive spacing */}
      <fieldset className="space-y-3 sm:space-y-4 md:space-y-5">
        {/* Full Name Field */}
        <div>
          <label
            htmlFor="name"
            className="mb-1 block text-sm font-medium text-slate-700 sm:mb-2 sm:text-base dark:text-slate-300"
          >
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`w-full rounded-md border px-3 py-2 text-sm transition-colors focus:ring-2 focus:ring-blue-500 focus:outline-hidden sm:px-4 sm:py-3 sm:text-base ${
              errors.name
                ? 'border-red-500 bg-red-50 text-red-900 focus:border-red-500 focus:ring-red-500'
                : 'border-slate-300 bg-white text-slate-800 placeholder-slate-400 dark:border-slate-600 dark:bg-slate-700 dark:text-white'
            }`}
            placeholder="John Doe"
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
        </div>

        {/* Responsive Grid for Email/Phone */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-slate-700 sm:mb-2 sm:text-base dark:text-slate-300"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full rounded-md border px-3 py-2 text-sm transition-colors focus:ring-2 focus:ring-blue-500 focus:outline-hidden sm:px-4 sm:py-3 sm:text-base ${
                errors.email
                  ? 'border-red-500 bg-red-50 text-red-900 focus:border-red-500 focus:ring-red-500'
                  : 'border-slate-300 bg-white text-slate-800 placeholder-slate-400 dark:border-slate-600 dark:bg-slate-700 dark:text-white'
              }`}
              placeholder="john@example.com"
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="mb-1 block text-sm font-medium text-slate-700 sm:mb-2 sm:text-base dark:text-slate-300"
            >
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className={`w-full rounded-md border px-3 py-2 text-sm transition-colors focus:ring-2 focus:ring-blue-500 focus:outline-hidden sm:px-4 sm:py-3 sm:text-base ${
                errors.phone
                  ? 'border-red-500 bg-red-50 text-red-900 focus:border-red-500 focus:ring-red-500'
                  : 'border-slate-300 bg-white text-slate-800 placeholder-slate-400 dark:border-slate-600 dark:bg-slate-700 dark:text-white'
              }`}
              placeholder="(212) 555-1234"
            />
            {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
          </div>
        </div>

        {/* Service Dropdown */}
        <div>
          <label
            htmlFor="service"
            className="mb-1 block text-sm font-medium text-slate-700 sm:mb-2 sm:text-base dark:text-slate-300"
          >
            Service Needed *
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className={`w-full appearance-none rounded-md border px-3 py-2 text-sm transition-colors focus:ring-2 focus:ring-blue-500 focus:outline-hidden sm:px-4 sm:py-3 sm:text-base ${
              errors.service
                ? 'border-red-500 bg-red-50 text-red-900 focus:border-red-500 focus:ring-red-500'
                : 'border-slate-300 bg-white text-slate-800 dark:border-slate-600 dark:bg-slate-700 dark:text-white'
            }`}
          >
            <option value="">Select a service</option>
            <option value="emergency">Emergency Plumbing</option>
            <option value="drains">Drain Cleaning</option>
            <option value="water-heaters">Water Heater Service</option>
            <option value="remodeling">Bathroom Remodeling</option>
            <option value="pipes">Pipe Repair & Replacement</option>
            <option value="other">Other</option>
          </select>
          {errors.service && <p className="mt-1 text-sm text-red-500">{errors.service}</p>}
        </div>

        {/* Message Textarea */}
        <div>
          <label
            htmlFor="message"
            className="mb-1 block text-sm font-medium text-slate-700 sm:mb-2 sm:text-base dark:text-slate-300"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 placeholder-slate-400 transition-colors focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-hidden sm:px-4 sm:py-3 sm:text-base dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-slate-500"
            placeholder="Please provide details about your plumbing needs..."
          />
        </div>
      </fieldset>

      {/* Responsive Button */}
      <div className="pt-3 sm:pt-4">
        <Button
          type="submit"
          fullWidth
          className="group flex items-center justify-center gap-2 rounded-md bg-blue-600 px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-blue-700 sm:py-4"
        >
          <span>Submit Request</span>
          <PaperAirplaneIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>

      {/* Responsive Footer Text */}
      <p className="mt-3 text-xs text-slate-500 sm:mt-4 sm:text-sm dark:text-slate-400">
        By submitting this form, you agree to our{' '}
        <a href="/privacy-policy" className="text-blue-600 hover:underline dark:text-blue-400">
          Privacy Policy
        </a>{' '}
        and{' '}
        <a href="/terms-of-service" className="text-blue-600 hover:underline dark:text-blue-400">
          Terms of Service
        </a>
        .
      </p>
    </form>
  )
}

export default ContactForm
