import { NextRequest, NextResponse } from 'next/server';
import { getPostData, getAllPosts } from '@/lib/news';
import TurndownService from 'turndown';
import { JSDOM } from 'jsdom';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  
  // If it's the actual string "index.md", we might be in a weird routing state
  // But usually slug will be the post slug
  const post = await getPostData(slug);

  if (!post) {
    return new NextResponse('Post not found', { status: 404 });
  }

  // In dev mode, we can generate the markdown on the fly
  // For production (output: export), this route won't be used anyway as the 
  // post-build script will create the physical .md files.
  
  const turndownService = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced',
  });

  const frontmatter = `---
title: "${post.title.replace(/"/g, '\\"')}"
description: "${post.excerpt.replace(/"/g, '\\"')}"
url: "https://manhattan-plumbing.pages.dev/news/${slug}"
---

# ${post.title}

`;

  const markdown = turndownService.turndown(post.content || '');
  
  return new NextResponse(frontmatter + markdown, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
}

// We need this for output: export to not complain, 
// even though this route handler technically shouldn't be exported
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
