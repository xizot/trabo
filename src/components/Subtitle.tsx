import React from "react";
interface SubTitleProps {
  text: string;

  classes?: string;
}
function SubTitle({ text, classes = "" }: SubTitleProps) {
  return <p className={`text-[#777781] ${classes}`}>{text}</p>;
}

export default SubTitle;
