import React from 'react'
import { MDXProvider } from '@mdx-js/react'

interface NewsPostBodyProps {
  body: React.ComponentType<Record<string, unknown>> | string
}

const components = {
  h1: () => null, // Ensure h1 from MDX is not rendered
}

const NewsPostBody: React.FC<NewsPostBodyProps> = ({ body }) => {
  return (
    <div className="prose prose-lg prose-slate dark:prose-invert prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl prose-h1:font-extrabold prose-h2:font-bold prose-h3:font-semibold prose-h4:font-medium prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline prose-a:hover:underline prose-img:rounded-lg prose-img:shadow-md prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-4 prose-blockquote:italic prose-p:leading-relaxed prose-li:leading-relaxed prose-li:marker:text-blue-500 prose-code:bg-slate-100 dark:prose-code:bg-slate-800 prose-code:px-1 prose-code:rounded-sm prose-strong:font-bold prose-table:w-full prose-table:table-auto prose-table:border-collapse prose-table:rounded-lg prose-table:overflow-hidden prose-th:bg-slate-200 dark:prose-th:bg-slate-700 prose-th:p-3 prose-th:text-left prose-th:font-semibold prose-td:p-3 prose-td:border-b prose-td:border-slate-200 dark:prose-td:border-slate-700 prose-ul:list-disc prose-ul:pl-5 prose-ol:list-decimal prose-ol:pl-5 mx-auto max-w-4xl">
      {typeof body === 'string' ? (
        <div dangerouslySetInnerHTML={{ __html: body }} />
      ) : (
        <MDXProvider components={components}>{React.createElement(body)}</MDXProvider>
      )}
    </div>
  )
}

export default NewsPostBody
