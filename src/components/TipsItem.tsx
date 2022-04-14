import React from "react";

interface TipsItemProps {
  image: string;
  title: string;
  date: string;
  author: string;
  overview: string;
}

function TipsItem({ image, title, date, author, overview }: TipsItemProps) {
  return (
    <div>
      <img src={image} alt='title' className='rounded-[10px] mb-[30px]' />
      <h3 className='font-semibold text-[1.375rem] text-[#304050] mb-[12px]'>
        {title}
      </h3>
      <span className='text-xs block text-[#9A9FA5] mb-[20px]'>
        By <b className='text-[#304050] font-medium'>{author}</b> - {date}
      </span>
      <p className='text-[#657280]'>{overview}</p>
    </div>
  );
}

export default TipsItem;
