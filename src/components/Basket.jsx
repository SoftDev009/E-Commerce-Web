import React from 'react'
import BasketImage from '../assets/basketChair.png'
import { View_button } from "../components"

const Basket = () => {
  return (
    <section className="bg-gray-100 container mx-auto px-5 xl:px-28 flex justify-between items-center relative py-5 md:py-8 lg:py-10 xl:py-16 md:mt-48 mt-20  ">
      <div className="space-y-2 ">
        {/* Mobile image */}
        <img
          src={BasketImage}
          alt=""
          className="lg:hidden w-40 h-40 md:w-64 md:h-60 absolute  object-cover object-center bottom-5 right-0 "
          // className="xl:w-80 md:hidden w-44 h-44 xl:h-96 absolute -top-20 -right-20 object-cover object-center "
        />
        <h2 className="uppercase md:text-2xl w-2/3 md:w-full xl:text-4xl tracking-widest font-light ">
          {" "}
          <span className="font-black "> Stylish </span> minimal chair
        </h2>
        <View_button title="view now" />
      </div>
      {/* XL Image */}
      <img
        src={BasketImage}
        alt=""
        className="xl:w-80 hidden lg:flex  w-72 h-80 xl:h-96 object-cover object-center absolute right-0 -top-40 mr-10 xl:mr-32 "
      />
    </section>
  )
}

export default Basket