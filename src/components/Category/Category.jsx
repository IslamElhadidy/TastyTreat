import React from 'react'
import './Categort.css'
import category from '../../assets/fake-data/category'
const Category = () => {
  return (
    <>
        <div className="categories">
            <div className="container">
                <div className="row">
                    {
                        category && category.map((item,index) => {
                            return(
                                <div className="col-md-3 col-sm-6 mb-3" key={index}>
                                    <div className="category d-flex align-items-center gap-3">
                                        <img src={item.image} alt="" />
                                        <span>{item.title}</span>
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

export default Category