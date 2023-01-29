import React from 'react'
import products from '../data'
import {BiSearch} from 'react-icons/bi'
const Filters = () => {
  return (
    <aside className=" w-1/4  space-y-8 hidden lg:flex flex-col sticky top-0 font-light        ">
      <div className="flex justify-between">
        <h2 className="text-2xl">Filters</h2>
        <button className="text-sm">Clear all</button>
      </div>
      {/* Categories */}
      <div className="">
        <div className="flex justify-between">
          <h2 className="text-lg uppercase font-medium tracking-wider">
            Categories
          </h2>
          <BiSearch className="w-6 h-6" />
        </div>
        <hr className="mt-2" />

        <div className="mt-5 space-y-4 capitalize tracking-wider text-gray-500">
          <div className="space-x-8 flex items-center">
            <input
              type="checkbox"
              className="h-5 w-5 rounded  text-[#48c4a0] focus:ring-0"
            />
            <label htmlFor="">Suits</label>
          </div>
          <div className="space-x-8 flex items-center">
            <input
              type="checkbox"
              className="h-5 w-5 rounded  text-[#48c4a0] focus:ring-0"
            />
            <label htmlFor="">Shirts</label>
          </div>
          <div className="space-x-8 flex items-center">
            <input
              type="checkbox"
              className="h-5 w-5 rounded  text-[#48c4a0] focus:ring-0"
            />
            <label htmlFor="">Jeans</label>
          </div>
          <div className="space-x-8 flex items-center">
            <input
              type="checkbox"
              className="h-5 w-5 rounded  text-[#48c4a0] focus:ring-0"
            />
            <label htmlFor="">Trousers</label>
          </div>
          <div className="space-x-8 flex items-center">
            <input
              type="checkbox"
              className="h-5 w-5 rounded  text-[#48c4a0] focus:ring-0"
            />
            <label htmlFor="">Casual Shoes</label>
          </div>
          <div className="space-x-8 flex items-center">
            <input
              type="checkbox"
              className="h-5 w-5 rounded  text-[#48c4a0] focus:ring-0"
            />
            <label htmlFor="">Seaters</label>
          </div>
        </div>
      </div>

      {/* Price */}
      <div className="">
        <div className="flex justify-between">
          <h2 className="text-lg uppercase font-medium tracking-wider">
            Price
          </h2>
        </div>
        <hr className="mt-2" />
        <div className="mt-5 space-y-4 capitalize text-gray-500 tracking-wider">
          <div className="space-x-8 flex items-center">
            <input
              type="checkbox"
              className="h-5 w-5 rounded  text-[#48c4a0] focus:ring-0"
            />
            <label htmlFor="">$197 to $52523</label>
          </div>
          <div className="space-x-8 flex items-center">
            <input
              type="checkbox"
              className="h-5 w-5 rounded  text-[#48c4a0] focus:ring-0"
            />
            <label htmlFor="">$250 to $5523</label>
          </div>
          <div className="space-x-8 flex items-center">
            <input
              type="checkbox"
              className="h-5 w-5 rounded  text-[#48c4a0] focus:ring-0"
            />
            <label htmlFor="">$197 to $25523</label>
          </div>
          <div className="space-x-8 flex items-center">
            <input
              type="checkbox"
              className="h-5 w-5 rounded  text-[#48c4a0] focus:ring-0"
            />
            <label htmlFor="">$97 to $2433</label>
          </div>
          <div className="space-x-8 flex items-center">
            <input
              type="checkbox"
              className="h-5 w-5 rounded  text-[#48c4a0] focus:ring-0"
            />
            <label htmlFor="">$254 to $1255</label>
          </div>
          <div className="space-x-8 flex items-center">
            <input
              type="checkbox"
              className="h-5 w-5 rounded  text-[#48c4a0] focus:ring-0"
            />
            <label htmlFor="">$1200 to $7859</label>
          </div>
        </div>
      </div>

      {/* Color */}
      <div className="">
        <div className="flex justify-between">
          <h2 className="text-lg uppercase font-medium tracking-wider">
            colors
          </h2>
          <BiSearch className="w-6 h-6" />
        </div>
        <hr className="mt-2" />

        <div className="mt-5 space-y-4 text-gray-500 capitalize">
          <div className="space-x-8 flex items-center">
            <input
              type="checkbox"
              className="h-5 w-5 rounded  text-[#48c4a0] focus:ring-0"
            />
            <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
            <label htmlFor="">Blue</label>
          </div>
          <div className="space-x-8 flex items-center">
            <input
              type="checkbox"
              className="h-5 w-5 rounded  text-[#48c4a0] focus:ring-0"
            />
            <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
            <label htmlFor="">yellow</label>
          </div>

          <div className="space-x-8 flex items-center">
            <input
              type="checkbox"
              className="h-5 w-5 rounded  text-[#48c4a0] focus:ring-0"
            />
            <div className="w-5 h-5 bg-black rounded-full"></div>
            <label htmlFor="">black</label>
          </div>
          <div className="space-x-8 flex items-center">
            <input
              type="checkbox"
              className="h-5 w-5 rounded  text-[#48c4a0] focus:ring-0"
            />
            <div className="w-5 h-5 bg-green-500 rounded-full"></div>
            <label htmlFor="">green</label>
          </div>
          <div className="space-x-8 flex items-center">
            <input
              type="checkbox"
              className="h-5 w-5 rounded  text-[#48c4a0] focus:ring-0"
            />
            <div className="w-5 h-5 bg-pink-500 rounded-full"></div>
            <label htmlFor="">pink</label>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Filters