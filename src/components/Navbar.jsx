import React from 'react'
import {AiOutlineShoppingCart, AiOutlineUserAdd} from 'react-icons/ai'
import { BsHandbag} from 'react-icons/bs'

const Navbar = () => {
  return (
    <>
    <nav className='bg-gray-100 py-4 xl:py-8'>
      <div className="flex justify-between items-center px-5 xl:px-28 container mx-auto h-full  xl:max-w-screen-xl">
        {/* max-w-3xl */}
      {/* Logo */}
      <h1 className='text-2xl md:text-3xl  font-bold tracking-wider flex  relative pr-3'>Shoptik
      <span className='w-[6px] h-[6px] bg-green-400 absolute right-[6px] bottom-2 '></span>
      </h1>
      {/* Menu items */}
      <div className="">
        <ul className="hidden xl:flex space-x-10 uppercase">
          <li>HOME</li>
          <li>Features</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Shop</li>
          <li>News</li>
        </ul>
      </div>
      {/* Add cart and User  */}
      <div className=" flex space-x-6 md:space-x-8">
        <a href="#" className='hidden lg:flex relative'> Bag <span>  <BsHandbag className='w-6 h-6 ml-1 relative'/> <span className='absolute bg-[#48c4a0] text-white px-2 rounded-full -top-4 -right-3'> 5 </span> </span>
         </a>
<div className="flex flex-col-reverse md:flex-row justify-center items-center">
        <button className='hidden lg:flex'> Login 
        </button>
        <AiOutlineUserAdd className='w-6 h-6'/>
</div>
    
      </div>
      </div>
    </nav>
    {/* Header content */}
    
    </>
  )
}

export default Navbar