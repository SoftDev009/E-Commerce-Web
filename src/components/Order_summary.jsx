import React from "react"
import { useCartContext } from "../context/cart_context"
import { formatPrice } from "../utils/helper"
import { Link } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"
const Order_summary = () => {
  const { total_amount, shipping_fee } = useCartContext()
  const { user, loginWithRedirect } = useAuth0()
  return (
    <>
      <section className=" md:w-1/2 mb-5 md:mb-0 ">
        <h4 className="font-medium  text-xl flex items-center py-2 capitalize tracking-widest">
          Order summary
        </h4>
        <hr />
        <article className=" mt-9 border-b-4 border-white border-dashed px-4 pt-8 space-y-4 text-sm pb-12 bg-gray-200/70 ">
          <h5 className="flex justify-between items-center">
            Bag total{" "}
            <span className="text-black text-lg">
              {" "}
              {formatPrice(total_amount)}{" "}
            </span>{" "}
          </h5>
          <h5 className="flex justify-between items-center">
            Bag discount{" "}
            <span className=" text-primary text-lg"> {formatPrice(100)} </span>{" "}
          </h5>
          <h5 className="flex justify-between items-center">
            Delivery Fee{" "}
            <span className=" text-lg text-primary">
              Free{" "}
              <span className="text-black line-through text-sm">
                {" "}
                {formatPrice(shipping_fee)}
              </span>{" "}
            </span>{" "}
          </h5>
        </article>
        <h5 className="flex justify-between items-center  font-medium bg-gray-100 py-8 px-4 bg-blu-100/60 text-sm bg-gray-200/70 ">
          Subtotal{" "}
          <span className="text-xl font-medium text-black">
            {formatPrice(total_amount + shipping_fee)}
          </span>{" "}
        </h5>
        {user ? (
          <button className="bg-black w-full text-white py-4 mt-5 uppercase tracking-widest hover:bg-primary transition-all duration-300 ease-linear ">
            <Link to="/checkout">Proceed to Checkout</Link>
          </button>
        ) : (
          <button
            onClick={loginWithRedirect}
            type="button"
            className="bg-black w-full text-white py-4 mt-5 uppercase tracking-widest hover:bg-primary transition-all duration-300 ease-linear"
          >
            {" "}
            Login to checkout{" "}
          </button>
        )}
      </section>
    </>
  )
}

export default Order_summary
