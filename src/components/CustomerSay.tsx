import React from "react";
import ArrowButton from "./ArrowButton";
import CustomerSayItem from "./CustomerSayItem";
import Title from "./Title";

function CustomerSay() {
  return (
    <div className=' bg-[#fff3f3] py-[75px]'>
      <div className='container'>
        <Title
          text='What Our Customer Say About Us'
          classes='w-[475px] text-center mx-auto mb-[64px]'
        />
        <div className='grid grid-cols-3 gap-[35px]'>
          <CustomerSayItem
            review='This a very belated note (for which apologies) to thank you for the very outstanding services you provided to my daughter and to me during our trip to the Copper Canyon in September.'
            name='Patrick Mills'
            type='Regular Client'
            avatar='/assets/images/avatars/mills.png'
            classes='mt-[75px]'
          />
          <div className='grid grid-rows-2'>
            <CustomerSayItem
              review='Its very nice and quality services. I recommend it.'
              name='Paul Johnston'
              type='Regular Client'
              avatar='/assets/images/avatars/paul.png'
            />
            <CustomerSayItem
              review='My nephew and I had a blast! All of the accommodations were perfect!'
              name='Jon Hasan'
              type='Regular Client'
              avatar='/assets/images/avatars/jon.png'
            />
          </div>
          <CustomerSayItem
            review=' I loved the capital of this country as I felt like it was only the time I got to see real Portugal. Its very nice and quality services. I recommend it.'
            name='Patrick Mills'
            type='Regular Client'
            avatar='/assets/images/avatars/patrick.png'
            classes='mt-[35px]'
          />
        </div>
        <div className='flex items-center ml-auto justify-end'>
          <ArrowButton icon='/assets/images/arrow-left.png' />
          <ArrowButton
            active
            icon='/assets/images/arrow-right.png'
            classes='ml-[30px]'
          />
        </div>
      </div>
    </div>
  );
}

export default CustomerSay;
