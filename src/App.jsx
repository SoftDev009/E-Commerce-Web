import Navbar from './components/Navbar'
import HomeProduct from './components/HomeProduct'
import Footer from './components/Footer'
import ProductCategory from './components/ProductCategory'
import Instagram from './components/Instagram'
import ProductGrid from './components/ProductGrid'
import Basket from './components/Basket'
import Header from './components/Header'
import ProductsHome from './components/ProductsHome'
import SingleProduct from './components/SingleProduct'
import Cart from './components/Cart'


function App() {
  return (
    <>
    <Navbar/>
    {/* <Cart/> */}
    {/* <ProductsHome/> */}
    {/* <SingleProduct/> */}
    <Header/>
    <HomeProduct/>
    <Basket/>
    <ProductGrid/>
    <ProductCategory/>
    <Instagram/>
    <Footer/>
    </>
  )
}

export default App
