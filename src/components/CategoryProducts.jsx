import React from "react"
import { ProductImage, Product_title } from "../components"
import { View_button } from "../components"

const CategoryProducts = ({ products, category_name }) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-6 border-b py-8 md:grid-cols-2 lg:grid-cols-4">
        <article className="md:my-5 ">
          <div className="space-y-4 md:pt-10 ">
            <h3 className="text-4xl capitalize tracking-wider ">
              {category_name}
            </h3>
            <p className="text-sm font-light tracking-wider text-gray-600  ">
              Small be and the rain would phase distance, succeed align.
            </p>
            <View_button title="shop now" />
          </div>
        </article>
        {products.slice(0, 3).map((product) => {
          const { id, new_in_market, sale } = product
          return (
            <article
              key={id}
              className=" group relative space-y-5 xl:my-5 xl:space-y-5  "
            >
              <ProductImage product={product} className=" h-80 p-8 xl:h-96 " />
              <Product_title product={product} />
              {sale && (
                <div className="absolute -top-7 right-3 bg-red-500 px-2 py-[2px] text-[8px]  uppercase tracking-wider text-gray-100 xl:px-3 xl:text-xs ">
                  <p>Sale</p>
                </div>
              )}
              {new_in_market && (
                <div className="absolute -top-7 right-3 bg-green-500 px-2 py-[2px] text-[8px]  uppercase tracking-wider text-gray-100 xl:px-3 xl:text-xs ">
                  <p>new</p>
                </div>
              )}
            </article>
          )
        })}
      </div>
    </>
  )
}

export default CategoryProducts
