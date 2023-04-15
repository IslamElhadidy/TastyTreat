import React from 'react'
import hero_img from '../../assets/images/hero.png'
import './Hero.css'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <>
        <section className='hero'>
            <div className="container">
                <div className="row     ">
                    <div className="col-md-6 col-sm-12 mb-4">
                        <div className="content__hero pt-5">
                            <span style={{fontWeight:'500'}}>Easy Way To Make An Order</span>
                            <h3 className='pt-3 pb-3'><span>HUNGRY?</span>Just Wait <br /> Food at <span>your door</span></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, saepe modi. Praesentium </p>
                            <div className="buttons">
                                <div className="special_btn d-flex gap-4">
                                    <button className='d-flex gap-2 align-items-center justify-content-center'><Link to={'/checkout'}>Order Now</Link> <i class="ri-arrow-right-s-line"></i></button>
                                    <button className='d-flex gap-2 align-items-center justify-content-center'><Link to={'/foods'}>See All Foods</Link></button>
                                </div>
                            </div>
                            <div className="info d-flex gap-4 pt-5">
                                <div className="shipping d-flex align-items-center gap-2">
                                    <i class="ri-car-line"></i>
                                    <span>No Shipping Charge</span>
                                </div>
                                <div className="secure d-flex align-items-center gap-2">
                                    <i class="ri-shield-check-line"></i>
                                    <span>100% Secure Checkout</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 mb-4">
                        <img src={hero_img} alt="" />
                    </div>
                </div>
            </div>
        </section>
    
    </>
  )
}

export default Hero