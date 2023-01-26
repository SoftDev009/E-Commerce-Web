import { Navbar, Footer } from "./components"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home, Cart, Products, SingleProduct, Error } from "./pages"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Products />} />
        <Route path="/shop/:id" element={<SingleProduct />} />
        {/* TODO: Add checkout page here */}
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
