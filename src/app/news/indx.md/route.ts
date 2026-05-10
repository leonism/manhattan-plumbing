import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.redirect(new URL('/news/index.md', 'https://manhattan-plumbing.pages.dev/'));
}
