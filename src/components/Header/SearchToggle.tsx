import React, { useState } from "react";
import { Search } from "lucide-react";

interface SearchToggleProps {
  setIsSearchOpen: (isOpen: boolean) => void;
  theme: string; // Added theme prop
  scrolled: boolean; // Added scrolled prop
}

const SearchToggle: React.FC<SearchToggleProps> = ({
  setIsSearchOpen,
  theme,
  scrolled,
}) => {
  const iconColorClass =
    scrolled && theme === "light"
      ? "text-slate-800 hover:bg-slate-200 dark:text-white dark:hover:bg-slate-700"
      : "text-white hover:bg-slate-100 dark:text-white dark:hover:bg-slate-700";

  return (
    <button
      onClick={() => setIsSearchOpen(true)}
      className={`p-2 rounded-full transition-colors ${iconColorClass}`}
      aria-label="Search">
      <Search size={20} />
    </button>
  );
};

export default SearchToggle;
