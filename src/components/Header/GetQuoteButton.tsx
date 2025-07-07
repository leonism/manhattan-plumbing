import React from "react";
import { SparklesIcon } from "@heroicons/react/24/outline";
import Button from "../UI/Button";

const GetQuoteButton: React.FC = () => {
  return (
    <Button
      href="/#contact"
      className="group"
      aria-label="Get a personalized quote">
      <SparklesIcon
        className="mr-2 w-5 h-5 text-current text-white transition-colors group-hover:text-white dark:text-blue-300 dark:group-hover:text-white"
        aria-hidden="true"
      />
      Get a Quote
    </Button>
  );
};

export default GetQuoteButton;
