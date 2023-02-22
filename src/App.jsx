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
  Completion,
} from "./pages"

function App() {
  return (
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
        <Route path="/completion" element={<Completion />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
