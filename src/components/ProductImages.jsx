import React from "react"
import { useState } from "react"

const ProductImages = ({ product, images = [{ url: "" }] }) => {
  const [main, setMain] = useState(images[0])
  return (
    <>
      <section className={` space-y-4 `}>
        <div className=" relative  bg-gray-100   ">
          <img
            src={main.url}
            alt="product"
            className="h-full xl:h-full w-full object-cover object-center border mix-blend-darken p-8 "
          />
          {product.stock === 0 && (
            <div className=" absolute bg-black/30 w-full h-full top-0 grid place-items-center text-3xl text-gray-200  capitalize select-none  ">
              {" "}
              <p> Out of stock </p>{" "}
            </div>
          )}
        </div>
        <div className="flex gap-3 ">
          {images.map((image, index) => {
            return (
              <div key={index} className=" bg-gray-100   ">
                <img
                  src={image.url}
                  alt={image.filename}
                  onClick={() => setMain(images[index])}
                  className={`w-20 h-20 md:w-36 md:h-32 mix-blend-multiply p-4  object-cover object-center border ${
                    image.url === main.url ? "border-primary border-2" : null
                  } `}
                />
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default ProductImages
