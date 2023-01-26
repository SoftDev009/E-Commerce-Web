import React from "react"
import { Link } from "react-router-dom"
import { navLinks } from "../utils/constants"
import { AiOutlineClose } from "react-icons/ai"
import { Logo } from "../components"
const Sidebar = ({ closeSidebar }) => {
  return (
    <header className=" fixed  h-screen z-30 top-0 right-0 left-0   w-full bg-black md:hidden overflow-hidden px-5 text-white space-y-5 ">
      <div className=" py-4 flex justify-between items-center ">
        {/* <h1>Shoptik</h1> */}
        <Logo className="text-white" />
        <button className=" " onClick={closeSidebar}>
          <AiOutlineClose className="w-7 h-7" />
        </button>
      </div>
      <div className="">
        {navLinks.map((link) => {
          const { id, title, url } = link
          return (
            <Link
              key={id}
              to={url}
              className=" flex text-2xl"
              onClick={closeSidebar}
            >
              {title}
            </Link>
          )
        })}
      </div>
    </header>
  )
}

export default Sidebar
