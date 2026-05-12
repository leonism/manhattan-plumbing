import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { LegalSection } from './legal'

const aboutDirectory = path.join(process.cwd(), 'src/content/about')

export interface AboutPageData {
  title: string
  description: string
  lastUpdated: string
  category: string
  type: string
  sections: LegalSection[]
  content: string
}

export async function getAboutPageData(): Promise<AboutPageData | undefined> {
  const fullPath = path.join(aboutDirectory, 'index.mdx')
  if (!fs.existsSync(fullPath)) return undefined

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    ...data,
    title: data.title,
    description: data.description,
    lastUpdated: data.lastUpdated,
    category: data.category,
    type: data.type,
    sections: data.sections || [],
    content,
  } as AboutPageData
}
