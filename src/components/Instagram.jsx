import React from 'react'
import Instagram1 from '../assets/instaGram1.jpg'
import Instagram2 from '../assets/instaGram2.jpg'
import Instagram3 from '../assets/instaGram3.jpg'
import Instagram4 from '../assets/instaGram4.jpg'
import Blog3 from '../assets/Blog3.jpg'

const Instagram = () => {
  return (
    <section className=" relative hidden md:grid container mx-auto px-5 xl:px-0 grid-cols-5 my-10">
        <img src={Instagram1} alt="" className='w-full h-44 xl:w-72 xl:h-72 object-cover object-center' />
        <img src={Instagram2} alt="" className='w-full h-44 xl:w-72 xl:h-72 object-cover object-center'  />
        <img src={Instagram3} alt="" className='w-full h-44 xl:w-72 xl:h-72 object-cover object-center'  />
        <img src={Instagram4} alt="" className='w-full h-44 xl:w-72 xl:h-72 object-cover object-center'  />
        <img src={Blog3} alt="" className='w-full h-44 xl:w-72 xl:h-72 object-cover object-center'  />
        <div className="absolute top-1/3 right-1/3">
            <h4 className='uppercase text-gray-500 text-3xl font-semibold tracking-widest bg-white/80 xl:px-32 px-12 py-4 rounded-md xl:py-6'>Instagram</h4>
        </div>
    </section>
  )
}

export default Instagram