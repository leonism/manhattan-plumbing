import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  const frontmatter = `---
title: "Fixture Installation & Repair | Manhattan Plumbing"
description: "Professional installation and repair of faucets, toilets, showers, and other plumbing fixtures in Manhattan."
url: "https://manhattan-plumbing.pages.dev/services/fixture-service/"
date_generated: "${new Date().toISOString()}"
---

# Fixture Installation & Repair

Professional installation of plumbing fixtures.

Markdown version of this service page is generated during the build process.
`;

  return new NextResponse(frontmatter, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
}
