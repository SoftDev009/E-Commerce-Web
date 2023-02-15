import React from "react"
import { Stripe_Checkout } from "../components"

const Checkout = () => {
  return (
    <>
      <section className=" container mx-auto  px-28 flex justify-center ">
        <Stripe_Checkout />
      </section>
    </>
  )
}

export default Checkout
