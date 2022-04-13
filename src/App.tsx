import React from "react";
import Hero from "./components/Hero";
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
    </div>
  );
}

export default App;
