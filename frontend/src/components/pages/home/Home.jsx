import React from "react";
import HeroSection from "./Hero";
import Feature from "./Feature";
import HowItWork from "./HowItWork";
import About from "./About";
import Contact from "./Contact";
export default function Home() {
  return (
    <div id="home" className="bg-gray-900">
      <HeroSection />
      <Feature />
      <HowItWork />
      <About />
      <Contact />
    </div>
  );
}
