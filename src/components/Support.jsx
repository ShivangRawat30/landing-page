import React from 'react';
import logo1 from '../Photos/quotePage/Logomark.svg';
import logo2 from '../Photos/quotePage/Logotype.svg';
import avatar from '../Photos/quotePage/Avatar.png'

import { PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline';
import {ChipIcon, SupportIcon} from '@heroicons/react/solid'

import supportImg from '../assets/support.jpg'

const Support = () => {
  return (
  <div name='support' className='w-full px-[96px] py-[90px] flex flex-col items-center gap-[64px] bg-gray-50 h-auto'>
      <div className='flex flex-col items-center justify-center align-self'>
        <div className='flex gap-2 mb-10'>
            <img src={logo1} alt="" />
            <img src={logo2} alt="" />
        </div>
        <div className='flex flex-col  justify-center'>
            <h2 className='text-[48px] font-bold flex text-center '>We’ve been with unicraft to kick start every new project and can’t imagine working without it.</h2>
        </div>
        <div className='flex flex-col mt-10'>
            <div className='flex items-center justify-center'>
                <img src={avatar} alt="" />

            </div>
            <div className='flex flex-col items-center justify-center mt-5 '>
                <h5 className='items-center text-[18px] font-medium text-gray-900'>Candice Wu</h5>
                <p className='text-gray-500 text-[15px]'>Product Manager, Sisyphus</p>
            </div>
        </div>
      </div>
  </div>
  );
};

export default Support;
