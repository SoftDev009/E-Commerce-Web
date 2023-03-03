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
            className="h-full w-full border object-cover object-center p-8 mix-blend-darken xl:h-full "
          />
          {product.stock === 0 && (
            <div className=" absolute top-0 grid h-full w-full select-none place-items-center bg-black/30 text-3xl  capitalize text-gray-200  ">
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
                  className={`h-20 w-20 border object-cover object-center p-4  mix-blend-multiply md:h-32 md:w-36 ${
                    image.url === main.url ? "border-2 border-primary" : null
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
