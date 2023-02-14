import React from 'react'
import BasketImage from '../assets/basketChair.png'
import { View_button } from "../components"

const Basket = () => {
  return (
    <section className="bg-gray-100 container mx-auto px-5 xl:px-28 flex justify-between items-center relative py-10 xl:py-16 mt-48">
      <div className="space-y-2 relative">
        <img
          src={BasketImage}
          alt=""
          className="xl:w-80 md:hidden w-44 h-44 xl:h-96 absolute -top-36 -right-5 object-cover object-center "
        />
        <h2 className="uppercase text-2xl w-2/3 md:w-full xl:text-4xl tracking-widest font-light ">
          {" "}
          <span className="  font-black"> Stylish </span> minimal chair
        </h2>
        <View_button title="view now" />
      </div>
      <img
        src={BasketImage}
        alt=""
        className="xl:w-80 hidden md:flex  w-72 h-80 xl:h-96 object-cover object-center absolute right-0 -top-40 mr-10 xl:mr-32"
      />
    </section>
  )
}

export default Basket