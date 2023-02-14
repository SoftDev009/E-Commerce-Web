import React from "react"
import { Link } from "react-router-dom"

const ProductImage = ({ product, className }) => {
  const { image, name } = product
  return (
    <>
      <Link>
        <div className="bg-gray-100 ">
          <img
            src={image}
            alt={name}
            className={` ${className}  object-cover object-center mix-blend-darken transition-all duration-300 delay-75 ease-linear group-hover:scale-110 `}
          />
        </div>
      </Link>
    </>
  )
}

export default ProductImage
