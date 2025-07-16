import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BackToBlogButton: React.FC = () => {
  return (
    <Link
      to="/news"
      className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 p-4 text-white shadow-lg transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600"
      aria-label="Back to Blog"
    >
      <ArrowLeft className="h-6 w-6" />
    </Link>
  );
};

export default BackToBlogButton;
