import { createContext, useContext, useReducer } from "react"
import reducer from "../reducers/cart_reducer"
const initialState = {}

const CartContext = createContext()
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <CartContext.Provider value={{ ...state }}>{children}</CartContext.Provider>
  )
}

export const useCartContext = () => {
  return useContext(CartContext)
}
