    import React from 'react'
    import Blog_01 from "../assets/Blog1.jpg"
    import Blog_02 from "../assets/Blog2.jpg"
    import Blog_03 from "../assets/Blog3.jpg"
    import { BsTelephone, BsBuilding } from "react-icons/bs"
    import {
      AiOutlineFacebook,
      AiFillTwitterSquare,
      AiOutlineLinkedin,
      AiOutlineInstagram,
    } from "react-icons/ai"
    import { FiMail } from "react-icons/fi"

    const blog_data = [
      {
        id: 1,
        title: "Furniture Decoration idea",
        date: "October 20, 2022",
        image: Blog_01,
      },
      {
        id: 2,
        title: "Decorate your idea in house",
        date: "November 03, 2022",
        image: Blog_02,
      },
      {
        id: 3,
        title: "Dining Table decorate",
        date: "December 15, 2022",
        image: Blog_03,
      },
    ]

    const Footer = () => {
      return (
        <>
          <footer className="bg-primary container mx-auto grid-cols-1 space-y-10 md:space-y-0 grid md:grid-cols-4 px-5 xl:px-28 text-white tracking-wider py-8 xl:py-20 md:mt-28 mt-28 ">
            {/* Shoptik */}
            <section className="space-y-4">
              <h1 className="text-4xl font-black tracking-wider">Shoptik.</h1>
              <p className="text-sm w-2/3 font-light">
                Explore the various kind of products for your Home, office and
                Room.
              </p>
            </section>

            {/* Contact us */}
            <section className="space-y-6">
              <div className="space-y-1">
                <h4 className="uppercase ">Contact us</h4>
                <div className="border-t w-1/6"></div>
              </div>
              <div className="text-sm font-light space-y-4">
                <p className="flex space-x-1 items-center">
                  <span>
                    {" "}
                    <BsTelephone />{" "}
                  </span>
                  <span> (+88) 1234 567898</span>
                </p>
                <p className="flex space-x-1 items-center">
                  <span>
                    {" "}
                    <FiMail />{" "}
                  </span>
                  <span> shoptik@gmail.com</span>
                </p>
                <p className="flex space-x-1 items-center">
                  <span>
                    {" "}
                    <BsBuilding />{" "}
                  </span>
                  <span> 469, Hog Camp Road, California</span>
                </p>
                <div className="flex space-x-6">
                  <a href="#">
                    <AiOutlineFacebook className="w-5 h-5" />
                  </a>
                  <a href="#">
                    <AiFillTwitterSquare className="w-5 h-5" />
                  </a>
                  <a href="#">
                    <AiOutlineLinkedin className="w-5 h-5" />
                  </a>
                  <a href="#">
                    <AiOutlineInstagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </section>

            {/* Useful links */}
            <section className="space-y-6">
              <div className="space-y-1">
                <h4 className="uppercase ">Userful links</h4>
                <div className="border-t w-1/6"></div>
              </div>
              <div className="space-y-4 flex flex-col font-light text-sm">
                <a href="#" className="hover:text-white/80">
                  About Shoptik
                </a>
                <a href="#" className="hover:text-white/80">
                  Contact us
                </a>
                <a href="#" className="hover:text-white/80">
                  FAQ
                </a>
                <a href="#" className="hover:text-white/80">
                  Supports
                </a>
                <a href="#" className="hover:text-white/80">
                  Blog
                </a>
                <a href="#" className="hover:text-white/80">
                  Privacy Policy
                </a>
              </div>
            </section>

            {/* Latest section */}
            <section className="space-y-6">
              <div className="space-y-1">
                <h4 className="uppercase ">Latest news</h4>
                <div className="border-t w-1/6"></div>
              </div>
              <div className="flex flex-col space-y-3 font-light ">
                {blog_data.map((item) => {
                  const { id, title, image, date } = item
                  return (
                    <article
                      key={id}
                      className="flex lg:flex-row  md:flex-col md:items-start justify-start items-center space-x-4 xl:space-x-4 md:space-x-0 "
                    >
                      <img
                        src={image}
                        alt={title}
                        className="w-20 h-12 object-cover object-center"
                      />
                      <div className=" capitalize ">
                        <a href="#" className="text-sm hover:text-white/80 ">
                          {title}
                        </a>
                        <p className="text-xs text-gray-200"> {date} </p>
                      </div>
                    </article>
                  )
                })}
              </div>
            </section>
          </footer>
        </>
      )
    }

    export default Footer