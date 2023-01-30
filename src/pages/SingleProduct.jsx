import React from "react"
import { BsStarFill, BsCheck, BsHandbag } from "react-icons/bs"
import { useProductsContext } from "../context/products_context"
import { single_product_url as url } from "../utils/constants"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { Error, Loading, ProductImages } from "../components"
import { formatPrice } from "../utils/helper"

const SingleProduct = () => {
  const {
    single_product_loading,
    single_product_error,
    fetchSingleProduct,
    singleProduct,
  } = useProductsContext()
  const { id } = useParams()

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`)
  }, [id])

  if (single_product_loading) return <Loading />
  if (single_product_error) return <Error />

  const {
    name,
    colors,
    company,
    description,
    designer,
    images,
    material,
    price,
    reviews,
    stars,
    stock,
    weight,
  } = singleProduct
  return (
    <>
      <div className="container mx-auto px-5 xl:px-28 grid md:grid-cols-2 gap-10 my-10 xl:my-32 ">
        {/* Left */}
        <ProductImages images={images} />

        {/* Right */}
        <div className="">
          <section className=" space-y-6 flex flex-col  justify-between ">
            <div className=" ">
              {stock > 0 ? (
                <span className="  text-green-500 font-medium border px-4 py-2 border-green-500 text-center text-xs capitalize rounded ">
                  In stock
                </span>
              ) : (
                <span className="  text-red-300 font-medium  border px-4 py-2 border-red-300 text-xs rounded capitalize ">
                  Out of stock
                </span>
              )}
            </div>
            {/* Product name */}
            <div className="flex flex-col  items-start space-y-2">
              <h4 className="text-3xl font-medium"> {name} </h4>
              {/* stars */}
              <div className="flex justify-center items-center space-x-2 border px-2 py-1 text-sm hover:cursor-pointer hover:border-black">
                <p className="flex justify-center items-center font-semibold border-r-2 border-black  px-2 ">
                  <span className="flex justify-center items-center gap-[2px] mr-1 ">
                    {" "}
                    <BsStarFill className="w-3 h-3 text-[#48c4a0]" />{" "}
                    <BsStarFill className="w-3 h-3 text-[#48c4a0]" />{" "}
                    <BsStarFill className="w-3 h-3 text-[#48c4a0]" />{" "}
                    <BsStarFill className="w-3 h-3 text-[#48c4a0]" />{" "}
                    <BsStarFill className="w-3 h-3 text-[#48c4a0]" />{" "}
                  </span>{" "}
                  {stars}
                </p>
                <p className="text-gray-500">{reviews} Reviews</p>
              </div>
            </div>

            {/* Product description */}
            <p className="text-gray-500 font-light">{description}</p>

            {/* Price and Stock availability */}
            <div className="space-y-4">
              <h5 className="text-2xl font-bold">
                {formatPrice(price)}
                {/* <span className="text-lg text-gray-500 line-through font-normal">
                  {" "}
                  $250.00{" "}
                </span>{" "} */}
                {/* <span className="text-xl uppercase pl-2 font-normal text-orange-400">
                  {" "}
                  (75% off){" "}
                </span>{" "} */}
              </h5>
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
              <button className="flex justify-center  items-center bg-black md:px-8 xl:px-16 sm:px-16 px-8 text-sm py-3 font-medium uppercase tracking-wider text-white">
                {" "}
                <span>
                  {" "}
                  <BsHandbag className="w-5 h-5 mr-2" />{" "}
                </span>
                Add to bag
              </button>
              <button className="border md:px-8 sm:px-12 px-8 text-sm xl:px-16 py-3 uppercase tracking-wider font-medium ">
                buy now
              </button>
            </div>
            <hr />
          </section>
        </div>
      </div>
    </>
  )
}

export default SingleProduct
