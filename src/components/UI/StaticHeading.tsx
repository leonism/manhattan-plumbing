import React from "react";

interface StaticHeadingProps {
  title: string;
  subtitle: string;
  centered?: boolean;
  className?: string;
}

const StaticHeading: React.FC<StaticHeadingProps> = ({
  title,
  subtitle,
  centered = true,
  className,
}) => {
  return (
    <div
      className={`${centered ? "text-center" : ""} ${
        className ? className : ""
      }`}>
      <h1 className="mt-10 text-4xl md:text-5xl font-bold tracking-tight text-blue-600 dark:text-blue-400">
        {title}
      </h1>
      {subtitle && (
        <p className="text-sm md:text-md font-normal text-slate-600 max-w-3xl mx-auto dark:text-slate-300">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default StaticHeading;
