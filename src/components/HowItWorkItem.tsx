import React from "react";

interface HowItWorkItemProps {
  title: string;
  text: string;
  icon: string;
}
function HowItWorkItem({ title, text, icon }: HowItWorkItemProps) {
  return (
    <div className='ml-[90px] pt-7'>
      <img src={icon} alt={title} className='mb-[36px] h-[70px]' />
      <h3 className='font-semibold text-[1.625]rem mb-[10px]'>{title}</h3>
      <p className='text-[#657280] text-sm'>{text}</p>
    </div>
  );
}

export default HowItWorkItem;
