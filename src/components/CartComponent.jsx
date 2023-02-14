import React from "react"
import { BiMinus, BiPlus } from "react-icons/bi"
import { HiOutlineTrash } from "react-icons/hi"
import { useCartContext } from "../context/cart_context"
import { formatPrice } from "../utils/helper"
import { Order_summary, ProductImage } from "../components"
const CartComponent = () => {
  const { cart, removeItem, toggleAmount, total_amount, shipping_fee } =
    useCartContext()
  return (
    <section className="container mx-auto mt-20 px-5 lg:px-28 flex flex-col md:flex-row gap-28 justify-between">
      {/* Right */}
      <div className="md:w-full  ">
        <h4 className="font-medium text-xl flex items-center py-2 capitalize tracking-widest ">
          shopping Cart
        </h4>
        <hr />
        {/* Headers */}
        <div className=" grid-cols-5 hidden md:grid text-sm tracking-widest mt-10    text-gray-500 uppercase">
          <h4 className="col-span-2">Product details </h4>
          <p className="text-center">Quantity</p>
          <p className="text-right">Price</p>
          <p className="text-right">Total</p>
        </div>
        {/* Cart content */}
        {cart.map((item) => {
          const { amount, color, id, name, price } = item
          return (
            <article
              key={id}
              className="grid md:grid-cols-5 mt-5 border-b pb-6  "
            >
              {/* image */}
              <div className="flex justify-center items-center col-span-2 space-x-4  ">
                <ProductImage product={item} className="w-28 h-32" />
                <div className=" h-full flex flex-col justify-between  ">
                  <p className=""> {name} </p>
                  <p className="text-sm  uppercase flex items-center  ">
                    {" "}
                    color :{" "}
                    <span
                      style={{ background: color }}
                      className="w-4 h-4  rounded-full ml-3"
                    >
                      {" "}
                    </span>{" "}
                  </p>
                  <button className="" onClick={() => removeItem(id)}>
                    {" "}
                    <HiOutlineTrash className=" w-5 h-5 " />{" "}
                  </button>
                </div>
              </div>
              {/* Quantity */}
              <div className=" space-x-4  flex justify-center items-center ">
                <button
                  className="text-right"
                  onClick={() => toggleAmount(id, "decrease")}
                >
                  {" "}
                  <BiMinus />{" "}
                </button>
                <p className="text-center"> {amount} </p>
                <button
                  className={`text-right  `}
                  onClick={() => toggleAmount(id, "increase")}
                >
                  {" "}
                  <BiPlus />{" "}
                </button>
              </div>
              {/* Price */}
              <p className="text-right flex justify-end items-center">
                {formatPrice(price)}
              </p>
              <p className="font-medium text-right flex justify-end items-center">
                {formatPrice(price * amount)}
              </p>
            </article>
          )
        })}
      </div>
      {/* Left */}
      {/* Order summary */}
      <Order_summary />
    </section>
  )
}

export default CartComponent
