import React from 'react';
import Neg from '../Photos/FAQ/minus-circle.svg';
import Pos from '../Photos/FAQ/plus-circle.svg';

const FAQ = () => {
    return(
        <div className='w-full flex flex-col px-[74px] justify-center text-center items-center gap-[64px]'>
            <div className='flex w-[768px] flex-col justify-center items-center gap-[8px]'>
                <h1 className='text-[58px] font-bold text-center text-gray-900'>Frequently asked questions</h1>
                <h2 className='text-[20px] text-center font-medium text-gray-500'>Everything you need to know about the product and billing.</h2>
            </div>
            <div className='flex py-[32px] flex-col  gap-[64px]'>
                <div className='w-[768px] flex flex-col  gap-[32px] '>
                    <div className='flex items-start  gap-[24px]'>
                        <div className='flex flex-col items-start gap-[14px]'>
                        <h2 className='text-gray-800 text-[20px] font-medium'>Is there a free trial available?</h2>
                        <p className='text-[16px] text-left font-medium text-gray-500'>Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
                        </div>
                        <img src={Neg} alt="" className='flex ptp-[2px] flex-col items-start'/>
                    </div>
                    <hr />
                    <div className='flex justify-between items-center gap-[24px] '>
                    <div className='flex items-start gap-[8px] text-gray-800'>
                        <p className='text-[20px] font-medium text-gray-800'>Can I change my plan later?</p>
                    </div>
                    <img src={Pos} alt="" className='flex pt-[2px] flex-col items-start'/>
                    </div>
                    <hr />

                    <div className='flex justify-between items-center gap-[24px] '>
                    <div className='flex items-start gap-[8px] text-gray-800'>
                        <p className='text-[20px] font-medium text-gray-800'>What is your cancellation policy?</p>
                    </div>
                    <img src={Pos} alt="" className='flex pt-[2px] flex-col items-start'/>
                    </div>
                    <hr />

                    <div className='flex justify-between items-center gap-[24px] '>
                    <div className='flex items-start gap-[8px] text-gray-800'>
                        <p className='text-[20px] font-medium text-gray-800'>Can other info be added to an invoice?</p>
                    </div>
                    <img src={Pos} alt="" className='flex pt-[2px] flex-col items-start'/>
                    </div>
                    <hr />

                    <div className='flex justify-between items-center gap-[24px] '>
                    <div className='flex items-start gap-[8px] text-gray-800'>
                        <p className='text-[20px] font-medium text-gray-800'>How does billing work?</p>
                    </div>
                    <img src={Pos} alt="" className='flex pt-[2px] flex-col items-start'/>
                    </div>
                    <hr />

                    <div className='flex justify-between items-center gap-[24px] '>
                    <div className='flex items-start gap-[8px] text-gray-800'>
                        <p className='text-[20px] font-medium text-gray-800'>How do I change my account email?</p>
                    </div>
                    <img src={Pos} alt="" className='flex pt-[2px] flex-col items-start'/>
                    </div>

                </div>
            </div>

        </div>
    )
}
export default FAQ;
