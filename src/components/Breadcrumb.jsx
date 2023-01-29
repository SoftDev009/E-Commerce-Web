import React from "react"
import { Link } from "react-router-dom"

const Breadcrumb = ({ title }) => {
  return (
    <>
      <section className="bg-gray-100 my-10 font-light  ">
        <div className=" container mx-auto px-5 xl:px-28 py-2 text-xl capitalize ">
          <Link to="/"> Home </Link> / {title}
        </div>
      </section>
    </>
  )
}

export default Breadcrumb
