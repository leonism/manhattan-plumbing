import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  const frontmatter = `---
title: "Professional Drain Cleaning Services | Manhattan Plumbing"
description: "Expert drain cleaning and sewer services in Manhattan. We clear clogs and keep your pipes flowing."
url: "https://manhattan-plumbing.pages.dev/services/drain-service/"
date_generated: "${new Date().toISOString()}"
---

# Drain Cleaning Services

Professional drain cleaning and maintenance.

Markdown version of this service page is generated during the build process.
`;

  return new NextResponse(frontmatter, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
}
