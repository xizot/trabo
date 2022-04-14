import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import CustomerSay from "./components/CustomerSay";
import Hero from "./components/Hero";
import HolidayPlan from "./components/HolidayPlan";
import HowItWork from "./components/HowItWork";
import Navbar from "./components/Navbar";
import SpecialOffer from "./components/SpecialOffer";
import Tips from "./components/Tips";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <HowItWork />
      <SpecialOffer />
      <About />
      <HolidayPlan />
      <CustomerSay />
      <Tips />
      <Contact />
    </div>
  );
}

export default App;
