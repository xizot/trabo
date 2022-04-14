import React from "react";
import Button from "./Button";
import Title from "./Title";

function Contact() {
  console.log(process.env.PUBLIC_URL);
  return (
    <div className='bg-white mb-[70px]'>
      <div className='container bg-contact bg-no-repeat bg-cover'>
        <Title
          text='Subscribe our newsletter and get update everytime.'
          classes='w-[791px] pt-[60px] pb-[60px] mx-auto text-center'
        />
        <form action='' className='flex items-center pb-[70px] justify-center'>
          <input
            type='text'
            placeholder='Enter your email'
            className='px-[36px] py-[20px] rounded-[10px] mr-[30px] text-[#B7B9BC]'
          />
          <Button text='Get Started' primary />
        </form>
      </div>
    </div>
  );
}

export default Contact;
