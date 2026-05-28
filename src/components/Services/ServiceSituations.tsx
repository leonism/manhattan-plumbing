import React from 'react'
import Image from 'next/image'
import DynamicIcon from '@/components/ui/DynamicIcon'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { ImageSource } from '@/types'
import { cn } from '@/lib/utils'

interface Situation {
  image: string | ImageSource
  icon: string
  title: string
  description: string
  priority?: string
}

interface ServiceSituationsProps {
  title: string
  subtitle?: string
  items: Situation[]
}

const ServiceSituations = ({ title, subtitle, items }: ServiceSituationsProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title={title} subtitle={subtitle} centered />

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {items.map((item, index) => {
            const imageSrc =
              typeof item.image === 'string' ? `/images/${item.image}` : item.image.src

            return (
              <div
                key={index}
                className="overflow-hidden rounded-xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl dark:bg-slate-800"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={imageSrc}
                    alt={item.title}
                    fill
                    className="object-cover brightness-[0.7]"
                  />
                  {item.priority && (
                    <div
                      className={cn(
                        'absolute top-4 right-4 z-10 rounded-full px-4 py-1 text-sm font-bold text-white shadow-lg',
                        item.priority === 'CRITICAL' || item.priority === 'IMMEDIATE'
                          ? 'bg-red-600'
                          : 'bg-orange-500'
                      )}
                    >
                      {item.priority}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/30 to-black/70" />
                </div>
                <div className="p-8">
                  <div className="mb-4 flex items-center gap-4">
                    <DynamicIcon name={item.icon} className="text-blue-500" size={32} />
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mb-6 text-lg text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>
                  <Button href="tel:+12125551234" variant="default" className="w-full">
                    Contact Us Now
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServiceSituations
