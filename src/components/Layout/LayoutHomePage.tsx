import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

interface LayoutHomePageProps {
  children: React.ReactNode
}

const LayoutHomePage: React.FC<LayoutHomePageProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-white/90 transition-colors duration-300 dark:bg-slate-900">
      <Header isHomePage={true} />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  )
}

export default LayoutHomePage
