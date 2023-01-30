import React from "react"
import { Breadcrumb, Filters, AllProducts, Sort } from "../components"
const Products = () => {
  return (
    <>
      <Breadcrumb title="products" />
      <section className="container mx-auto px-5 xl:px-28 flex my-10 gap-10 relative ">
        <Filters />
        <div className="space-y-8 w-full font-light  ">
          <Sort />
          <AllProducts />
        </div>
      </section>
    </>
  )
}

export default Products
