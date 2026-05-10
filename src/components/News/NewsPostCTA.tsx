import React from 'react'
import Button from '@/components/ui/Button'

const NewsPostCTA = () => {
  return (
    <section className="container mx-auto mt-20 px-4">
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 p-12 text-center text-white">
        <div className="relative z-10">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Facing a Plumbing Issue?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-slate-300">
            Don't wait for a small leak to become a flood. Our expert team is ready to help you
            24/7.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              href="tel:+12125551234"
              variant="default"
              className="bg-blue-600 hover:bg-blue-700"
            >
              <span>Call Us Now: (212) 555-1234</span>
            </Button>
            <Button
              href="/#contact"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900"
            >
              <span>Book Online</span>
            </Button>
          </div>
        </div>
        <div className="absolute top-0 right-0 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-3xl" />
      </div>
    </section>
  )
}

export default NewsPostCTA
