import React from 'react'
import './Features.css'
import features from '../../assets/fake-data/features'
const Features = () => {
  return (
    <>
        <div className="features pt-5 pb-5">
            <div className="feat__info text-center d-flex gap-2 flex-column">
                <p>What We Serve</p>
                <h3>Just sit Back At Home <br /> We Will <span>Take Care</span></h3>
                <div className="feat__spans d-flex flex-column gap-2">
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, id.</span>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, id.</span>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    {
                        features && features.map((item,index) => {
                            return (
                                <div className="col-md-4 col-sm-6 justify-content-center" key={index}>
                                    <div className="feat_content gap-2 d-flex flex-column align-items-center justify-content-center">
                                        <img src={item.image} alt="" />
                                        <h4>{item.title}</h4>
                                        <p className='text-center' style={{color:'#5c5858'}}>{item.subtitle}</p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    </>
  )
}

export default Features