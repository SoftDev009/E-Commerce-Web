import { useReducer } from "react"
import { useContext } from "react"
import { createContext } from "react"
import reducer from "../reducers/filter_reducer"
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
import { useProductsContext } from "./products_context"
import { useEffect } from "react"
const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
  sort: "price_lowest",
}

const FilterContext = createContext()
export const FiltersProvider = ({ children }) => {
  const { products } = useProductsContext()
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products })
  }, [products])

  useEffect(() => {
    dispatch({ type: SORT_PRODUCTS })
  }, [products, state.sort])

  const setGridView = () => {
    dispatch({ type: SET_GRID_VIEW })
  }
  const setListView = () => {
    dispatch({ type: SET_LIST_VIEW })
  }

  const updateSort = (e) => {
    const value = e.target.value
    dispatch({ type: UPDATE_SORT, payload: value })
  }

  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, setListView, updateSort }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export const useFilterContext = () => {
  return useContext(FilterContext)
}
