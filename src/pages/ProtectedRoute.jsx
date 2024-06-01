import { useAuth0 } from "@auth0/auth0-react"
import React from "react"
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ children }) => {
  const { user, isLoading } = useAuth0()
  if (isLoading) return <div>Loading...</div>
  if (!user) {
    return <Navigate to="/" />
  }
  return children
}

export default ProtectedRoute
