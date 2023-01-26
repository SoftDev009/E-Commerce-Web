import React, { useContext } from "react"
import { useReducer } from "react"
import reducer from "../reducers/products_reducer"

// Import actions variable
import {SIDEBAR_OPEN, SIDEBAR_CLOSE} from '../actions'

const ProductsContext = React.createContext()

// Create initial state for userReducer function
const initialState = {
  isSidebarOpen: false
}

export const ProductsProvider = ({ children }) => {

  // Create userReducer function
  const [state, dispatch] = useReducer(reducer, initialState)

  // Open sidebar
  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN})
  }
  // Close sidebar
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE})
  }
  

  return (
    <ProductsContext.Provider value={{...state, openSidebar, closeSidebar}}>
      {children}
    </ProductsContext.Provider>
  )
}

// Create custom hook
export const useProductsContext = () => {
  return useContext(ProductsContext)
}
