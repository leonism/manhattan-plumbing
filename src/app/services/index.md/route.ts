import { NextRequest, NextResponse } from 'next/server';
export const dynamic = "force-static";

export async function GET() {
  const frontmatter = `---
title: "Plumbing Services | Manhattan Plumbing"
description: "Comprehensive plumbing services in Manhattan, NYC. Emergency repairs, drain cleaning, pipe work, and more."
url: "https://manhattan-plumbing.pages.dev/services/"
---

# Our Services

We offer a wide range of plumbing services to Manhattan residents and businesses.

Markdown version of the services page is generated during the build process.
`;

  return new NextResponse(frontmatter, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
}
