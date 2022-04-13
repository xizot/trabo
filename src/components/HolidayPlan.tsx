import React from "react";
import HolidayPlanItem from "./HolidayPlanItem";
import SubTitle from "./Subtitle";
import Title from "./Title";

function HolidayPlan() {
  return (
    <div className='pt-[50x] pb-[150px] '>
      <div className='container'>
        <div className='mb-[62px]'>
          <div>
            <Title text='Perfect Holiday Plan' />
            <SubTitle
              classes='w-[561px]'
              text='If you contact most of the travel agencies to help you plan your vacation, they would offer a pre-planned holiday packages in group.'
            />
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
