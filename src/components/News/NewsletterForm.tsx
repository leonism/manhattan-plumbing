'use client'

import React from 'react'
import Button from '@/components/ui/Button'

const NewsletterForm = () => {
  const [email, setEmail] = React.useState('')
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success')
      setEmail('')
      setTimeout(() => setStatus('idle'), 3000)
    }, 1500)
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          disabled={status === 'loading' || status === 'success'}
          className="w-full rounded-xl border-0 bg-white/10 px-4 py-3 text-white placeholder:text-blue-200 focus:ring-2 focus:ring-white/50 transition-all disabled:opacity-50"
        />
        {status === 'success' && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-green-400 text-sm font-medium">
            ✓ Done
          </span>
        )}
      </div>
      <Button 
        type="submit"
        variant="default" 
        disabled={status === 'loading' || status === 'success'}
        className="w-full bg-white text-blue-600 hover:bg-blue-50 font-bold h-12 shadow-lg transition-transform active:scale-95"
      >
        {status === 'loading' ? 'Subscribing...' : status === 'success' ? 'Subscribed!' : 'Subscribe Now'}
      </Button>
      {status === 'success' && (
        <p className="text-center text-sm text-blue-100 animate-in fade-in slide-in-from-top-1">
          Welcome to the plumbing insider list!
        </p>
      )}
    </form>
  )
}

export default NewsletterForm
