import React, { useEffect } from "react"
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
import ReactGA from "react-ga4"
const Products = () => {
  const { filtered_products: products } = useFilterContext()
  const { products_loading } = useProductsContext()
  if (products_loading) return <Loading />

  useEffect(() => {
    ReactGA.send({
      hitType: "pageView",
      page: window.location.pathname,
      title: "Shop page",
    })
  })
  return (
    <>
      <Breadcrumb title="products" />
      <section className="container relative mx-auto my-10 flex gap-10 px-5 xl:px-28 ">
        <Filters />
        <div className="w-full space-y-8 font-light  ">
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
