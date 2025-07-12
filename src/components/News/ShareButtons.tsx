import React from 'react';
import { Facebook, Twitter, Linkedin, Mail, Send, Link as LinkIcon } from 'lucide-react';
import { Post } from '../../types/news';

interface ShareButtonsProps {
  post: Post;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ post }) => {
  const url = `https://manhattan-plumbing.pages.dev/news/${post.slug}`;
  const title = post.title;

  const networks = [
    {
      name: 'Facebook',
      icon: <Facebook size={20} />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    },
    {
      name: 'Twitter',
      icon: <Twitter size={20} />,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
    },
    {
      name: 'WhatsApp',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M12.83 11.17a1 1 0 0 0-1.66 0l-1.26 2.1a1 1 0 0 0 .83 1.53h2.52a1 1 0 0 0 .83-1.53l-1.26-2.1z"/><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12a9.96 9.96 0 0 0 6.33 9.12"/></svg>,
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(`${title} ${url}`)}`,
    },
    {
      name: 'Telegram',
      icon: <Send size={20} />,
      url: `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    },
    {
      name: 'Email',
      icon: <Mail size={20} />,
      url: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`,
    },
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url).then(() => {
      alert('Link copied to clipboard!');
    });
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-4">
      <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Share:</span>
      {networks.map((network) => (
        <a
          key={network.name}
          href={network.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 transition-colors"
          aria-label={`Share on ${network.name}`}
        >
          {network.icon}
        </a>
      ))}
      <button
        onClick={copyToClipboard}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 transition-colors"
        aria-label="Copy link"
      >
        <LinkIcon size={20} />
      </button>
    </div>
  );
};

export default ShareButtons;
