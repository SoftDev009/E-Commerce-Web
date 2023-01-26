import React from "react"
import { Link } from "react-router-dom"

const Logo = ({ className }) => {
  return (
    <Link to="/">
      <h1
        className={`relative flex  pr-3 text-3xl font-extrabold  tracking-wider md:text-3xl text-black ${className} `}
      >
        Shoptik
        <span className="absolute right-[5px] bottom-2 h-[6px] w-[6px] bg-green-400 "></span>
      </h1>
    </Link>
  )
}

export default Logo
