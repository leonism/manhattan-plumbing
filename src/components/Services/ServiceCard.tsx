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
    <section className="bg-white/90 dark:bg-slate-800 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] group max-h-[420px] flex flex-col">
      <div className="flex justify-center items-center mb-4 w-16 h-16 text-blue-600 bg-blue-100 rounded-full transition-colors duration-300 dark:bg-blue-900/30 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-500 dark:group-hover:text-white">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-bold text-slate-800 dark:text-white">{title}</h3>
      <p className="grow mb-5 text-slate-600 dark:text-slate-300 line-clamp-3">{description}</p>
      <Button href={href} variant="primary" size="md" className="bg-blue-600 text-white">
        <ArrowRightCircle className="mr-2" size={18} />
        Learn More
      </Button>
    </section>
  )
}

export default ServiceCard
