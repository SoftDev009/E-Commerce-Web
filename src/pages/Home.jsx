import React from "react"
import {
  BasketProduct,
  Exclusive_Products,
  Header,
  HomeProduct,
  Instagram,
  Loading,
  ProductCategory,
  ProductGrid,
} from "../components"
import { useProductsContext } from "../context/products_context"

const Home = () => {
  const { products_loading: loading } = useProductsContext()
  if (loading) return <Loading />
  return (
    <>
      <Header />
      {/* <Exclusive_Products /> */}
      <HomeProduct />
      <BasketProduct />
      <ProductGrid />
      <ProductCategory />
      <Instagram />
    </>
  )
}

export default Home
