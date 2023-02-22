import React from "react"
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs"

const Stars = ({ stars, reviews }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5
    return (
      <span key={index}>
        {stars > number ? (
          <BsStarFill className="w-3 h-3 text-primary" />
        ) : stars > index ? (
          <BsStarHalf className="w-3 h-3 text-primary" />
        ) : (
          <BsStar className="w-3 h-3 text-primary" />
        )}
      </span>
    )
  })

  return (
    <div className="flex justify-center items-center space-x-2 border px-2 py-1 text-sm hover:cursor-pointer">
      <p className="flex font-semibold border-r-2 border-black  px-2 ">
        <span className="flex justify-center items-center gap-[2px] mr-1 ">
          {" "}
          {tempStars}
        </span>{" "}
        {stars}
      </p>
      <p className="text-gray-500">{reviews} Reviews</p>
    </div>
  )
}

export default Stars
