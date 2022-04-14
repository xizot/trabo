import React from "react";

interface ButtonProps {
  text: string;
  size?: string;
  center?: boolean;
  primary?: boolean;
}
function Button({ text, size, center, primary }: ButtonProps) {
  return (
    <button
      className={`block rounded-[10px] border border-mainColor   font-semibold
      transition-all
      ${
        primary
          ? "bg-mainColor text-white hover:bg-white hover:text-mainColor"
          : "bg-white text-mainColor hover:bg-mainColor hover:text-white"
      }
      ${size === "small" ? "text-xs px-[19px] py-[12px]" : "px-10 py-5"}
      ${center ? "mx-auto" : ""}
      `}
    >
      {text}
    </button>
  );
}

export default Button;
