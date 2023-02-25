import React, { useEffect } from "react"
import { BsFillCheckCircleFill, BsArrowRight } from "react-icons/bs"
import { Link, useNavigate } from "react-router-dom"

const Completion = () => {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate("/")
    }, 20000)
  }, [])

  return (
    <section className=" container mx-auto px-5 md:px-28 grid place-items-center my-20">
      <p className=" mb-2 text-gray-600 font-light ">
        Redirecting to Homepage in 25s{" "}
      </p>
      <article className=" bg-gray-100 py-10 px-5 md:p-16 text-center rounded">
        <div className=" flex flex-col justify-center items-center space-y-4 ">
          <h3 className="text-xl md:text-3xl font-medium ">
            Your order has been received!{" "}
          </h3>
          <BsFillCheckCircleFill className=" w-7 h-7 md:w-10 md:h-10 fill-green-600 " />
          <div className=" text-center ">
            <h4 className=" font-medium ">Thank you for your purchase!</h4>
            <p className=" text-sm ">Your order ID: 09284024895 </p>
          </div>
          <p className=" text-center text-xs text-gray-500 ">
            You will receive an order confirmation email with details of your
            order.
          </p>
          <div className=" pt-10 ">
            <Link
              to="/shop"
              className=" bg-primary flex justify-center items-center  capitalize px-5 text-white py-2 space-x-2 group"
            >
              {" "}
              <span>Continue shopping</span>
              <span className=" group-hover:translate-x-2 transform transition-all duration-200 ease-linear ">
                <BsArrowRight className="w-5 h-5  " />
              </span>
            </Link>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Completion
