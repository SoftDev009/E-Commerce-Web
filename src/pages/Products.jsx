import React from "react"
import { Breadcrumb, Filters, AllProducts, Sort, NotFound } from "../components"
import { useFilterContext } from "../context/filter_context"

const Products = () => {
  const { filtered_products: products } = useFilterContext()

  return (
    <>
      <Breadcrumb title="products" />
      <section className="container mx-auto px-5 xl:px-28 flex my-10 gap-10 relative ">
        <Filters />
        <div className="space-y-8 w-full font-light  ">
          {products.length < 1 && <NotFound />}
          {products.length >= 1 && <Sort />}
          <AllProducts />
        </div>
      </section>
    </>
  )
}

export default Products
