import { NextRequest, NextResponse } from 'next/server';
export const dynamic = "force-static";

export async function GET() {
  const frontmatter = `---
title: "Plumbing Services Location | Manhattan Plumbing"
description: "Serving New York City with top-notch plumbing services. Find our service areas and contact information."
url: "https://manhattan-plumbing.pages.dev/location/"
---

# Service Location

We serve all neighborhoods in Manhattan, New York.

Markdown version of the location page is generated during the build process.
`;

  return new NextResponse(frontmatter, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
}
