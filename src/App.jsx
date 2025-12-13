import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './page/Home'
import ProductPage from './page/ProductPage'
import SingleProduct from './page/SingleProduct'
import UserPage from './page/accountPages/UserPage'
import CartPage from './page/CartPage'
import LikePage from './page/LikePage'
import AccountSettingsPage from './page/accountPages/AccountSettingsPage'
import OrderaPage from './page/accountPages/OrderaPage'
import DashboardPage from './page/accountPages/DashboardPage'
import ChangePassword from './page/accountPages/ChangePassword'

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
        <Route path='/like' element={<><Navbar /> <LikePage /><Footer /></>} />
        <Route path='/account/setting' element={<><Navbar /> <AccountSettingsPage /><Footer /></>} />
        <Route path='/account/orders' element={<><Navbar /> <OrderaPage /><Footer /></>} />
        <Route path='/account/dashboard' element={<><Navbar /> <DashboardPage /><Footer /></>} />
        <Route path='/account/changepassword' element={<><Navbar /> <ChangePassword/><Footer /></>} />

      </Routes>

    </>
  )
}

export default App
