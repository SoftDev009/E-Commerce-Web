import React from "react"
import { ProductImage, Product_title } from "../components"

const List_view_products = ({ products }) => {
  return (
    <>
      <section className=" grid grid-cols-1 gap-6">
        {products.map((product) => {
          const { id } = product
          return (
            <article
              key={id}
              className=" group grid w-full grid-cols-2  gap-5 md:grid-cols-3 md:gap-10 md:space-y-0  "
            >
              <ProductImage
                product={product}
                className="h-40 p-4 md:h-60 md:w-72 lg:w-80 xl:h-64 xl:w-96 xl:p-8 "
              />
              <div className=" w-full space-y-4 md:col-span-2  ">
                <Product_title product={product} className="w-full" />
              </div>
            </article>
          )
        })}
      </section>
    </>
  )
}

export default List_view_products
