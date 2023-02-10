import React from "react"
import { useFilterContext } from "../context/filter_context"
import { formatPrice, getUniqueValues } from "../utils/helper"

const Filters = () => {
  const {
    filters: {
      category,
      color,
      company,
      max_price,
      min_price,
      price,
      shipping,
      text,
    },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext()

  const categories = getUniqueValues(all_products, "category")
  const companies = getUniqueValues(all_products, "company")
  const colors = getUniqueValues(all_products, "colors")

  return (
    <aside className=" w-1/3 p-8  space-y-8 hidden lg:flex flex-col sticky top-0 font-light border  h-full      ">
      <div className="flex justify-between">
        <h2 className="text-2xl uppercase ">Filter by</h2>
        <button className="text-sm text-green-600 " onClick={clearFilters}>
          Clear all
        </button>
      </div>

      {/* Search Product */}
      <div className="">
        <input
          type="text"
          name="text"
          placeholder="Search product..."
          className=" w-full "
          value={text}
          onChange={updateFilters}
        />
      </div>

      {/* Categories */}
      <div className=" space-y-2 ">
        <h2 className=" capitalize font-medium tracking-wider">Categories</h2>
        {categories.map((categoryButton, index) => {
          return (
            <div className="flex " key={index}>
              <button
                name="category"
                onClick={updateFilters}
                className={`capitalize text-lg ${
                  category === categoryButton ? "text-green-600" : null
                } `}
              >
                {categoryButton}
              </button>
            </div>
            // <div
            //   key={index}
            //   className="flex items-center space-x-5 capitalize group "
            // >
            //   <input
            //     type="checkbox"
            //     // name={category}
            //     name="category"
            //     id={category}
            //     className=" cursor-pointer  w-4 h-4 rounded outline-none focus:ring-0 focus:outline-none   "
            //     onChange={(e) => console.log(e.target.value)}
            //     // onChange={updateFilters}
            //   />
            //   <label
            //     htmlFor={category}
            //     className="  py-2 group-hover:text-green-600 transition-all duration-200 ease-linear cursor-pointer select-none "
            //   >
            //     {" "}
            //     {category}{" "}
            //   </label>
            // </div>
          )
        })}
      </div>

      {/* company */}
      <div className=" space-y-2 ">
        <h2 className=" capitalize font-medium tracking-wider">Brand</h2>
        <select
          name="company"
          value={company}
          onChange={updateFilters}
          className=" capitalize "
        >
          {companies.map((companyOption, index) => {
            return (
              <option
                key={index}
                value={companyOption}
                className=" capitalize  "
              >
                {" "}
                {companyOption}{" "}
              </option>
            )
          })}
        </select>
      </div>

      {/* Price */}
      <div className="">
        <div className="flex justify-between">
          <label
            htmlFor="price"
            className="text-lg uppercase font-medium tracking-wider"
          >
            price
          </label>
        </div>
        <hr className="mt-2" />
        <input
          type="range"
          name="price"
          onChange={updateFilters}
          min={min_price}
          max={max_price}
          value={price}
          className=" w-full py-2 "
        />
        <p className="text-end"> {formatPrice(price)} </p>
      </div>

      {/* Shipping */}
      <div className="flex items-center space-x-5 capitalize group ">
        <input
          type="checkbox"
          name="shipping"
          id="shipping"
          checked={shipping}
          className=" cursor-pointer  w-4 h-4 rounded outline-none focus:ring-0 focus:outline-none   "
          onChange={updateFilters}
        />
        <label
          htmlFor="shipping"
          className="  py-2 group-hover:text-green-600 transition-all duration-200 ease-linear cursor-pointer select-none "
        >
          {" "}
          shipping{" "}
        </label>
      </div>
    </aside>
  )
}

export default Filters
