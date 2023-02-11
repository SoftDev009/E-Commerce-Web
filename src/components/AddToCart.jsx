import React, { useState } from "react"
import { BsStarFill, BsCheck, BsHandbag } from "react-icons/bs"
import { HiOutlineShoppingCart } from "react-icons/hi"
import { BiChevronDown, BiChevronUp } from "react-icons/bi"

const AddToCart = ({ product }) => {
  const { id, colors, stock } = product
  const [amount, setAmount] = useState(1)

  // Increase Cart
  const increaseAmount = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1
      if (tempAmount > stock) {
        tempAmount = stock
      }
      return tempAmount
    })
  }

  // Decrease Cart
  const decreaseAmount = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1
      if (tempAmount < 1) {
        tempAmount = 1
      }
      return tempAmount
    })
  }

  return (
    <>
      <section className=" space-y-10 ">
        {/* colors */}
        <div className="flex space-x-4">
          <span className=" text-sm text-gray-500 uppercase w-20  ">
            Color :
          </span>
          <div className="space-x-4 flex justify-center items-center">
            <button className="bg-blue-500 rounded-full text-white  xl:px-[0.18rem] xl:py-[0.18rem]">
              {" "}
              <BsCheck />{" "}
            </button>
            <button className="bg-yellow-500 rounded-full text-white  xl:px-[0.18rem] xl:py-[0.18rem]">
              {" "}
              <BsCheck />{" "}
            </button>
            <button className="bg-green-500 rounded-full text-white  xl:px-[0.18rem] xl:py-[0.18rem]">
              {" "}
              <BsCheck />{" "}
            </button>
            <button className="bg-black rounded-full text-white  xl:px-[0.18rem] xl:py-[0.18rem]">
              {" "}
              <BsCheck />{" "}
            </button>
          </div>
        </div>

        {/* Quantity */}
        <div className="flex items-center space-x-4 ">
          <label
            htmlFor="quantity"
            className=" uppercase text-gray-500 text-sm w-20  "
          >
            Quantity:
          </label>
          <div className=" relative flex  justify-center items-center ">
            <input
              name="quantity"
              id="quantity"
              type="number"
              min={1}
              max={10}
              value={amount}
              className=" w-16 h-[50px] text-center outline-none border-gray-200 focus:ring-0 focus-within:ring-green-300 focus:outline-none focus:border-gray-200"
              aria-label="Quantity"
            />
            <span className=" absolute flex flex-col justify-center items-center -right-[23px] space-y-[0.5px] border  h-[50px] w-6 ">
              <button
                className=" border-b w-full h-full flex flex-col justify-center items-center hover:bg-black "
                onClick={increaseAmount}
              >
                {" "}
                <BiChevronUp className=" w-4 h-4 text-gray-500   hover:text-white" />{" "}
              </button>
              <button
                className=" border-t w-full h-full flex flex-col justify-center items-center hover:bg-black "
                onClick={decreaseAmount}
              >
                {" "}
                <BiChevronDown className=" w-4 h-4 text-gray-500 hover:text-white  " />{" "}
              </button>
            </span>
          </div>
        </div>

        {/* Add to cart Buttons */}
        <div className="xl:justify-start justify-between  xl:space-x-8 flex w-full items-center">
          <button className="flex justify-center items-center bg-black text-sm uppercase tracking-wider text-white py-4 px-16 hover:bg-green-500  ">
            {/* <button className="flex justify-center  items-center bg-black md:px-8 xl:px-20 sm:px-16 px-8 text-sm py-5 uppercase tracking-wider text-white"> */}{" "}
            <span>
              {" "}
              <HiOutlineShoppingCart className="w-5 h-5 mr-2 " />{" "}
            </span>
            Add to bag
          </button>
          {/* <button className="border md:px-8 sm:px-12 px-8 text-sm xl:px-16 py-3 uppercase tracking-wider font-medium ">
                buy now
              </button> */}
        </div>
      </section>
    </>
  )
}

export default AddToCart
