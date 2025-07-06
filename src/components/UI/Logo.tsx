import React from "react";
import { Droplets } from "lucide-react";

interface LogoProps {
  inverted?: boolean;
}

const Logo: React.FC<LogoProps> = ({ inverted = false }) => {
  return (
    <a
      href="/"
      className="flex items-center space-x-1">
      <Droplets
        size={32}
        className={`${
          inverted ? "text-blue-400" : "text-blue-600 dark:text-blue-400"
        }`}
      />
      <div
        className={`font-bold text-xl mt-auto ${
          inverted ? "text-white" : "text-slate-800 dark:text-white"
        }`}>
        Manhattan
        <span className="text-blue-600 dark:text-blue-400">Plumbing</span>
      </div>
    </a>
  );
};

export default Logo;
