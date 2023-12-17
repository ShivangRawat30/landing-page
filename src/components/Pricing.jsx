import React from 'react';
import check from '../Photos/pricing/charm_circle-tick.svg'
import check1 from '../Photos/pricing/check1.svg';
import check2 from '../Photos/pricing/check2.svg';

const Pricing = () => {
  return (
    <div name='pricing' className='w-full text-black my-24 h-1630px'>
      <div className='w-full h-[981px] bg-white absolute mix-blend-overlay'></div>

      <div className='max-w-[1440px] mx-auto '>

        <div className='text-center'>
          <h3 className='text-[58px] font-bold text-[#262E35] py-2'>Pricing made for collaborative support.</h3>
          <div className='flex items-center justify-center pb-9'>

          <p className='text-[20px] text-gray-500 flex w-[685px] '>
          Plain is made for your entire company. Only pay for users that actually message customers. Everyone else is free, forever.
          </p>
          </div>
        </div>

        <div className='flex items-center justify-center gap-[24px]'>

          <div className='bg-white flex flex-col items-start px-[40px] py-[24px] gap-[40px] rounded-xl shadow-2xl relative'>
            <div className='flex flex-col items-start gap-[11px]'>
          <span className='text-[22px] font-medium '>Freebie</span>
            <p className='text-[16px] text-slate-500 w-[298px]'>Ideal for individuals who need quick access to basic features.</p>
            </div>
            <div className='flex w-full flex-col items-start gap-[24px]'>
              <p className='text-[56px] font-medium flex'>$0<span className='text-[16px] px-3 text-slate-500 flex flex-col justify-center'>/Month</span></p>
                <button className='w-full h-[60px] border-2 items-center rounded-lg border-gray-500'>Get Started Now</button>
            </div>
            <div className='flex flex-col items-start gap-[12px] mt-10'>
                <p className='flex text-gray-800'><img src={check} className='w-[20px] h-[20px] mr-5 text-gray-800'  />20,000+ of PNG & SVG graphics</p>
                <p className='flex text-gray-800'><img src={check} className='w-[20px] h-[20px] mr-5 text-gray-800'  />Access to 100 million stock images</p>
                <p className='flex text-gray-400'><img src={check1} className='w-[20px] h-[20px] mr-5 text-gray-800'  />Upload custom icons and fonts</p>
                <p className='flex text-gray-400'><img src={check1} className='w-[20px] h-[20px] mr-5 text-gray-800'  />Unlimited Sharing</p>
                <p className='flex text-gray-400'><img src={check1} className='w-[20px] h-[20px] mr-5 text-gray-800'  />Upload graphics & video in up to 4k</p>
                <p className='flex text-gray-400'><img src={check1} className='w-[20px] h-[20px] mr-5 text-gray-800'  />Unlimited Projects</p>
                <p className='flex text-gray-400'><img src={check1} className='w-[20px] h-[20px] mr-5 text-gray-800'  />Instant Access to our design system</p>
                <p className='flex text-gray-400'><img src={check1} className='w-[20px] h-[20px] mr-5 text-gray-800'  />Create teams to collaborate on designs</p>
            </div>
          </div>


          <div className='bg-[#1F2937] flex flex-col items-start px-[40px] py-[24px] gap-[40px] rounded-xl shadow-2xl relative text-white'>
            <div className='flex flex-col items-start gap-[11px]'>
          <span className='text-[22px] font-medium '>Premium</span>
            <p className='text-[16px] text-gray-100 w-[298px]'>Ideal for individuals who need quick access to basic features.</p>
            </div>
            <div className='flex w-full flex-col items-start gap-[24px]'>
              <p className='text-[56px] font-medium flex'>$25<span className='text-[16px] px-3 text-gray-50 flex flex-col justify-center'>/Month</span></p>
                <button className='w-full h-[60px] border-2 items-center rounded-lg bg-gray-50 text-gray-800 '>Get Started Now</button>
            </div>
            <div className='flex flex-col items-start gap-[12px] mt-10'>
                <p className='flex text-gray-50'><img src={check2} className='w-[20px] h-[20px] mr-5 text-gray-800'  />20,000+ of PNG & SVG graphics</p>
                <p className='flex text-gray-50'><img src={check2} className='w-[20px] h-[20px] mr-5 text-gray-800'  />Access to 100 million stock images</p>
                <p className='flex text-gray-50'><img src={check2} className='w-[20px] h-[20px] mr-5 text-gray-800'  />Upload custom icons and fonts</p>
                <p className='flex text-gray-50'><img src={check2} className='w-[20px] h-[20px] mr-5 text-gray-800'  />Unlimited Sharing</p>
                <p className='flex text-gray-50'><img src={check2} className='w-[20px] h-[20px] mr-5 text-gray-800'  />Upload graphics & video in up to 4k</p>
                <p className='flex text-gray-400'><img src={check1} className='w-[20px] h-[20px] mr-5 text-gray-800'  />Unlimited Projects</p>
                <p className='flex text-gray-400'><img src={check1} className='w-[20px] h-[20px] mr-5 text-gray-800'  />Instant Access to our design system</p>
                <p className='flex text-gray-400'><img src={check1} className='w-[20px] h-[20px] mr-5 text-gray-800'  />Create teams to collaborate on designs</p>
            </div>
          </div>


          <div className='bg-white flex flex-col items-start px-[40px] py-[24px] gap-[40px] rounded-xl shadow-2xl relative'>
            <div className='flex flex-col items-start gap-[11px]'>
          <span className='text-[22px] font-medium '>Enterprise</span>
            <p className='text-[16px] text-slate-500 w-[298px]'>Ideal for individuals who need quick access to basic features.</p>
            </div>
            <div className='flex w-full flex-col items-start gap-[24px]'>
              <p className='text-[56px] font-medium flex'>$100<span className='text-[16px] px-3 text-slate-500 flex flex-col justify-center'>/Month</span></p>
                <button className='w-full h-[60px] border-2 items-center rounded-lg border-gray-500'>Get Started Now</button>
            </div>
            <div className='flex flex-col items-start gap-[12px] mt-10'>
                <p className='flex text-gray-800  w-full'><img src={check} className='w-[20px] h-[20px] mr-5 text-gray-800'  />20,000+ of PNG & SVG graphics</p>
                <p className='flex text-gray-800'><img src={check} className='w-[20px] h-[20px] mr-5 text-gray-800'  />Access to 100 million stock images</p>
                <p className='flex text-gray-800'><img src={check} className='w-[20px] h-[20px] mr-5 text-gray-800'  />Upload custom icons and fonts</p>
                <p className='flex text-gray-800'><img src={check} className='w-[20px] h-[20px] mr-5 text-gray-800'  />Unlimited Sharing</p>
                <p className='flex text-gray-800'><img src={check} className='w-[20px] h-[20px] mr-5 text-gray-800'  />Upload graphics & video in up to 4k</p>
                <p className='flex text-gray-800'><img src={check} className='w-[20px] h-[20px] mr-5 text-gray-800'  />Unlimited Projects</p>
                <p className='flex text-gray-800'><img src={check} className='w-[20px] h-[20px] mr-5 text-gray-800'  />Instant Access to our design system</p>
                <p className='flex text-gray-800'><img src={check} className='w-[20px] h-[20px] mr-5 text-gray-800'  />Create teams to collaborate on designs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
