import React from 'react'
import Navbar from '../../layouts/frontend/Navbar'
import Footer from '../../layouts/admin/Footer'



export const Master = ({children}) => {
  return (
    <div>
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}
