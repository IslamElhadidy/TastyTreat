import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import Common from '../components/common/Common'
import { Link } from 'react-router-dom'
import '../assets/style/Login_Sign.css'

const Login = () => {
  
  const handleform = (e) => {
    e.preventDefault()
  }
  return (
    <>
    <Helmet title='Login'>
      <Common title='Login' />
      <form onSubmit={handleform}>
        <div className="login__page  d-flex flex-column justify-content-center align-items-center">
          <input type="email" placeholder='Email'  value={'elhadidii@gmail.com'} />
          <input type="password" placeholder='Password' className='mt-3' value={'01060088542'}  />
          <button><Link to={'/home'}>Login</Link></button>
        </div>
      </form>

      <span className='signup_btn text-center d-flex justify-content-center'><Link to={'/signup'}>Don't Have an Account? Signup</Link></span>
    </Helmet>

    </>
  )
}

export default Login