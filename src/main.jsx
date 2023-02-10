import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CartProvider } from "./context/cart_context"
import { FiltersProvider } from "./context/filter_context"
import { ProductsProvider } from "./context/products_context"
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductsProvider>
      <FiltersProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FiltersProvider>
    </ProductsProvider>
  </React.StrictMode>
)
