import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

const BackToBlogButton: React.FC = () => {
  return (
    <div className="mt-12 text-center">
      <Link
        to="/news"
        className="inline-flex items-center rounded-md bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-md transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600"
      >
        <span className="mr-2 flex h-8 w-8 items-center justify-center rounded-full border border-white bg-transparent">
          <ArrowUp className="h-5 w-5" />
        </span>
        Back to Blog
      </Link>
    </div>
  );
};

export default BackToBlogButton;
