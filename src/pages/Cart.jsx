import React from "react"
import { CartItems } from "../components"
import { useCartContext } from "../context/cart_context"
import { Empty_cart } from "../components"

const Cart = () => {
  const { cart } = useCartContext()
  if (cart.length === 0) return <Empty_cart />
  return (
    <>
      <CartItems />
    </>
  )
}

export default Cart
