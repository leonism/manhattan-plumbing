import React, { useState } from 'react'
import Logo from '../UI/Logo'
import ThemeToggle from './ThemeToggle'
import SearchToggle from './SearchToggle'
import MenuToggle from './MenuToggle'
import GetQuoteButton from './GetQuoteButton'
import useScrollHandler from './useScrollHandler'
import { useTheme } from '../../hooks/useTheme'
import { navItems } from './navConfig'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

interface HeaderProps {
  isHomePage?: boolean
}

const Header: React.FC<HeaderProps> = ({ isHomePage = false }) => {
  const { theme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const scrolled = useScrollHandler()
  const toggleMenu = () => setIsOpen(!isOpen)
  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label)
  }

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled || !isHomePage
          ? 'bg-white py-3 shadow-md dark:bg-slate-900'
          : 'bg-transparent py-6'
      }`}
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Logo />
          {/* Desktop Navigation */}
          <DesktopNav
            navItems={navItems}
            activeDropdown={activeDropdown}
            toggleDropdown={toggleDropdown}
            theme={theme}
            scrolled={scrolled}
            isHomePage={isHomePage}
          />
          <div className="hidden items-center lg:flex">
            <SearchToggle theme={theme} scrolled={scrolled} isHomePage={isHomePage} />
            <ThemeToggle theme={theme} scrolled={scrolled} isHomePage={isHomePage} />
            <GetQuoteButton />
          </div>

          {/* Mobile Navigation Button */}
          <div className="mt-1 flex items-center space-x-1 lg:hidden">
            <ThemeToggle theme={theme} scrolled={scrolled} isHomePage={isHomePage} />
            <SearchToggle theme={theme} scrolled={scrolled} isHomePage={isHomePage} />
            <MenuToggle
              isOpen={isOpen}
              toggleMenu={toggleMenu}
              scrolled={scrolled}
              theme={theme}
              isHomePage={isHomePage}
            />
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <MobileNav
        navItems={navItems}
        isOpen={isOpen}
        activeDropdown={activeDropdown}
        toggleDropdown={toggleDropdown}
        setIsOpen={setIsOpen}
      />
    </header>
  )
}

export default Header
