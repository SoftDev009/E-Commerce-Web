import React from "react"
import Empty_Cart_Image from "../assets/undraw_empty_cart.svg"
import { Link } from "react-router-dom"

const Empty_cart = () => {
  return (
    <section className="my-16 grid place-items-center  ">
      <img src={Empty_Cart_Image} alt="" className=" w-60  " />
      <div className=" my-10 flex flex-col items-center justify-center ">
        <h3 className=" text-2xl font-medium "> Your cart is empty. </h3>
        <p className=" text-md mt-4 w-1/2 text-center text-gray-700 ">
          Looks like you have not added anything to your cart.
        </p>
        <Link
          to="/shop"
          className=" mt-10 border border-primary px-16 py-2 font-medium uppercase text-primary hover:bg-green-100/50  "
        >
          {" "}
          Add items{" "}
        </Link>
      </div>
    </section>
  )
}

export default Empty_cart
