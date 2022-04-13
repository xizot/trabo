import React from "react";
import Button from "./Button";
import SearchBar from "./SearchBar";

function Hero() {
  return (
    <div className='mb-[80px]'>
      <div className='container flex mb-[70px]'>
        <div className='mr-32'>
          <h3 className='font-sora font-bold text-[3.875rem] mb-5'>
            Tour your dream destination with tourve.
          </h3>

          <p className='text-xl text-[#777781] mb-10'>
            Plan and book your perfect trip with expert advice, travel tips,
            destination information and inspiration from us.
          </p>
          <Button text='Discover Now' />
        </div>
        <div>
          <img src='/assets/images/hero-image.png' alt='icon' />
        </div>
      </div>
      <SearchBar />
    </div>
  );
}

export default Hero;
