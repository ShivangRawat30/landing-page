import React from 'react';

const Navbar = () => {


  return (
    <div className='w-[100%] h-[80px] z-10  flex justify-between top-[20px] backgr'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center justify-'>
          <h1 className='text-[24px] mr-4 text-gray-700 font-satoshi left-[90px] absolute'>UniCraft</h1>
        </div>
        <div className='ml-12'>
        <ul className=' flex text-xl gap-[48px]'>
          <li className='font-satoshi '>How it works</li>
          <li className='font-satoshi text-gray-700'>Pricing</li>
          <li className='font-satoshi text-gray-700'>FAQ</li>
          </ul>
        </div>
        <div className='hidden md:flex pr-4 '>
          <button className='px-8 py-3 relative right-[90px] border-solid border-2 border-gray-600 rounded-md text-gray-600'>Contact us</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
