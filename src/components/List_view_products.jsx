import React from "react"
import { ProductImage, Product_title } from "../components"

const List_view_products = ({ products }) => {
  return (
    <>
      <section className=" grid grid-cols-1 gap-6">
        {products.map((product) => {
          const { id, description } = product
          return (
            <article
              key={id}
              className=" flex flex-col md:flex-row md:gap-10 group space-y-4 md:space-y-0  "
            >
              <ProductImage
                product={product}
                className="h-72 md:h-60 md:w-72 lg:w-80 xl:w-96 md:p-4 xl:h-80 p-8 "
              />
              <div className=" w-full space-y-4  ">
                <Product_title product={product} className="w-full" />
                <p className="  md:mt-10 "> {description} </p>
              </div>
            </article>
          )
        })}
      </section>
    </>
  )
}

export default List_view_products
