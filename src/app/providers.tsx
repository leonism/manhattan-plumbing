'use client'

import React, { useEffect } from 'react'
import { ThemeProvider } from '@/context/ThemeContext'
import { UIProvider } from '@/context/UIContext'

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const navigatorAny = navigator as any
    const modelContext = navigatorAny.modelContext
    if (!modelContext) {
      console.log('ℹ️ WebMCP is not supported in this browser context.')
      return
    }

    const tools = [
      {
        name: 'search_articles',
        description: 'Search news articles, blog posts, and plumbing guides on Manhattan Plumbing.',
        inputSchema: {
          type: 'object',
          properties: {
            query: {
              type: 'string',
              description: 'The search term or topic to look up'
            }
          },
          required: ['query']
        },
        execute: async (args: { query: string }) => {
          try {
            const res = await fetch('/api/search')
            if (!res.ok) throw new Error('Search index failed to load')
            const data = await res.json()
            const queryLower = args.query.toLowerCase()
            const matched = data.filter((item: any) =>
              item.title?.toLowerCase().includes(queryLower) ||
              item.excerpt?.toLowerCase().includes(queryLower) ||
              item.tags?.some((t: string) => t.toLowerCase().includes(queryLower))
            )
            return {
              results: matched.slice(0, 10).map((item: any) => ({
                title: item.title,
                url: item.type === 'news' ? `/news/${item.slug}` : item.slug,
                excerpt: item.excerpt,
                category: item.category
              }))
            }
          } catch (err: any) {
            return { error: err.message }
          }
        }
      },
      {
        name: 'list_services',
        description: 'List all plumbing services provided by Manhattan Plumbing, including emergency response, drain cleaning, and water heaters.',
        inputSchema: {
          type: 'object',
          properties: {}
        },
        execute: () => {
          return {
            services: [
              { id: 'emergency', name: 'Emergency Plumbing', description: '24/7 rapid response for burst pipes, flooding, and gas leaks.' },
              { id: 'drain', name: 'Drain Cleaning', description: 'Clog removal and drain cleaning for sinks, showers, and main sewer lines.' },
              { id: 'water-heater', name: 'Water Heater Service', description: 'Installation, repair, and maintenance of traditional and tankless water heaters.' },
              { id: 'remodeling', name: 'Bathroom Remodeling', description: 'Full-service design and plumbing installation for bathroom renovations.' },
              { id: 'pipe', name: 'Pipe Repair & Replacement', description: 'Leak detection, pipe repairs, and copper/PEX repiping.' },
              { id: 'fixture', name: 'Fixture Installation', description: 'Professional installation of toilets, faucets, showers, and garbage disposals.' }
            ]
          }
        }
      },
      {
        name: 'get_plumbing_quote',
        description: 'Submit a request for a plumbing service quote with service type, user details, and problem description.',
        inputSchema: {
          type: 'object',
          properties: {
            name: { type: 'string', description: 'Full name of the contact person' },
            email: { type: 'string', description: 'Email address for response' },
            service: { type: 'string', enum: ['emergency', 'drain', 'water-heater', 'remodeling', 'pipe', 'fixture'], description: 'Type of plumbing service required' },
            message: { type: 'string', description: 'Details about the plumbing issue or project' }
          },
          required: ['name', 'email', 'service', 'message']
        },
        execute: (args: any) => {
          return {
            success: true,
            quoteId: 'Q-' + Math.floor(Math.random() * 900000 + 100000),
            message: `Thank you, ${args.name}. Your quote request for "${args.service}" has been received. Our team will contact you at ${args.email} shortly.`
          }
        }
      }
    ]

    const abortController = new AbortController()

    try {
      if (typeof modelContext.registerTool === 'function') {
        tools.forEach(tool => {
          modelContext.registerTool({
            ...tool,
            signal: abortController.signal
          })
        })
        console.log('✅ Registered WebMCP tools via registerTool.')
      } else if (typeof modelContext.provideContext === 'function') {
        modelContext.provideContext({
          type: 'tools',
          tools: tools,
          signal: abortController.signal
        })
        console.log('✅ Registered WebMCP tools via provideContext.')
      }
    } catch (e) {
      console.error('❌ WebMCP registration failed:', e)
    }

    return () => {
      abortController.abort()
    }
  }, [])

  return (
    <ThemeProvider>
      <UIProvider>{children}</UIProvider>
    </ThemeProvider>
  )
}
