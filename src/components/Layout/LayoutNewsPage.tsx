import React from 'react'
import Header from '../Header/Header'
import Footer from '../../components/Footer/Footer'

interface LayoutNewsPageProps {
  children: React.ReactNode
}

const LayoutNewsPage: React.FC<LayoutNewsPageProps> = ({ children }) => {
  return (
    <div className="flex flex-col bg-white/90 min-h-screen dark:bg-slate-900 transition-colors duration-300">
      <Header isHomePage={false} />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  )
}

export default LayoutNewsPage
