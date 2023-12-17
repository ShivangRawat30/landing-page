import React from 'react'
import icon from '../Photos/icons/Frame.svg'

const About = () => {
  return (
    <div name='about' className='w-full my-32 flex items-center justify-center'>
        <div className='w-[1260px] px-10 pt-5 h-[535px] brdr'>
            <div className='text-center'>
                <h2 className='text-[48px] font-bold text-gray-800'>How it works</h2>
                <p className='text-[20px] text-gray-600'>Premium designs, unlimited requests, super fast delivery, for one flat monthly fee.</p>
            </div>

            
            <div className='flex items-center justify-center' >
                <div className='absolute left-[350px] translate-y-[140px]'>
                <h1 className='text-[240.214px] gr'>1</h1>
                <div className='flex items-center justify-center flex-col absolute w-[339px] z-10 translate-x-[-90px] translate-y-[-150px]'>
                    <h2 className='text-[40px] weight-900 items-center text-gray-800 left-[350px]'>Subscribe</h2>
                    <p className='text-[18px] text-center '>Subscribe to a plan & you'll get an instant access to your private Slack channel.</p>
                </div>
                </div>
                <img src={icon} alt="" className='translate-x-[-170px] translate-y-[140px]'/>
                
                <div className='absolute left-[770px] translate-y-[140px]'>
                <h1 className='text-[240.214px] gr'>2</h1>
                <div className='flex items-center justify-center flex-col absolute w-[339px] z-10 translate-y-[-150px] translate-x-[-90px]'>
                    <h2 className='text-[40px] weight-900 items-center text-gray-800 '>Subscribe</h2>
                    <p className='text-[18px] text-center '>Subscribe to a plan & you'll get an instant access to your private Slack channel.</p>
                </div>
                </div>
                <img src={icon} alt="" className='translate-x-[170px] translate-y-[140px]'/>
                <div className='absolute left-[1200px] translate-y-[140px]'>
                <h1 className='text-[240.214px]  gr'>3</h1>
                <div className='flex items-center justify-center flex-col absolute w-[339px] z-10 translate-x-[-90px] translate-y-[-150px]'>
                    <h2 className='text-[40px] weight-900 items-center text-gray-800 left-[350px]'>Subscribe</h2>
                    <p className='text-[18px] text-center '>Subscribe to a plan & you'll get an instant access to your private Slack channel.</p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About