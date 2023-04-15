import React, { useRef } from 'react'
import Helmet from '../components/Helmet/Helmet'
import Common from '../components/common/Common'
import '../assets/style/Checkout.css'
import Alert from '@mui/material/Alert';
import { useSelector } from 'react-redux';

const Checkout = () => {
  const subtotal = useSelector(state=>state.cart.totalAmount)
  const shipping = 30
  const total = subtotal + Number(shipping)

  
  const reviewName = useRef('')
  const reviewEmail = useRef('')
  const reviewNumber = useRef('')
  const reviewCountry = useRef('')
  const reviewCity = useRef('')
  const reviewPostalCode = useRef('')





  const handleSumbit = (e) => {

    e.preventDefault()

    const reviewUserName = reviewName.current.value
    const reviewUserEmail = reviewEmail.current.value
    const reviewUserNumber = reviewNumber.current.value
    const reviewUserCountry = reviewCountry.current.value
    const reviewUserCity = reviewCity.current.value
    const reviewUserPostalCode = reviewPostalCode.current.value

    const reviewObj = {
      username: reviewUserName,
      email:reviewUserEmail,
      number:reviewUserNumber,
      country:reviewUserCountry,
      city:reviewUserCity,
      postalcode:reviewUserPostalCode,

    }

    if(reviewObj.username === '' || reviewObj.email === '' || reviewObj.number === '' || reviewObj.city === '' || reviewObj.country === '' || reviewObj.postalcode === '' ) {
      <Alert severity="error">This is an error alert — check it out!</Alert>
      alert('This is an error alert — Fields Required')
    } 
    else{
      <Alert severity="success">This is a success alert — check it out!</Alert>
      alert('This is an success alert — Submitted')
    }
    
  }



  return (
    <>
      <Helmet title='Checkout'>
        <Common title='Checkout' />
        <div className="checkout pt-5 pb-5">
          <div className="container pt-5 pb-3">
            <div className="row">
              <div className="col-lg-7 col-md-6 col-sm-12 mb-3">
                <h5>Shipping Address</h5>
                <form  className="checkout_inputs d-flex flex-column gap-4 pt-4" onSubmit={handleSumbit}>
                  <input type="text" placeholder='Enter your name' ref={reviewName} />
                  <input type="email" placeholder='Enter your email' ref={reviewEmail} />
                  <input type="number" placeholder='Phone Number' ref={reviewNumber}/>
                  <input type="text" placeholder='Country' ref={reviewCountry} />
                  <input type="text" placeholder='City' ref={reviewCity} />
                  <input type="text" placeholder='Postal Code' ref={reviewPostalCode} />
                  <button >Payment</button>
                </form>
              </div>
              <div className="col-lg-5 col-md-6 col-sm-12 mb-3">
                <div className="total">
                  <div className="sub_total d-flex justify-content-between">
                    Sub Total:
                    <span>${subtotal}</span>
                  </div>
                  <div className="shipping d-flex justify-content-between mt-2">
                    Shipping:
                    <span>${shipping}</span>
                  </div>
                  <div className="totall d-flex justify-content-between mt-5 fw-bold">
                    Total:
                    <span>${total}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Helmet> 
    </>
  )
}

export default Checkout