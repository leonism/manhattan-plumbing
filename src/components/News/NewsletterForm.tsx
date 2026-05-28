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
          className="w-full rounded-xl border-0 bg-white/10 px-4 py-3 text-white transition-all placeholder:text-blue-200 focus:ring-2 focus:ring-white/50 disabled:opacity-50"
        />
        {status === 'success' && (
          <span className="absolute top-1/2 right-3 -translate-y-1/2 text-sm font-medium text-green-400">
            ✓ Done
          </span>
        )}
      </div>
      <Button
        type="submit"
        variant="default"
        disabled={status === 'loading' || status === 'success'}
        className="h-12 w-full bg-white font-bold text-blue-600 shadow-lg transition-transform hover:bg-blue-50 active:scale-95"
      >
        {status === 'loading'
          ? 'Subscribing...'
          : status === 'success'
            ? 'Subscribed!'
            : 'Subscribe Now'}
      </Button>
      {status === 'success' && (
        <p className="animate-in fade-in slide-in-from-top-1 text-center text-sm text-blue-100">
          Welcome to the plumbing insider list!
        </p>
      )}
    </form>
  )
}

export default NewsletterForm
