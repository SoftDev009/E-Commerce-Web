import { Auth0Provider } from "@auth0/auth0-react"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { CartProvider } from "./context/cart_context"
import { FiltersProvider } from "./context/filter_context"
import { ProductsProvider } from "./context/products_context"
import "./index.css"
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      cacheLocation="localstorage"
    >
      <ProductsProvider>
        <FiltersProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FiltersProvider>
      </ProductsProvider>
    </Auth0Provider>
  </React.StrictMode>
)
