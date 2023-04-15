import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import Hero from '../components/Hero/Hero'
import Category from '../components/Category/Category'
import Features from '../components/Features/Features'
import ProductsCard from '../components/UI/ProductsCard'
import Why from '../components/Why/Why'
import HotPizza from '../components/HotPizza/HotPizza'
import Testimonials from '../components/Testimonials/Testimonials'

const Home = () => {
  return (
    <>
      <Helmet title = 'Home'>
        <Hero />
        <Category />
        <Features />
        <ProductsCard />
        <Why />
        <HotPizza />
        <Testimonials />
      </Helmet>
    </>
  )
}

export default Home