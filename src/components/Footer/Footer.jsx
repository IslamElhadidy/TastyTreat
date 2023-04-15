import React from 'react'
import logo from '../../assets/images/res-logo.png'
import './Footer.css'


const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row align-items-start">

            <div className="col-md-3 col-sm-6 mb-3">
              <div className="f-row d-flex flex-column">
                  <div className="logo d-flex flex-column align-items-start">
                    <img src={logo} alt="" />
                    <p className='fw-bold fs-6' style={{color: '#df2020'}}>Tasty Treat</p>
                  </div>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur</p>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 mb-3">
              <div className="delivert_time">
                <p className='fw-bold'  style={{color: '#df2020'}}>Delivery Time</p>
                <div className="time d-flex flex-column gap-3">
                  <div className="f-time d-flex flex-column">
                    <span>Sunday - Thursday</span>
                    <span>10:00am - 11:00pm</span>
                  </div>
                  <div className="s-time d-flex flex-column">
                    <span>Friday - Saturday</span>
                    <span>Off Day</span>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-md-3 col-sm-6 mb-3">
              <div className="contacts">
                  <p className='fw-bold'  style={{color: '#df2020'}}>Contact</p>
                  <div className="contact d-flex flex-column">
                    <div className="location">
                      <p>Location: Mansoura Qism2, Dakahliya</p>
                    </div>
                    <div className="phone">
                      <p>Phone: +20 1060088542</p>
                    </div>
                    <div className="email">
                      <p>Email: elhadidii624@gmail.com</p>
                    </div>
                  </div>
                </div>
            </div>


            <div className="col-md-3 col-sm-6 mb-3">
              <div className="newsletter">
                  <p className='fw-bold'  style={{color: '#df2020'}}>News Letter</p>
                  <div className="d-flex flex-column gap-2">
                    <p className='fw-bold'>Subscribe our newsletter</p>
                    <div className="input d-flex justify-content-between">
                      <input type="text" placeholder='Enter your email' />
                      <i class="ri-send-plane-line"></i>
                    </div>
                  </div>
                </div>
            </div>


          </div>
          <div className="copy_write d-flex align-items-center justify-content-between">
            <p>Copywrite - 2023, Website Made By <span>Eslam Elhadidy</span>, All Rights Reserved.</p>
            <div className="socials d-flex gap-2">
              <a href='https://www.facebook.com/El7aDiiDy' target='_blank'  rel="noreferrer noopener" ><i class="ri-facebook-line"></i></a>
              <a href='https://github.com/IslamElhadidy' target='_blank' rel="noreferrer noopener" ><i class="ri-github-line"></i></a>
              <a href='https://www.linkedin.com/in/eslamelhadidy/' target='_blank' rel="noreferrer noopener" ><i class="ri-linkedin-line"></i></a>
              <a href="mailto:elhadidii624@gmail.com" target="_blank" rel="noreferrer noopener" ><i class="ri-mail-send-line"></i></a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer