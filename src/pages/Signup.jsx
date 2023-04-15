import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import Common from '../components/common/Common'
import { Link } from 'react-router-dom'
import '../assets/style/Login_Sign.css'

const Login = () => {
  return (
    <>
    <Helmet title='Signup'>
      <Common title='Signup' />
      <div className="signup__page  d-flex flex-column justify-content-center align-items-center">
        <input type="text" placeholder='Full Name'  value={'Eslam Khaled Elhadidy'} />
        <input type="email" placeholder='Email'  value={'elhadidii@gmail.com'} className='mt-3' />
        <input type="password" placeholder='Password' className='mt-3' value={'01060088542'}  />
        <button><Link to={'/login'}>Signup</Link></button>
      </div>
      <span className='login_btn text-center d-flex justify-content-center'><Link to={'/login'}>Have an Account? Login</Link></span>
    </Helmet>

    </>
  )
}

export default Login