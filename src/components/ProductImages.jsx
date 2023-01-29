import React from "react"
import { useState } from "react"

const ProductImages = ({ images = [{ url: "" }] }) => {
  const [main, setMain] = useState(images[0])
  return (
    <>
      <section className=" space-y-4 w-4/5  ">
        <div className=" bg-gray-100   ">
          <img
            src={main.url}
            alt="product"
            className="h-72 xl:h-full  w-full object-cover object-center border mix-blend-darken p20 "
          />
        </div>
        <div className="flex gap-3 ">
          {images.map((image, index) => {
            return (
              <div key={index} className=" bg-gray-100 ">
                <img
                  src={image.url}
                  alt={image.filename}
                  onClick={() => setMain(images[index])}
                  className={`w-20 h-20 md:w-36 md:h-32 mix-blend-multiply  object-cover object-center border ${
                    image.url === main.url ? "border-green-400 border" : null
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
