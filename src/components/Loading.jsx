import React from "react"
import { CgSpinner } from "react-icons/cg"
const Loading = () => {
  return (
    <div className=" grid h-screen place-items-center ">
      {" "}
      <CgSpinner className=" h-10 w-10 animate-spin text-green-600" />{" "}
    </div>
  )
}

export default Loading
