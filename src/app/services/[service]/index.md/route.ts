import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ service: string }> }
) {
  const { service } = await params;
  
  const frontmatter = `---
title: "${service.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} | Manhattan Plumbing"
description: "Expert ${service.replace('-', ' ')} in Manhattan."
url: "https://manhattan-plumbing.pages.dev/services/${service}/"
date_generated: "${new Date().toISOString()}"
---

# ${service.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}

Markdown version of this service page is generated during the build process.
`;

  return new NextResponse(frontmatter, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
}

export async function generateStaticParams() {
  return [
    { service: 'drain-service' },
    { service: 'emergency-service' },
    { service: 'fixture-service' },
    { service: 'pipe-service' },
    { service: 'remodeling-service' },
    { service: 'water-heater-service' },
  ];
}
