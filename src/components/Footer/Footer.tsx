import React from "react";
import CompanyInfo from "../Footer/CompanyInfo";
import QuickLinks from "../Footer/QuickLinks";
import LegalInfo from "../Footer/LegalInfo";
import ServicesList from "../Footer/ServicesList";
import ContactInfo from "../Footer/ContactInfo";

const currentYear = new Date().getFullYear();

const Footer: React.FC = () => (
  <footer
    className="bg-slate-900 text-white pt-16 pb-8"
    role="contentinfo">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <CompanyInfo className="lg:col-span-2" />
        <QuickLinks />
        <ServicesList />
        <ContactInfo />
      </div>

      <div className="border-t border-slate-800 mt-12 pt-8 text-center">
        <p className="text-slate-400 text-sm">
          <a
            href="/privacy-policy"
            className="hover:text-white transition-colors"
            aria-label="Privacy Policy">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a
            href="/terms-of-service"
            className="hover:text-white transition-colors"
            aria-label="Terms of Service">
            Terms of Service
          </a>{" "}
          |{" "}
          <a
            href="/cookie-policy"
            className="hover:text-white transition-colors"
            aria-label="Terms of Service">
            Cookie Policy
          </a>
          <br />© {currentYear} Manhattan Plumbing. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
