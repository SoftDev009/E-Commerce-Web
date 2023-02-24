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
              className=" grid grid-cols-2 md:grid-cols-3 w-full  gap-5 md:gap-10 group md:space-y-0  "
            >
              <ProductImage
                product={product}
                className="h-40 md:h-60 md:w-72 lg:w-80 xl:w-96 p-4 xl:h-64 xl:p-8 "
              />
              <div className=" w-full space-y-4 md:col-span-2  ">
                <Product_title product={product} className="w-full" />
                {/* <p className="  md:mt-10"> {description} </p> */}
              </div>
            </article>
          )
        })}
      </section>
    </>
  )
}

export default List_view_products
