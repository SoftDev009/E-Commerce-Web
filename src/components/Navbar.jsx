import React from "react"
import { AiOutlineUserAdd } from "react-icons/ai"
import { BsHandbag } from "react-icons/bs"
import { Link } from "react-router-dom"
import { navLinks } from "../utils/constants"
import { AiOutlineMenu } from "react-icons/ai"
import { Sidebar, Logo } from "../components"
import { useProductsContext } from "../context/products_context"

const Navbar = () => {
  const { openSidebar, isSidebarOpen } = useProductsContext()

  return (
    <>
      <nav className="bg-gray-100 py-4 xl:py-8">
        <div className="container mx-auto flex h-full items-center justify-between px-5 xl:max-w-screen-xl  xl:px-28">
          {/* max-w-3xl */}

          {/* Logo */}
          <Logo />
          {/* Menu items */}
          <div className="hidden space-x-10 uppercase md:flex">
            {navLinks.map((menu) => {
              const { id, title, url } = menu
              return (
                <Link key={id} to={url}>
                  {" "}
                  {title}{" "}
                </Link>
              )
            })}
          </div>

          {/* Add cart and User  */}
          <div className=" hidden space-x-6 md:flex  md:space-x-8">
            <Link to="/cart" className="relative flex">
              {" "}
              Bag{" "}
              <span>
                {" "}
                <BsHandbag className="relative ml-1 h-6 w-6" />{" "}
                <span className="absolute -top-4 -right-3 rounded-full bg-[#48c4a0] px-2 text-white">
                  {" "}
                  5{" "}
                </span>{" "}
              </span>
            </Link>
            <div className="hidden flex-col-reverse items-center justify-center md:flex md:flex-row">
              <button className="flex">
                {" "}
                Login
                <AiOutlineUserAdd className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Sidebar menu */}
          <div className=" md:hidden ">
            <button onClick={openSidebar}>
              <AiOutlineMenu className="h-7 w-7" />
            </button>
          </div>
        </div>
      </nav>
      {isSidebarOpen ? <Sidebar /> : null}
    </>
  )
}

export default Navbar
