import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  const frontmatter = `---
title: "Kitchen & Bathroom Remodeling | Manhattan Plumbing"
description: "Professional plumbing remodeling services in Manhattan. Transform your kitchen and bathroom with expert installations."
url: "https://manhattan-plumbing.pages.dev/services/remodeling-service/"
date_generated: "${new Date().toISOString()}"
---

# Kitchen & Bathroom Remodeling

Complete plumbing remodeling solutions.

Markdown version of this service page is generated during the build process.
`;

  return new NextResponse(frontmatter, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
}
