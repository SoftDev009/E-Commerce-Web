import React from "react"
import { useProductsContext } from "../context/products_context"
import { ProductImage, View_button } from "../components"
const Exclusive_Products = () => {
  const { products } = useProductsContext()
  const exclusive_products = products.filter(
    (product) => product.exclusive === true
  )
  console.log(exclusive_products)

  return (
    <section className=" container mx-auto grid grid-cols-2 gap-7 mt-5 ">
      {exclusive_products.map((product) => {
        const { id, name, image, description } = product
        // console.log(name.split(" "))
        // console.log(name.match(/.*?[\.\s]+?/g))
        // const words = name.split(" ").filter((w) => w !== "")
        // console.log(words[])
        return (
          <article
            key={id}
            className="relative h-72 bg-gray-100 overflow-hidden flex odd:justify-end even:justify-start pt-4  "
          >
            <img
              src={image}
              alt={name}
              className=" absolute -bottom-5 left-5 w-64 h-64 object-cover object-center bg-gray-100 mix-blend-multiply "
            />
            <div className=" flex flex-col w-3/5 mr-12 even:ml-12  ">
              <h3 className=" text-2xl font-light uppercase"> {name} </h3>
              <p className=" text-sm text-gray-500 pt-2 "> {description} </p>
              <View_button title="view now " className=" text-sm " />
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default Exclusive_Products
