import React from "react"
import { Link } from "react-router-dom"

const ProductImage = ({ product, className }) => {
  const { image, name, id } = product
  return (
    <>
      <Link to={`/shop/${id}`}>
        <div className="flex items-center justify-center border border-gray-200/50 bg-gray-100  ">
          <img
            width={300}
            height={200}
            src={image}
            alt={name}
            className={` ${className}  object-cover object-center mix-blend-darken transition-all delay-75 duration-300 ease-linear group-hover:scale-110  `}
          />
        </div>
      </Link>
    </>
  )
}

export default ProductImage
