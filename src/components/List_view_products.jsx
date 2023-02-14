import React from "react"
import { ProductImage, Product_title } from "../components"

const List_view_products = ({ products }) => {
  return (
    <>
      <section className=" grid grid-cols-1 gap-6">
        {products.map((product) => {
          const { id, description } = product
          return (
            <article key={id} className=" flex flex-row gap-10 group ">
              <ProductImage product={product} className="w-96 h-80 p-10 " />
              <div className=" w-full ">
                <Product_title product={product} className="w-full" />
                <p className="  mt-10 "> {description} </p>
              </div>
            </article>
          )
        })}
      </section>
    </>
  )
}

export default List_view_products
