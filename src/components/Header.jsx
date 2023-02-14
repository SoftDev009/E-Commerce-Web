import React from 'react'
import Light1 from '../assets/light1.png'
import Light2 from '../assets/light2.png'
import { View_button } from "../components"
const Header = () => {
  return (
    <header className="bg-[#d2e9e3] container mx-auto px-5 xl:px-28 relative py-14 lg:py-20 xl:h-[28rem] flex overflow-hidden">
      <div className=" md:w-2/3 xl:w-1/2 space-y-8 md:space-y-16">
        <div className="space-y-4">
          <h1 className="md:text-5xl text-4xl font-light leading-[1.2] capitalize">
            {" "}
            <span className=" font-medium ">Shoptik</span> Number #1Trusted
            furniture website.{" "}
          </h1>
          <p className="text-orange-400 font-medium">
            coming soon in your door with a huge discount.
          </p>
        </div>
        <View_button title="view now" />
      </div>
      <img
        src={Light2}
        alt=""
        className=" hidden md:flex w-80 xl:w-96 object-cover object-center absolute -top-16 md:-top-5  xl:-top-10 right-[8rem] md:right-[5rem] xl:right-[26rem] transform scale-150 "
      />
      <img
        src={Light1}
        alt=""
        className=" hidden md:flex w-80 xl:w-96 object-cover object-center absolute -top-32 xl:-top-36 -right-12 md:-right-20 xl:right-20 xl:mr-28 transform scale-125"
      />
    </header>
  )
}

export default Header