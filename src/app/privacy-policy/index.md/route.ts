import { NextRequest, NextResponse } from 'next/server';

export const dynamic = "force-static";

export async function GET() {
  const frontmatter = `---
title: "Privacy Policy | Manhattan Plumbing"
description: "Learn about how Manhattan Plumbing collects, uses, and protects your personal information."
url: "https://manhattan-plumbing.pages.dev/privacy-policy/"
---

# Privacy Policy

Your privacy is important to us.

Markdown version of the privacy policy is generated during the build process.
`;

  return new NextResponse(frontmatter, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
}
