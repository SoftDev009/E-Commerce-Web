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
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
    }
  }
  if (action.type === SET_GRID_VIEW) {
    return { ...state, grid_view: true }
  }
  if (action.type === SET_LIST_VIEW) {
    return { ...state, grid_view: false }
  }
  throw new Error(`No matching "${action.type}" - action type `)
}

export default filter_reducer
