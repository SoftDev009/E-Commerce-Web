import React from "react"
import { Link } from "react-router-dom"

const Logo = ({ className }) => {
  return (
    <Link to="/">
      <h1
        className={`relative flex  pr-3 font-extrabold tracking-widest  text-black md:text-3xl ${className} `}
      >
        Shoptik
        <span className="absolute right-[5px] bottom-2 h-[6px] w-[6px] bg-primary "></span>
      </h1>
    </Link>
  )
}

export default Logo
