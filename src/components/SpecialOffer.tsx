import React from "react";
import SubTitle from "./Subtitle";
import Title from "./Title";

function SpecialOffer() {
  return (
    <div className='py-10'>
      <div className='container'>
        <Title text='Special offers & Discounts' center />
        <SubTitle
          text='Travel by water often provided more commfort and speed than land-travel.'
          center
          width='480px'
        />
      </div>
    </div>
  );
}

export default SpecialOffer;
