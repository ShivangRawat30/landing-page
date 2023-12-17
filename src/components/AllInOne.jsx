import React from 'react';
import { CheckIcon } from '@heroicons/react/outline';
import frame1 from '../Photos/frames/Frame 9.png';
import frame2 from '../Photos/frames/Frame 10.png';
import frame3 from '../Photos/frames/Frame 11.png';

const AllInOne = () => {
  return (
    <div name='platforms' className='w-full my-32 gap-10'>
      <div className='max-w-[1440px] max-h-[682px] mx-auto px-2 flex flex-row h-[400px] gap-3 '>
        <img src={frame1} alt="" className='h-[400px]'/>
        <img src={frame2} alt="" className='h-[400px]'/>
        <img src={frame3} alt="" className='h-[400px]'/>
        <img src={frame1} alt="" className='h-[400px]'/>
        </div>
        <div className='flex justify-center item-center'>
        <button className='w-[273px] h-[62px] px-8 py-3 top-14 relative border-solid border-2 border-gray-600 rounded-md text-gray-600 '> View Recent work</button>
        </div>
        <div>

       </div>
    </div>
  );
};

export default AllInOne;
