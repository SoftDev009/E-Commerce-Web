import { useAuth0 } from "@auth0/auth0-react"
import React from "react"
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth0()
  if (!user) {
    return <Navigate to="/" /> 
  }
  return children
}

export default ProtectedRoute
