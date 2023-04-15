import React from 'react'
import './Products.css'
import { useDispatch } from 'react-redux'
import { cartAction } from '../redux/slices/CartSlice'
import { Link } from 'react-router-dom'
const ProductList = ({item}) => {
  
  const dispatsh = useDispatch()
  const addToCart = () => {
    dispatsh(cartAction.addItem({
      id:item.id,
      title:item.title,
      image01:item.image01,
      price: item.price
    }))
  }
  return (
    <>

                        <div className="food d-flex flex-column align-items-center">
                            <Link to={`/foods/${item.id}`}><img style={{width:'100px'}} src={item.image01} alt="" /></Link>
                            <p>{item.title}</p>
                            <div className="price d-flex justify-content-between gap-5">
                                <span>{item.price}$</span>
                                <button onClick={addToCart}>Add To Cart</button>
                            </div>
                        </div>

    </>
  )
}

export default ProductList