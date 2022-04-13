import React from "react";
import Button from "./Button";
import SpecialOfferItem from "./SpecialOfferItem";
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
          classes='w-[480px]'
        />
        <div className='grid grid-cols-4 gap-[35px] mt-[60px] mb-[50px]'>
          <SpecialOfferItem
            country='Japan'
            details='6 day 6 Nights'
            image='/assets/images/japan.jpg'
            price={450}
          />
          <SpecialOfferItem
            country='Italy'
            details='7 day 6 Nights'
            image='/assets/images/italy.png'
            price={390}
          />
          <SpecialOfferItem
            country='Canada'
            details='6 day 5 Nights'
            image='/assets/images/canada.png'
            price={430}
          />
          <SpecialOfferItem
            country='Brazil'
            details='6 day 5 Nights'
            image='/assets/images/brazil.png'
            price={300}
          />
        </div>
        <Button text='See More' center={true} />
      </div>
    </div>
  );
}

export default SpecialOffer;
