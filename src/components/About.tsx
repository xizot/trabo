import React from "react";
import Button from "./Button";
import SubTitle from "./Subtitle";
import Title from "./Title";

function About() {
  return (
    <div className='container p-[100px]'>
      <div className='grid grid-cols-2 '>
        <div>
          <img src='/assets/images/about.png' alt='' />
        </div>
        <div className='pl-[115px]'>
          <Title text='World Best Travel Agency Company Since.' />
          <SubTitle
            classes='mb-[36px]'
            text="Travel agents are useful if you're doing a very costly or complex trip, planning a honeymoon or something fancy."
          />

          <Button text='Find Best Tours' />
        </div>
      </div>
    </div>
  );
}

export default About;
