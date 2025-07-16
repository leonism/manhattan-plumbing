import React from 'react';

interface SkipToContentProps {
  targetId?: string;
  label?: string;
}

const SkipToContent: React.FC<SkipToContentProps> = ({
  targetId = 'main-content',
  label = 'Skip to main content',
}) => {
  return (
    <a
      href={`#${targetId}`}
      className="absolute left-1/2 -translate-x-1/2 -translate-y-full rounded-md bg-blue-600 p-3 text-white focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:focus:ring-blue-400"
      aria-label={label}
    >
      {label}
    </a>
  );
};

export default SkipToContent;
