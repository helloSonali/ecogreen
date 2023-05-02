import React from 'react'
import Navbar from '../Navbar'
import Navbar2 from '../Navbar2'
import ProductBanner from './ProductBanner'
import ProductList from './ProductList'

function ProductSection() {
  return (
    <React.Fragment>
    <Navbar/>
    <Navbar2/>
    <ProductBanner/>
    <ProductList/>
    </React.Fragment>
  )
}

export default ProductSection