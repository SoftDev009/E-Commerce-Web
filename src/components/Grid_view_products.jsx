import React from "react"
import { formatPrice } from "../utils/helper"

const Grid_view_products = ({ products }) => {
  return (
    <>
      <section className=" grid grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => {
          const { id, name, image, price } = product
          return (
            <article key={id} className="space-y-6">
              <div className=" bg-gray-100 ">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-80 object-cover object-center mix-blend-darken p-8 "
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
    </>
  )
}

export default Grid_view_products
