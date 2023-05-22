import React from 'react'
import Light1 from "../assets/light1.webp"
import Light2 from "../assets/light2.webp"
import { View_button } from "../components"
const Header = () => {
  return (
    <header className="container relative mx-auto flex overflow-hidden bg-[#d2e9e3] px-5 py-14 lg:py-20 xl:h-[28rem] xl:px-28">
      <div className=" space-y-8 md:w-2/3 md:space-y-16 xl:w-1/2">
        <div className="space-y-4">
          <h1 className="text-4xl font-light capitalize leading-[1.2] md:text-5xl">
            {" "}
            <span className=" font-medium ">Shoptik</span> Number #1Trusted
            furniture website.{" "}
          </h1>
          <p className="font-medium text-orange-400">
            coming soon in your door with a huge discount.
          </p>
        </div>
        <View_button title="view now" />
      </div>
      <img
        src={Light2}
        alt=""
        className=" absolute -top-16 right-[8rem] hidden w-80 scale-150 transform object-cover object-center  md:-top-5 md:right-[5rem] md:flex xl:-top-10 xl:right-[26rem] xl:w-96 "
      />
      <img
        src={Light1}
        alt=""
        className=" absolute -top-32 -right-12 hidden w-80 scale-125 transform object-cover object-center md:-right-20 md:flex xl:-top-36 xl:right-20 xl:mr-28 xl:w-96"
      />
    </header>
  )
}

export default Header