import React from "react";
import Button from "./Button";
import TipsItem from "./TipsItem";

function Tips() {
  return (
    <div className='bg-white py-[150px]'>
      <div className='container'>
        <div className='grid grid-cols-3 gap-75px mb-[75px]'>
          <TipsItem
            author='Admin'
            date='January 25, 2021'
            image='/assets/images/tips/tip-1.jpg'
            title='Including animation in your design system.'
            overview='A leisurely start as not expected at our next campsite....'
          />
          <TipsItem
            author='Admin'
            date='January 25, 2021'
            image='/assets/images/tips/tip-2.jpg'
            title='Including animation in your design system.'
            overview='There is always one constant about international travel...'
          />
          <TipsItem
            author='Admin'
            date='January 25, 2021'
            image='/assets/images/tips/tip-3.jpg'
            title='Including animation in your design system.'
            overview='Just for once we were trying to forget Covid . We were out for the morning...'
          />
        </div>
        <Button text='All Blog Posts' center />
      </div>
    </div>
  );
}

export default Tips;
