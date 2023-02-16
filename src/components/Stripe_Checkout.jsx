import React, { useEffect, useState } from "react"
import { loadStripe } from "@stripe/stripe-js"
import {
  PaymentElement,
  LinkAuthenticationElement,
  CardElement,
  useStripe,
  Elements,
  useElements,
} from "@stripe/react-stripe-js"
import { useCartContext } from "../context/cart_context"
import { userUserContext } from "../context/user_context"
import { formatPrice } from "../utils/helper"
import { useNavigate } from "react-router-dom"
import CardStyle from "../app.css"
const promise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)

const CheckoutForm = () => {
  const { cart, total_amounts, shipping_fee, clearCart } = useCartContext()
  const { myUser } = userUserContext()
  const navigate = useNavigate()
  // Stripe Stuff
  const [succeeded, setSucceeded] = useState(false)
  const [error, setError] = useState(null)
  const [processing, setProcessing] = useState("")
  const [disabled, setDisabled] = useState(true)
  const [clientSecret, setClientSecret] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const stripe = useStripe()
  const elements = useElements()

  // const handleSubmit = async (e) => {}

  const paymentElementOptions = {
    layout: "tabs",
  }

  const createPaymentIntent = async () => {
    console.log("hello from stripe checkout")
  }

  useEffect(() => {
    createPaymentIntent()
  }, [])

  const handleChange = async (event) => {}
  const handleSubmit = async (ev) => {}

  return (
    <>
      <section className=" bg-blue-500  ">
        <form id="payment-form" onSubmit={handleSubmit} className="stripe_form">
          {/* <LinkAuthenticationElement
            id="link-authenticate-element"
            onChange={(e) => setEmail(e.target.value)}
          /> */}
          <PaymentElement
            id="payment-element"
            options={paymentElementOptions}
          />
          <button
            className=" stripe_button "
            disabled={isLoading || !stripe || !elements}
            id="submit"
          >
            <span id="button-text">
              {isLoading ? (
                <div className="spinner" id="spinner">
                  {" "}
                </div>
              ) : (
                "Pay Now"
              )}
            </span>
          </button>
          {/* Show any error or success message */}
          {message && <div id="payment-message"> {message} </div>}
          {/* <CardElement
            id="card-element"
            options={cardStyle}
            onChange={handleChange}
          /> */}
          {/* <button> button </button> */}
        </form>
      </section>
    </>
  )
}

const Stripe_Checkout = () => {
  return (
    <section className="">
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </section>
  )
}

export default Stripe_Checkout
