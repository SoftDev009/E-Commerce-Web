import React from 'react'
import { Link } from "react-router-dom"
import { useProductsContext } from "../context/products_context"
import { formatPrice } from "../utils/helper"
import { Loading, Error } from "../components"
const HomeProduct = () => {
  const { products_loading, products_error, products } = useProductsContext()
  if (products_loading) return <Loading />
  if (products_error) return <Error />
  return (
    <>
      <section className="my-24">
        <div className="container hidden md:flex  items-center justify-between  mx-auto px-5 text-xs md:text-base xl:px-28  ">
          {/* Right buttons */}
          <div className="space-x-14 font-bold ">
            <button className="uppercase tracking-widest py-1">
              Furniture
            </button>
            <button className="uppercase tracking-widest py-1">Lighting</button>
            <button className="uppercase tracking-widest py-1">Sofas</button>
            <button className="uppercase tracking-widest py-1">
              Lounge Chairs
            </button>
            <button className="uppercase tracking-widest py-1">All</button>
          </div>
          {/* Left button */}
          <div className="space-x-2 text-xs  ">
            <button className="uppercase tracking-widest border-r pr-2 border-black">
              Back
            </button>
            <button className="uppercase tracking-widest">Next</button>
          </div>
        </div>

        <div className="container mx-auto px-5 xl:px-28 mt-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.slice(0, 8).map((product) => {
              const { id, image, name, price } = product
              return (
                <Link to={`/shop/${id}`} key={id}>
                  <article className=" space-y-4 ">
                    <div className="bg-gray-100 ">
                      <img
                        src={image}
                        alt={name}
                        className="h-44 xl:h-80 object-cover object-center mix-blend-darken  p-8 "
                      />
                    </div>
                    <div>
                      <p className="text-gray-500 capitalize "> {name}</p>
                      <p className="font-semibold"> {formatPrice(price)} </p>
                    </div>
                  </article>
                </Link>
              )
            })}
          </div>

          {/* Button */}
          <div className="my-10 flex flex-row justify-between items-center space-x-4">
            <div className=" border-b bg-gray-600 w-2/3 xl:w-2/5"></div>
            <Link
              to="/shop"
              className=" text-center uppercase tracking-wider border border-green-500 py-3 text-gray-700 font-medium text-sm xl:text-base w-full md:w-1/2 xl:w-1/6"
            >
              Go to shop
            </Link>
            <div className=" border-b bg-gray-600 w-2/3 xl:w-2/5"></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeProduct