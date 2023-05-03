import React from 'react'
import Navbar from '../Header/Navbar'
import ProductBanner from './ProductBanner'
import ProductList from './ProductList'
import CallOut from '../Footer/CallOut'
import Footer from '../Footer/Footer'

function Products() {
  return (
<React.Fragment>
<Navbar/>
<ProductBanner/>
<ProductList/>
<CallOut/>
<Footer/>


</React.Fragment>
  )
}

export default Products