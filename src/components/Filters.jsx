import React from 'react'
import products from '../data'
import {BiSearch} from 'react-icons/bi'
import { useFilterContext } from "../context/filter_context"
import { getUniqueValues } from "../utils/helper"
import { Link } from "react-router-dom"

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
          // onChange={(e) => updateFilters()}
          onChange={updateFilters}
        />
      </div>

      {/* Categories */}
      <div className=" space-y-2 ">
        <h2 className=" capitalize font-medium tracking-wider">Categories</h2>
        {categories.map((category, index) => {
          return (
            <div
              key={index}
              className="flex items-center space-x-5 capitalize group  "
            >
              <input
                name={category}
                id={category}
                type="checkbox"
                className=" w-4 h-4 rounded outline-none focus:ring-0 focus:outline-none focus:text-green-400 "
                onChange={ updateFilters }
              />
              <label
                htmlFor={category}
                className=" py-2 group-hover:text-green-600 transition-all duration-200 ease-linear cursor-pointer select-none "
              >
                {" "}
                {category}{" "}
              </label>
            </div>
          )
        })}
      </div>

      {/* company */}
      <div className=" space-y-2 ">
        <h2 className=" capitalize font-medium tracking-wider">Company</h2>
        {/* {companies.map((company, index) => {
          return (
            <div
              key={index}
              className="flex items-center space-x-5 capitalize group  "
            >
              <input
                name={company}
                id={company}
                type="checkbox"
                className=" w-4 h-4 rounded outline-none focus:ring-0 focus:outline-none focus:text-green-400 "
              />
              <label
                htmlFor={company}
                className=" py-2 group-hover:text-green-600 transition-all duration-200 ease-linear cursor-pointer select-none "
              >
                {" "}
                {company}{" "}
              </label>
            </div>
          )
        })} */}

        <select name="company" id="company">
          {companies.map((company, index) => {
            return (
              <option key={index} value={company} className=" capitalize  ">
                {" "}
                {company}{" "}
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
          id="price"
          name="price"
          min={20}
          max={2000}
          step={5}
          // value={price}
          className=" w-full py-2 "
        />
        <div className=" flex justify-between ">
          <p> 20 </p>
          <p> 2000 </p>
        </div>
      </div>

      {/* Color */}
      {/* <div className=" space-y-2  ">
        <h2 className=" capitalize font-medium tracking-wider">Colors</h2>
        {colors.map((color, index) => {
          if (color === "all") {
            return <button className="">all</button>
          }
          return (
            <div
              key={index}
              className="flex items-center space-x-5 capitalize group  "
            >
              <button className={` bg-[${color}]`}> {color} </button>
              <button className={` bg-[${color}]`}> {color} </button>
              <input
                name={color}
                id={color}
                type="checkbox"
                className=" w-4 h-4 rounded outline-none focus:ring-0 focus:outline-none focus:text-green-400 "
              />
              <span className={` bg-black w-3 h-3`}> </span>
              <label
                htmlFor={color}
                className=" py-2 group-hover:text-green-600 transition-all duration-200 ease-linear cursor-pointer select-none "
              >
                {" "}
                {color}{" "}
              </label>
            </div>
          )
        })}
      </div> */}

      {/* Shipping */}
      <div className=" flex items-center space-x-10  ">
        <input type="checkbox" className=" " />
        <label>Shipping </label>
      </div>
    </aside>
  )
}

export default Filters