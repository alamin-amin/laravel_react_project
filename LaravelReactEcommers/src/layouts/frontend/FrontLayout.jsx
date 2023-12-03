import React from 'react'
import Footer from '../admin/Footer'
import Navbar from './Navbar'
import BgImage from '../../components/frontend/BgImage'
import ProductCard from '../../components/frontend/ProductCard'
import Home from '../../components/frontend/Home'
import Category from '../../components/frontend/Category'


const FrontLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <BgImage />
      <Category />
      <Home />
      <ProductCard />
      
      <Footer />
    </div>
  )
}

export default FrontLayout