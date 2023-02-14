import React from 'react'
import { CollectionProducts, Loading } from "../components"
import { useProductsContext } from "../context/products_context"

const ProductGrid = () => {
  const { featured_products, newArrival_products, bestSeller_products } =
    useProductsContext()

  return (
    <section className="container mx-auto gap-10 px-5 xl:px-28 grid grid-cols-1 md:grid-cols-3 capitalize place-items-center mt-20 ">
      {/* Bestseller */}
      <CollectionProducts products={bestSeller_products} title="Best seller" />

      {/* New Arrival */}
      <CollectionProducts products={newArrival_products} title="New Arrival" />

      {/* Featured Products */}
      <CollectionProducts products={featured_products} title="Featured" />
    </section>
  )
}

export default ProductGrid