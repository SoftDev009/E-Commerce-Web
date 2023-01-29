import React from 'react'
import products from '../data'
import {formatPrice} from '../utils/helper'
import { BsFillGrid3X3GapFill} from 'react-icons/bs'
import {FaThList} from 'react-icons/fa'
import { useProductsContext } from "../context/products_context"
import { Loading, Error } from "../components"

const AllProducts = () => {
  const { products_loading, products_error, products } = useProductsContext()

  if (products_loading) return <Loading />
  if (products_error) return <Error />

  return (
    <>
      <div className="space-y-8 w-full font-light  ">
        {/* Total products count and sort filter */}
        <section className="flex justify-between items-center capitalize border-b pb-5 ">
          <div className="flex space-x-2 justify-center items-center">
            <button className=" md:px-2 md:py-2">
              <BsFillGrid3X3GapFill className="w-4 h-4" />
            </button>
            <button className=" md:px-2 md:py-2">
              <FaThList className="w-4 h-4" />
            </button>
            <p className="text-xs md:text-base">
              {" "}
              {products.length} products found{" "}
            </p>
          </div>
          <hr className=" w-2/5 " />
          <form className="space-x-6 text-xs md:flex justify-between items-center md:text-base ">
            <label htmlFor="" className="hidden md:flex">
              sort by
            </label>
            <select
              name=""
              id=""
              className="py-1 text-xs md:text-base capitalize rounded"
            >
              <option value="price-lowest">price (lowest)</option>
              <option value="price-highest">price (highest)</option>
              <option value="name-a">name (a - z)</option>
              <option value="name-z">name (z - a)</option>
            </select>
          </form>
        </section>

        {/* All products display */}
        <section className=" grid grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => {
            const { id, name, image, price, images } = product
            return (
              <article key={id} className="space-y-6">
                <div className=" bg-gray-100 ">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-80 object-cover object-center mix-blend-darken p-8 "
                    // className={`w-full h-80 object-cover object-center mix-blend-darken p-8 hover:${images[1]}`}
                  />
                </div>
                <div className=" flex flex-col justify-center items-center space-y-1  ">
                  <p className=" font-medium  capitalize"> {name}</p>
                  <p className=" font-light  "> {formatPrice(price)} </p>
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