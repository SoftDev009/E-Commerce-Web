import React from "react"
import { BsCart2, BsPersonPlus, BsPersonDash } from "react-icons/bs"
import { Link } from "react-router-dom"
import { useCartContext } from "../context/cart_context"
import { userUserContext } from "../context/user_context"

const Cart_Button = () => {
  const { myUser, loginWithRedirect, logout } = userUserContext()
  const { total_items, clearCart } = useCartContext()
  return (
    <>
      <div className="  space-x-8 flex  md:space-x-8">
        <Link
          to="/cart"
          className="relative flex flex-row justify-center items-center "
        >
          {" "}
          <BsCart2 className="relative ml-1 h-6 w-6 " />{" "}
          <span className="absolute -top-2 -right-3 flex justify-center items-center bg-primary w-4 h-4 rounded-full shadow-md  text-white text-xs  ">
            {" "}
            {total_items}
          </span>
        </Link>
        <div className="flex-col-reverse items-center justify-center md:flex md:flex-row ">
          {myUser ? (
            <button
              className="flex hover:text-primary "
              onClick={() => {
                clearCart()
                logout({ returnTo: window.location.origin })
              }}
            >
              <BsPersonDash className="h-6 w-6" />
            </button>
          ) : (
            <button className="flex" onClick={loginWithRedirect}>
              <BsPersonPlus className="h-6 w-6" />
            </button>
          )}
        </div>
      </div>
    </>
  )
}

export default Cart_Button
