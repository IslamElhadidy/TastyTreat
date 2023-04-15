import React, { useEffect, useState } from 'react'
import './Products.css'
import humburger from '../../assets/images/hamburger.png'
import pizza from '../../assets/images/pizza.png'
import bread from '../../assets/images/bread.png'
import ProductList from './ProductList'
import products from '../../assets/fake-data/products'
const ProductsCard = () => {
    const [category,setCategory] = useState('All')
    const [allProduct,setAllProduct] = useState(products)

    useEffect(() => {
        if(category === 'All') {
            setAllProduct(products)
        }
        if(category === 'Burger') {
            const filterProduct = products.filter(item => item.category === 'Burger')
            setAllProduct(filterProduct)
        }
        if(category === 'Pizza') {
            const filterProduct = products.filter(item => item.category === 'Pizza')
            setAllProduct(filterProduct)
        }
        if(category === 'Bread') {
            const filterProduct = products.filter(item => item.category === 'Bread')
            setAllProduct(filterProduct)
        }
    },[category])
  return (
    <>
        <div className="product__card">
            <h3 className='text-center fw-bold'>Popular Foods</h3>
            <div className="container">
                <div className="row">
                    <div className="col-12 pb-5">
                        <div className="category__filter d-flex justify-content-center align-items-center pt-5">
                            <button className={`${category === 'All' ? 'foodActive' : ''}`} onClick={()=> setCategory('All')}>All</button>
                            <button className={`d-flex align-items-center gap-2 ${category === 'Burger' ? 'foodActive' : ''}` } onClick={()=> setCategory('Burger')}><img src={humburger} alt="" />Burger</button>
                            <button className={`d-flex align-items-center gap-2 ${category === 'Pizza' ? 'foodActive' : ''}` } onClick={()=> setCategory('Pizza')}><img src={pizza} alt="" />Pizza</button>
                            <button className={`d-flex align-items-center gap-2 ${category === 'Bread' ? 'foodActive' : ''}` } onClick={()=> setCategory('Bread')}><img src={bread} alt="" />Bread</button>
                        </div>
                    </div>
                    {
                        allProduct && allProduct.map((item,index) => {
                            return(
                                <div className="col-lg-3 col-md-4 col-sm-6 mb-3 pt-5" key={index}>
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

export default ProductsCard