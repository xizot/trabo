import React from "react";
interface TitleProps {
  text: string;
  classes?: string;
}
function Title({ text, classes }: TitleProps) {
  return (
    <h3 className={`${classes} text-[2.75rem] font-bold mb-[14px] `}>{text}</h3>
  );
}

export default Title;
