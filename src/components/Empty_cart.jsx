import React from "react"
import Empty_Cart_Image from "../assets/undraw_empty_cart.svg"
import { Link } from "react-router-dom"

const Empty_cart = () => {
  return (
    <section className="grid place-items-center my-16  ">
      <img src={Empty_Cart_Image} alt="" className=" w-72  " />
      <div className=" my-10 flex flex-col justify-center items-center ">
        <h3 className=" text-2xl font-medium "> Your cart is empty. </h3>
        <p className=" w-1/2 text-center text-md mt-4 text-gray-700 ">
          Looks like you have not added anything to your cart. Go ahead and
          explore top categories.
        </p>
        <Link
          to="/shop"
          className=" mt-10 uppercase text-primary border border-primary px-16 py-2 font-medium  "
        >
          {" "}
          Add items{" "}
        </Link>
      </div>
    </section>
  )
}

export default Empty_cart
