import React from "react"
import { CartComponent } from "../components"
import { useCartContext } from "../context/cart_context"
import { Empty_cart } from "../components"
const Cart = () => {
  const { cart } = useCartContext()
  if (cart.length === 0) return <Empty_cart />
  return (
    <>
      <CartComponent />
    </>
  )
}

export default Cart
