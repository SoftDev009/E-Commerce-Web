import React, { useState } from "react"
import {
  Breadcrumb,
  Filters,
  AllProducts,
  Sort,
  NotFound,
  Sidebar_Filter,
  Loading,
} from "../components"
import { useFilterContext } from "../context/filter_context"
import { useProductsContext } from "../context/products_context"
const Products = () => {
  const { filtered_products: products } = useFilterContext()
  const { products_loading } = useProductsContext()
  if (products_loading) return <Loading />
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
        {/* Sidebar filter */}
        <Sidebar_Filter />
      </section>
    </>
  )
}

export default Products
