import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { slugify } from '@/utils/slugify'
import type { ImageSource } from '@/types'

const servicesDirectory = path.join(process.cwd(), 'src/content/services')

interface RawImage {
  src?: string
  alt?: string
  webp?: string
  avif?: string
  width?: number
  height?: number
  caption?: string
}

function formatImage(img: string | RawImage | undefined | null, defaultAlt: string = ''): ImageSource {
  if (typeof img === 'string') {
    const src = img.startsWith('http') ? img : `/images/${img}`
    return {
      src,
      webp: src,
      avif: src,
      alt: defaultAlt,
    }
  }

  const rawSrc = img?.src || ''
  const src = rawSrc.startsWith('http') ? rawSrc : `/images/${rawSrc}`
  
  return {
    src,
    webp: img?.webp || (rawSrc.startsWith('http') ? src : `${src}?format=webp`),
    avif: img?.avif || (rawSrc.startsWith('http') ? src : `${src}?format=avif`),
    alt: img?.alt || defaultAlt,
    width: img?.width,
    height: img?.height,
    caption: img?.caption,
  }
}

export interface ServiceFeature {
  title: string
  description: string
  icon: string
}

export interface ServiceSituation {
  title: string
  description: string
  image: string | ImageSource
  icon: string
  priority: string
}

export interface Service {
  slug: string
  title: string
  description: string
  heroImage: string | ImageSource
  heroTitle: string
  heroSubtitle: string
  heroIcon?: string
  features?: {
    title: string
    subtitle?: string
    variant?: 'default' | 'emergency'
    items: ServiceFeature[]
  }
  situations?: {
    title: string
    subtitle?: string
    items: ServiceSituation[]
  }
  protocols?: {
    title: string
    steps: {
      step: string
      title: string
      text: string
    }[]
  }
  cta?: {
    title: string
    subtitle: string
    buttonText: string
    buttonHref: string
    variant?: 'default' | 'emergency'
  }
  content: string
  id?: string
  order?: number
  indexIcon?: string
  indexDescription?: string
}

export interface ServicesIndexData {
  title: string
  description: string
  hero: {
    title: string
    subtitle: string
    image: string
    primaryButton: { text: string; href: string }
    secondaryButton: { text: string; href: string }
  }
  solutions: {
    title: string
    subtitle: string
  }
  whyChooseUs: {
    title: string
    subtitle: string
    items: string[]
  }
  cta: {
    title: string
    subtitle: string
    primaryButton: { text: string; href: string }
    secondaryButton: { text: string; href: string }
  }
  content: string
}

export function getAllServices(): Service[] {
  if (!fs.existsSync(servicesDirectory)) return []

  const fileNames = fs.readdirSync(servicesDirectory)
  const allServices = fileNames
    .filter((fileName) => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
    .filter((fileName) => fileName !== 'index.md' && fileName !== 'index.mdx')
    .map((fileName) => {
      const fullPath = path.join(servicesDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        ...data,
        slug: data.slug || fileName.replace(/\.mdx?$/, ''),
        heroImage: formatImage(data.heroImage, data.title),
        features: data.features ? {
          ...data.features,
          items: data.features.items || []
        } : undefined,
        situations: data.situations ? {
          ...data.situations,
          items: (data.situations.items || []).map((s: any) => ({
            ...s,
            image: formatImage(s.image, s.title)
          }))
        } : undefined,
        protocols: data.protocols,
        cta: data.cta,
        content,
      } as Service
    })
    .sort((a, b) => (a.order || 99) - (b.order || 99))

  return allServices
}

export function getAllServiceSlugs() {
  return getAllServices().map((service) => ({
    params: { service: service.slug },
  }))
}

export async function getServiceData(slug: string): Promise<Service | undefined> {
  const allServices = getAllServices()
  return allServices.find((service) => service.slug === slug)
}

export function getServicesIndexData(): ServicesIndexData | null {
  const indexPath = path.join(servicesDirectory, 'index.md')
  if (!fs.existsSync(indexPath)) return null
  
  const fileContents = fs.readFileSync(indexPath, 'utf8')
  const { data, content } = matter(fileContents)
  return { ...data, content } as ServicesIndexData
}
