import React from 'react'
import products from '../data'
import { formatPrice } from '../utils/helper'

const ProductCategory = () => {
    return (
        <>
    <section className="mt-28">
        <div className="container mx-auto px-5 xl:px-28 py-2">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 border-b pb-8">
        <article className="my-5">
            <div className="pt-10 space-y-4 ">
        <h4 className='text-4xl tracking-wider'>Decoration</h4>
            <p className='text-sm font-light tracking-wider text-gray-400'>Small be and the rain would phase distance, succeed align.</p>
            <button className="uppercase text-gray-600 text-xs tracking-wider border-b border-black font-medium py-1 pt-6">Shop Now</button>
            </div>
            </article>  
        
        {products.slice(16, 19).map((product) => {
            const {name, price, id, image } = product
            return(
                <article key={id} className=" relative space-y-2 xl:space-y-5 xl:my-5">
                <img src={image} alt="" className=' w-full h-52 xl:h-96 object-cover object-center' />
                <div>
                <p className='text-gray-500 capitalize '> {name}</p>
                    <p className='font-semibold'> {formatPrice(price)} </p>
                </div>
                <div className="absolute uppercase tracking-wider bg-red-500 text-gray-100 xl:px-4 px-2 xl:py-[0.16rem] py-1 -top-5 xl:-top-8 right-3 xl:text-sm text-xs ">
                    <p>Sale</p>
                </div>
            </article>    
            )
        })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 border-b pb-8 md:mt-5 ">
        <article className="my-5 ">
            <div className="pt-10 space-y-4">
        <h4 className='text-4xl tracking-wider'>Architect</h4>
            <p className='text-sm font-light tracking-wider text-gray-400'>Small be and the rain would phase distance, succeed align.</p>
            <button className="uppercase text-gray-600 text-xs tracking-wider border-b border-black font-medium py-1 pt-6">Shop Now</button>
            </div>
            </article>  
        
            {products.slice(12, 15).map((product) => {
            const {name, price, id, image } = product
            return(
                <article key={id} className=" relative space-y-2 xl:space-y-5 md:my-5">
                <img src={image} alt="" className=' w-full h-52 xl:h-96 object-cover object-center' />
                <div>
                <p className='text-gray-500 capitalize '> {name}</p>
                    <p className='font-semibold'> {formatPrice(price)} </p>
                </div>
                <div className="absolute uppercase tracking-wider bg-red-500 text-gray-100 xl:px-4 px-2 xl:py-[0.16rem] py-1 -top-5 xl:-top-8 right-3 xl:text-sm text-xs ">
                    <p>Sale</p>
                </div>
            </article>    
            )
        })}
        </div>

        </div>
    </section>
    </>
  )
}

export default ProductCategory