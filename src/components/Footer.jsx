import React from 'react'
import logo from '../Photos/icons/Frame.svg'

import logo1 from '../Photos/Footer/Group.svg';
import logo2 from '../Photos/Footer/Social icon (1).svg';
import logo3 from '../Photos/Footer/Social icon (2).svg';
import logo4 from '../Photos/Footer/Social icon.svg';

const Footer = () => {
  return (
    <div className='w-full flex py-[89px] items-start flex-col gap-[32px] px-[120px] '>
    <hr className='text-gray-500'/>
        <div className='flex flex-col justify-center items-start gap-[12px] '>
            <h2 className='text-[24px] font-bold text-gray-700'>UniCraft</h2>
            <p className='text-[18px] font-medium text-gray-400 w-[350px]'>Design amazing digital experiences that create more happy in the world.</p>
        </div>
        <div className=' w-full justify-between flex items-center content-center gap-[32px] flex-wrap '>
            <div className='flex justify-between items-center'>
            <p className='text-gray-400 text-[16px] font-medium'>© 2077 Untitled UI. All rights reserved.</p>
            </div>
            <div className='flex justify-end items-center content-center gap-[24px]'>
            <img src={logo1} alt="" />
            <img src={logo2} alt="" />
            <img src={logo3} alt="" />
            <img src={logo4} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer