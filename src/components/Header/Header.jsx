import React, { useEffect, useRef } from 'react'
import './Header.css'
import '../../index.css'
import logo from '../../assets/images/res-logo.png'
import { Container, Nav, NavLink, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {cartUiAction} from '../redux/slices/CartUiSlice'

const Header = () => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  const headerRef = useRef(null)

  const stickyHeader = () => {
    window.addEventListener('scroll',() => {
      if(document.body.scrollTop > 100 || document.documentElement.scrollTop >100  ) {
        headerRef.current.classList.add('header__shrink')
      } else {
        headerRef.current.classList.remove('header__shrink')
      }
    })
  }

  useEffect(() => {
    stickyHeader()
  })

  const dispatsh = useDispatch()
  const toggleCart = () => {
    dispatsh(cartUiAction.toggle())
  }

  return (
    <>
      <div className="header" ref={headerRef}>
        <Navbar expand="lg">
              <Container>
                <Navbar.Brand href="/TastyTreat" className='d-flex flex-column align-items-center'>
                  <img src={logo} alt="" />
                  <p>Tasty Treat</p>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="m-auto gap-4">
                    <NavLink><Link to={'/home'}>Home</Link></NavLink>
                    <NavLink><Link to={'/foods'}>Foods</Link></NavLink>
                    <NavLink><Link to={'/cart'}>Cart</Link></NavLink>
                  </Nav>
                </Navbar.Collapse>
                <div className="icons d-flex gap-3 align-items-center">
                  <div className="shopping" onClick={toggleCart}>
                    <i WhileTap={{scale:1.2}} class="ri-shopping-basket-2-line"></i>
                    <span>{totalQuantity}</span>
                  </div>
                  <div className="user">
                    <Link to='/login'><i class="ri-user-line"></i></Link>
                  </div>
                </div>
              </Container>
          </Navbar>
      </div>
    </>
  )
}

export default Header