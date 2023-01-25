import React from 'react'
import products from '../data'
import { formatPrice } from '../utils/helper'

const ProductGrid = () => {
  return (
    <section className="container mx-auto gap-10 px-5 xl:px-28 grid grid-cols-1 md:grid-cols-3 capitalize place-items-center mt-20 ">

        {/* Bestseller */}
        <div className=" md:space-y-4 w-full ">
            <h2 className='font-medium uppercase tracking-widest'>Bestseller</h2>
            <hr />
            {products.slice(0,3).map((product) => {
                const {name, price, image, id} = product
                return (
                    <div key={id} className=" flex space-x-6 pt-4 ">
                    <img src={image} alt="" className='w-24 h-24 object-cover object-center' />
                    <div className=" space-y-1 ">
                        <p className='text-gray-500 text-sm'> {name} </p>
                        <p className='font-semibold text-sm'> {formatPrice(price)} </p>
                    </div>
                </div>    
                )
            })}
        </div>

        {/* New Arrival */}
        <div className=" md:space-y-4 w-full ">
        <h2 className='font-medium uppercase tracking-widest'>New arrival</h2>
            <hr />
            {products.slice(3,6).map((product) => {
                const {name, price, id, image} = product
                return (
                    <div key={id} className=" flex space-x-6 pt-4 ">
                    <img src={image} alt="" className='w-24 h-24 object-cover object-center' />
                    <div className=" space-y-1 ">
                        <p className='text-gray-500 text-sm'> {name} </p>
                        <p className='font-semibold text-sm'> {formatPrice(price)} </p>
                    </div>
                </div>    
                )
            })}
        </div>

        {/* Featured */}
        <div className=" md:space-y-4 w-full ">
        <h2 className='font-medium uppercase tracking-widest'>Featured</h2>
            <hr />
            {products.slice(6,9).map((product) => {
                const {name, price, id, image} = product
                return (
                    <div key={id} className=" flex space-x-6 pt-4 ">
                    <img src={image} alt="" className='w-24 h-24 object-cover object-center' />
                    <div className=" space-y-1 ">
                        <p className='text-gray-500 text-sm'> {name} </p>
                        <p className='font-semibold text-sm'> {formatPrice(price)} </p>
                    </div>
                </div>    
                )
            })}

           
        </div>
    </section>
  )
}

export default ProductGrid