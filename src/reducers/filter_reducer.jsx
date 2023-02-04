import {
  LOAD_PRODUCTS,
  SET_GRID_VIEW,
  SET_LIST_VIEW,
  UPDATE_SORT,
  UPDATE_FILTERS,
  SORT_PRODUCTS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions"

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    // Get the maximum price of the product
    let maxPriceOfProduct = action.payload.map((product) => product.price)
    maxPriceOfProduct = Math.max(...maxPriceOfProduct)
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: {
        ...state.filters,
        max_price: maxPriceOfProduct,
        price: maxPriceOfProduct,
      },
    }
  }
  if (action.type === SET_GRID_VIEW) {
    return { ...state, grid_view: true }
  }
  if (action.type === SET_LIST_VIEW) {
    return { ...state, grid_view: false }
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload }
  }
  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state
    let tempProducts = [...filtered_products]
    if (sort === "price-lowest") {
      tempProducts = tempProducts.sort((a, b) => a.price - b.price)
    }
    if (sort === "price-highest") {
      tempProducts = tempProducts.sort((a, b) => b.price - a.price)
    }
    if (sort === "name-a") {
      tempProducts = tempProducts.sort((a, b) => {
        return a.name.localeCompare(b.name)
      })
    }
    if (sort === "name-z") {
      tempProducts = tempProducts.sort((a, b) => {
        return b.name.localeCompare(a.name)
      })
    }
    return { ...state, filtered_products: tempProducts }
  }
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload
    return { ...state, filters: { ...state.filters, [name]: value } }
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        company: "all",
        category: "all",
        color: "all",
        price: state.filters.max_price,
      },
    }
  }
  if (action.type === FILTER_PRODUCTS) {
    return { ...state }
  }
  throw new Error(`No matching "${action.type}" - action type `)
}

export default filter_reducer
