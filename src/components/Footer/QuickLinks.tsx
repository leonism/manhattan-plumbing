import React from "react";

interface QuickLinksProps {
  className?: string;
}

const QuickLinks: React.FC<QuickLinksProps> = ({ className }) => {
  return (
    <section
      aria-labelledby="quick-links"
      className={className}>
      <h3
        id="quick-links"
        className="text-xl font-semibold mb-6">
        Quick Links
      </h3>
      <nav aria-label="Quick links">
        <ul className="space-y-3">
          {[
            { href: "/", text: "Home" },
            { href: "/news", text: "News & Updates" },
            { href: "/#services", text: "Services" },
            { href: "/#about", text: "About Us" },
            { href: "/#testimonials", text: "Testimonials" },
            { href: "/#contact", text: "Contact" },
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

export default QuickLinks;
