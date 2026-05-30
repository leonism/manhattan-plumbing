import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  phone: z.string().min(10, {
    message: 'Please enter a valid phone number.',
  }),
  service: z.string().min(1, {
    message: 'Please select a service.',
  }),
  message: z.string().optional(),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>
