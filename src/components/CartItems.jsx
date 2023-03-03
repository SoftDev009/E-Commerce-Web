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
            <article key={id} className="relative mt-10 grid md:grid-cols-5  ">
              <div className=" col-span-2 grid grid-cols-2  gap-5 ">
                {/* image */}
                <ProductImage
                  product={item}
                  className="  h-44 p-4 md:h-40 lg:h-32 xl:h-44  "
                />
                <div className="flex h-full flex-col space-y-4   ">
                  {/*  name */}
                  <p className=" md:font-medium  "> {name} </p>
                  <div className="  space-y-1 ">
                    {/* stock */}
                    <p className=" text-xs font-light text-green-600 ">
                      {" "}
                      {max > 1 ? "In stock" : "out of stock"}{" "}
                    </p>
                    {/* color */}
                    <p className="flex items-center text-xs capitalize text-gray-500  ">
                      {" "}
                      color :{" "}
                      <span
                        style={{ background: color }}
                        className="ml-3 h-3  w-3 rounded-full"
                      >
                        {" "}
                      </span>{" "}
                    </p>
                    {/* Price */}
                    <p className="font-sans font-semibold  md:hidden ">
                      {" "}
                      {formatPrice(price)}{" "}
                    </p>
                    {/* Quantity */}
                    <div className=" flex items-center space-x-4 py-2 md:hidden ">
                      <button
                        className="text-right"
                        onClick={() => toggleAmount(id, "decrease")}
                      >
                        {" "}
                        <BiMinus />{" "}
                      </button>
                      <p className="bg-black px-2 text-center text-white ">
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
                      className=" pt4 text-sm tracking-wider underline "
                      onClick={() => removeItem(id)}
                    >
                      {" "}
                      Delete
                    </button>
                  </div>
                </div>
              </div>

              {/* Quantity */}
              <div className="  hidden  items-center justify-center space-x-4 md:flex ">
                <button
                  className="text-right"
                  onClick={() => toggleAmount(id, "decrease")}
                >
                  {" "}
                  <BiMinus />{" "}
                </button>
                <p className="bg-black px-2 text-center text-white ">
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
              <p className="hidden items-center justify-end text-right md:flex">
                {formatPrice(price)}
              </p>
              {/* Total */}
              <p className=" hidden items-center justify-end text-right font-medium md:flex">
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
