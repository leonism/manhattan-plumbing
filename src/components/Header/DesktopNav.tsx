import React from "react";
import { NavItem } from "./navConfig";
import { ChevronDown } from "lucide-react";

interface DesktopNavProps {
  navItems: NavItem[];
  activeDropdown: string | null;
  toggleDropdown: (label: string) => void;
  theme: string; // Added theme prop
  scrolled: boolean; // Added scrolled prop
}

const DropdownButton = ({
  label,
  onClick,
  isActive,
  theme,
  scrolled,
}: {
  label: string;
  onClick: () => void;
  isActive: boolean;
  theme: string;
  scrolled: boolean;
}) => {
  const textColorClass =
    scrolled && theme === "light"
      ? "text-slate-800"
      : "text-white dark:text-white";
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-1 font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${textColorClass}`}
      aria-expanded={isActive}
      aria-haspopup="true">
      <span>{label}</span>
      <ChevronDown
        size={16}
        className={`transition-transform group-hover:rotate-180 ${textColorClass}`}
      />
    </button>
  );
};

const DropdownMenu = ({ children }: { children: React.ReactNode }) => (
  <ul
    className="absolute left-0 invisible py-2 mt-2 w-48 bg-white rounded-xl shadow-2xl border border-slate-200 opacity-0 transition-all duration-200 dark:bg-slate-800 group-hover:opacity-100 group-hover:visible"
    role="menu">
    {children}
  </ul>
);

const MenuItem = ({
  label,
  href,
  theme,
}: {
  label: string;
  href: string;
  theme: string;
}) => {
  // MenuItem text color will be based on its background (white/slate-800), so no direct change needed based on scroll/light mode here
  // It will contrast with its own dropdown menu background
  const linkClass =
    theme === "light"
      ? "block px-4 py-2 text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-700"
      : "block px-4 py-2 text-white transition-colors hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-700";
  return (
    <li role="none">
      <a
        href={href}
        className={linkClass} // Updated to use dynamic class
        role="menuitem">
        {label}
      </a>
    </li>
  );
};

const DesktopNav: React.FC<DesktopNavProps> = ({
  navItems,
  activeDropdown,
  toggleDropdown,
  theme,
  scrolled,
}) => {
  const linkColorClass =
    scrolled && theme === "light"
      ? "text-slate-800"
      : "text-white dark:text-white";

  return (
    <nav
      className="hidden lg:block"
      aria-label="Primary">
      <ul className="flex items-center space-x-8">
        {navItems.map((item) => (
          <li
            key={item.label}
            className="relative group">
            {item.children ? (
              <>
                <DropdownButton
                  label={item.label}
                  onClick={() => toggleDropdown(item.label)}
                  isActive={activeDropdown === item.label}
                  theme={theme} // Pass theme
                  scrolled={scrolled} // Pass scrolled
                />
                <DropdownMenu>
                  {" "}
                  {/* DropdownMenu itself doesn't need theme/scrolled as its colors are fixed */}
                  {item.children.map((child) => (
                    <MenuItem
                      key={child.label}
                      label={child.label}
                      href={child.href}
                      theme={theme} // Pass theme to MenuItem for its own logic if needed, though current logic is fine
                    />
                  ))}
                </DropdownMenu>
              </>
            ) : (
              <a
                href={item.href}
                className={`font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${linkColorClass}`}>
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNav;
