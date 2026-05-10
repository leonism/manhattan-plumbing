import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  const frontmatter = `---
title: "24/7 Emergency Plumbing Services | Manhattan Plumbing"
description: "Fast response emergency plumbing in Manhattan. Available 24/7 for burst pipes, gas leaks, and more."
url: "https://manhattan-plumbing.pages.dev/services/emergency-service/"
date_generated: "${new Date().toISOString()}"
---

# Emergency Plumbing Services

Fast response when you need it most.

Markdown version of this service page is generated during the build process.
`;

  return new NextResponse(frontmatter, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
}
