import React from "react"
import { ProductImage, Product_title } from "../components"
const Grid_view_products = ({ products }) => {
  return (
    <>
      <section className=" grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => {
          const { id } = product
          return (
            <article key={id} className="space-y-6 group ">
              <ProductImage product={product} className=" w-full h-80 p-10 " />
              <Product_title
                product={product}
                className=" flex flex-col justify-center items-center space-y-1  "
              />
            </article>
          )
        })}
      </section>
    </>
  )
}

export default Grid_view_products
