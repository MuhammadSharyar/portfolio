import About from "@/components/shared/About";
import Contact from "@/components/shared/Contact";
import Footer from "@/components/shared/Footer";
import Hero from "@/components/shared/Hero";
import Portfolio from "@/components/shared/Portfolio";
import Services from "@/components/shared/Services";
import Skills from "@/components/shared/Skills";
import React from "react";

const Home = () => {
  return (
    <main className="w-full flex flex-col items-center">
      <Hero />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
