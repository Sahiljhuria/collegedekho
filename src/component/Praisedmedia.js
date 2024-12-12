import React from 'react'
import image1 from '../component/images/toi.webp'
import image2 from '../component/images/yourStory.webp'
import image3 from '../component/images/tweeter.d9fb9e15.svg'
import image4 from '../component/images/IndianExpress.webp'
import image5 from '../component/images/dainikBhaskar.webp'
import image6 from '../component/images/toi.webp'
import image7 from '../component/images/google-icon.a9f30431.webp'


export const Praisedmedia = () => {
  return (
    <div className='mt-10'>


        <div className='text-center '>
            <p className='text-bold text-4xl mb-10 font-bold'>Praised by the Media</p>


            <div className='flex justify-center mt-9 mb-10 gap-32 '>
                <img src={image1} className='bg-gray-400'/>
                <img src={image2} className='bg-gray-400'/>
                <img src={image3} className='bg-gray-400'/>
                <img src={image4} className='bg-gray-400'/>
                <img src={image5} className='bg-gray-400'/>
                <img src={image6} className='bg-gray-400'/>

            </div>
        </div>




        <div className='bg-[#d9d7b6] text-black flex justify-around items-center h-[300px] '>
            <div className='f' >
                <p className='font-bold text-3xl mb-4'>Confused about the best career choice for you?</p>
                <p className='text-xl '>Discover your path with Career Compass, our personalised career recommendation tool.</p>
                <p className='text-xl'>Explore your skills, personality, and interests for career advice and guidance designed just for</p>
                <p className='text-xl'>you.</p>
            </div>
            <button className="h-10 w-[300px] bg-orange-400 text-black p-2 text-center rounded-sm hover:bg-orange-300 hover:cursor-pointer mt-12">
          Get career recommendation
        </button>
        </div>

       
    </div>
  )
}
