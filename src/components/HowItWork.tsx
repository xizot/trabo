import React from "react";
import HowItWorkItem from "./HowItWorkItem";

function HowItWork() {
  return (
    <div className='py-20'>
      <div className='container flex'>
        <div className='flex-1'>
          <h3 className='font-semibold text-5xl mb-5'>How It Works</h3>
          <p className='text-[#777781] w-[245px]'>
            Apply here for a monthly subscription to Globetrotter, which is
            issued once a month.
          </p>
        </div>
        <HowItWorkItem
          title='Sign Up'
          text='Employees set their per paycheck contribution'
          icon='/assets/images/sign-up.png'
        />
        <HowItWorkItem
          title='Contribute'
          text='Employers make a matching contribution'
          icon='/assets/images/contribute.png'
        />
        <HowItWorkItem
          title='Travel'
          text='Employees book their travel & vacation with their Taab card'
          icon='/assets/images/travel.png'
        />
      </div>
    </div>
  );
}

export default HowItWork;
