import React from "react"

const View_button = ({ title }) => {
  return (
    <>
      <button className="uppercase text-xs tracking-wider border-b border-black py-1 pt-6 hover:text-primary hover:border-b-primary ">
        {title}
      </button>
    </>
  )
}

export default View_button
