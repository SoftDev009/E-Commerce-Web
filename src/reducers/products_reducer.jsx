// Import actions variable
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions"

const products_reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true }
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false }
  }
  //* ================= All Products actions =================
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
  //* ================= END =================

  //* ================= Single Product actions =================

  if (action.type === GET_SINGLE_PRODUCT_BEGIN) {
    return {
      ...state,
      single_product_error: false,
      single_product_loading: true,
    }
  }
  if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
    return {
      ...state,
      single_product_loading: false,
      singleProduct: action.payload,
    }
  }
  if (action.payload === GET_SINGLE_PRODUCT_ERROR) {
    return {
      ...state,
      single_product_loading: false,
      single_product_error: true,
    }
  }
  //* ================= END =================

  throw new Error(`No matching "${action.type}" - action type `)
}

export default products_reducer
