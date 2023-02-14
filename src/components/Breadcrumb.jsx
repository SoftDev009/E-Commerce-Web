import React from "react"
import { Link } from "react-router-dom"

const Breadcrumb = ({ title, product }) => {
  return (
    <>
      <section className="bg-gray-100 my-10 font-light  ">
        <h3 className=" container mx-auto px-5 xl:px-28 py-2 text-xl capitalize ">
          <Link to="/"> Home </Link>
          {product && <Link to="/shop"> / Products </Link>} / {title}
        </h3>
      </section>
    </>
  )
}

export default Breadcrumb
