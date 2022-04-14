import React from "react";
import HolidayPlanItem from "./HolidayPlanItem";
import SubTitle from "./Subtitle";
import Title from "./Title";

function HolidayPlan() {
  return (
    <div className='pt-[50x] pb-[150px] '>
      <div className='container'>
        <div className='mb-[62px] flex items-center '>
          <div>
            <Title text='Perfect Holiday Plan' />
            <SubTitle
              classes='w-[561px]'
              text='If you contact most of the travel agencies to help you plan your vacation, they would offer a pre-planned holiday packages in group.'
            />
          </div>
          <div className='flex items-center ml-auto'>
            <button className='rounded-[10px] border-[1px] border-mainColor w-[60px] h-[60px] flex justify-center items-center'>
              <img
                className='w-[22px] h-[22px]'
                src='/assets/images/arrow-left.png'
                alt='arrow left'
              />
            </button>
            <button className='shadow-md ml-[30px] bg-mainColor rounded-[10px] border-[1px] border-mainColor w-[60px] h-[60px] flex justify-center items-center'>
              <img
                className='w-[22px] h-[22px]'
                src='/assets/images/arrow-right.png'
                alt='arrow right'
              />
            </button>
          </div>
        </div>
        <div className='grid grid-cols-3 gap-[45px] '>
          <HolidayPlanItem
            image='/assets/images/island.png'
            location='Maldives'
            title='Hurawalhi Island'
            details='7 Days Tour on 2 person'
            price={620}
            totalStar={4.7}
          />
          <HolidayPlanItem
            image='/assets/images/bali.png'
            location='Indonesia'
            title='Bali Province'
            details='4 days 2 person'
            price={780}
            totalStar={4.7}
          />
          <HolidayPlanItem
            image='/assets/images/messi.png'
            location='Spain'
            title='Barcelona city beach'
            details='4 days 4 person'
            price={850}
            totalStar={4.7}
          />
        </div>
      </div>
    </div>
  );
}

export default HolidayPlan;
