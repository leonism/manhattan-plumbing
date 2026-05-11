import { NextResponse } from 'next/server'
import { getSearchIndex } from '@/lib/news'

export const dynamic = 'force-static'

export async function GET() {
  const index = getSearchIndex()
  return NextResponse.json(index)
}
