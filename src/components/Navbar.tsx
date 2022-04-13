import React from "react";

function Navbar() {
  return (
    <nav className='mb-[5.625rem]'>
      <div className='h-[100px] container flex items-center justify-between'>
        <a href='/'>
          <img
            className='h-10 w-auto'
            src='/assets/images/logo.png'
            alt='logo'
          />
        </a>
        <ul className='flex items-center'>
          <li>
            <a
              href='/'
              className='relative font-medium text-sm mr-10 nav-active'
            >
              Home
            </a>
          </li>
          <li>
            <a href='/' className='relative font-medium text-sm mr-10'>
              About
            </a>
          </li>
          <li>
            <a href='/' className='relative font-medium text-sm mr-10'>
              Destinations
            </a>
          </li>
          <li>
            <a href='/' className='relative font-medium text-sm mr-10'>
              Tours
            </a>
          </li>
          <li>
            <a href='/' className='relative font-medium text-sm mr-10'>
              Blog
            </a>
          </li>
          <li>
            <button className='bg-mainColor text-white text-sm font-medium px-[38px] py-[18px] rounded-[10px]'>
              Contact Us
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
