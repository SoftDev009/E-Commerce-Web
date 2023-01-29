import React from 'react'
import FiltersComponent from './Filters'
import AllProducts from './AllProducts'

const ProductsHome = () => {
  return (
    <>
      <section className="container mx-auto px-5 xl:px-28 flex my-10 gap-10 relative ">
        <FiltersComponent />
        <AllProducts />
      </section>
    </>
  )
}

export default ProductsHome