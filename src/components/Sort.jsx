import React from "react"
import { BsFillGrid3X3GapFill } from "react-icons/bs"
import { FaThList } from "react-icons/fa"
import { useFilterContext } from "../context/filter_context"

const Sort = () => {
  const {
    filtered_products: products,
    grid_view,
    setGridView,
    setListView,
    sort,
    updateSort,
  } = useFilterContext()
  return (
    <>
      {/* Total products count and sort filter */}
      <section className="flex items-center justify-between">
        <div className="flex items-center justify-center space-x-2">
          <button
            className={`md:px-2 md:py-2 ${
              grid_view ? "text-black" : "text-gray-300"
            } `}
            onClick={setGridView}
          >
            <BsFillGrid3X3GapFill className="h-4 w-4" />
          </button>
          <button
            className={`md:px-2 md:py-2 ${
              !grid_view ? "text-black" : "text-gray-300"
            } `}
            onClick={setListView}
          >
            <FaThList className="h-4 w-4" />
          </button>
          <p className="hidden text-xs md:block md:text-base ">
            {" "}
            {products.length} Product{products.length > 1 && "s"} found{" "}
          </p>
        </div>
        <hr className=" hidden w-2/5  md:block " />
        <form className=" flex items-center justify-end md:justify-center ">
          <label htmlFor="sort" className="flex text-xs ">
            sort by
          </label>
          <select
            name="sort"
            id="sort"
            value={sort}
            className="border-none py-1 text-xs capitalize focus:ring-0 md:text-base "
            onChange={(e) => updateSort(e)}
          >
            <option value="price-lowest">price (lowest)</option>
            <option value="price-highest">price (highest)</option>
            <option value="name-a">name (a - z)</option>
            <option value="name-z">name (z - a)</option>
          </select>
        </form>
      </section>
    </>
  )
}

export default Sort
