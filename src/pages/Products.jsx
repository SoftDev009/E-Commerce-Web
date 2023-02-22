import React, { useState } from "react"
import { Breadcrumb, Filters, AllProducts, Sort, NotFound } from "../components"
import { useFilterContext } from "../context/filter_context"
import { FaFilter } from "react-icons/fa"
const Products = () => {
  const { filtered_products: products } = useFilterContext()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Breadcrumb title="products" />
      <section className="container mx-auto px-5 xl:px-28 flex my-10 gap-10 relative photo ">
        <Filters />
        <div className="space-y-8 w-full font-light  ">
          {products.length < 1 && <NotFound />}
          {products.length >= 1 && <Sort />}
          <AllProducts />
        </div>
        <div className=" lg:hidden inset-y-1/2 right-0 fixed ">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="  px-3 py-3  bg-black focus:bg-primary    "
          >
            {" "}
            <FaFilter className=" fill-white " />{" "}
          </button>
        </div>
        {/* {isOpen && (
          <div className=" photo-info translate-x-full transform absolute bg-gray-100 ">
            <p>filter: coming soon</p>
          </div>
        )} */}
      </section>
    </>
  )
}

export default Products
