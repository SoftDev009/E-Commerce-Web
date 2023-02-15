import React from 'react'
import { useProductsContext } from "../context/products_context"
import { CategoryProducts } from "../components"
const ProductCategory = () => {
  const { products } = useProductsContext()

  const all_Decoration_products = products.filter(
    (product) => product.category === "decoration"
  )
  const all_Architect_products = products.filter(
    (product) => product.category === "architect"
  )

  return (
    <>
      <section className=" mt-20 md:mt-28">
        <div className="container mx-auto px-5 xl:px-28 py-2">
          <CategoryProducts
            products={all_Decoration_products}
            category_name="decoration"
          />
          <CategoryProducts
            products={all_Architect_products}
            category_name="architect"
          />
        </div>
      </section>
    </>
  )
}

export default ProductCategory