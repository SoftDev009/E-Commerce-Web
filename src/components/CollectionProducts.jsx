import React from "react"
import { formatPrice } from "../utils/helper"
import { ProductImage, Product_title, ProductCard } from "../components"
import { Link } from "react-router-dom"

const CollectionProducts = ({ products, title }) => {
  return (
    <>
      <section className=" md:space-y-4 w-full ">
        <h2 className="font-bold uppercase tracking-widest pb-4 md:pb-0 ">
          {" "}
          {title}{" "}
        </h2>
        <hr className=" " />
        {products.slice(0, 3).map((product) => {
          const { name, price, id } = product
          return (
            <div key={id} className=" flex space-x-6 pt-8 md:pt-4 group  ">
              <ProductImage product={product} className="w-20 h-20 p-2 " />
              <Product_title product={product} />
            </div>
          )
        })}
      </section>
    </>
  )
}

export default CollectionProducts
