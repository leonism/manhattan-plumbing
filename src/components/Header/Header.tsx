import React, { useState } from "react";
import Logo from "../UI/Logo";
import ThemeToggle from "./ThemeToggle";
import SearchToggle from "./SearchToggle";
import MenuToggle from "./MenuToggle";
import GetQuoteButton from "./GetQuoteButton";
import useScrollHandler from "./useScrollHandler";
import { useTheme } from "../../context/ThemeContext";
import { navItems } from "./navConfig";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Header: React.FC = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const scrolled = useScrollHandler();
  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white dark:bg-slate-900 shadow-md py-3"
          : "bg-transparent py-6"
      }`}
      aria-label="Main navigation">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Logo />
          {/* Desktop Navigation */}
          <DesktopNav
            navItems={navItems}
            activeDropdown={activeDropdown}
            toggleDropdown={toggleDropdown}
            theme={theme} // Added theme prop
            scrolled={scrolled} // Added scrolled prop
          />
          <div className="hidden lg:flex items-center gap-1">
            <SearchToggle
              theme={theme}
              scrolled={scrolled}
            />{" "}
            {/* Added theme and scrolled props */}
            <ThemeToggle
              theme={theme}
              scrolled={scrolled}
            />{" "}
            {/* Added theme and scrolled props, ensure ThemeToggle can accept these */}
            <GetQuoteButton />
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex lg:hidden items-center space-x-3">
            <ThemeToggle
              theme={theme}
              scrolled={scrolled}
            />{" "}
            {/* Added theme and scrolled props */}
            <SearchToggle
              theme={theme}
              scrolled={scrolled}
            />{" "}
            {/* Added theme and scrolled props */}
            <MenuToggle
              isOpen={isOpen}
              toggleMenu={toggleMenu}
              scrolled={scrolled}
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
  );
};

export default Header;
