import React from 'react'
import { Dialog } from '@headlessui/react'
import SearchBar from './SearchBar'

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50" as="div">
      <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs" aria-hidden="true" />

      <div className="fixed inset-0 overflow-y-auto p-4 pt-[10vh] sm:pt-[15vh]">
        <Dialog.Panel className="relative mx-auto max-w-2xl w-full bg-white dark:bg-slate-800 rounded-xl shadow-2xl transform transition-all">
          <SearchBar onClose={onClose} />
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}

export default SearchModal
