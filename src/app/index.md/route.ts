import { NextRequest, NextResponse } from 'next/server';
export const dynamic = "force-static";

export async function GET() {
  const frontmatter = `---
title: "Manhattan Plumbing | Your Trusted Local Plumber"
description: "Manhattan Plumbing offers reliable and affordable plumbing services in New York City. From leaky faucets to emergency repairs, our expert plumbers are here to help."
url: "https://manhattan-plumbing.pages.dev/"
---

# Manhattan Plumbing

Expert plumbing services for Manhattan residents and businesses.

Markdown version of the homepage is generated during the build process.
`;

  return new NextResponse(frontmatter, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
}
