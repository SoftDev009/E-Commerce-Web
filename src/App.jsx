import { Navbar, Footer } from "./components"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import {
  Home,
  Cart,
  Products,
  SingleProduct,
  Error,
  Checkout,
  ProtectedRoute,
  AuthWrapper,
} from "./pages"

function App() {
  return (
    <AuthWrapper>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Products />} />
          <Route path="/shop/:id" element={<SingleProduct />} />
          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                {" "}
                <Checkout />{" "}
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthWrapper>
  )
}

export default App
