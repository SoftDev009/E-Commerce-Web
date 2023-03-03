import React from "react"
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs"

const Stars = ({ stars, reviews }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5
    return (
      <span key={index}>
        {stars > number ? (
          <BsStarFill className="h-3 w-3 text-primary" />
        ) : stars > index ? (
          <BsStarHalf className="h-3 w-3 text-primary" />
        ) : (
          <BsStar className="h-3 w-3 text-primary" />
        )}
      </span>
    )
  })

  return (
    <div className="flex items-center justify-center space-x-2 border px-2 py-1 text-sm hover:cursor-pointer">
      <p className="flex border-r-2 border-black px-2  font-semibold ">
        <span className="mr-1 flex items-center justify-center gap-[2px] ">
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
