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
  filters: {
    text: "",
    company: "all",
    category: "all",
    color: "all",
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
}

const FilterContext = createContext()
export const FiltersProvider = ({ children }) => {
  const { products } = useProductsContext()
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products })
  }, [products])

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS })
    dispatch({ type: SORT_PRODUCTS })
  }, [products, state.sort, state.filters])

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

  const updateFilters = (e) => {
    let name = e.target.name
    let value = e.target.value
    if (name === "shipping") {
      value = e.target.checked
    }
    if (name === "category") {
      value = e.target.textContent
    }
    if (name === "price") {
      value = Number(value)
    }
    if (name === "color") {
      value = e.target.dataset.color
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } })
  }

  const clearFilters = (e) => {
    dispatch({ type: CLEAR_FILTERS })
  }

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updateSort,
        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export const useFilterContext = () => {
  return useContext(FilterContext)
}
