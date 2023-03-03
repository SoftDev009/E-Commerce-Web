import React from "react"
import { ProductImage, Product_title } from "../components"

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
          const { id } = product
          return (
            <div
              key={id}
              className=" group flex flex-row space-x-5 pt-8 md:pt-4  "
            >
              <ProductImage product={product} className="h-20 w-20 p-2 " />
              <Product_title product={product} />
            </div>
          )
        })}
      </section>
    </>
  )
}

export default CollectionProducts
