import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  const frontmatter = `---
title: "Water Heater Services | Manhattan Plumbing"
description: "Expert water heater installation, repair, and maintenance in Manhattan. We handle all types of water heaters."
url: "https://manhattan-plumbing.pages.dev/services/water-heater-service/"
date_generated: "${new Date().toISOString()}"
---

# Water Heater Services

Reliable hot water solutions for your home.

Markdown version of this service page is generated during the build process.
`;

  return new NextResponse(frontmatter, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
}
