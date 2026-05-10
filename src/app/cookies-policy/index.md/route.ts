import { NextRequest, NextResponse } from 'next/server';

export const dynamic = "force-static";

export async function GET() {
  const frontmatter = `---
title: "Cookies Policy | Manhattan Plumbing"
description: "Information about how Manhattan Plumbing uses cookies and similar technologies on our website."
url: "https://manhattan-plumbing.pages.dev/cookies-policy/"
---

# Cookies Policy

We use cookies to improve your experience.

Markdown version of the cookies policy is generated during the build process.
`;

  return new NextResponse(frontmatter, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
}
