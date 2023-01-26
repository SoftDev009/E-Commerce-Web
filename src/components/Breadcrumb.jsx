import React from "react"
import { Link } from "react-router-dom"

const Breadcrumb = ({ title }) => {
  return (
    <div className=" my-4 text-center bg-gray-200 py-2 text-xl font-bold ">
      <h3>
        <Link to="/"> Home </Link> / {title}
      </h3>
    </div>
  )
}

export default Breadcrumb
