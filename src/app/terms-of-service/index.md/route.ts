import { NextRequest, NextResponse } from 'next/server';

export const dynamic = "force-static";

export async function GET() {
  const frontmatter = `---
title: "Terms of Service | Manhattan Plumbing"
description: "Review the terms and conditions for using Manhattan Plumbing's website and services."
url: "https://manhattan-plumbing.pages.dev/terms-of-service/"
---

# Terms of Service

Please read these terms carefully.

Markdown version of the terms of service is generated during the build process.
`;

  return new NextResponse(frontmatter, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
}
