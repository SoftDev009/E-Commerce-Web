import React from 'react'
import FiltersComponent from './Filters'
import AllProducts from './AllProducts'

const ProductsHome = () => {
  return (
    <>
      <section className="container relative mx-auto my-10 flex gap-10 px-5 xl:px-28 ">
        <FiltersComponent />
        <AllProducts />
      </section>
    </>
  )
}

export default ProductsHome