import React from "react"
import { useProductsContext } from "../context/products_context"
import { formatPrice } from "../utils/helper"

const CollectionProducts = ({ products, title }) => {
  const { products_loading } = useProductsContext()

  return (
    <>
      <section className=" md:space-y-4 w-full ">
        <h2 className="font-bold uppercase tracking-widest pb-4 md:pb-0 ">
          {" "}
          {title}{" "}
        </h2>
        <hr className=" " />
        {products_loading && <p> Loading... </p>}
        {products.slice(0, 3).map((product) => {
          const { name, price, id, image } = product
          return (
            <div key={id} className=" flex space-x-6 pt-8 md:pt-4  ">
              <div className=" bg-gray-100  ">
                <img
                  src={image}
                  alt={`${name} product `}
                  className="w-20 h-20 object-cover object-center mix-blend-multiply   "
                />
              </div>
              <div className=" space-y-1 ">
                <p className="text-gray-600 text-sm"> {name} </p>
                <p className="font-semibold"> {formatPrice(price)} </p>
              </div>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default CollectionProducts
