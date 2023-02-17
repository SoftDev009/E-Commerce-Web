import React from "react"
import { ProductImage, Product_title } from "../components"
import { View_button } from "../components"

const CategoryProducts = ({ products, category_name }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 border-b py-8">
        <article className="md:my-5 ">
          <div className="md:pt-10 space-y-4 ">
            <h4 className="text-4xl tracking-wider capitalize ">
              {category_name}
            </h4>
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
              className=" relative space-y-5 xl:space-y-5 xl:my-5 group  "
            >
              <ProductImage product={product} className=" h-80 xl:h-96 p-8 " />
              <Product_title product={product} />
              {sale && (
                <div className="absolute uppercase tracking-wider bg-red-500 text-gray-100 xl:px-3 px-2  py-[2px] -top-7 right-3 text-[8px] xl:text-xs ">
                  <p>Sale</p>
                </div>
              )}
              {new_in_market && (
                <div className="absolute uppercase tracking-wider bg-green-500 text-gray-100 xl:px-3 px-2  py-[2px] -top-7 right-3 text-[8px] xl:text-xs ">
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
