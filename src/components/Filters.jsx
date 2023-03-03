import React from "react"
import { useFilterContext } from "../context/filter_context"
import { formatPrice, getUniqueValues } from "../utils/helper"
import { BsSearch, BsCheck } from "react-icons/bs"

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
    <aside className=" sticky top-0  hidden h-full w-1/3 flex-col space-y-8 border p-8 font-light  lg:flex      ">
      <div className="flex justify-between">
        <h2 className="text-2xl uppercase ">Filter by</h2>
        <button
          className="text-sm capitalize text-primary"
          onClick={clearFilters}
        >
          Clear all
        </button>
      </div>

      {/* Search Product */}
      <div className="relative text-gray-500 focus-within:text-black">
        <input
          type="text"
          name="text"
          placeholder="Search product..."
          className=" w-full rounded-md border-gray-200  ring-0 focus:border-primary focus:ring-0  "
          value={text}
          onChange={updateFilters}
        />
        <BsSearch className=" pointer-events-none absolute top-3 right-0 mr-5 h-4 w-4 " />
      </div>

      {/* Categories */}
      <div className=" space-y-2 ">
        <h2 className=" font-medium capitalize tracking-wider">Categories</h2>
        {categories.map((categoryButton, index) => {
          return (
            <div className="flex " key={index}>
              <button
                name="category"
                id="category"
                onClick={updateFilters}
                className={`text-lg capitalize ${
                  category === categoryButton ? "text-primary" : null
                } `}
              >
                {categoryButton}
              </button>
            </div>
          )
        })}
      </div>

      {/* company / Brand */}
      <div className=" space-y-2 ">
        <h2 className=" font-medium capitalize tracking-wider">Brand</h2>
        <select
          name="company"
          value={company}
          onChange={updateFilters}
          className=" rounded-md border-gray-200 capitalize focus:border-primary focus:ring-0  "
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

      {/* Colors */}
      <div className=" space-y-2 ">
        <h2 className=" font-medium capitalize tracking-wider">Colors</h2>
        <div className=" flex space-x-4 ">
          {colors.map((colorButton, index) => {
            if (colorButton === "all") {
              return (
                <button
                  key={index}
                  name="color"
                  data-color="all"
                  className={` ${
                    color === colorButton ? " border-b-2 border-primary " : null
                  } `}
                  onClick={updateFilters}
                >
                  {" "}
                  All{" "}
                </button>
              )
            }
            return (
              <button
                key={index}
                name="color"
                data-color={colorButton}
                style={{ background: colorButton }}
                className=" h-6 w-6 border-2 border-gray-300  "
                onClick={updateFilters}
              >
                {color === colorButton ? (
                  <BsCheck className=" h-5 w-5 text-white " />
                ) : null}
              </button>
            )
          })}
        </div>
      </div>

      {/* Price */}
      <div className="">
        <div className="flex justify-between">
          <label
            htmlFor="price"
            className="font-medium capitalize tracking-wider"
          >
            price
          </label>
        </div>
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
      <div className="group flex items-center space-x-5 capitalize ">
        <input
          type="checkbox"
          name="shipping"
          id="shipping"
          checked={shipping}
          className=" h-4  w-4 cursor-pointer rounded outline-none focus:outline-none focus:ring-0   "
          onChange={updateFilters}
        />
        <label
          htmlFor="shipping"
          className="  cursor-pointer select-none py-2 transition-all duration-200 ease-linear group-hover:text-primary "
        >
          {" "}
          shipping{" "}
        </label>
      </div>
    </aside>
  )
}

export default Filters
