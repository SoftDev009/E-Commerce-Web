import React from "react"
import { Breadcrumb, ProductsHome, Filters, AllProducts } from "../components"
const Products = () => {
  return (
    <>
      <Breadcrumb title="products" />
      <section className="container mx-auto px-5 xl:px-28 flex my-10 gap-10 relative ">
        <Filters />
        <AllProducts />
      </section>
    </>
  )
}

export default Products
