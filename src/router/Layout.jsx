import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Routers from './Routers'
import Cart from '../components/Header/Cart/Cart'
import { useSelector } from 'react-redux'

const Layout = () => {
  const showCart = useSelector(state=>state.cartUi.cartIsVisible)
  return (
    <>
        <Header />
        
        {
          showCart  && <Cart/>
        }
        
        <div>
            <Routers />
        </div>
        <Footer />
    </>
  )
}

export default Layout