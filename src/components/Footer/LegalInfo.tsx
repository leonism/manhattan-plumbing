import React from "react";

interface LegalInfoProps {
  className?: string;
}

const LegalInfo: React.FC<LegalInfoProps> = ({ className }) => {
  return (
    <section
      aria-labelledby="legal-info"
      className={className}>
      <h3
        id="legal-info"
        className="text-xl font-semibold mb-6">
        Legal
      </h3>
      <nav aria-label="Legal information">
        <ul className="space-y-3">
          {[
            { href: "/privacy-policy", text: "Privacy Policy" },
            { href: "/terms-of-service", text: "Terms of Service" },
            { href: "/cookie-policy", text: "Cookie Policy" },
          ].map(({ href, text }) => (
            <li key={text}>
              <a
                href={href}
                className="text-slate-300 hover:text-white transition-colors">
                {text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default LegalInfo;
