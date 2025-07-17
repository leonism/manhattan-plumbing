import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout/Layout'

const NotFoundPage: React.FC = () => {
  return (
    <Layout
      keywords={['404', 'page not found', 'error page', 'manhattan plumbing']}
      ogTitle="404 Not Found | Manhattan Plumbing"
      ogDescription="The page you are looking for does not exist."
      ogImage="https://manhattan-plumbing.pages.dev/logo.png"
      ogUrl="https://manhattan-plumbing.pages.dev/404"
      title="404 Not Found | Manhattan Plumbing"
      description="The page you are looking for does not exist."
      canonical="https://manhattan-plumbing.pages.dev/404"
    >
      <main className="flex min-h-screen items-center justify-center bg-slate-50 py-20 text-slate-800 dark:bg-slate-900 dark:text-slate-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-6xl font-extrabold text-blue-600 dark:text-blue-400">404</h1>
          <h2 className="mb-6 text-3xl font-bold">Page Not Found</h2>
          <p className="mb-8 text-lg">
            Oops! The page you are looking for might have been removed, had its name changed, or is
            temporarily unavailable.
          </p>
          <Link
            to="/"
            className="inline-flex items-center rounded-md bg-blue-600 px-6 py-3 font-semibold text-white shadow-md transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Go to Homepage
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default NotFoundPage
