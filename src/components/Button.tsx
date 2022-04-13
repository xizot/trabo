import React from "react";

interface ButtonProps {
  text: string;
}
function Button({ text }: ButtonProps) {
  return (
    <button className='rounded-[10px] border border-mainColor px-10 py-5 text-mainColor font-semibold'>
      {text}
    </button>
  );
}

export default Button;
