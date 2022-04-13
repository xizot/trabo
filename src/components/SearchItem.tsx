import React from "react";

interface SearchItemProps {
  title: string;
  text: string;
  icon: string;
}
function SearchItem({ title, text, icon }: SearchItemProps) {
  return (
    <div className='w-[152px]'>
      <h3 className='font-inter font-medium text-xl mb-[1.125rem]'>{title}</h3>
      <div className='flex items-center justify-between border-b-[1px] pb-[10px]'>
        <p className='font-light text-xs truncate text-[#7D7E87] ... mr-[40px] flex-1'>
          {text}
        </p>
        <img src={icon} alt='icon' className='w-3 h-auto' />
      </div>
    </div>
  );
}

export default SearchItem;
