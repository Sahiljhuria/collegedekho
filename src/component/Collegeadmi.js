import React from 'react'
import number1 from '../component/images/number1-Icon.87c7b61e.svg'
export const Collegeadmi = () => {
  return (
    <div className='grid items-center justify-center  mt-10 ' >
        <div className='flex  items-center justify-center gap-2'>
            <img src={number1}/>
            <p className='font-bold text-2xl'>India's Largest Common Application Form For College Admissions</p>
        </div>
        <p className='text-orange-400 font-bold text-6xl text-center mt-5'>2000 + College ,<span className='text-black'>1 Application Form</span></p>
        <p className='text-center text-2xl font-bold mt-5'>Applying to your dream colleges made easy!</p>
        <div className='flex justify-center items-center mt-16'>
        <button className="h-10 w-[300px] bg-[#3F53D9] text-white text-center  rounded-sm">
         Start Your Application
        </button>
        </div>
    </div>
  )
}
