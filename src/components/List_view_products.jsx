import React from "react"
import { Link } from "react-router-dom"
import { formatPrice } from "../utils/helper"

const List_view_products = ({ products }) => {
  return (
    <>
      <section className=" grid grid-cols-1 gap-6">
        {products.map((product) => {
          const { id, name, image, price, description } = product
          return (
            <article key={id} className="flex flex-row gap-10  ">
              <div className=" bg-gray-100 w-1/2  ">
                <Link to={`/shop/:${id}`}>
                  <img
                    src={image}
                    alt={name}
                    className=" w-96 h-80 object-cover object-center mix-blend-darken p-8 "
                  />
                </Link>
              </div>
              <div className=" space-y-4 w-full  ">
                <p className=" font-medium  capitalize"> {name}</p>
                <p className=" font-light  "> {formatPrice(price)} </p>
                <p className="  "> {description} </p>
              </div>
            </article>
          )
        })}
      </section>
    </>
  )
}

export default List_view_products
