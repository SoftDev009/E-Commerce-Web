import React from "react"
import { useProductsContext } from "../context/products_context"
import { single_product_url as url } from "../utils/constants"
import { useParams } from "react-router-dom"
import { useEffect } from "react"

import {
  AddToCart,
  Error,
  Loading,
  ProductImages,
  Breadcrumb,
  Stars,
} from "../components"
import { formatPrice } from "../utils/helper"

const SingleProduct = () => {
  const {
    single_product_loading: loading,
    single_product_error: error,
    singleProduct: product,
    fetchSingleProduct,
  } = useProductsContext()
  const { id } = useParams()

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`)
    window.scrollTo(0, 0)
  }, [id])

  if (loading) return <Loading />
  if (error) return <Error />

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
  } = product
  return (
    <>
      <Breadcrumb title={name} product />
      <div className="container mx-auto px-5 xl:px-28 grid md:grid-cols-2 gap-16 my-10 xl:my-32  ">
        {/* Left */}
        <ProductImages product={product} images={images} />

        {/* Right */}
        <div className="">
          <section className=" space-y-6 flex flex-col  justify-between  ">
            <div>
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
              <Stars stars={stars} reviews={reviews} />
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
            {stock >= 1 && <AddToCart product={product} />}
            <div className=" pt-8 ">
              <hr />
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default SingleProduct
