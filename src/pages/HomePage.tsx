import React from "react";
import Hero from "../components/Home/Hero";
import Services from "../components/Home/Services";
import About from "../components/Home/About";
import NewsSection from "../components/Home/NewsSection";
import Testimonials from "../components/Home/Testimonials";
import Contact from "../components/Home/Contact";
import CallToAction from "../components/Home/CallToAction";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <NewsSection />
      <Testimonials />
      <CallToAction />
      <Contact />
    </>
  );
};

export default HomePage;
