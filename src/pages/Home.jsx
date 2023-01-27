import React from "react"
import {
  BasketProduct,
  Header,
  HomeProduct,
  Instagram,
  ProductCategory,
  ProductGrid,
} from "../components"

const Home = () => {
  return (
    <>
      <Header />
      <HomeProduct />
      <BasketProduct />
      <ProductGrid />
      <ProductCategory />
      <Instagram />
    </>
  )
}

export default Home
