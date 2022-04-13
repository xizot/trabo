import React from "react";
interface SubTitleProps {
  text: string;
  center?: boolean;
  width?: string;
  classes?: string;
}
function SubTitle({ text, center, classes = "" }: SubTitleProps) {
  return (
    <p
      className={`text-[#777781] ${
        center ? "text-center mx-auto" : ""
      } ${classes}`}
    >
      {text}
    </p>
  );
}

export default SubTitle;
