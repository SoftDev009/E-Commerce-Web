import React from "react"
import { Link } from "react-router-dom"
import { navLinks } from "../utils/constants"
import { BsX } from "react-icons/bs"
import { Logo } from "../components"
import { useProductsContext } from "../context/products_context"

const Sidebar = () => {
  const { closeSidebar } = useProductsContext()
  return (
    <aside className=" fixed  h-screen z-30 top-0 right-0 left-0   w-2/3 bg-gray-100 md:hidden overflow-hidden px-5 space-y-5 shadow-xl ">
      <div className=" py-4 flex justify-between items-center ">
        <Logo />
        <button
          onClick={closeSidebar}
          className=" border border-black p-1 hover:bg-primary hover:text-white hover:border-primary "
        >
          <BsX className="h-6 w-6 " />
        </button>
      </div>
      <div className=" capitalize font-medium ">
        {navLinks.map((link) => {
          const { id, title, url } = link
          return (
            <div
              key={id}
              className="hover:bg-primary hover:text-white py-2 mt-3  "
            >
              <Link
                to={url}
                className=" flex hover:translate-x-4 transition-all duration-300 ease-linear "
                onClick={closeSidebar}
              >
                {title}
              </Link>
            </div>
          )
        })}
      </div>
    </aside>
  )
}

export default Sidebar
