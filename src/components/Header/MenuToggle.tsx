import React from "react";
import { Menu, X } from "lucide-react";

interface MenuToggleProps {
  isOpen: boolean; // Indicates whether the menu is open
  toggleMenu: () => void; // Function to toggle the menu state
}

const MenuToggle: React.FC<MenuToggleProps> = ({ isOpen, toggleMenu }) => {
  const Icon = isOpen ? X : Menu; // Dynamically select the icon based on `isOpen`

  return (
    <button
      onClick={toggleMenu}
      className="p-2 text-white dark:text-white"
      aria-label="Toggle menu"
      aria-expanded={isOpen} // Accessibility: Indicates the state of the button
    >
      <Icon
        size={24}
        aria-hidden="true"
        focusable="false"
      />{" "}
      {/* Icon is purely decorative */}
    </button>
  );
};

export default MenuToggle;
