import { useAuth0 } from "@auth0/auth0-react"
import React from "react"
import { Loading } from "../components"

const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0()
  if (isLoading) {
    return <Loading />
  }
  if (error) return <h1>{error.message}</h1>

  return <>{children}</>
}

export default AuthWrapper
