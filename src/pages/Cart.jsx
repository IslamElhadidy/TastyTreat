import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import Common from '../components/common/Common'
import Tr from '../components/TR/Tr'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import no_items from '../assets/images/no_items.gif'

const Cart = () => {


  const cartItems = useSelector(state=>state.cart.cartItem)
  const total = useSelector(state=>state.cart.totalAmount)
  const productsItems = useSelector(state=>state.cart.cartItem)


  return (
    <>
        <Helmet title='Cart'>
          <Common title='Cart' />
          <div className="cart__page pt-5 pb-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  {
                    cartItems.length === 0 ? <div className=' no_items '>
                      <div className="buttons d-flex gap-2 mt-3">
                          <button><Link to={'/foods'}>Shop To Add</Link></button>
                      </div>
                      <img src={no_items} alt="" style={{width:'100px'}} />

                    </div> :
                    <div className="table" style={{overflowX:'auto'}}>
                      <table className='table  table-bordered'>
                      <thead>
                        <tr>
                          <th>Image</th>
                          <th>Product Title</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          
                          cartItems.map((item) => {
                            return(
                                <Tr item={item} key={item.id} />
                            )
                          })
                        }
                        
                      </tbody>
                    </table>
                    </div>
                  }
                  <div className='subtotal'>
                    {
                        productsItems.length === 0 ? '' : 
                        <>
                          <h6>SubTotal: <span style={{color: '#df2020' , fontWeight:'bold' ,
                          fontSize:'25px'}}>{total}</span> $</h6>
                          <div className="buttons d-flex gap-2 mt-3">
                            <button><Link to={'/foods'}>Continue Shopping</Link></button>
                            <button><Link to={'/checkout'}>Checkout</Link></button>
                          </div>
                         </>
                    }
                  </div>

                </div>
              </div>
            </div>
          </div>
        </Helmet>
        
    </>
  )
}

export default Cart