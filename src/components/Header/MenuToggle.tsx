import React from "react";
import { Menu, X } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

interface MenuToggleProps {
  isOpen: boolean;
  toggleMenu: () => void;
  scrolled: boolean;
}

const MenuToggle: React.FC<MenuToggleProps> = ({
  isOpen,
  toggleMenu,
  scrolled,
}) => {
  const { theme } = useTheme();
  const Icon = isOpen ? X : Menu;

  const iconColorClass =
    scrolled && theme === "light"
      ? "text-slate-800 hover:bg-slate-200 dark:text-white dark:hover:bg-slate-700"
      : "text-white hover:bg-slate-100 dark:text-white dark:hover:bg-slate-700";

  return (
    <button
      onClick={toggleMenu}
      className={`p-2 rounded-full transition-colors ${iconColorClass}`}
      aria-label="Toggle menu"
      aria-expanded={isOpen}>
      <Icon
        size={20}
        aria-hidden="true"
        focusable="false"
      />
    </button>
  );
};

export default MenuToggle;
