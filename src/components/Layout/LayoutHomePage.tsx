import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

interface LayoutHomePageProps {
  children: React.ReactNode;
}

const LayoutHomePage: React.FC<LayoutHomePageProps> = ({ children }) => {
  return (
    <div className="flex flex-col bg-white/90 min-h-screen dark:bg-slate-900 transition-colors duration-300">
      <Header isHomePage={true} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutHomePage;