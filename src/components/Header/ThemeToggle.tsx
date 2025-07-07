import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

interface ThemeToggleProps {
  theme: string; // Prop for current theme (passed from Header)
  scrolled: boolean; // Prop for scroll state (passed from Header)
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, scrolled }) => {
  const { toggleTheme } = useTheme();

  const iconColorClass = scrolled
    ? "text-slate-800 hover:bg-slate-200 dark:text-white dark:hover:bg-slate-700"
    : "text-white hover:bg-slate-100 dark:text-white dark:hover:bg-slate-700";

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full transition-colors ${iconColorClass}`}
      aria-label={
        theme === "light" ? "Switch to dark theme" : "Switch to light theme"
      }>
      {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
};

export default ThemeToggle;
