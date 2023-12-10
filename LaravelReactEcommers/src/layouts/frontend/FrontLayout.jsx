import React from 'react'
import Footer from '../admin/Footer'
import Navbar from './Navbar'
import BgImage from '../../components/frontend/BgImage'
// import Category from '../../components/frontend/Category'
import ProductCard from '../../components/frontend/ProductCard'


const FrontLayout = () => {
  return (
    <div>
      <Navbar />
      <BgImage />
      <ProductCard/>
      <Footer />
    </div>
  )
}

export default FrontLayout