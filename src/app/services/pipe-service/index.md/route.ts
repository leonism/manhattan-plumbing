import { NextRequest, NextResponse } from 'next/server';
export const dynamic = "force-static";

export async function GET() {
  const frontmatter = `---
title: "Pipe Repair & Replacement | Manhattan Plumbing"
description: "Expert pipe repair and replacement services in Manhattan. We handle leaks, bursts, and complete repiping."
url: "https://manhattan-plumbing.pages.dev/services/pipe-service/"
---

# Pipe Repair & Replacement

Expert pipe services for Manhattan homes and businesses.

Markdown version of this service page is generated during the build process.
`;

  return new NextResponse(frontmatter, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
}
