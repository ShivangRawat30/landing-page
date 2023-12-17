import React from 'react'
import Logo from '../Photos/Comapanies/Logo.svg';
import Logo1 from '../Photos/Comapanies/Logo (1).svg';
import Logo2 from '../Photos/Comapanies/Logo (2).svg';
import Logo3 from '../Photos/Comapanies/Logo (3).svg';
import Logo4 from '../Photos/Comapanies/Logo (4).svg';
import Logo5 from '../Photos/Comapanies/Logo (5).svg';

const Hero = () => {
  return (
    <>
    <div className='w-full h-[611px] flex flex-col justify-between top-[146px] backgr'>
        <div className=' max-w-[1240px] m-auto'>
            <div className='flex align-center justify-center flex-col w-[1101px] px-2 py-8'>
                <div className='flex justify-center items-center'>
                <h1 className='py-3 text-center text-[72px] font-bold font-Satoshi text-gray-800 top-[44px]'>Elevate Your Presence with Seamless Design and Innovation.</h1>
                </div>
                <div className='flex justify-center'>
                <p className='text-[20px] w-[892px] text-gray-600'>From strategic planning to digital presence, we're your dedicated partner in achieving solo success.</p>
                </div>
                <div className='flex justify-center mt-5'>
                <button className='py-3 px-6 my-4 bg-gray-800 rounded-md text-white w-[215px] h-[60px] '>View Pricing</button>
                </div>
            </div>
            
        </div>
        
    <div className=' flex justify-center flex-col items-center h-[96.09px] w-full rounded-xl text-center'>
        <p className='text-[14px] text-gray-400 font-Satoshi'>Trusted By 250+ Companies</p>
        <div className='flex justify-between flex-wrap gap-[58.667px] px-[14.444px] py-[28.889px]'>
            <img className='flex px-4 py-2 text-slate-500 ' src={Logo}/> 
            <img className='flex px-4 py-2 text-slate-500' src={Logo1}/> 
            <img className='flex px-4 py-2 text-slate-500' src={Logo2}/> 
            <img className='flex px-4 py-2 text-slate-500' src={Logo3}/>
            <img className='flex px-4 py-2 text-slate-500' src={Logo4}/>
            <img className='flex px-4 py-2 text-slate-500' src={Logo5}/> 
        </div>
    </div>
    </div>
    </>
  );
}

export default Hero