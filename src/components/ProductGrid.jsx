import React from 'react'
import { CollectionProducts } from "../components"
import { useProductsContext } from "../context/products_context"

const ProductGrid = () => {
  const { featured_products, newArrival_products, bestSeller_products } =
    useProductsContext()

  return (
    <section className="container mx-auto mt-20 grid grid-cols-1 place-items-center gap-10 px-5 capitalize md:mt-28 md:grid-cols-3 xl:px-28 ">
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