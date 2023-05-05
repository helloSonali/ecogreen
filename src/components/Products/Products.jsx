import React from 'react'
// import Navbar from '../Header/Navbar'
import ProductBanner from './ProductBanner'
import ProductList from './ProductList'
import CallOut from '../Footer/CallOut'
import Footer from '../Footer/Footer'

function Products() {
  return (
<React.Fragment>
   <ProductBanner/>
   <ProductList/>
   <CallOut/>
</React.Fragment>
  )
}

export default Products
// <Navbar/>