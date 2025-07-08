import React from 'react'
import { CheckCircle } from 'lucide-react'

const AboutImage: React.FC = () => (
  <div className="relative">
    <figure className="overflow-hidden rounded-2xl shadow-xl">
      <img
        src="https://images.pexels.com/photos/8486972/pexels-photo-8486972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Manhattan Plumbing team at work"
        className="w-full h-auto rounded-2xl"
        width={1260}
        height={750}
        loading="lazy"
      />
    </figure>
    <div
      id="wrapperBoxFloat"
      className="absolute p-3 mr-3 md:p-5 max-w-xs text-white bg-blue-600 rounded-2xl shadow-lg backdrop-blur-xl bg-opacity-80 right-0 -bottom-12 md:-right-10 md:-bottom-12"
      aria-label="Years of experience"
    >
      <div className="flex items-start gap-3">
        <CheckCircle className="shrink-0 mt-1 text-white" size={24} />
        <div id="wrapperBoxText">
          <p className="mb-2 text-xl font-bold flex items-center gap-2">
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
