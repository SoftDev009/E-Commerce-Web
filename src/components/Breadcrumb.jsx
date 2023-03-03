import React from "react"
import { Link } from "react-router-dom"

const Breadcrumb = ({ title, product }) => {
  return (
    <>
      <section className="my-10 bg-gray-100 font-light  ">
        <h3 className=" container mx-auto px-5 py-2 text-xl capitalize xl:px-28 ">
          <Link to="/"> Home </Link>
          {product && <Link to="/shop"> / Products </Link>} / {title}
        </h3>
      </section>
    </>
  )
}

export default Breadcrumb
