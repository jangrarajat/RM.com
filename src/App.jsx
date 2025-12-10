import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './page/Home'
import ProductPage from './page/ProductPage'
import SingleProduct from './page/SingleProduct'
import UserPage from './page/UserPage'
import CartPage from './page/CartPage'
import LikePage from './page/LikePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>



      <Routes>
        <Route path='/' element={<> <Navbar /><Home /> <Footer /></>} />
        <Route path="/product/:id" element={<><Navbar /><ProductPage /></>} />
        <Route path="/product/details/:id" element={<><Navbar /><SingleProduct /></>} />
        <Route path='/user' element={<><Navbar /><UserPage /><Footer /></>} />
        <Route path='/cart' element={<><Navbar /> <CartPage /><Footer /></>} />
        <Route path='/like' element={<><Navbar /> <LikePage/><Footer /></>} />

      </Routes>

    </>
  )
}

export default App
