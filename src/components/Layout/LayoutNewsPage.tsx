import React from 'react'
import Header from '../Header/Header'
import Footer from '../../components/Footer/Footer'
import BackToTop from '../UI/BackToTop'

interface LayoutNewsPageProps {
  children: React.ReactNode
  title: string
  description: string
  canonical: string
  ogTitle: string
  ogDescription: string
  ogImage: string
  ogUrl?: string
}

import SEO from '../SEO/SEO'

const LayoutNewsPage: React.FC<LayoutNewsPageProps> = ({
  children,
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
}) => {
  return (
    <div className="flex min-h-screen flex-col bg-white/90 transition-colors duration-300 dark:bg-slate-900">
      <Header isHomePage={false} />
      <SEO
        title={title}
        description={description}
        canonical={canonical}
        ogTitle={ogTitle}
        ogDescription={ogDescription}
        ogImage={ogImage}
        ogUrl={ogUrl || canonical}
      />
      <main className="grow">{children}</main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default LayoutNewsPage
