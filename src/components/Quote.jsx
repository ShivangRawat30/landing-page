import React from 'react';

const Quote = () => {
    return(
        <div className='px-[30px] items-center gap-[105px] flex flex-col mt-[100px]'>
            <div className='flex flex-col items-center gap-[28px] w-[840px]'>
                <div className='flex flex-col items-center gap-[16px]'>
                    <h1 className='text-center text-gray-900 text-[72px] font-bold '>No long-term contracts.
No catches. Simple.</h1>
                    <p className='text-[20px] font-medium text-gray-500'>Start your 30-day free trial. Cancel anytime.</p>
                </div>
                <button className='flex w-[215px] h-[60px] px-[16px] py-[34px] justify-center items-center gap-[10px] bg-gray-800 text-gray-50 rounded-lg'>Contact Us</button>
            </div>
            <hr />
        </div>

    )
}
export default Quote;
