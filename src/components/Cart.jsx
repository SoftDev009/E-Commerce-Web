import React from 'react'
import image1 from '../assets/testImage2.png'
import image2 from '../assets/testImage1.png'
// import {BsPlus} from 'react-icons/bs'
import {BiMinus, BiPlus} from 'react-icons/bi'
const Cart = () => {
  return (
    <section className="container mx-auto mt-20 px-5 lg:px-28 flex flex-col md:flex-row gap-28 justify-between my-">
        {/* Right */}
        <div className="md:w-full  ">
            <div className=" flex justify-between items-center font-medium text-xl py-2 capitalize tracking-widest">
                <h4 className=''>shopping Cart</h4>
                <p>3 Items</p>
            </div>
            <hr />
            {/* Headers */}
            <div className=" grid-cols-5 hidden md:grid text-sm tracking-widest mt-10    text-gray-500 uppercase">
                <h4 className='col-span-2'>Product details </h4>
                    <p className='text-center'>Quantity</p>
                    <p className='text-right'>Price</p>
                    <p className='text-right'>Total</p>
            </div>

            {/* Product */}
            <article className="grid md:grid-cols-5 mt-5 border-b pb-6 ">
                {/* image */}
                <div className="flex justify-center items-center col-span-2 space-x-4  ">
                    <img src={image1} alt="" className='w-28 h-32 object-cover object-center bg-gray-100 ' />
                    <div className="space-y-2">
                        <p className=''>Arm chair for older people </p>
                        <p className='text-sm capitalize flex items-center'> color : <span className='w-4 h-4 bg-yellow-500 rounded-full ml-3' > </span> </p>
                    </div>
                </div>
                {/* Quantity */}
                <div className=" space-x-4  flex justify-center items-center ">
                <button className="text-right"> <BiMinus/> </button>
                <p className='text-center'>2</p>
                <button className="text-right"> <BiPlus/> </button>
                </div>
                <p className='text-right flex justify-end items-center' >$50.00</p>
                <p className='font-medium text-right flex justify-end items-center'>$250.00</p>
            </article>
            <article className="grid md:grid-cols-5 mt-5 border-b pb-6 ">
                {/* image */}
                <div className="flex justify-center items-center col-span-2 space-x-4  ">
                    <img src={image1} alt="" className='w-28 h-32 object-cover object-center bg-gray-100 ' />
                    <div className="space-y-2">
                        <p className=''>Arm chair for older people </p>
                        <p className='text-sm capitalize flex items-center'> color : <span className='w-4 h-4 bg-yellow-500 rounded-full ml-3' > </span> </p>
                    </div>
                </div>
                {/* Quantity */}
                <div className=" space-x-4  flex justify-center items-center ">
                <button className="text-right"> <BiMinus/> </button>
                <p className='text-center'>2</p>
                <button className="text-right"> <BiPlus/> </button>
                </div>
                <p className='text-right flex justify-end items-center' >$50.00</p>
                <p className='font-medium text-right flex justify-end items-center'>$250.00</p>
            </article>
            <article className="grid md:grid-cols-5 mt-5 border-b pb-6 ">
                {/* image */}
                <div className="flex justify-center items-center col-span-2 space-x-4  ">
                    <img src={image1} alt="" className='w-28 h-32 object-cover object-center bg-gray-100 ' />
                    <div className="space-y-2">
                        <p className=''>Arm chair for older people </p>
                        <p className='text-sm capitalize flex items-center'> color : <span className='w-4 h-4 bg-yellow-500 rounded-full ml-3' > </span> </p>
                    </div>
                </div>
                {/* Quantity */}
                <div className=" space-x-4  flex justify-center items-center ">
                <button className="text-right"> <BiMinus/> </button>
                <p className='text-center'>2</p>
                <button className="text-right"> <BiPlus/> </button>
                </div>
                <p className='text-right flex justify-end items-center' >$50.00</p>
                <p className='font-medium text-right flex justify-end items-center'>$250.00</p>
            </article>
            <article className="grid md:grid-cols-5 mt-5 border-b pb-6 ">
                {/* image */}
                <div className="flex justify-center items-center col-span-2 space-x-4  ">
                    <img src={image1} alt="" className='w-28 h-32 object-cover object-center bg-gray-100 ' />
                    <div className="space-y-2">
                        <p className=''>Arm chair for older people </p>
                        <p className='text-sm capitalize flex items-center'> color : <span className='w-4 h-4 bg-yellow-500 rounded-full ml-3' > </span> </p>
                    </div>
                </div>
                {/* Quantity */}
                <div className=" space-x-4  flex justify-center items-center ">
                <button className="text-right"> <BiMinus/> </button>
                <p className='text-center'>2</p>
                <button className="text-right"> <BiPlus/> </button>
                </div>
                <p className='text-right flex justify-end items-center' >$50.00</p>
                <p className='font-medium text-right flex justify-end items-center'>$250.00</p>
            </article>

            
            
        </div>

        {/* Left */}
        <div className=" md:w-1/2 mb-5 md:mb-0 ">
        <div className=" font-medium  text-xl flex items-center py-2 capitalize tracking-widest">
                <h4 className=''>Order summary</h4>
            </div>
            <hr />
        <article className=" bg-gray-100 mt-9 border-b-4 border-white border-dashed px-4 py-8 text-gray-500 space-y-4 rounded-t-md font-light text-sm  ">
            <h5 className='flex justify-between items-center'>Bag total <span className='text-black text-lg'>$3,199.00</span> </h5>
            <h5 className='flex justify-between items-center'>Bag discount <span className=' text-green-500 text-lg'> -$1,663.00</span> </h5>
            <h5 className='flex justify-between items-center'>Delivery Fee <span className=' text-lg text-green-500'>Free <span className='text-black line-through text-sm'> $99.00</span> </span>  </h5>
        </article>
            <h5 className='flex rounded-b-md justify-between items-center text-gray-500 bg-gray-100/60 py-8 px-4 bg-blu-100/60 text-sm'>Subtotal <span className='text-xl font-medium text-black'>$2010.00</span> </h5>
            <button className="bg-black w-full text-white py-4 mt-5 uppercase tracking-widest rounded">Proceed to Checkout</button>
        </div>
    </section>
  )
}

export default Cart