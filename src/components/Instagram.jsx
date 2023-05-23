import React from 'react'
import Instagram1 from "../assets/instaGram1.webp"
import Instagram2 from "../assets/instaGram2.webp"
import Instagram3 from "../assets/instaGram3.webp"
import Instagram4 from "../assets/instaGram4.webp"
import Blog3 from "../assets/Blog3.webp"

const Instagram = () => {
  return (
    <section className=" container relative mx-auto mt-20 hidden grid-cols-5 px-5 md:mt-28 md:grid xl:px-0 ">
      <img
        width={300}
        height={200}
        src={Instagram1}
        alt=""
        className="h-44 w-full object-cover object-center xl:h-72 xl:w-72"
      />
      <img
        src={Instagram2}
        alt=""
        className="h-44 w-full object-cover object-center xl:h-72 xl:w-72"
      />
      <img
        src={Instagram3}
        alt=""
        className="h-44 w-full object-cover object-center xl:h-72 xl:w-72"
      />
      <img
        src={Instagram4}
        alt=""
        className="h-44 w-full object-cover object-center xl:h-72 xl:w-72"
      />
      <img
        src={Blog3}
        alt=""
        className="h-44 w-full object-cover object-center xl:h-72 xl:w-72"
      />
      <div className="absolute top-1/3 right-1/3">
        <h4 className="rounded-md bg-white/80 px-12 py-4 text-3xl font-semibold uppercase tracking-widest text-gray-500 xl:px-32 xl:py-6">
          Instagram
        </h4>
      </div>
    </section>
  )
}

export default Instagram