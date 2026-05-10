import { NextResponse } from 'next/server'
import { getAllPosts } from '@/lib/news'

export const dynamic = 'force-static'

export async function GET() {
  const posts = getAllPosts()
  return NextResponse.json(posts)
}
