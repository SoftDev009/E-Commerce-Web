import React from 'react'
import {AiOutlineShoppingCart, AiOutlineUserAdd} from 'react-icons/ai'
import { BsHandbag} from 'react-icons/bs'
import { Link } from "react-router-dom"
import { navLinks } from "../utils/constants"

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-100 py-4 xl:py-8">
        <div className="container mx-auto flex h-full items-center justify-between px-5 xl:max-w-screen-xl  xl:px-28">
          {/* max-w-3xl */}
          {/* Logo */}
          <h1 className="relative flex  pr-3 text-2xl font-bold  tracking-wider md:text-3xl">
            Shoptik
            <span className="absolute right-[6px] bottom-2 h-[6px] w-[6px] bg-green-400 "></span>
          </h1>
          {/* Menu items */}
          <div className="">
            <ul className="hidden space-x-10 uppercase xl:flex">
              {navLinks.map((menu) => {
                const { id, title, url } = menu
                return (
                  <Link key={id} to={url}>
                    {" "}
                    {title}{" "}
                  </Link>
                )
              })}
            </ul>
          </div>
          {/* Add cart and User  */}
          <div className=" flex space-x-6 md:space-x-8">
            <a href="#" className="relative hidden lg:flex">
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
            </a>
            <div className="flex flex-col-reverse items-center justify-center md:flex-row">
              <button className="hidden lg:flex"> Login</button>
              <AiOutlineUserAdd className="h-6 w-6" />
            </div>
          </div>
        </div>
      </nav>
      {/* Header content */}
    </>
  )
}

export default Navbar