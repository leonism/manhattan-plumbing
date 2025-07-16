import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import BackToTop from '../UI/BackToTop'
import SEO from '../SEO/SEO'

interface LayoutProps {
  children: React.ReactNode
  title: string
  description: string
  keywords: string[]
  canonical: string
  ogTitle: string
  ogDescription: string
  ogImage: string
  ogUrl: string
  jsonLd?: object;
}

const Layout: React.FC<LayoutProps> = ({ children, title, description, keywords, canonical, ogTitle, ogDescription, ogImage, ogUrl, jsonLd }) => {
  return (
    <div className="flex min-h-screen flex-col bg-white/90 transition-colors duration-300 dark:bg-slate-900">
      <Header />
      <SEO
        title={title}
        description={description}
        keywords={keywords}
        canonical={canonical}
        ogTitle={ogTitle}
        ogDescription={ogDescription}
        ogImage={ogImage}
        ogUrl={ogUrl}
        jsonLd={jsonLd}
      />
      <main id="main-content" className="grow">{children}</main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default Layout
