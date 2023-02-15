    import React from 'react'
    import ProductImage1 from '../assets/Blog1.jpg'
    import ProductImage2 from '../assets/Blog2.jpg'
    import ProductImage3 from '../assets/Blog3.jpg'
    import {BsTelephone, BsBuilding } from 'react-icons/bs'
    import {AiOutlineFacebook,AiFillTwitterSquare,AiOutlineLinkedin,AiOutlineInstagram} from 'react-icons/ai'
    import {FiMail} from 'react-icons/fi'
    const Footer = () => {
    return (
      <>
        <footer className="bg-[#48c4a0] container mx-auto mt-36 grid-cols-1 space-y-10 md:space-y-0 grid md:grid-cols-4 px-5 xl:px-28 text-white tracking-wider py-8 xl:py-20">
          {/* Grid 1 */}
          <div className="space-y-6">
            <h1 className="text-4xl font-black tracking-wider">Shoptik.</h1>
            <p className="text-sm w-2/3 font-light">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim,
              voluptas!
            </p>
          </div>
          {/* Grid 2 */}
          <div className="space-y-6">
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
                <span> shopink@gmail.com</span>
              </p>
              <p className="flex space-x-1 items-center">
                <span>
                  {" "}
                  <BsBuilding />{" "}
                </span>
                <span> 469, Hog Camp Road, California</span>
              </p>
              <div className="flex space-x-6">
                <AiOutlineFacebook className="w-5 h-5" />
                <AiFillTwitterSquare className="w-5 h-5" />
                <AiOutlineLinkedin className="w-5 h-5" />
                <AiOutlineInstagram className="w-5 h-5" />
              </div>
            </div>
          </div>
          {/* Grid 3 */}
          <div className="space-y-6">
            <div className="space-y-1">
              <h4 className="uppercase ">Userful links</h4>
              <div className="border-t w-1/6"></div>
            </div>
            <div className="space-y-1 flex flex-col font-light text-sm">
              <a href="#">About Shopnik</a>
              <a href="#">Contact us</a>
              <a href="#">FAQ</a>
              <a href="#">Supports</a>
              <a href="#">Blog</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
          {/* Grid 4 */}
          <div className="space-y-6">
            <div className="space-y-1">
              <h4 className="uppercase ">Latest news</h4>
              <div className="border-t w-1/6"></div>
            </div>
            <div className="flex flex-col space-y-3 font-light ">
              {/* 1 */}
              <div className="flex justify-start items-center space-x-4 ">
                <img
                  src={ProductImage1}
                  alt=""
                  className="w-20 h-12 object-cover object-center"
                />
                <div className="space-y-1">
                  <h2>Furniture Decoration idea</h2>
                  <p className="text-xs text-gray-200">October 20, 2014</p>
                </div>
              </div>
              <div className="flex justify-start items-center space-x-4">
                <img
                  src={ProductImage2}
                  alt=""
                  className="w-20 h-12 object-cover object-center"
                />
                <div className="space-y-1">
                  <h2>Furniture Decoration idea</h2>
                  <p className="text-xs text-gray-200">October 20, 2014</p>
                </div>
              </div>
              <div className="flex justify-start items-center space-x-4">
                <img
                  src={ProductImage3}
                  alt=""
                  className="w-20 h-12 object-cover object-center"
                />
                <div className="space-y-1">
                  <h2>Furniture Decoration idea</h2>
                  <p className="text-xs text-gray-200">October 20, 2014</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    )
    }

    export default Footer