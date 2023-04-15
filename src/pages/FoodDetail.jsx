import React, { useEffect, useState } from 'react'
import '../assets/style/FoodDetails.css'
import Common from '../components/common/Common'
import Helmet from '../components/Helmet/Helmet'
import { useParams } from 'react-router-dom'
import products from '../assets/fake-data/products'
import ProductList from '../components/UI/ProductList'
import { useDispatch } from 'react-redux'
import { cartAction } from '../components/redux/slices/CartSlice'
const FoodDetail = () => {
  const {id} = useParams()


  const product = products.find((product) => product.id === id)
  const [prevImg,setPrevImg] = useState(product.image01)

  const relatedFoods = products.filter((item) => product.category === item.category)

  useEffect(() => {
    window.scrollTo(100,100)
  },[product])

  const dispatsh = useDispatch()
  const addToCart = () => {
    dispatsh(cartAction.addItem({
      id:product.id,
      title:product.title,
      image01:product.image01,
      price: product.price
    }))
  }

  return (

    <div className='details'>
      <Helmet title='Details'>
        <Common title={product.title} />
      </Helmet>
      <div className='product_detail'>
        <div className="container">
          <div className="row">

            <div className="col-lg-2 col-md-2">
              <div className="image">
                <img src={product.image01} alt=""   onClick={() => setPrevImg(product.image01)} />
                <img src={product.image02} alt=""   onClick={() => setPrevImg(product.image02)} />
                <img src={product.image03} alt=""   onClick={() => setPrevImg(product.image03)} />
              </div>
            </div>

            <div className="col-lg-3 col-md-3">
              <div className="main__image">
                <img src={prevImg} alt=""  />
              </div>
            </div>

            <div className="col-lg-7 col-md-7">
              <div className="detail" style={{zIndex:'9999'}}>
                <h4 className='fw-bold'>{product.title}</h4>
                <p className='pizza'>Price: <span className='fw-bold'>{product.price}$</span></p>
                <p className='category__ fw-bold'>Category: <span>{product.category}</span></p>
                <button onClick={addToCart}>Add To Card</button>
              </div>
            </div>

          </div>

          <div className="row pt-5">
            <h2 className='pt-5'>Related Foods</h2>
            {
                relatedFoods.map((item,index) => {
                  return(
                    <div className="col-lg-3 col-md-4 col-sm-6 mb-3 pt-5" key={index}>
                      <ProductList item={item} />
                    </div>  
                  )
                })
            }
          </div>
        </div>
      </div>

    </div>
  )
}

export default FoodDetail