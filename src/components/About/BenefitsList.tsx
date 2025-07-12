import React from 'react'
import { CheckCircle } from 'lucide-react'

const BenefitsList: React.FC<{ benefits: string[] }> = ({ benefits }) => (
  <ul className="mb-8 space-y-3">
    {benefits.map((benefit, index) => (
      <li key={index} className="flex items-start">
        <CheckCircle size={20} className="shrink-0 mt-1 mr-3 text-green-500" aria-hidden="true" />
        <span className="text-slate-700 dark:text-slate-300">{benefit}</span>
      </li>
    ))}
  </ul>
)

export default BenefitsList
