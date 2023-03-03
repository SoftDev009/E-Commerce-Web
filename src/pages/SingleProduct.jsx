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

  const { name, description, images, price, reviews, stars, stock } = product
  return (
    <>
      <Breadcrumb title={name} product />
      <div className="container mx-auto my-10 grid gap-16 px-5 md:grid-cols-2 xl:my-32 xl:px-28  ">
        {/* Left */}
        <ProductImages product={product} images={images} />

        {/* Right */}
        <div className="">
          <section className=" flex flex-col justify-between  space-y-6  ">
            <div>
              {stock > 0 ? (
                <span className="  rounded border border-green-500 px-4 py-2 text-center text-xs font-medium capitalize text-green-500 ">
                  In stock
                </span>
              ) : (
                <span className="  rounded border  border-red-300 px-4 py-2 text-xs font-medium capitalize text-red-300 ">
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
            <p className="font-light text-gray-500">{description}</p>

            {/* Price and Stock availability */}
            <div className="space-y-4">
              <h5 className="text-2xl font-bold">{formatPrice(price)}</h5>
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
