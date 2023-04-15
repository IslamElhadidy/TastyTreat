import React from 'react'
import './Common.css'
const Common = ({title}) => {
  return (
    <>
        <div className="common">
            <div className="container">
                <h2>{title}</h2>
            </div>
        </div>
    </>
  )
}

export default Common