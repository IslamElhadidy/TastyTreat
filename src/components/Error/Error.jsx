import React from 'react'
import error from '../../assets/images/error.gif'
import './Error.css'
import { Link } from 'react-router-dom'
import Helmet from '../Helmet/Helmet'
const Error = () => {
  return (
    <Helmet title='Error'>
      <div className=' error d-flex flex-column justify-content-center align-items-center pt-2 pb-5'>
          <img src={error} alt="" />
          <button><Link to={'/home'}>Go Home</Link></button>
      </div>
    </Helmet>

  )
}

export default Error