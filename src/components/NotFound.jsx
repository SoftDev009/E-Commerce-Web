import React from "react"
import NotFoundProduct from "../assets/undraw_search_engine.svg"
import { useFilterContext } from "../context/filter_context"
const NotFound = () => {
  const {
    filters: { text },
  } = useFilterContext()
  return (
    <section className=" grid place-items-center space-y-10 ">
      <h3 className=" text-sm mt-10 md:mt-24  ">
        {" "}
        You searched for
        <span className=" font-medium text-indigo-600 "> {text} </span>{" "}
      </h3>
      <img src={NotFoundProduct} alt="" className=" w-60 " />
      <div className=" space-y-2 ">
        <h3 className=" text-3xl text-center ">
          {" "}
          We could't find any matches!{" "}
        </h3>
        <p className=" text-xs text-gray-400 text-center  ">
          Please check the spelling or try searching something else
        </p>
      </div>
    </section>
  )
}

export default NotFound
