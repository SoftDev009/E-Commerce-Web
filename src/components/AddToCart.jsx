import React, { useState } from "react"
import { BsCheck, BsCart2 } from "react-icons/bs"
import { BiChevronDown, BiChevronUp } from "react-icons/bi"
import { useCartContext } from "../context/cart_context"
import { Link } from "react-router-dom"

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext()
  const { id, colors, stock } = product
  const [amount, setAmount] = useState(1)
  const [mainColor, setMainColor] = useState(colors?.[0])

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
      <section className=" space-y-8 ">
        {/* colors */}
        <div className="flex items-center space-x-4">
          <span className=" w-20 text-sm uppercase text-gray-500  ">
            Color :
          </span>
          <div className="flex items-center justify-center space-x-4">
            {colors?.map((colorButton, index) => {
              return (
                <button
                  key={index}
                  onClick={() => setMainColor(colorButton)}
                  style={{ background: colorButton }}
                  className={` flex h-5 w-5 items-center justify-center rounded-full text-white   `}
                >
                  {" "}
                  {mainColor === colorButton ? <BsCheck /> : null}
                </button>
              )
            })}
          </div>
        </div>

        {/* Quantity */}
        <div className="flex items-center space-x-4 ">
          <label
            htmlFor="quantity"
            className=" w-20 text-sm uppercase text-gray-500  "
          >
            Quantity:
          </label>
          <div className=" relative flex  items-center justify-center ">
            <input
              name="quantity"
              id="quantity"
              type="number"
              min={1}
              max={10}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className=" h-[40px] w-16 border-gray-200 text-center outline-none focus:border-gray-200 focus:ring-0 disabled:cursor-not-allowed "
              aria-label="Quantity"
            />
            <span className=" absolute -right-[23px] flex h-[40px] w-6 flex-col items-center justify-center  space-y-[0.5px] border  ">
              <button
                title="Increase"
                className={`flex h-full w-full flex-col items-center justify-center border-b hover:bg-black`}
                onClick={increaseAmount}
              >
                {" "}
                <BiChevronUp className=" h-4 w-4 text-gray-500   hover:text-white" />{" "}
              </button>
              <button
                title="Decrease"
                className=" flex h-full w-full flex-col items-center justify-center border-t hover:bg-black "
                onClick={decreaseAmount}
              >
                {" "}
                <BiChevronDown className=" h-4 w-4 text-gray-500 hover:text-white  " />{" "}
              </button>
            </span>
          </div>
        </div>
        {/* Add to cart Buttons */}
        <div className="flex w-full  items-center justify-between xl:justify-start xl:space-x-8">
          <Link
            to="/cart"
            className={`flex bg-black py-4 px-14 text-sm uppercase tracking-wider text-white hover:bg-primary   `}
            onClick={() => addToCart(id, mainColor, amount, product)}
          >
            <span>
              {" "}
              <BsCart2 className="mr-1 h-4 w-6 " />{" "}
            </span>
            Add to Cart
          </Link>
        </div>
      </section>
    </>
  )
}

export default AddToCart
