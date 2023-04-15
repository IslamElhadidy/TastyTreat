import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Foods from '../pages/Foods'
import FoodDetail from '../pages/FoodDetail'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Error from '../components/Error/Error'
import Login from '../pages/Login'
import Signup from '../pages/Signup'

const Routers = () => {
  return (
    <>
        <Routes>
            <Route path='/TastyTreat' element={<Error />} />
            <Route path='/home' element={<Home />} />
            <Route path='/foods' element={<Foods />} />
            <Route path='/foods/:id' element={<FoodDetail />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
        </Routes>
    </>
  )
}

export default Routers