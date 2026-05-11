import React from 'react'

interface Step {
  step: string
  title: string
  text: string
}

interface ServiceProtocolsProps {
  title: string
  steps: Step[]
}

const ServiceProtocols = ({ title, steps }: ServiceProtocolsProps) => {
  return (
    <section className="bg-slate-900 py-16 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="rounded-2xl bg-slate-800 p-8 md:p-12 border border-slate-700">
          <h2 className="mb-8 text-3xl font-bold md:text-4xl text-center">{title}</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 text-5xl font-black text-blue-500/30">{step.step}</div>
                <h4 className="mb-3 text-xl font-bold">{step.title}</h4>
                <p className="text-slate-400">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceProtocols
