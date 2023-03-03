import React from 'react'
import { Link } from "react-router-dom"
import { useProductsContext } from "../context/products_context"
import { Loading, Error, ProductImage, Product_title } from "../components"
import { getUniqueValues } from "../utils/helper"
import { useFilterContext } from "../context/filter_context"

const HomeProduct = () => {
  const { products_loading, products_error } = useProductsContext()
  const {
    filters: { category },
    all_products,
    updateFilters,
    filtered_products: products,
  } = useFilterContext()
  if (products_loading) return <Loading />
  if (products_error) return <Error />
  const categories = getUniqueValues(all_products, "category")
  return (
    <>
      <section className=" md:mt-28 mt-20 ">
        <div className="container mx-auto px-5 text-xs md:text-base xl:px-28  ">
          {/* Right buttons */}
          <div className="md:space-x-14 space-x-5 flex overflow-auto snap-x scrollbar-hide  ">
            {categories.map((categoryButton, index) => {
              return (
                <button
                  name="category"
                  key={index}
                  onClick={updateFilters}
                  className={` snap-start text-start font-medium uppercase tracking-widest ${
                    category === categoryButton
                      ? "border-b-[1.8px] border-primary text-primary "
                      : null
                  } `}
                >
                  {categoryButton}
                </button>
              )
            })}
          </div>
          {/* Left button */}
          {/* <div className="space-x-2 text-xs  ">
            <button className="uppercase tracking-widest border-r pr-2 border-black">
              Back
            </button>
            <button className="uppercase tracking-widest">Next</button>
          </div> */}
        </div>

        <div className="container mx-auto px-5 xl:px-28 mt-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.slice(0, 8).map((product) => {
              const { id, sale, new_in_market } = product
              return (
                <article key={id} className=" relative space-y-5 group ">
                  <ProductImage
                    product={product}
                    className="h-40 lg:h-44 xl:h-80 p-4 md:p-5 xl:p-8 "
                  />
                  <Product_title product={product} />
                  {sale && (
                    <div className="absolute uppercase tracking-wider bg-red-500 text-gray-100 xl:px-3 px-2  py-[2px] -top-7 right-3 text-[8px] xl:text-xs">
                      <p>Sale</p>
                    </div>
                  )}
                  {new_in_market && (
                    <div className="absolute uppercase tracking-wider bg-green-500 text-gray-100 xl:px-3 px-2  py-[2px] -top-7 right-3 text-[8px] xl:text-xs ">
                      <p>new</p>
                    </div>
                  )}
                </article>
              )
            })}
          </div>

          {/* Button */}
          <div className="my-10 flex flex-row justify-between items-center space-x-4">
            <div className=" border-b bg-gray-600 w-2/3 xl:w-2/5"></div>
            <Link
              to="/shop"
              className=" text-center uppercase tracking-wider border border-primary py-3 text-gray-700 font-medium text-sm xl:text-base w-full md:w-1/2 xl:w-1/6"
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