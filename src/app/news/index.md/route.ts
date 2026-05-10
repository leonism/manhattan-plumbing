import { NextRequest, NextResponse } from 'next/server';
export const dynamic = "force-static";

export async function GET() {
  // Simple placeholder for the news archive markdown
  // In production, the post-build script will generate the full version
  const frontmatter = `---
title: "News & Updates | Manhattan Plumbing"
description: "Stay updated with the latest plumbing tips, news, and guides from Manhattan Plumbing."
url: "https://manhattan-plumbing.pages.dev/news/"
---

# News & Updates

Markdown version of the news archive is generated during the build process.
`;

  return new NextResponse(frontmatter, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
}
