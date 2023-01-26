import React, { useContext } from "react"
import { useReducer } from "react"
import reducer from "../reducers/products_reducer"

const ProductsContext = React.createContext()

// Create initial state for userReducer function
const initialState = {}
const message = "hello I am working"
export const ProductsProvider = ({ children }) => {
  // Create userReducer function
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <ProductsContext.Provider value={{ message }}>
      {children}
    </ProductsContext.Provider>
  )
}

// Create custom hook
export const useProductsContext = () => {
  return useContext(ProductsContext)
}
