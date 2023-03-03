import React from "react"
import { Link } from "react-router-dom"
import PageNotFound from "../assets/undraw_page_not_found.svg"

const Error = () => {
  return (
    <>
      <section className=" grid place-items-center ">
        <img src={PageNotFound} alt="Page not found" className="h-96 w-96  " />
        <div className=" space-y-4 text-center ">
          <h3 className=" text-2xl font-semibold ">Page Not Found</h3>
          <p className=" font-light ">
            The page you're looking for does not seem to exist.
          </p>
          <Link
            to="/"
            className=" inline-block border border-primary px-6 py-1 uppercase text-gray-600 "
          >
            {" "}
            Go to home{" "}
          </Link>
        </div>
      </section>
    </>
  )
}

export default Error
