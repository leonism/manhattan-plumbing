import React from "react";
import { NavItem } from "./navConfig";
import { ChevronDown } from "lucide-react";
import Button from "../UI/Button";

interface MobileNavProps {
  navItems: NavItem[];
  isOpen: boolean;
  activeDropdown: string | null;
  toggleDropdown: (label: string) => void;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({
  navItems,
  isOpen,
  activeDropdown,
  toggleDropdown,
  setIsOpen,
}) => {
  return (
    <nav
      className={`lg:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-md transition-all duration-300 ${
        isOpen
          ? "max-h-screen opacity-100 visible"
          : "max-h-0 opacity-0 invisible"
      } overflow-hidden`}
      aria-label="Mobile navigation">
      <ul className="container mx-auto px-4 py-4 space-y-4">
        {navItems.map((item) => (
          <li key={item.label}>
            {item.children ? (
              <>
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="py-2 text-slate-800 dark:text-white font-medium"
                    aria-expanded={activeDropdown === item.label}
                    aria-haspopup="true">
                    {item.label}
                  </button>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      activeDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <ul
                  className={`ml-4 pl-2 border-l-2 border-slate-200 dark:border-slate-700 space-y-2 transition-all duration-200 ${
                    activeDropdown === item.label
                      ? "max-h-screen py-2 opacity-100 visible"
                      : "max-h-0 py-0 opacity-0 invisible"
                  } overflow-hidden`}
                  role="menu">
                  {item.children.map((child) => (
                    <li
                      key={child.label}
                      role="none">
                      <a
                        href={child.href}
                        className="block py-1 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        role="menuitem"
                        onClick={() => setIsOpen(false)}>
                        {child.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <a
                href={item.href}
                className="block py-2 text-slate-800 dark:text-white font-medium"
                onClick={() => setIsOpen(false)}>
                {item.label}
              </a>
            )}
          </li>
        ))}
        <li className="pt-2 mt-2 border-t border-slate-200 dark:border-slate-700">
          <Button
            href="#contact"
            fullWidth
            onClick={() => setIsOpen(false)}>
            Get a Quote
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
