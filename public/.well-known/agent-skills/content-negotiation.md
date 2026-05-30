# Content Negotiation Skill

This site supports standard-compliant content negotiation for AI agents and crawlers.

## Features

- Served via Cloudflare Pages Edge Functions.
- Direct delivery of clean, pre-rendered Markdown format optimized for LLMs.
- Zero client-side overhead for search engine optimization.

## Usage

AI agents can retrieve pages in Markdown format by sending standard HTTP requests:

- **Method**: `GET`
- **Headers**:
  - `Accept: text/markdown`

The response will return with a `Content-Type: text/markdown` header and an estimated token count in the `x-markdown-tokens` header.
