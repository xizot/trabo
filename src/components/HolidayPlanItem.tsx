import React from "react";

interface HolidayPlanItemProps {
  image: string;
  location: string;
  title: string;
  details: string;
  price: number;
  totalStar: number;
  locationColor?: string;
}

function HolidayPlanItem({
  image,
  location,
  title,
  details,
  price,
  totalStar,
  locationColor,
}: HolidayPlanItemProps) {
  return (
    <div className='shadow-md'>
      <img src={image} alt={title} className='rounded-t-md ' />
      <div className='p-[20px] bg-white'>
        <div className='mb-[18px] flex items-center'>
          <img
            src='/assets/images/point.png'
            alt='point'
            className={`text-${locationColor} mr-4`}
          />
          <span className={`text-${locationColor} text-sm`}>{location}</span>
        </div>
        <h3 className='font-semibold text-[1.375rem] mb-[16px]'>{title}</h3>
        <p className='text-xs mb-[18px] text-[#777781]'>{details}</p>
        <div className='flex items-center justify-between'>
          <p className='text-mainColor font-semibold text-[1.75rem]'>
            {price}$
          </p>
          <div className='flex items-center'>
            <img
              src='/assets/images/star.png'
              alt='star'
              className='w-[18px] h-[18px] mr-[10px]'
            />
            <span className='block  text-[#777781] text-[1.375rem]'>
              {totalStar}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HolidayPlanItem;
