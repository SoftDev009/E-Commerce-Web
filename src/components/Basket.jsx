import React from 'react'
import BasketImage from '../assets/basketChair.png'

const Basket = () => {
  return (
    <section className="bg-gray-100 container mx-auto px-5 xl:px-28 flex justify-between items-center relative py-10 xl:py-12 mt-48">
        <div className="space-y-2 relative">
        <img src={BasketImage} alt="" className='xl:w-80 md:hidden w-44 h-44 xl:h-96 absolute -top-36 -right-5 object-cover object-center ' />
        <h2 className='uppercase text-2xl w-2/3 xl:text-4xl tracking-widest'> <span className='  font-black'> Stylish </span> minimal chair</h2>
        <button className="uppercase text-gray-600 text-xs tracking-wider border-b border-black py-1 pt-6 font-medium">View now</button>
        </div>
        <img src={BasketImage} alt="" className='xl:w-80 hidden md:flex  w-72 h-80 xl:h-96 object-cover object-center absolute right-0 -top-40 mr-10 xl:mr-32' />
    </section>
  )
}

export default Basket