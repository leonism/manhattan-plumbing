import React, { useState } from "react";
import { Search } from "lucide-react";
import SearchModal from "../UI/SearchModal";

interface SearchToggleProps {
  theme: string;
  scrolled: boolean;
}

const SearchToggle: React.FC<SearchToggleProps> = ({ theme, scrolled }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const iconColorClass =
    scrolled && theme === "light"
      ? "text-slate-800 hover:bg-slate-200 dark:text-white dark:hover:bg-slate-700"
      : "text-white hover:bg-slate-100 dark:text-white dark:hover:bg-slate-700";

  return (
    <>
      <button
        onClick={() => setIsSearchOpen(true)}
        className={`p-2 rounded-full transition-colors ${iconColorClass}`}
        aria-label="Search">
        <Search size={20} />
      </button>
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
};

export default SearchToggle;
