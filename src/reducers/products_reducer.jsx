// Import actions variable
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from "../actions"
import products from "../data"

const products_reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true }
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false }
  }
  if (action.type === GET_PRODUCTS_BEGIN) {
    return { ...state, products_loading: true }
  }
  if (action.type === GET_PRODUCTS_SUCCESS) {
    const allFeaturedProducts = action.payload.filter(
      (product) => product.featured === true
    )
    const allNewArrivalProducts = action.payload.filter(
      (product) => product.new_arrival === true
    )
    const allBestSeller_products = action.payload.filter(
      (product) => product.bestseller === true
    )
    return {
      ...state,
      products_loading: false,
      products: action.payload,
      featured_products: allFeaturedProducts,
      newArrival_products: allNewArrivalProducts,
      bestSeller_products: allBestSeller_products,
    }
  }
  if (action.type === GET_PRODUCTS_ERROR) {
    return { ...state, products_loading: false, products_error: true }
  }
  return state
  throw new Error(`No matching "${action.type}" - action type `)
}

export default products_reducer
