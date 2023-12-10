import React from 'react'
import Footer from '../admin/Footer'
import Navbar from './Navbar'
import BgImage from '../../components/frontend/BgImage'
import Category from '../../components/frontend/Category'

const FrontLayout = () => {
  return (
    <div>
      <Navbar />
      <BgImage />
      <Footer />
    </div>
  )
}

export default FrontLayout