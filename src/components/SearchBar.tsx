import React from "react";
import SearchItem from "./SearchItem";

function SearchBar() {
  return (
    <div className='container'>
      <div className='bg-white flex justify-between rounded-[10px] px-[40px] py-[25px] shadow-lg'>
        <SearchItem
          title='Where'
          text='Center Point, Loremasdsadsadasdsadsa'
          icon='/assets/images/point.png'
        />
        <span className='block h-[72px] w-[1px] bg-[#757680] opacity-10'></span>
        <SearchItem
          title='Date'
          text='09th March,2021'
          icon='/assets/images/calendar.png'
        />
        <span className='block h-[72px] w-[1px] bg-[#757680] opacity-10'></span>

        <SearchItem
          title='Guests'
          text='05'
          icon='/assets/images/arrow-down.png'
        />
        <button className='bg-mainColor text-white font-medium text-lg px-[42px] py-[27px] rounded-[10px]'>
          Search Plan
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
