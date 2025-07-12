import React from 'react'
import Button from '../UI/Button'
import { ArrowRightCircle } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, href }) => {
  return (
    <section className="group flex max-h-[420px] flex-col rounded-lg bg-white/90 p-6 shadow-md transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg dark:bg-slate-800">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-900/30 dark:text-blue-400 dark:group-hover:bg-blue-500 dark:group-hover:text-white">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-bold text-slate-800 dark:text-white">{title}</h3>
      <p className="mb-5 line-clamp-3 grow text-slate-600 dark:text-slate-300">{description}</p>
      <Button href={href} variant="primary" size="md" className="bg-blue-600 text-white">
        <ArrowRightCircle className="mr-2" size={18} />
        Learn More
      </Button>
    </section>
  )
}

export default ServiceCard
