import React from "react";
interface SubTitleProps {
  text: string;
  center?: boolean;
  width?: string;
}
function SubTitle({ text, center, width = "auto" }: SubTitleProps) {
  return (
    <p
      className={`text-[#777781] ${
        center ? "text-center mx-auto" : ""
      } w-[${width}]`}
    >
      {text}
    </p>
  );
}

export default SubTitle;
