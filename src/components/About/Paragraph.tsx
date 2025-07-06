import React from "react";

const Paragraph: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "mb-6" }) => (
  <p className={`text-slate-600 dark:text-slate-300 ${className}`}>
    {children}
  </p>
);

export default Paragraph;
