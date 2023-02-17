import React from "react"
import { Link } from "react-router-dom"

const View_button = ({ title }) => {
  return (
    <>
      <div className="pt-5 ">
        <Link className="uppercase text-[10px] tracking-wider border-b border-black py-1 hover:text-primary hover:border-b-primary ">
          {title}
        </Link>
      </div>
    </>
  )
}

export default View_button
