import React from 'react'
import testimonials from '../../assets/images/network.png'
import TSlider from './TSlider'
import './style.css'
const Testimonials = () => {
  return (
    <>
    <div className="testimonial pt-5">
        <div className="container pt-5">
            <div className="row align-items-center pt-3">
                    <div className="col-lg-6 col-md-12 col-sm-12 mb-4">
                    <h6>Testimonial</h6>
                    <p className='fw-bold'>What Our <span>Customers </span>Are Saying</p>
                    <span className='w-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatem autem cum molestiae quasi qui, repellendus praesentium adipisci sapiente.</span>
                    <div className='pt-4'>
                        <TSlider />
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 mb-4">
                    <img className='test-img' src={testimonials} style={{maxWidth:'90%'}} alt="" />
                </div>
            </div>
        </div>
    </div>
</>
  )
}

export default Testimonials