import React from "react"
import { useCartContext } from "../context/cart_context"
import { formatPrice } from "../utils/helper"
import { Link } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"

const Order_summary = () => {
  const { total_amount, shipping_fee, total_items } = useCartContext()
  const { user, loginWithRedirect } = useAuth0()
  return (
    <>
      <section className=" mb-5 md:mb-0 md:w-full lg:w-1/2  ">
        <h4 className="flex  items-center py-2 text-xl font-medium capitalize tracking-widest">
          Order summary
        </h4>
        <hr />
        <article className=" mt-9 space-y-4 border-b-4 border-dashed border-white bg-gray-200/70 px-4 pt-8 pb-12 text-sm ">
          <h5 className="flex items-center justify-between">
            Bag total{" "}
            <span className="text-lg text-black">
              {" "}
              {formatPrice(total_amount)}{" "}
            </span>{" "}
          </h5>
          <h5 className="flex items-center justify-between">
            Bag discount{" "}
            <span className=" text-lg text-primary"> {formatPrice(-100)} </span>{" "}
          </h5>
          <h5 className="flex items-center justify-between">
            Convenience Fee{" "}
            <span className=" text-lg text-primary">
              {/* Free{" "} */}
              <span className="text-sm text-black">
                {" "}
                {formatPrice(shipping_fee)}
              </span>{" "}
            </span>{" "}
          </h5>
        </article>
        <h5 className="bg-blu-100/60 flex items-center  justify-between bg-gray-100 bg-gray-200/70 py-8 px-4 text-sm font-medium ">
          Subtotal{" "}
          <span className="text-xl font-medium text-black">
            {formatPrice(total_amount + shipping_fee)}
          </span>{" "}
        </h5>
        {user ? (
          <Link
            to="/checkout"
            className="mt-5 block w-full bg-primary py-4 text-center uppercase tracking-widest text-white transition-all duration-300 ease-linear hover:bg-primary/80 "
          >
            Proceed to buy{" "}
            <span className="capitalize">
              {" "}
              ({total_items} item{total_items > 1 && "s"} ){" "}
            </span>
          </Link>
        ) : (
          <button
            onClick={loginWithRedirect}
            type="button"
            className="mt-5 w-full bg-primary py-4 uppercase tracking-widest text-white transition-all duration-300 ease-linear hover:bg-primary/90"
          >
            {" "}
            Login to buy{" "}
            <span className=" capitalize ">
              {" "}
              ({total_items} item{total_items > 1 && "s"} ){" "}
            </span>
          </button>
        )}
      </section>
    </>
  )
}

export default Order_summary
