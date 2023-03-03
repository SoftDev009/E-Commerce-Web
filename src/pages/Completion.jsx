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
    <section className=" container mx-auto my-20 grid place-items-center px-5 md:px-28">
      <p className=" mb-2 font-light text-gray-600 ">
        Redirecting to Homepage in 25s{" "}
      </p>
      <article className=" rounded bg-gray-100 py-10 px-5 text-center md:p-16">
        <div className=" flex flex-col items-center justify-center space-y-4 ">
          <h3 className="text-xl font-medium md:text-3xl ">
            Your order has been received!{" "}
          </h3>
          <BsFillCheckCircleFill className=" h-7 w-7 fill-green-600 md:h-10 md:w-10 " />
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
              className=" group flex items-center justify-center  space-x-2 bg-primary px-5 py-2 capitalize text-white"
            >
              {" "}
              <span>Continue shopping</span>
              <span className=" transform transition-all duration-200 ease-linear group-hover:translate-x-2 ">
                <BsArrowRight className="h-5 w-5  " />
              </span>
            </Link>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Completion
