import React from 'react'

const LegalInfo: React.FC = () => (
  <div>
    <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
    <ul className="space-y-2">
      <li>
        <a href="/privacy-policy" className="text-slate-400 hover:text-white transition-colors">
          Privacy Policy
        </a>
      </li>
      <li>
        <a href="/terms-of-service" className="text-slate-400 hover:text-white transition-colors">
          Terms of Service
        </a>
      </li>
      <li>
        <a href="/cookie-policy" className="text-slate-400 hover:text-white transition-colors">
          Cookie Policy
        </a>
      </li>
    </ul>
  </div>
)

export default LegalInfo