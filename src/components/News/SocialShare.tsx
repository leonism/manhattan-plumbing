"use client"
import React from 'react'
import { Twitter, Facebook, Linkedin, Link2 } from 'lucide-react'

interface SocialShareProps {
  title: string
  url: string
}

export const SocialShare: React.FC<SocialShareProps> = ({ title, url }) => {
  const encodedTitle = encodeURIComponent(title)
  const encodedUrl = encodeURIComponent(url)

  const shareLinks = [
    {
      name: 'Twitter',
      icon: <Twitter size={18} />,
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      color: 'hover:text-[#1DA1F2] hover:bg-[#1DA1F2]/10'
    },
    {
      name: 'Facebook',
      icon: <Facebook size={18} />,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: 'hover:text-[#1877F2] hover:bg-[#1877F2]/10'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={18} />,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: 'hover:text-[#0A66C2] hover:bg-[#0A66C2]/10'
    }
  ]

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url)
    alert('Link copied to clipboard!')
  }

  return (
    <div className="flex items-center gap-4 py-8 border-t border-slate-100 dark:border-slate-800">
      <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Share:</span>
      <div className="flex gap-2">
        {shareLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-full text-slate-500 transition-all duration-300 ${link.color}`}
            aria-label={`Share on ${link.name}`}
          >
            {link.icon}
          </a>
        ))}
        <button
          onClick={copyToClipboard}
          className="p-2 rounded-full text-slate-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
          aria-label="Copy link"
        >
          <Link2 size={18} />
        </button>
      </div>
    </div>
  )
}
