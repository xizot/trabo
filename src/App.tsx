import React from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import HolidayPlan from "./components/HolidayPlan";
import HowItWork from "./components/HowItWork";
import Navbar from "./components/Navbar";
import SpecialOffer from "./components/SpecialOffer";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <HowItWork />
      <SpecialOffer />
      <About />
      <HolidayPlan />
    </div>
  );
}

export default App;
