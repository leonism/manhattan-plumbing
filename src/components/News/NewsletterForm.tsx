'use client'

import React from 'react'
import Button from '@/components/ui/Button'

const NewsletterForm = () => {
  return (
    <form 
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        alert('Thank you for subscribing!');
      }}
    >
      <div>
        <input
          type="email"
          placeholder="Enter your email"
          required
          className="w-full rounded-xl border-0 bg-white/10 px-4 py-3 text-white placeholder:text-blue-200 focus:ring-2 focus:ring-white/50"
        />
      </div>
      <Button 
        type="submit"
        variant="default" 
        className="w-full bg-white text-blue-600 hover:bg-blue-50"
      >
        Subscribe Now
      </Button>
    </form>
  )
}

export default NewsletterForm
