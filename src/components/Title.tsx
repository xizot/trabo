import React from "react";
interface TitleProps {
  text: string;
  center?: boolean;
}
function Title({ text, center }: TitleProps) {
  return (
    <h3
      className={`text-[2.75rem] font-bold mb-[14px] ${
        center ? "text-center" : ""
      }`}
    >
      {text}
    </h3>
  );
}

export default Title;
