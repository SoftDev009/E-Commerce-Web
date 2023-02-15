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
      <section className="flex justify-between items-center">
        <div className="flex space-x-2 justify-center items-center">
          <button
            className={`md:px-2 md:py-2 ${
              grid_view ? "text-black" : "text-gray-300"
            } `}
            onClick={setGridView}
          >
            <BsFillGrid3X3GapFill className="w-4 h-4" />
          </button>
          <button
            className={`md:px-2 md:py-2 ${
              !grid_view ? "text-black" : "text-gray-300"
            } `}
            onClick={setListView}
          >
            <FaThList className="w-4 h-4" />
          </button>
          <p className="text-xs md:text-base hidden md:block ">
            {" "}
            {products.length} Product{products.length > 1 && "s"} found{" "}
          </p>
        </div>
        <hr className=" hidden md:block  w-2/5 " />
        <form className=" flex justify-end md:justify-center items-center ">
          <label htmlFor="sort" className="flex text-xs ">
            sort by
          </label>
          <select
            name="sort"
            id="sort"
            value={sort}
            className="py-1 text-xs md:text-base capitalize border-none focus:ring-0 "
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
