import React from 'react'
import why_img from '../../assets/images/location.png'
import './Why.css'
const Why = () => {
  return (
    <>
        <div className="why">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 col-sm-12 mb-3">
                        <img style={{maxWidth:'100%'}} src={why_img} alt="" />
                    </div>
                    <div className="col-md-6 col-sm-12 mb-3">
                        <h2 className='mb-4'>Why <span>Tasty Treat?</span></h2>
                        <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eaque impedit hic sapiente nobis quaerat asperiores ut dolore nesciunt inventore ex ipsam rem quas, vitae sint laboriosam quidem distinctio assumenda?</p>
                        <div className="features__why">
                            <div className='d-flex gap-2 align-items-center'>
                                <i class="ri-check-line"></i>
                                <span>Fresh And Tasty Foods</span>
                            </div>
                            <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, expedita.</p>
                        </div>
                        <div className="features__why">
                            <div className='d-flex gap-2 align-items-center'>
                                <i class="ri-check-line"></i>
                                <span>Fresh And Tasty Foods</span>
                            </div>
                            <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, expedita.</p>
                        </div>
                        <div className="features__why">
                            <div className='d-flex gap-2 align-items-center'>
                                <i class="ri-check-line"></i>
                                <span>Fresh And Tasty Foods</span>
                            </div>
                            <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, expedita.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Why