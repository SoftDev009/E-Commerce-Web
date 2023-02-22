import React from "react"
import { Link } from "react-router-dom"
import { navLinks } from "../utils/constants"
import { BsList, BsX } from "react-icons/bs"
import { Sidebar, Logo, Cart_Button } from "../components"
import { useProductsContext } from "../context/products_context"

const Navbar = () => {
  const { openSidebar, isSidebarOpen, closeSidebar } = useProductsContext()
  return (
    <>
      <nav className="md:bg-gray-100 py-4 xl:py-8">
        <div className="container mx-auto flex flex-col md:flex-row h-full justify-center items-center md:justify-between px-5 xl:max-w-screen-xl xl:px-28 space-y-2  ">
          {/* Logo */}
          <Logo />
          {/* Menu items */}
          <div className="hidden space-x-10 capitalize font-medium md:flex ">
            {navLinks.map((menu) => {
              const { id, title, url } = menu
              return (
                <Link key={id} to={url}>
                  {" "}
                  {title}
                </Link>
              )
            })}
          </div>
          <div className=" hidden md:flex ">
            <Cart_Button />
          </div>

          {/* Mobile version */}
          <section className=" md:hidden flex justify-between items-center w-full pt-5 pb-2  ">
            {/* Sidebar menu button */}
            <button
              onClick={openSidebar}
              className=" border border-black p-1 hover:bg-primary hover:text-white hover:border-primary "
            >
              <BsList className="h-6 w-6" />
            </button>
            <Cart_Button />
          </section>
        </div>
      </nav>
      {isSidebarOpen ? <Sidebar /> : null}
    </>
  )
}

export default Navbar
