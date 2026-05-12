'use client'

import React, { useEffect, useState } from 'react'
import { List } from 'lucide-react'

interface TOCItem {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  content: string
  className?: string
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ content, className }) => {
  const [toc, setToc] = useState<TOCItem[]>([])

  useEffect(() => {
    // Basic markdown heading parser
    const headingLines = content.split('\n').filter(line => line.match(/^#{2,4}\s/))
    
    const items: TOCItem[] = headingLines.map((line, index) => {
      const level = (line.match(/^#+/) || [''])[0].length
      const text = line.replace(/^#+\s/, '').trim()
      // Create a slug from the text
      const id = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
      
      return { id, text, level }
    })

    setToc(items)
  }, [content])

  if (toc.length === 0) return null

  return (
    <div className={`mb-8 mt-4 md:my-8 ${className || ''}`}>
      <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="mb-4 flex items-center gap-2 font-bold text-slate-900 dark:text-white">
          <List size={20} className="text-blue-600" />
          <span>Table of Contents</span>
        </div>
        <nav className="space-y-1" aria-label="Table of Contents">
          {toc.map((item, index) => (
            <a
              key={index}
              href={`#${item.id}`}
              className={`block py-1 text-sm transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                item.level === 3 ? 'pl-4' : item.level === 4 ? 'pl-8' : ''
              } text-slate-600 dark:text-slate-400`}
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById(item.id)
                if (element) {
                  const offset = 100
                  const bodyRect = document.body.getBoundingClientRect().top
                  const elementRect = element.getBoundingClientRect().top
                  const elementPosition = elementRect - bodyRect
                  const offsetPosition = elementPosition - offset

                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  })
                }
              }}
            >
              {item.text}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default TableOfContents
