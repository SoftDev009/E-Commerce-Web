import React from "react"
import image1 from "../assets/testImage2.png"
import { BiMinus, BiPlus } from "react-icons/bi"
import { HiOutlineTrash } from "react-icons/hi"
import { useCartContext } from "../context/cart_context"
import { formatPrice } from "../utils/helper"
const CartComponent = () => {
  const { cart, removeItem, toggleAmount, total_amount, shipping_fee } =
    useCartContext()
  return (
    <section className="container mx-auto mt-20 px-5 lg:px-28 flex flex-col md:flex-row gap-28 justify-between">
      {/* Right */}
      <div className="md:w-full  ">
        <h4 className="font-medium text-xl capitalize tracking-widest ">
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
          const { amount, color, id, image, name, price } = item
          return (
            <article
              key={id}
              className="grid md:grid-cols-5 mt-5 border-b pb-6  "
            >
              {/* image */}
              <div className="flex justify-center items-center col-span-2 space-x-4  ">
                <img
                  src={image}
                  alt={name}
                  className="w-28 h-32 object-cover object-center bg-gray-100 "
                />
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
                  className="text-right"
                  onClick={() => toggleAmount(id, "increase")}
                >
                  {" "}
                  <BiPlus />{" "}
                </button>
              </div>
              <p className="text-right flex justify-end items-center">
                ${price}
              </p>
              <p className="font-medium text-right flex justify-end items-center">
                ${price * amount}
              </p>
            </article>
          )
        })}
      </div>

      {/* Left */}
      <div className=" md:w-1/2 mb-5 md:mb-0 ">
        <div className=" font-medium  text-xl flex items-center py-2 capitalize tracking-widest">
          <h4 className="">Order summary</h4>
        </div>
        <hr />
        <article className=" bg-gray-100 mt-9 border-b-4 border-white border-dashed px-4 py-8 text-gray-500 space-y-4 rounded-t-md font-light text-sm  ">
          <h5 className="flex justify-between items-center">
            Bag total{" "}
            <span className="text-black text-lg">
              {" "}
              {formatPrice(total_amount)}{" "}
            </span>{" "}
          </h5>
          <h5 className="flex justify-between items-center">
            Bag discount{" "}
            <span className=" text-green-500 text-lg"> -$1,663.00</span>{" "}
          </h5>
          <h5 className="flex justify-between items-center">
            Delivery Fee{" "}
            <span className=" text-lg text-green-500">
              Free{" "}
              <span className="text-black line-through text-sm">
                {" "}
                {formatPrice(shipping_fee)}
              </span>{" "}
            </span>{" "}
          </h5>
        </article>
        <h5 className="flex rounded-b-md justify-between items-center text-gray-500 bg-gray-100/60 py-8 px-4 bg-blu-100/60 text-sm">
          Subtotal{" "}
          <span className="text-xl font-medium text-black">
            {formatPrice(total_amount + shipping_fee)}
          </span>{" "}
        </h5>
        <button className="bg-black w-full text-white py-4 mt-5 uppercase tracking-widest rounded">
          Proceed to Checkout
        </button>
      </div>
    </section>
  )
}

export default CartComponent
