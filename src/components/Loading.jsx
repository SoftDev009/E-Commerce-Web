import React from "react"
import { CgSpinner } from "react-icons/cg"
const Loading = () => {
  return (
    <div className=" h-screen grid place-items-center ">
      {" "}
      <CgSpinner className=" w-10 h-10 animate-spin text-green-600" />{" "}
    </div>
  )
}

export default Loading
