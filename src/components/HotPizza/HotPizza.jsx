import React, { useEffect } from 'react'
import { useState } from 'react'
import products from '../../assets/fake-data/products'
import ProductList from '../UI/ProductList'

const HotPizza = () => {
    const [hotPizza , setHotPizza] = useState(products)

    useEffect(() => {
        const filterPizza = products.filter(item => item.category === 'Pizza')
        const SlicePizza = filterPizza.slice(0,4)
        setHotPizza(SlicePizza)
    },[])
  return (
    <>
        <div className="hot_pizza">
            
            <div className="container pt-4">
                <div className="row pt-4">
                <h2 className='text-center pb-3 fw-bold'>Hot Pizza</h2>
                    {
                       hotPizza && hotPizza.map((item,index) => {
                            return(
                                <div className="col-lg-3 col-md-4 col-sm-6 mb-3" key={index}>
                                    <ProductList item={item} />
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

export default HotPizza