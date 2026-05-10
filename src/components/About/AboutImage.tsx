import React from 'react'
import { CheckCircle } from 'lucide-react'

const AboutImage: React.FC = () => (
  <div className="relative">
    <figure className="overflow-hidden rounded-2xl shadow-xl">
      <img
        src="https://images.pexels.com/photos/8486972/pexels-photo-8486972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Manhattan Plumbing team at work"
        className="h-auto w-full rounded-2xl"
        width={1260}
        height={750}
        loading="lazy"
      />
    </figure>
    <div
      id="wrapperBoxFloat"
      className="bg-opacity-80 absolute right-0 -bottom-12 mr-3 max-w-xs rounded-2xl bg-blue-600 p-3 text-white shadow-lg backdrop-blur-xl md:-right-10 md:-bottom-12 md:p-5"
      aria-label="Years of experience"
    >
      <div className="flex items-start gap-3">
        <CheckCircle className="mt-1 shrink-0 text-white" size={24} />
        <div id="wrapperBoxText">
          <p className="mb-2 flex items-center gap-2 text-xl font-bold">
            <span className="text-white">30+ Years</span>
          </p>
          <p className="text-sm text-blue-100">
            Serving Manhattan with quality plumbing services since 1985.
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default AboutImage
