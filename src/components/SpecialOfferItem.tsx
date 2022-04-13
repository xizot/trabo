import React from "react";
import Button from "./Button";

interface SpecialOfferItemProps {
  price: number;
  country: string;
  details: string;
  image: string;
}

function SpecialOfferItem({
  price,
  country,
  details,
  image,
}: SpecialOfferItemProps) {
  return (
    <div>
      <div className='rounded-[10px] relative'>
        <p className='absolute top-4 right-4 bg-white rounded-full text-mainColor text-[1.125rem] font-semibold px-[20px] py-[9px]'>
          $ {price}
        </p>
        <img src={image} alt={country} />
      </div>
      <div className='p-5 flex items-center justify-between'>
        <div>
          <h3 className='font-semibold text-[1.375rem] mb-3'>{country}</h3>
          <p className='text-xs text-[#657280]'>{details}</p>
        </div>
        <Button text='Book Now' size='small' />
      </div>
    </div>
  );
}

export default SpecialOfferItem;
