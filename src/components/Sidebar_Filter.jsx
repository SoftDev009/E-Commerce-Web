import React, { useState } from "react"
import { FaFilter, FaChevronRight } from "react-icons/fa"
import { useFilterContext } from "../context/filter_context"
import { BsSearch, BsCheck } from "react-icons/bs"
import { formatPrice, getUniqueValues } from "../utils/helper"
const Sidebar_Filter = () => {
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const categories = getUniqueValues(all_products, "category")
  const companies = getUniqueValues(all_products, "company")
  const colors = getUniqueValues(all_products, "colors")

  if (isSidebarOpen === true) {
    document.body.classList.add("overflow-hidden")
  } else {
    document.body.classList.remove("overflow-hidden")
  }

  //  Open sidebar
  const openSidebar = () => {
    setIsSidebarOpen(true)
  }
  // Close sidebar
  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  return (
    <>
      <aside
        className={` lg:hidden z-50   ${
          isSidebarOpen
            ? "transition-all duration-200 ease-out delay-150"
            : "translate-x-full transform transition-all duration-300 ease-out delay-150  "
        } fixed md:w-1/2 w-10/12 top-0 right-0 bg-white h-full shadow-md`}
      >
        <section className="p-8 space-y-8 font-light ">
          <div className="flex justify-between">
            <h2 className="text-xl uppercase ">Filter by</h2>
            <button
              className="text-sm text-primary capitalize"
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
              className=" w-full border-gray-200 rounded-md  focus:border-primary focus:ring-1 focus:ring-primary "
              value={text}
              onChange={updateFilters}
            />
            <BsSearch className=" absolute top-3 right-0 mr-5 h-4 w-4 pointer-events-none " />
          </div>

          {/* Categories */}
          <div className=" space-y-2 ">
            <h2 className=" capitalize font-medium tracking-wider">
              Categories
            </h2>
            {categories.map((categoryButton, index) => {
              return (
                <div className="flex " key={index}>
                  <button
                    name="category"
                    id="category"
                    onClick={updateFilters}
                    className={`capitalize text-lg  ${
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
            <h2 className=" capitalize font-medium tracking-wider">Brand</h2>
            <select
              name="company"
              value={company}
              onChange={updateFilters}
              className=" capitalize rounded-md border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary  w-full   "
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

          <div className=" space-y-2 ">
            <h2 className=" capitalize font-medium tracking-wider">Colors</h2>
            <div className=" flex space-x-4 ">
              {colors.map((colorButton, index) => {
                if (colorButton === "all") {
                  return (
                    <button
                      key={index}
                      name="color"
                      data-color="all"
                      className={` ${
                        color === colorButton
                          ? " border-b-2 border-primary "
                          : null
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
                    className=" w-6 h-6 border-2 border-gray-300  "
                    onClick={updateFilters}
                  >
                    {color === colorButton ? (
                      <BsCheck className=" text-white w-5 h-5 " />
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
                className="text-lg uppercase font-medium tracking-wider"
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
              className="  py-2 group-hover:text-primary transition-all duration-200 ease-linear cursor-pointer select-none "
            >
              {" "}
              shipping{" "}
            </label>
          </div>
        </section>

        {/* Filter button */}
        <div className=" absolute inset-y-1/2 -left-10 ">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className=" px-3 py-3 bg-black hover:bg-primary    "
          >
            {" "}
            {isSidebarOpen ? (
              <FaChevronRight className=" fill-white " />
            ) : (
              <FaFilter className=" fill-white " />
            )}
          </button>
        </div>
      </aside>
    </>
  )
}

export default Sidebar_Filter
