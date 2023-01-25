import React from 'react'
import products from '../data'
import {formatPrice} from '../utils/helper'
import { BsFillGrid3X3GapFill} from 'react-icons/bs'
import {FaThList} from 'react-icons/fa'

const AllProducts = () => {
  return (
    <>
    <div className="space-y-8 w-full">

      <section className="flex justify-between items-center capitalize">
        <div className="flex space-x-2 justify-center items-center">
          <button className="rounded border md:px-2 md:py-2">
          <BsFillGrid3X3GapFill />
          </button>
          <button className="rounded border md:px-2 md:py-2">
          <FaThList/>
          </button>
        <p className='text-xs md:text-base'> {products.length} products found </p>
        </div>
        <hr className= 'w-1/3 hidden' />
        <form className='space-x-6 text-xs md:flex justify-between items-center md:text-base '>
          <label htmlFor="" className='hidden md:flex'>sort by</label>
          <select name="" id="" className='py-1 text-xs md:text-base capitalize rounded'>
            <option value="price-lowest">price (lowest)</option>
            <option value="price-highest">price (highest)</option>
            <option value="name-a">name (a - z)</option>
            <option value="name-z">name (z - a)</option>
          </select>
        </form>
      </section>

    <section className=" grid grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => {
        const {id, name, image, price} = product
        return(
          <article key={id} className="space-y-2">
            <img src={image} alt={name} className='w-full h-44 object-cover object-center' />
            <div className="">
                    <p className='text-gray-500 text-lg font-light md:font-normal  capitalize'> {name}</p>
                    <p className='font-medium'> {formatPrice(price)} </p>
                </div>
          </article>
        )
      })}
    </section>

    </div>

    </>

  )
}

export default AllProducts