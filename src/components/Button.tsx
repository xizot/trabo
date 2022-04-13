import React from "react";

interface ButtonProps {
  text: string;
  size?: string;
  center?: boolean;
}
function Button({ text, size, center }: ButtonProps) {
  return (
    <button
      className={`block rounded-[10px] border border-mainColor  text-mainColor font-semibold
      hover:bg-mainColor hover:text-white transition-all
      ${size === "small" ? "text-xs px-[19px] py-[12px]" : "px-10 py-5"}
      ${center ? "mx-auto" : ""}
      `}
    >
      {text}
    </button>
  );
}

export default Button;
