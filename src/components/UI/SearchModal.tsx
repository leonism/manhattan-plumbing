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
        <Dialog.Panel className="relative mx-auto w-full max-w-2xl transform rounded-xl bg-white shadow-2xl transition-all dark:bg-slate-800">
          <SearchBar onClose={onClose} />
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}

export default SearchModal
