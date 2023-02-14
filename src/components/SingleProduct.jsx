import React from 'react'
import products from '../data'
import {formatPrice} from '../utils/helper'
import productImage6 from '../assets/productImage6.jpg'
import productImage8 from '../assets/productImage8.jpg'
import productImage9 from '../assets/productImage9.jpg'
import productImage11 from '../assets/productImage11.jpg'
import {BsStarFill, BsCheck, BsHandbag} from 'react-icons/bs'

const SingleProduct = () => {
  return (
    <>
      <div className="container mx-auto px-5 xl:px-28 grid md:grid-cols-2 gap-16 my-10 xl:my-32 ">
        {/* Left */}
        <section className=" space-y-4 ">
          <img
            src={productImage6}
            alt=""
            className="h-72 xl:h-96 w-full xl:w-full rounded-md object-cover object-center"
          />
          <div className="flex gap-3 ">
            <img
              src={productImage6}
              alt=""
              className="w-36 h-24 rounded-md object-cover object-center"
            />
            <img
              src={productImage8}
              alt=""
              className="w-36 h-24 rounded-md object-cover object-center"
            />
            <img
              src={productImage9}
              alt=""
              className="w-36 h-24 rounded-md object-cover object-center"
            />
            <img
              src={productImage11}
              alt=""
              className="w-36 h-24 rounded-md object-cover object-center"
            />
          </div>
        </section>

        {/* Right */}
        <section className=" space-y-6">
          {/* Product name */}
          <div className="flex flex-col items-start space-y-2">
            <h4 className="text-3xl font-medium">Suede armchair</h4>
            {/* stars */}
            <div className="flex justify-center items-center space-x-2 border px-2 py-1 text-sm hover:cursor-pointer hover:border-black">
              <p className="flex justify-center items-center font-semibold border-r-2  px-2">
                4.1{" "}
                <span>
                  {" "}
                  <BsStarFill className="w-3 h-3 text-[#48c4a0]" />{" "}
                </span>{" "}
              </p>
              <p className="text-gray-500">3.2K Ratings</p>
            </div>
          </div>

          {/* Product description */}
          <p className="text-gray-500 font-light">
            Cloud bread VHS hell of banjo bicycle rights jianbing umami
            mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher
            waistcoat, authentic chillwave trust fund. Viral typewriter
            fingerstache pinterest pork belly narwhal. Schlitz venmo everyday
            carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag
            kinfolk microdosing gochujang live-edge
          </p>

          {/* Price and Stock availability */}
          <div className="space-y-1">
            <h5 className="text-2xl font-bold">
              $159.99{" "}
              <span className="text-lg text-gray-500 line-through font-normal">
                {" "}
                $250.00{" "}
              </span>{" "}
              <span className="text-xl uppercase pl-2 font-normal text-orange-400">
                {" "}
                (75% off){" "}
              </span>{" "}
            </h5>
            <p className="text-gray-500 text-sm">
              Availability: <span className="text-green-500">In stock</span>
            </p>
          </div>

          {/* colors */}
          <div className="flex space-x-4">
            <span className="xl:text-xl text-sm text-gray-500">Colors :</span>
            <div className="space-x-4 flex justify-center items-center">
              <button className="bg-blue-500 rounded-full text-white  xl:px-[0.18rem] xl:py-[0.18rem]">
                {" "}
                <BsCheck />{" "}
              </button>
              <button className="bg-yellow-500 rounded-full text-white  xl:px-[0.18rem] xl:py-[0.18rem]">
                {" "}
                <BsCheck />{" "}
              </button>
              <button className="bg-green-500 rounded-full text-white  xl:px-[0.18rem] xl:py-[0.18rem]">
                {" "}
                <BsCheck />{" "}
              </button>
              <button className="bg-black rounded-full text-white  xl:px-[0.18rem] xl:py-[0.18rem]">
                {" "}
                <BsCheck />{" "}
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="xl:justify-start justify-between  xl:space-x-8 flex w-full items-center pt-12">
            <button className="flex justify-center rounded-md items-center bg-black md:px-8 xl:px-16 sm:px-16 px-8 text-sm py-3 font-medium uppercase tracking-wider text-white">
              {" "}
              <span>
                {" "}
                <BsHandbag className="w-5 h-5 mr-2" />{" "}
              </span>
              Add to bag
            </button>
            <button className="border md:px-8 sm:px-12 px-8 text-sm xl:px-16 py-3 rounded-md uppercase tracking-wider font-medium ">
              buy now
            </button>
          </div>
          <hr />
        </section>
      </div>
    </>
  )
}

export default SingleProduct