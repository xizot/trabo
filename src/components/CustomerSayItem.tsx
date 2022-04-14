import React from "react";

interface CustomerSayItemProps {
  name: string;
  type: string;
  avatar: string;
  review: string;
  classes?: string;
}

function CustomerSayItem({
  name,
  type,
  avatar,
  review,
  classes = "",
}: CustomerSayItemProps) {
  return (
    <div className={classes}>
      <div className='p-[30px] rounded-[10px] bg-white shadow-md '>
        <p className='text-[1.125rem]  text-[#777781] mb-[25px]'>"{review}"</p>
        <div className='flex items-center'>
          <img
            src={avatar}
            alt={name}
            className='p-[2px] rounded-[8px] shadow-md mr-[15px] w-[64px] h-[64px]'
          />
          <div>
            <h3 className='text-[#304050] font-medium text-[1.25rem] '>
              {name}
            </h3>
            <span className='text-xs text-[#777781]'>{type}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerSayItem;
