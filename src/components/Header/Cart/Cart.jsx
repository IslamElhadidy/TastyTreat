import React from 'react'
import CartItems from './CartItems'
import { Link } from 'react-router-dom'
import './cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { cartUiAction } from '../../redux/slices/CartUiSlice'

const Cart = () => {

    const dispatsh = useDispatch()

    const toggleCart = () => {
      dispatsh(cartUiAction.toggle())
    }
    const productsItems = useSelector(state=>state.cart.cartItem)
    
  return (
    <>
        <div className="cart__container ">
            <div className="cart">
                <div className="close__btn px-3" onClick={toggleCart}>
                    <i class="ri-close-circle-line"></i>
                </div>
                    <div className='cart__items__container'>
                        {
                           productsItems.length === 0 ? <h6 className='pt-5 px-4 pb-5'>No Items Added ..</h6>  : 

                           productsItems.map((item,index) => (
                            <CartItems item={item} key={index} />
                           ))
                        }
                        
                    </div>
                    
                <div className="cart__bottom bottom-0 position-absolute">
                    <div className="sub_total d-flex align-items-center px-3 justify-content-between mt-3">
                        <p>Subtotal: <span>490$</span></p>
                        <button><Link to='checkout'>Checkout</Link></button>
                        <button><Link to='cart'>View More</Link></button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Cart