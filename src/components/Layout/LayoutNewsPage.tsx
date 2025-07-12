import React from 'react'
import Header from '../Header/Header'
import Footer from '../../components/Footer/Footer'

interface LayoutNewsPageProps {
  children: React.ReactNode
}

const LayoutNewsPage: React.FC<LayoutNewsPageProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-white/90 transition-colors duration-300 dark:bg-slate-900">
      <Header isHomePage={false} />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  )
}

export default LayoutNewsPage
