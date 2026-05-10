"use client"

import React from 'react'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'

import Button from '@/components/ui/Button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { contactFormSchema, type ContactFormValues } from "@/hooks/useContactForm"
import { cn } from "@/lib/utils"

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
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  })

  function onSubmit(values: ContactFormValues) {
    // This would typically send data to an API
    console.log(values)
    alert("Form submitted successfully!")
    form.reset()
  }

  const headingSizes = {
    sm: 'text-xl sm:text-2xl',
    md: 'text-2xl sm:text-3xl',
    lg: 'text-3xl sm:text-4xl',
    xl: 'text-4xl sm:text-5xl',
  }

  const variantClasses = {
    default: 'border border-gray-100 dark:border-slate-700',
    minimal: '',
    highlighted: 'ring-2 ring-blue-500 dark:ring-blue-600',
  }

  return (
    <div className={cn(
      "bg-white dark:bg-slate-800 p-4 sm:p-6 md:p-8 transition-all duration-200",
      rounded && "rounded-lg sm:rounded-xl",
      shadow && "shadow-xs sm:shadow-md",
      variantClasses[variant]
    )}>
      {heading && (
        <h3
          className={cn(
            headingSizes[headingSize],
            "mb-4 text-center font-bold text-slate-800 sm:mb-6 sm:text-left md:mb-8 dark:text-white"
          )}
        >
          {heading}
        </h3>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-700 dark:text-slate-300 font-medium">
                  Full Name <span className="text-red-600 dark:text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input 
                    placeholder="John Doe" 
                    className="h-12 sm:h-14 bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 focus:ring-blue-500" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-700 dark:text-slate-300 font-medium">
                    Email Address <span className="text-red-600 dark:text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="h-12 sm:h-14 bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 focus:ring-blue-500"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-700 dark:text-slate-300 font-medium">
                    Phone Number <span className="text-red-600 dark:text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input 
                      type="tel" 
                      placeholder="(212) 555-1234" 
                      className="h-12 sm:h-14 bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 focus:ring-blue-500"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-700 dark:text-slate-300 font-medium">
                  Service Needed <span className="text-red-600 dark:text-red-500">*</span>
                </FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="h-12 sm:h-14 w-full bg-white dark:bg-slate-700 text-left px-3 border-slate-200 dark:border-slate-600 flex items-center justify-between">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="emergency">Emergency Plumbing</SelectItem>
                    <SelectItem value="drains">Drain Cleaning</SelectItem>
                    <SelectItem value="water-heaters">Water Heater Service</SelectItem>
                    <SelectItem value="remodeling">Bathroom Remodeling</SelectItem>
                    <SelectItem value="pipes">Pipe Repair & Replacement</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-700 dark:text-slate-300 font-medium">Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Please provide details about your plumbing needs..."
                    className="min-h-[120px] bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 focus:ring-blue-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="pt-2">
            <Button
              type="submit"
              fullWidth
              className="group flex h-12 sm:h-14 items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold transition-all duration-200 shadow-lg hover:shadow-xl rounded-lg"
            >
              <span>Submit Request</span>
              <PaperAirplaneIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <p className="text-xs text-slate-500 sm:text-sm dark:text-slate-400 text-center sm:text-left">
            By submitting this form, you agree to our{' '}
            <a href="/privacy-policy" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">
              Privacy Policy
            </a>{' '}
            and{' '}
            <a href="/terms-of-service" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">
              Terms of Service
            </a>
            .
          </p>
        </form>
      </Form>
    </div>
  )
}

export default ContactForm
