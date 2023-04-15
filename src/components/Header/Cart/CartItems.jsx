import React from 'react'
import { useDispatch } from 'react-redux'
import { cartAction } from '../../redux/slices/CartSlice'
const CartItems = ({item}) => {
    const dispatch = useDispatch()
    const increment = () => {
        dispatch(cartAction.addItem({
            id: item.id,
            title:item.title,
            price:item.price,
            image01:item.image01,
        })) 
    }
    const decrement = () => {
        dispatch(cartAction.removeItem(item.id))
    }

    
    const deleteItem = () => {
        dispatch(cartAction.removeItem(item.id))
      }
  return (
    <>
        <div className="cart__items d-flex align-items-center justify-content-between px-3">
            <div className="product__details d-flex align-items-center gap-3 pt-5 ">
                <img className='product_img' src={item.image01} alt="" />
                <div className="cart_info">
                    <div>
                        <p className='product_name'>{item.title}</p>
                        <span className='d-flex gap-4 align-items-center product_price'>{item.quantity}x <span>{item.totalPrice}$</span></span>
                        <div className='d-flex justify-content-between align-items-center mt-3 product__digit'>
                            <i class="ri-add-line" onClick={increment} style={{cursor:'pointer'}}></i>
                            <span>{item.quantity}</span>
                            <i class="ri-subtract-line" onClick={decrement} style={{cursor:'pointer'}}></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="close">
                <i class="ri-close-circle-line" style={{cursor:'pointer'}}  onClick={deleteItem} ></i>
            </div>
        </div>
        
    </>
  )
}

export default CartItems