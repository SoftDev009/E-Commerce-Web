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
  Features,
  Services,
  News,
} from "./pages"
import ReactGA from "react-ga4"
import { useEffect } from "react"
const measurementID = "G-Y1EV1Q38PH"
ReactGA.initialize(measurementID)
function App() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: "view_page_article",
      drupalCountry: "IN",
      drupalLanguage: "en",
      entityBundle: "landing_page",
      entityCreated: "1523002529",
      entityId: "316",
      entityLangcode: "en",
      entityName: "valuebound",
      entityStatus: "1",
      entityTaxonomy: {
        content_funnel: "TOFU",
        type_of_article: "Marketing",
      },
      entityTitle: "Home Page",
      entityType: "node",
      entityUid: "1",
      entityUuid: "5840a88c-d059-4015-b91c-0c23928596a0",
      entityVid: "7240",
      siteName: "Valuebound",
      "gtm.uniqueEventId": 11,
    })
  }, [])
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
        <Route
          path="/completion"
          element={
            <ProtectedRoute>
              {" "}
              <Completion />{" "}
            </ProtectedRoute>
          }
        />

        <Route path="/features" element={<Features />} />
        <Route path="/services" element={<Services />} />
        <Route path="/news" element={<News />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
