import React, { useState } from 'react'
import './Filter.css'
import not_found from '../../assets/images/not_found.gif'
import products from '../../assets/fake-data/products'
import ProductList from '../UI/ProductList'
const FilterFood = () => {
    const [productData,setProductData] = useState(products)
    // const [pageNumber,setPageNumber] = useState(0)


    // Products By Search Term ...
    const handleSearch = (e) => {
        const searchTerm = e.target.value;
        const searchProduct =  products.filter(
          (item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()))
          setProductData(searchProduct)
      }

    // Products By Select Option ...
      const handlFilterPrice = (e) => {

        const filterPrice = e.target.value;

        if(filterPrice==='default') {
          const filterProductPrice = products.map(
            (item) => {return item}
          )
          setProductData(filterProductPrice)
        }

        if(filterPrice==='ascending') {
            const filterProductPrice = products.sort(
              (item1,item2) => item1.title.localeCompare(item2.title)
            )
            setProductData(filterProductPrice)
        }

        if(filterPrice==='descending') {
          const filterProductPrice = products.sort(
            (item1,item2) => item2.title.localeCompare(item1.title)
          )
          setProductData(filterProductPrice)
        }

        if(filterPrice==='high-price') {
          const filterProductPrice = products.filter(
            (item) => item.price >= 50
          )
          setProductData(filterProductPrice)
        }

        if(filterPrice==='low-price') {
            const filterProductPrice = products.filter(
              (item) => item.price <= 50
            )
            setProductData(filterProductPrice)
        }

      }


      // const productPerPage = 8
      // const visitedPage = pageNumber * productPerPage
      // const display = products.slice(visitedPage, visitedPage + productPerPage )
      // const pageCount = Math.ceil(products.length / productPerPage)
      // const changePage = ({selected}) => {
      //   setPageNumber(selected)
      // }



  return (
    <>
        <div className="filter__all__foods pt-5 pb-5">
            <div className="container pt-5">
                <div className="row justify-content-between">
                    <div className="col-lg-7 col-md-6 col-sm-12 mb-3">
                        <div className="search__bar">
                            <input type="text" placeholder='Looking For...'  onChange={handleSearch}/>
                            <i class="ri-search-eye-line"></i>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-12 mb-3">
                        <div className="sorting">
                            <select name="" id="" onChange={handlFilterPrice}>
                                <option value="default">Default</option>
                                <option value="ascending">Ascending A-Z</option>
                                <option value="descending">Descending Z-A</option>
                                <option value="high-price">Expensive</option>
                                <option value="low-price">Cheap</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {     
                        productData.length === 0 ? 
                           <div className='text-center'>
                                <img src={not_found} alt=""  style={{width:'400px'}}/>
                           </div>
                        :
                        productData && productData.map((item,index) => {
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
        
        {/* <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        onPageChange={changePage}
        pageRangeDisplayed={1}
        pageCount={pageCount}
        previousLabel="Pervious"

        containerClassName = {'pagination justify-content-center'}

        pageClassName = {'page-item'}
        pageLinkClassName	 = {'page-link'}

        previousClassName		 = {'page-item'}
        previousLinkClassName	= {'page-link'}

        nextClassName		 = {'page-item'}
        nextLinkClassName	= {'page-link'}

        activeClassName = {'active'}

        /> */}
        
    </>
  )
}

export default FilterFood