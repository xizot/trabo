import React from "react";

interface ArrowButtonProps {
  icon: string;
  active?: boolean;
  classes?: string;
}

function ArrowButton({ icon, active, classes }: ArrowButtonProps) {
  return (
    <button
      className={`rounded-[10px] border-[1px] border-mainColor w-[60px] h-[60px] flex justify-center items-center
    hover:opacity-70 transition-all ${
      active ? "bg-mainColor" : "bg-white"
    } ${classes}
    `}
    >
      <img className='w-[22px] h-[22px]' src={icon} alt='' />
    </button>
  );
}

export default ArrowButton;
