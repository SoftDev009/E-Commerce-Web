import React from 'react'
import BasketImage from "../assets/basketChair.webp"
import { View_button } from "../components"

const Basket = () => {
  return (
    <section className="container relative mx-auto mt-20 flex items-center justify-between bg-gray-100 px-5 py-5 md:mt-48 md:py-8 lg:py-10 xl:px-28 xl:py-16  ">
      <div className="space-y-2 ">
        {/* Mobile image */}
        <img
          width={300}
          height={200}
          src={BasketImage}
          alt="Basket chair"
          className="absolute bottom-5 right-0 h-40 w-40 object-cover  object-center md:h-60 md:w-64 lg:hidden "
        />
        <h2 className="w-2/3 font-light uppercase tracking-widest md:w-full md:text-2xl xl:text-4xl ">
          {" "}
          <span className="font-black "> Stylish </span> minimal chair
        </h2>
        <View_button title="view now" />
      </div>
      {/* XL Image */}
      <img
        src={BasketImage}
        alt=""
        className="absolute right-0 -top-40  mr-10 hidden h-80 w-72 object-cover object-center lg:flex xl:mr-32 xl:h-96 xl:w-80 "
      />
    </section>
  )
}

export default Basket