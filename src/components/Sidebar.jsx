import React, { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { navLinks } from "../utils/constants"
import { BsX } from "react-icons/bs"
import { Logo } from "../components"
import { useProductsContext } from "../context/products_context"

const Sidebar = () => {
  const { closeSidebar } = useProductsContext()
  const sidebarRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        closeSidebar()
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  })

  return (
    <aside
      ref={sidebarRef}
      className=" fixed  top-0 right-0 left-0 z-30 h-screen  w-2/3 space-y-5 overflow-hidden bg-white px-5 shadow-xl md:hidden  "
    >
      <div className=" flex items-center justify-between py-4 ">
        <Logo className=" text-xl" />
        <button
          onClick={closeSidebar}
          className=" border border-black hover:border-primary hover:bg-primary hover:text-white"
        >
          <BsX className="h-6 w-6 " />
        </button>
      </div>
      <div className=" text-sm uppercase  ">
        {navLinks.map((link) => {
          const { id, title, url } = link
          return (
            <div
              key={id}
              className="mt-3 py-2 hover:bg-primary hover:text-white  "
            >
              <Link
                to={url}
                className=" flex transition-all duration-300 ease-linear hover:translate-x-4 "
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
