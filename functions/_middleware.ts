// Cloudflare Pages Edge Middleware for Accept: text/markdown Content Negotiation
// Automatically fetches and returns pre-rendered Markdown page versions for AI agents

export const onRequest = async (context: {
  request: Request;
  env: {
    ASSETS: {
      fetch: (request: Request | string | URL) => Promise<Response>;
    };
  };
  next: () => Promise<Response>;
}) => {
  const request = context.request;
  const accept = request.headers.get('Accept') || '';

  // Check if the agent explicitly requests text/markdown
  if (accept.includes('text/markdown')) {
    const url = new URL(request.url);
    let pathname = url.pathname;

    // Map the incoming HTML routes to their pre-rendered markdown equivalents
    if (pathname === '/' || pathname === '/index.html') {
      pathname = '/index.md';
    } else if (pathname.endsWith('/')) {
      pathname = pathname + 'index.md';
    } else if (!pathname.includes('.')) {
      pathname = pathname + '/index.md';
    } else if (pathname.endsWith('.html')) {
      pathname = pathname.replace(/\.html$/, '/index.md');
    }

    if (pathname.endsWith('.md')) {
      const markdownUrl = new URL(pathname, url.origin);
      
      try {
        // Fetch the statically exported .md file from the ASSETS binding
        const response = await context.env.ASSETS.fetch(markdownUrl);

        if (response.ok) {
          const text = await response.text();
          // Approximate token count based on standard 1 token ~ 4 characters approximation
          const tokens = Math.round(text.length / 4);

          const headers = new Headers(response.headers);
          headers.set('Content-Type', 'text/markdown; charset=utf-8');
          headers.set('x-markdown-tokens', tokens.toString());
          headers.set('Access-Control-Allow-Origin', '*');

          return new Response(text, {
            status: response.status,
            statusText: response.statusText,
            headers,
          });
        }
      } catch (error) {
        console.error('Error fetching markdown asset:', error);
      }
    }
  }

  // Otherwise, default to standard HTML or asset serving
  return context.next();
};
