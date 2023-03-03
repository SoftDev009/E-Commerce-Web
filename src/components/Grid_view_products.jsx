import React from "react"
import { ProductImage, Product_title } from "../components"
const Grid_view_products = ({ products }) => {
  return (
    <>
      <section className=" grid grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => {
          const { id } = product
          return (
            <article key={id} className="group space-y-2 ">
              <ProductImage
                product={product}
                className="h-40 p-4 md:h-56 md:p-4 xl:h-72 xl:p-8"
              />
              <Product_title
                product={product}
                className=" flex flex-col space-y-1  "
              />
            </article>
          )
        })}
      </section>
    </>
  )
}

export default Grid_view_products
