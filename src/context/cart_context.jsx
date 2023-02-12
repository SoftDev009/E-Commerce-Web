import { createContext, useContext, useReducer } from "react"
import reducer from "../reducers/cart_reducer"
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from "../actions"
const initialState = {
  cart: [],
  total_items: 0,
  total_amount: 0,
  shipping_fee: 532,
}

const CartContext = createContext()
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  //   Add to Cart
  const addToCart = (id, color, amount, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } })
  }

  // Remove item
  const removeItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: { id } })
  }

  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  return useContext(CartContext)
}
