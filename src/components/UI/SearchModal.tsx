import React from "react";
import { Dialog } from "@headlessui/react";
import SearchBar from "../UI/SearchBar";
import { X } from "lucide-react";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="relative z-50">
      <div
        className="fixed inset-0 bg-black/30"
        aria-hidden="true"
      />

      <div className="fixed inset-0 flex items-start justify-center p-4 pt-16">
        <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 p-6 shadow-xl transition-all">
          <div className="flex justify-between items-center mb-4">
            <Dialog.Title className="text-lg font-medium text-slate-900 dark:text-white">
              Search
            </Dialog.Title>
            <button
              onClick={onClose}
              className="rounded-full p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700">
              <X size={20} />
            </button>
          </div>

          <SearchBar onSearch={onClose} />

          <div className="mt-4">
            <h3 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Popular Searches:
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "emergency plumbing",
                "water heater",
                "drain cleaning",
                "bathroom remodeling",
              ].map((term) => (
                <button
                  key={term}
                  onClick={() => {
                    // Implement search for this term
                    onClose();
                  }}
                  className="px-3 py-1 text-sm bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                  {term}
                </button>
              ))}
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default SearchModal;
