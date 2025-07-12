import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-white/90 transition-colors duration-300 dark:bg-slate-900">
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
