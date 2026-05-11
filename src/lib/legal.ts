import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const legalDirectory = path.join(process.cwd(), 'src/content/legal')

export interface LegalPage {
  slug: string
  title: string
  description: string
  lastUpdated: string
  content: string
}

export function getAllLegalPages(): LegalPage[] {
  if (!fs.existsSync(legalDirectory)) return []

  const fileNames = fs.readdirSync(legalDirectory)
  return fileNames
    .filter((fileName) => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
    .map((fileName) => {
      const fullPath = path.join(legalDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        ...data,
        slug: data.slug || fileName.replace(/\.mdx?$/, ''),
        title: data.title,
        description: data.description,
        lastUpdated: data.lastUpdated,
        content,
      } as LegalPage
    })
}

export async function getLegalPageData(slug: string): Promise<LegalPage | undefined> {
  const allPages = getAllLegalPages()
  return allPages.find((page) => page.slug === slug)
}

export function getAllLegalSlugs() {
  return getAllLegalPages().map((page) => ({
    params: { slug: page.slug },
  }))
}
