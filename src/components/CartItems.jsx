import React from "react"
import { BiMinus, BiPlus } from "react-icons/bi"
import { useCartContext } from "../context/cart_context"
import { formatPrice } from "../utils/helper"
import { Order_summary, ProductImage } from "../components"
const CartItems = () => {
  const { cart, removeItem, toggleAmount } = useCartContext()
  return (
    <section className="container mx-auto mt-20 px-5 xl:px-28 flex flex-col lg:flex-row gap-28 xl:gap-28 lg:gap-10 justify-between md:items-center lg:items-start ">
      {/* Right */}
      <div className="md:w-full  ">
        <h4 className="font-medium text-xl flex items-center py-2 capitalize tracking-widest ">
          shopping Cart
        </h4>
        <hr />
        {/* Headers */}
        <div className="  grid-cols-5 hidden md:grid text-sm tracking-widest mt-10    text-gray-500 uppercase">
          <h4 className="col-span-2">Product details </h4>
          <p className="text-center">Quantity</p>
          <p className="text-right">Price</p>
          <p className="text-right">Total</p>
        </div>
        {/* Cart content */}
        {cart.map((item) => {
          const { amount, color, id, name, price, max } = item
          return (
            <article key={id} className="grid md:grid-cols-5 mt-10 relative  ">
              <div className=" grid grid-cols-2 col-span-2  gap-5 ">
                {/* image */}
                <ProductImage
                  product={item}
                  className="  h-44 p-4 lg:h-32 md:h-40 xl:h-44  "
                />
                <div className="h-full flex flex-col space-y-4   ">
                  {/*  name */}
                  <p className=" md:font-medium  "> {name} </p>
                  <div className="  space-y-1 ">
                    {/* stock */}
                    <p className=" text-xs text-green-600 font-light ">
                      {" "}
                      {max > 1 ? "In stock" : "out of stock"}{" "}
                    </p>
                    {/* color */}
                    <p className="text-xs text-gray-500 capitalize flex items-center  ">
                      {" "}
                      color :{" "}
                      <span
                        style={{ background: color }}
                        className="w-3 h-3  rounded-full ml-3"
                      >
                        {" "}
                      </span>{" "}
                    </p>
                    {/* Price */}
                    <p className="font-sans md:hidden  font-semibold ">
                      {" "}
                      {formatPrice(price)}{" "}
                    </p>
                    {/* Quantity */}
                    <div className=" py-2 space-x-4 md:hidden flex items-center ">
                      <button
                        className="text-right"
                        onClick={() => toggleAmount(id, "decrease")}
                      >
                        {" "}
                        <BiMinus />{" "}
                      </button>
                      <p className="text-center bg-black text-white px-2 ">
                        {" "}
                        {amount}{" "}
                      </p>
                      <button
                        className={`text-right  `}
                        onClick={() => toggleAmount(id, "increase")}
                      >
                        {" "}
                        <BiPlus />{" "}
                      </button>
                    </div>
                    {/* Remove button */}
                    <button
                      className=" text-sm underline tracking-wider pt4 "
                      onClick={() => removeItem(id)}
                    >
                      {" "}
                      Delete
                    </button>
                  </div>
                </div>
              </div>

              {/* Quantity */}
              <div className="  space-x-4  hidden md:flex justify-center items-center ">
                <button
                  className="text-right"
                  onClick={() => toggleAmount(id, "decrease")}
                >
                  {" "}
                  <BiMinus />{" "}
                </button>
                <p className="text-center bg-black text-white px-2 ">
                  {" "}
                  {amount}{" "}
                </p>
                <button
                  className={`text-right  `}
                  onClick={() => toggleAmount(id, "increase")}
                >
                  {" "}
                  <BiPlus />{" "}
                </button>
              </div>
              {/* Price */}
              <p className="text-right hidden md:flex justify-end items-center">
                {formatPrice(price)}
              </p>
              {/* Total */}
              <p className=" hidden font-medium text-right md:flex justify-end items-center">
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

export default CartItems
