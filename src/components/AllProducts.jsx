import React from "react"
import { useProductsContext } from "../context/products_context"
import {
  Loading,
  Error,
  Grid_view_products,
  List_view_products,
} from "../components"
import { useFilterContext } from "../context/filter_context"

const AllProducts = () => {
  const { products_loading, products_error } = useProductsContext()
  const { filtered_products: products, grid_view } = useFilterContext()

  if (products_loading) return <Loading />
  if (products_error) return <Error />
  if (grid_view === false) return <List_view_products products={products} />

  return (
    <>
      <Grid_view_products products={products} />
    </>
  )
}

export default AllProducts
